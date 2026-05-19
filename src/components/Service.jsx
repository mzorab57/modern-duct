import { useRef } from "react";
import { Link } from "react-router-dom"; // ئەگەر Next.js بەکاردەهێنیت ئەمە بگۆڕە بۆ next/link
import { motion, useScroll, useTransform } from "framer-motion";
import GradientTitle from "./ui/gradiant-title";
import  Button  from "./ui/shiny-button";
// تێبینی: دڵنیابە لەوەی پاتەکانی GradientTitle ڕاستن بەپێی فۆڵدەرەکانی خۆت

const IMG_PADDING = 12;
const MotionDiv = motion.div;

// لێرەدا دەقەکانی خۆتم دابەشکردووە بۆ سەر شێوازی دیزاینە نوێیەکە
const serviceSections = [
  {
    // تکایە لێرەدا لینکی وێنەکانت بگۆڕە بۆ وێنەی کارگەکەی خۆتان
    imgUrl: "/assets/images/modern-1.jpeg", 
    subheading: "High Precision Production",
    heading: "Manufacturing",
    title: "Production of duct diffusers & air systems",
    descriptionOne:
      "We operate with modern equipment and high precision to produce premium duct diffusers and essential air system components tailored for your projects.",
    descriptionTwo:
      "Our manufacturing process ensures every product meets strict quality standards, delivering durability, optimal airflow, and long-lasting performance.",
    buttonLabel: "Explore Manufacturing",
    link: "/manufacturing"
  },
  {
    imgUrl: "/assets/images/modern-2.jpeg",
    subheading: "Engineering Solutions",
    heading: "Design",
    title: "Detailed engineering for ventilation",
    descriptionOne:
      "Providing detailed engineering designs for air ventilation systems tailored to your exact needs, ensuring maximum efficiency and space optimization.",
    descriptionTwo:
      "Our expert team uses advanced software to map out air distribution, guaranteeing that the final installation functions flawlessly in any architectural setup.",
    buttonLabel: "View Design Services",
    link: "/design"
  },
  {
    imgUrl: "/assets/images/modern-3.jpeg",
    subheading: "Global Reach",
    heading: "Export",
    title: "Delivering quality locally and abroad",
    descriptionOne:
      "Delivering our high-quality products to all projects both locally and internationally, ensuring safe and timely arrival at your construction site.",
    descriptionTwo:
      "We handle the logistics, packaging, and shipping processes with the utmost care, giving our partners confidence in our reliable supply chain.",
    buttonLabel: "Learn About Export",
    link: "/export"
  },
];

const Service = () => {
  return (
    <section className=" min-h-screen ">
      
      {/* Header Section - ناونیشانی سەرەوەی بەشەکە */}
      <div className="lg:pt-32  pb-16 px-4 container mx-auto flex flex-col lg:flex-row lg:items-center justify-between ">
        <div className="flex flex-col  gap-2.5  py-2  rounded-full  backdrop-blur-md">

          <span className="text-xs md:text-sm  font-extralight tracking-[0.2em] uppercase">
            Our Services
          </span>
        <GradientTitle title="What We Offer" />
        </div>
        <p className="max-w-2xl mt-3 text-zinc-400 text-base md:text-lg leading-relaxed font-light">
          We combine manufacturing precision, engineering planning, and reliable export support to deliver complete air distribution solutions for modern projects.
        </p>
      </div>

      {/* Parallax Content Sections */}
      <div>
        {serviceSections.map((section) => (
          <TextParallaxContent
            key={section.heading}
            imgUrl={section.imgUrl}
            subheading={section.subheading}
            heading={section.heading}
          >
            <ExampleContent section={section} />
          </TextParallaxContent>
        ))}
      </div>
    </section>
  );
};

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[130vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const isVideo = /\.(mp4|webm|ogg)(\?.*)?$/i.test(imgUrl);

  return (
    <MotionDiv
      ref={targetRef}
      style={{
        height: `calc(100vh - ${IMG_PADDING * 10}px)`,
        top: IMG_PADDING,
        scale,
      }}
      className="sticky z-0 overflow-hidden rounded-3xl border border-white/10"
    >
      {isVideo ? (
        <video
          src={imgUrl}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover brightness-75"
        />
      ) : (
        <div
          className="absolute inset-0 bg-cover bg-center brightness-75 transition-all duration-700 hover:brightness-100"
          style={{
            backgroundImage: `url(${imgUrl})`,
          }}
        />
      )}
      {/* Overlay بۆ ئەوەی وێنەکان لەگەڵ باکگراوندە ڕەشەکە بگونجێن */}
      <MotionDiv
        className="absolute inset-0 bg-zinc-950/60"
        style={{ opacity }}
      />
    </MotionDiv>
  );
};

const OverlayCopy = ({ subheading, heading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <MotionDiv
      ref={targetRef}
      style={{ y, opacity }}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center px-6 text-white pointer-events-none"
    >
      <p className="mb-2 text-center text-lg md:mb-4 md:text-xl font-medium tracking-widest text-duct-blue uppercase">
        {subheading}
      </p>
      <p className="max-w-5xl text-center text-5xl   md:text-8xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 drop-shadow-2xl">
        {heading}
      </p>
    </MotionDiv>
  );
};

const ExampleContent = ({ section }) => (
  // دیزاینی دەقەکانی ژێر وێنەکە کە گۆڕدراوە بۆ Dark Mode
  <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 pb-32 pt-16 md:grid-cols-12  relative z-10">
    <h2 className="col-span-1 text-3xl md:text-4xl text-white md:col-span-4 leading-snug">
      {section.title}
    </h2>
    
    <div className="col-span-1 md:col-span-8">
      <p className="mb-6 text-lg md:text-xl text-zinc-400 leading-relaxed font-light">
        {section.descriptionOne}
      </p>
      <p className="mb-10 text-lg md:text-xl text-zinc-400 leading-relaxed font-light">
        {section.descriptionTwo}
      </p>
      
      {/* دوگمەی مۆدێرن بە ڕەنگی شین */}
      <Link
        to={section.link}
        className="group flex w-full "
      >
        <Button>{section.buttonLabel} 
            
</Button>
        {/* <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" /> */}
      </Link>
    </div>
  </div>
);

export default Service;
