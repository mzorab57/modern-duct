import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import GradientTitle from "./ui/gradiant-title";
import { featuredProjects } from "../data/projects";
import ShinyButton from "./ui/shiny-button";

const AUTO_PLAY_DELAY = 5000;
const swipeConfidenceThreshold = 50;

function ProjectPreview({ image, title }) {
  return (
    <div className="relative container z-20 flex items-center justify-center">
      <div className="relative z-10 h-[240px] w-[180px] overflow-hidden rounded-[30px] shadow-[0_25px_60px_rgba(0,0,0,0.35)] md:h-[320px] md:w-[240px]">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        <div className="absolute inset-0 -z-10 translate-x-5 -translate-y-5 overflow-hidden rounded-[30px] opacity-40">
          <img
            src={image}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover blur-[1px]"
          />
        </div>
        <div className="absolute inset-0 -z-20 translate-x-10 -translate-y-2 overflow-hidden rounded-[30px] opacity-20">
          <img
            src={image}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover blur-[2px]"
          />
        </div>
      </div>
    </div>
  );
}

export default function ProjectSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const activeProject = featuredProjects[activeIndex];

  const nextSlide = useCallback(() => {
    setActiveIndex((current) => (current + 1) % featuredProjects.length);
  }, []);

  const previousSlide = useCallback(() => {
    setActiveIndex((current) =>
      current === 0 ? featuredProjects.length - 1 : current - 1
    );
  }, []);

  useEffect(() => {
    const timer = window.setInterval(nextSlide, AUTO_PLAY_DELAY);
    return () => window.clearInterval(timer);
  }, [nextSlide]);

  const handleTouchStart = (event) =>
    setTouchStartX(event.changedTouches[0].clientX);

  const handleTouchMove = (event) =>
    setTouchEndX(event.changedTouches[0].clientX);

  const handleTouchEnd = () => {
    const distance = touchStartX - touchEndX;
    if (distance > swipeConfidenceThreshold) {
      nextSlide();
    } else if (distance < -swipeConfidenceThreshold) {
      previousSlide();
    }
  };

  return (
    <section className="relative px-4 max-w-7xl container mx-auto overflow-hidden py-12 font-['Roboto',sans-serif]">
      <div className="pointer-events-none  bg-duct-yellow/10 absolute left-1/2 top-0 z-0 h-[400px] w-full max-w-4xl -translate-x-1/2 rounded-full blur-[150px]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className=" relative  z-10  mb-16  md:mb-20 "
      >
        <div className="flex lg:flex-row flex-col items-center ">

          <div className=" items-center gap-2.5 rounded-full py-2 backdrop-blur-md transition-all">
            <span className="text-xs font-extralight uppercase tracking-[0.2em] md:text-sm">
              Our Projects
            </span>
          <GradientTitle title="Trusted by Leading Projects" />
          </div>

          <div className="mt-2 flex flex-col gap-5  ">
            <p className="max-w-2xl text-base font-light leading-relaxed text-zinc-400 md:text-lg">
              Our products power residential and commercial projects across 25+
              countries - proof of quality you can stand on.
            </p>
            <Link
              to="/projects"
              className=""
            >
             <ShinyButton>View All Projects</ShinyButton>
              
            
            </Link>
          </div>
        </div>
      </motion.div>

      <div className=" ">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto h-[75vh]  overflow-hidden rounded-[2.5rem] border border-duct-yellow/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] md:h-[650px]"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.id}
              className="absolute inset-0 h-full w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={activeProject.coverImage}
                alt={activeProject.name}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/55" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.08),transparent_35%)]" />
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -left-[20%] top-0 z-0 h-[60%] w-[150%] border-r border-white/5 bg-black/40 shadow-2xl backdrop-blur-md md:-top-[25%] md:h-[150%] md:w-[65%] md:-skew-x-[12deg]"
              />

              <div className="relative z-10 grid h-full w-full grid-cols-1 md:grid-cols-2">
                <div className="row-start-2 mt-4 flex flex-col justify-center px-8 md:row-start-1 md:col-span-1 md:mt-0 md:px-20 lg:px-28">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mb-6 inline-flex items-center gap-2"
                  >
                    <span className="h-[1px] w-8 bg-white/50" />
                    <span
                      className="text-xs uppercase tracking-[0.3em] md:text-sm"
                    >
                      {activeProject.sector} · {activeProject.year}
                    </span>
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mb-4 text-4xl  leading-tight text-white drop-shadow-lg md:text-5xl lg:text-6xl"
                  >
                    {activeProject.name}
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mb-10 max-w-md text-sm leading-relaxed text-zinc-400 md:text-lg"
                  >
                    {activeProject.description}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <Link
                      to={`/projects/${activeProject.slug}`}
                      className="inline-flex"
                    >
                      <ShinyButton>Check Details</ShinyButton>
                    </Link>
                  </motion.div>
                </div>

                <div className="relative row-start-1 mt-12 flex items-center justify-center pr-10 md:row-start-1 md:col-span-1 md:mt-0">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, x: 20 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{
                      duration: 0.8,
                      type: "spring",
                      bounce: 0.4,
                      delay: 0.2,
                    }}
                  >
                    <ProjectPreview
                      image={activeProject.coverImage}
                      title={activeProject.name}
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute right-4 top-4 z-50 flex gap-3 md:right-8 md:top-8">
            <button
              type="button"
              onClick={previousSlide}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/20 text-white backdrop-blur-md transition-all hover:scale-110 hover:bg-white/10 active:scale-95 md:h-12 md:w-12"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/20 text-white backdrop-blur-md transition-all hover:scale-110 hover:bg-white/10 active:scale-95 md:h-12 md:w-12"
            >
              <ArrowRight size={20} />
            </button>
          </div>

          <div className="absolute bottom-6 left-1/2 z-50 flex w-[85%] -translate-x-1/2 gap-2 md:bottom-10 md:w-[60%] md:gap-4">
            {featuredProjects.map((project, index) => (
              <button
                key={project.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                className="group flex flex-1 flex-col items-start gap-2 text-left"
              >
                <span
                  className={`text-xs font-medium transition-colors duration-300 md:text-sm ${
                    index === activeIndex
                      ? "text-white"
                      : "text-white/30 group-hover:text-white/70"
                  }`}
                >
                  {project.id}
                </span>
                <div className="h-[3px] w-full overflow-hidden rounded-full bg-white/10 transition-all duration-500">
                  <div
                    className={`h-full rounded-full bg-duct-yellow transition-all duration-500 ${
                      index === activeIndex ? "w-full" : "w-0"
                    }`}
                  />
                </div>
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
