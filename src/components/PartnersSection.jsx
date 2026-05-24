import { motion } from "framer-motion";
import GradientTitle from "./ui/gradiant-title";
import { projects } from "../data/projects";

const partnerNames = projects
  .filter((project) => project.logo)
  .map((project) => ({
  id: project.id,
  name: project.name,
  title: project.title,
  logo: project.logo,
}));

const firstRow = partnerNames.slice(0, 8);
const secondRow = partnerNames.slice(8);

function PartnerChip({ partner }) {
  return (
    <div className="flex min-w-[240px] items-center gap-4 rounded-[1.5rem] border border-white/10 bg-white/5 px-4 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.18)] backdrop-blur-md">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white px-2 py-2">
        <img
          src={partner.logo}
          alt={partner.name}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-contain"
        />
      </div>
      <div>
        <p className="text-sm font-medium text-white">{partner.name}</p>
        {/* <p className="mt-1 text-xs text-white/45">{partner.title}</p> */}
      </div>
    </div>
  );
}

function PartnerRow({ items, reverse = false }) {
  const marqueeItems = [...items, ...items];

  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ x: reverse ? "-50%" : "0%" }}
        animate={{ x: reverse ? "0%" : "-50%" }}
        transition={{
          duration: reverse ? 34 : 30,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="flex w-max gap-4"
      >
        {marqueeItems.map((partner, index) => (
          <PartnerChip
            key={`${partner.id}-${partner.name}-${index}`}
            partner={partner}
          />
        ))}
      </motion.div>
    </div>
  );
}

export default function PartnersSection() {
  return (
    <section className="relative overflow-hidden  py-20 text-white  md:py-28">
      <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-full max-w-5xl -translate-x-1/2 rounded-full bg-duct-yellow/10 blur-[140px]" />

      <div className="container mx-auto ">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 grid gap-10  px-4 lg:items-end"
        >
          <div className="flex flex-col lg:flex-row lg:items-center">
            <div className="mt-4 ">
            <p className="text-xs uppercase tracking-[0.35em] text-[#b7a801]">
              Partners
            </p>
              <GradientTitle title="Trusted by Leading Partners" />
            </div>
            <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-400 md:text-lg">
              Our solutions support developers, healthcare facilities,
              industrial sites, and landmark destinations across the region.
            </p>
          </div>

        </motion.div>

        <div className="relative z-10 mt-12 space-y-4">
          <PartnerRow items={firstRow} />
          {secondRow.length ? <PartnerRow items={secondRow} reverse /> : null}
        </div>
      </div>
    </section>
  );
}
