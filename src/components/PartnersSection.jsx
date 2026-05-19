import { motion } from "framer-motion";
import GradientTitle from "./ui/gradiant-title";
import { projects } from "../data/projects";

const partnerNames = projects.map((project) => ({
  id: project.id,
  name: project.name,
  title: project.title,
}));

const sectors = [...new Set(projects.map((project) => project.sector))];
const firstRow = partnerNames.slice(0, 8);
const secondRow = partnerNames.slice(8);

function PartnerChip({ partner }) {
  return (
    <div className="flex  items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.18)] backdrop-blur-md">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-duct-yellow/15 text-sm font-medium text-duct-yellow">
        {partner.id}
      </div>
      <div>
        <p className="text-sm font-medium text-white">{partner.name}</p>
        <p className="text-xs text-white/45">{partner.title}</p>
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
          className="relative z-10 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] px-4 lg:items-end"
        >
          <div className="max-w-3xl ">
            <p className="text-xs uppercase tracking-[0.35em] text-[#b7a801]">
              Partners
            </p>
            <div className="mt-4 max-w-3xl">
              <GradientTitle title="Trusted by Leading Partners" />
            </div>
            <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-400 md:text-lg">
              Our solutions support developers, healthcare facilities,
              industrial sites, and landmark destinations across the region.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 backdrop-blur-md">
              <p className="text-xs uppercase tracking-[0.25em] text-white/45">
                Active Partners
              </p>
              <p className="mt-3 text-3xl font-semibold text-white">
                {partnerNames.length}+
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 backdrop-blur-md">
              <p className="text-xs uppercase tracking-[0.25em] text-white/45">
                Sectors
              </p>
              <p className="mt-3 text-3xl font-semibold text-white">
                {sectors.length}
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 backdrop-blur-md">
              <p className="text-xs uppercase tracking-[0.25em] text-white/45">
                Featured Cases
              </p>
              <p className="mt-3 text-3xl font-semibold text-white">
                {projects.filter((project) => project.featured).length}
              </p>
            </div>
          </div>
        </motion.div>

        <div className="relative z-10 mt-12 space-y-4">
          <PartnerRow items={firstRow} />
          <PartnerRow items={secondRow} reverse />
        </div>
      </div>
    </section>
  );
}
