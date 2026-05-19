import { lazy, Suspense } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import ShinyButton from "./ui/shiny-button";
import GradientHeroTitle from "./ui/gradient-hero-title.jsx";
import "./hero.css";

const ElevatorVisual = lazy(() => import("./ui/elevator-visual.jsx"));

const SOCIAL_LINKS = [
  { name: "INSTAGRAM", url: "https://www.instagram.com/grandmotorsiraq" },
  { name: "FACEBOOK", url: "https://www.facebook.com/grandmotorsiraq" },
  { name: "TIKTOK", url: "https://www.tiktok.com/grandmotorsiraq" },
  { name: "SNAPCHAT", url: "https://snapchat.com/adds/grandmotorsiraq" },
];

function HeroBackground() {
  return (
    <Suspense fallback={<div className="hero-canvas bg-black" aria-hidden="true" />}>
      <ElevatorVisual className="hero-canvas" />
    </Suspense>
  );
}

function SocialRail() {
  return (
    <div className="absolute left-8 top-1/2 z-20 hidden -translate-y-1/2 flex-col items-center gap-8 2xl:flex">
      <div className="h-24 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent" />
      {SOCIAL_LINKS.map((item) => (
        <a
          key={item.name}
          href={item.url}
          target="_blank"
          rel="noreferrer"
          className="text-[10px] tracking-[0.35em] text-white/50 transition-colors duration-300 [writing-mode:vertical-rl] hover:text-white"
        >
          {item.name}
        </a>
      ))}
      <div className="h-24 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent" />
    </div>
  );
}

function Hero() {
  const { scrollY } = useScroll();
  const rawTitleY = useTransform(scrollY, [0, 500], [0, -180]);
  const rawTitleOpacity = useTransform(scrollY, [0, 350], [1, 0.35]);
  const titleY = useSpring(rawTitleY, {
    stiffness: 110,
    damping: 26,
    mass: 0.35,
  });
  const titleOpacity = useSpring(rawTitleOpacity, {
    stiffness: 120,
    damping: 30,
    mass: 0.3,
  });

  return (
    <section className="hero-shell">
      <SocialRail />
      <HeroBackground />
      <div className="hero-grid" />
      <div className="hero-vignette" />

      <div className="hero-content container mx-auto flex min-h-screen items-end py-12">
        <div className="my-auto rounded-[2rem] px-6 py-8 md:px-10 md:py-10 lg:my-0">
          <motion.div
            className="hero-title-motion"
            style={{ y: titleY, opacity: titleOpacity }}
          >
            <GradientHeroTitle title="modern duct" />
            <p className="mt-0 max-w-xl pl-1 text-sm font-light leading-6 tracking-wide text-duct-white lg:hidden lg:text-lg">
              Quality is our top priority - the trust our customers place in us
              is our greatest asset. Our team ensures accurate and up-to-date
              information from start to finish
            </p>
            <div className="mt-5">
              <ShinyButton>contact us</ShinyButton>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
