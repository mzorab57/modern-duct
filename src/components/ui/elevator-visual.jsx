import { useEffect, useRef } from "react";

const fragmentShaderSource = `#version 300 es
precision highp float;

out vec4 O;
uniform float time;
uniform vec2 resolution;
uniform vec2 move;
uniform vec2 wheel;

#define FC gl_FragCoord.xy
#define R resolution
#define T (25. + time)
#define N normalize
#define MN min(R.x, R.y)
#define rnd(p) fract(sin(dot(p, vec2(12.9898, 78.233))) * 345678.)
#define rot(a) mat2(cos((a) - vec4(0, 11, 33, 0)))

float box(vec3 p, vec3 s, float r) {
  p = abs(p) - s + r;
  return length(max(p, .0)) + min(.0, max(max(p.x, p.y), p.z)) - r;
}

float map(vec3 p) {
  float s = sign(p.y);
  p.y = abs(p.y) - 2.5;
  vec2 id = floor(p.xz - s);

  if (mod(id.y, 2.) == .0) {
    p.x -= T * .5;
    id.x = floor(p.x - s);
  }

  float f = 1. - dot(abs(fract(p * 42.) - .5) - .25, vec3(1)) * .5;
  p.xz = fract(p.xz - s) - .5;
  return box(p, vec3(.1 + .3 * rnd(id), 2. - .6 * rnd(id), .2), f * f * .0125) - 1e-3 * f;
}

vec3 norm(vec3 p) {
  float h = 1e-3;
  vec2 k = vec2(-1, 1);
  return N(
    k.xyy * map(p + k.xyy * h) +
    k.yxy * map(p + k.yxy * h) +
    k.yyx * map(p + k.yyx * h) +
    k.xxx * map(p + k.xxx * h)
  );
}

bool march(inout vec3 p, vec3 rd, out float dd) {
  for (int i = 0; i < 400; i++) {
    float d = map(p);
    if (abs(d) < 1e-3) return true;
    if (dd > 15.) return false;
    p += rd * d * .5;
    dd += d * .5;
  }

  return false;
}

float occ(vec3 p, vec3 n, float d) {
  return clamp(map(p + n * d) / d, .0, 1.);
}

vec3 dir(vec2 uv, vec3 p, vec3 t, float z) {
  vec3 up = vec3(0, 1, 0);
  vec3 f = N(t - p);
  vec3 r = N(cross(up, f));
  vec3 u = N(cross(f, r));
  return mat3(r, u, f) * N(vec3(uv, z));
}

void cam(inout vec3 p) {
  p.xz *= rot(.2 - move.x / MN + .2 * T * .01);
}

vec3 render(vec2 uv) {
  vec3 col = vec3(0.);
  vec3 p = vec3(0., -.3, -23.5 - wheel.y / MN - 1e2 * sin(T * 5e-3));
  cam(p);
  vec3 rd = dir(uv, p, vec3(0., 5.5, 0.), 1.2);
  vec3 lp = p;
  lp.z += .5;
  float dd = 0.;

  if (march(p, rd, dd)) {
    vec3 n = norm(p);
    vec3 l = N(lp - p);
    float dif = clamp(dot(l, n), .0, 1.);
    float spe = pow(clamp(dot(N(lp - rd), n), .0, 1.), 21.);
    float ao = occ(p, n, .5) * .8 * occ(p, n, 1.);
    float ld = distance(lp, p);
    float atten = 1. / (1. + ld * .25 + ld * ld * .125);
    vec3 mat = vec3(1.68, 1.56, 0.34);
    col += .08 + dif * mat * ao * atten;
    col += spe * atten;
  }

  col = mix(vec3(0.), col, exp(-125e-5 * dd * dd * dd));
  col = tanh(col * col);
  col = sqrt(col);
  col = mix(vec3(0.), col, min(time * .3, 1.));

  vec2 c = FC / R;
  c *= 1. - c.yx;
  float vig = c.x * c.y * 25.;
  vig = pow(vig, .5);
  col *= vig;
  return col;
}

void main() {
  vec2 uv = (FC - .5 * R) / MN;
  vec3 col = render(uv);
  O = vec4(col, 1.);
}`;

const vertexShaderSource = `#version 300 es
precision highp float;

in vec4 position;

void main() {
  gl_Position = position;
}`;

function compileShader(gl, type, source) {
  const shader = gl.createShader(type);
  if (!shader) {
    throw new Error("Failed to create shader.");
  }

  gl.shaderSource(shader, source);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    const message = gl.getShaderInfoLog(shader) || "Shader compile failed.";
    gl.deleteShader(shader);
    throw new Error(message);
  }

  return shader;
}

function createProgram(gl) {
  const vertexShader = compileShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
  const fragmentShader = compileShader(
    gl,
    gl.FRAGMENT_SHADER,
    fragmentShaderSource
  );
  const program = gl.createProgram();

  if (!program) {
    throw new Error("Failed to create shader program.");
  }

  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    const message = gl.getProgramInfoLog(program) || "Program link failed.";
    gl.deleteProgram(program);
    gl.deleteShader(vertexShader);
    gl.deleteShader(fragmentShader);
    throw new Error(message);
  }

  gl.deleteShader(vertexShader);
  gl.deleteShader(fragmentShader);

  return program;
}

export default function ElevatorVisual({ className = "" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return undefined;
    }

    const gl = canvas.getContext("webgl2", {
      antialias: true,
      alpha: false,
    });

    if (!gl) {
      return undefined;
    }

    let animationFrameId = 0;
    let lastRenderTime = 0;
    let isInView = true;
    let isPageVisible = !document.hidden;
    const targetFps = 30;
    const frameDuration = 1000 / targetFps;

    const state = {
      moveX: 0,
      moveY: 0,
      targetMoveX: 0,
      targetMoveY: 0,
      wheelDelta: 0,
      wheelOffset: 0,
      lastX: 0,
      lastY: 0,
      dragging: false,
    };

    const shouldAnimate = () => isInView && isPageVisible;

    const program = createProgram(gl);
    const positionBuffer = gl.createBuffer();

    if (!positionBuffer) {
      return undefined;
    }

    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, 1, -1, -1, 1, 1, 1, -1]),
      gl.STATIC_DRAW
    );

    const positionLocation = gl.getAttribLocation(program, "position");
    const resolutionLocation = gl.getUniformLocation(program, "resolution");
    const timeLocation = gl.getUniformLocation(program, "time");
    const moveLocation = gl.getUniformLocation(program, "move");
    const wheelLocation = gl.getUniformLocation(program, "wheel");

    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    const resize = () => {
      const dpr = Math.max(1, 0.75 * window.devicePixelRatio);
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    const handlePointerDown = (event) => {
      state.dragging = true;
      state.lastX = event.clientX;
      state.lastY = event.clientY;
      canvas.setPointerCapture?.(event.pointerId);
    };

    const handlePointerUp = (event) => {
      state.dragging = false;
      canvas.releasePointerCapture?.(event.pointerId);
    };

    const handlePointerMove = (event) => {
      if (!state.dragging) {
        return;
      }

      const deltaX = event.clientX - state.lastX;
      const deltaY = event.clientY - state.lastY;
      state.targetMoveX += deltaX;
      state.targetMoveY += -deltaY;
      state.lastX = event.clientX;
      state.lastY = event.clientY;
    };

    const handleWheel = (event) => {
      state.wheelDelta = event.deltaY;
      state.wheelOffset += event.deltaY;
    };

    const render = (now) => {
      if (!shouldAnimate()) {
        animationFrameId = 0;
        return;
      }

      if (now - lastRenderTime < frameDuration) {
        animationFrameId = window.requestAnimationFrame(render);
        return;
      }

      lastRenderTime = now;
      state.moveX += (state.targetMoveX - state.moveX) * 0.08;
      state.moveY += (state.targetMoveY - state.moveY) * 0.08;
      state.wheelDelta *= 0.94;

      gl.clearColor(0, 0, 0, 1);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.useProgram(program);
      gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
      gl.uniform1f(timeLocation, now * 0.001);
      gl.uniform2f(moveLocation, state.moveX, state.moveY);
      gl.uniform2f(wheelLocation, state.wheelDelta, state.wheelOffset);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

      animationFrameId = window.requestAnimationFrame(render);
    };

    const startRenderLoop = () => {
      if (!animationFrameId && shouldAnimate()) {
        animationFrameId = window.requestAnimationFrame(render);
      }
    };

    const stopRenderLoop = () => {
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
        animationFrameId = 0;
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isInView = entry.isIntersecting;
        if (isInView) {
          startRenderLoop();
        } else {
          stopRenderLoop();
        }
      },
      { threshold: 0.05 }
    );

    const handleVisibilityChange = () => {
      isPageVisible = !document.hidden;
      if (isPageVisible) {
        startRenderLoop();
      } else {
        stopRenderLoop();
      }
    };

    resize();
    observer.observe(canvas);
    startRenderLoop();

    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    canvas.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointerup", handlePointerUp);
    window.addEventListener("pointermove", handlePointerMove);
    canvas.addEventListener("wheel", handleWheel, { passive: true });

    return () => {
      stopRenderLoop();
      observer.disconnect();
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("pointermove", handlePointerMove);
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("wheel", handleWheel);
      gl.deleteBuffer(positionBuffer);
      gl.deleteProgram(program);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
