import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Service from "../components/Service";
import ShinyButton from "../components/ui/shiny-button";

const serviceCards = [
  {
    title: "Manufacturing",
    description:
      "Premium production workflows for duct diffusers, grilles, dampers, and essential air distribution accessories.",
    link: "/manufacturing",
  },
  {
    title: "Design",
    description:
      "Detailed engineering support to improve airflow planning, installation coordination, and project clarity.",
    link: "/design",
  },
  {
    title: "Export",
    description:
      "Reliable packaging, logistics, and regional delivery support for projects that demand dependable supply.",
    link: "/export",
  },
];

export default function ServicesPage() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 px-4 py-20 text-white md:px-6">
      <div className="pointer-events-none absolute left-1/2 top-10 h-72 w-full max-w-5xl -translate-x-1/2 rounded-full bg-[#5DB6E5]/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.38em] text-[#5DB6E5]">
              Services
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
              Complete support from concept to delivery.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400 md:text-lg">
              We combine manufacturing capability, engineering thinking, and
              supply coordination to deliver complete air distribution solutions
              for modern commercial, residential, healthcare, and industrial
              projects.
            </p>
          </div>

          <div className="grid gap-4">
            {serviceCards.map((card) => (
              <Link
                key={card.title}
                to={card.link}
                className="group rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.25)] backdrop-blur-md transition hover:border-[#5DB6E5]/30 hover:bg-white/10"
              >
                <div className="flex items-start justify-between gap-4">
                  <h2 className="text-xl font-medium text-white">{card.title}</h2>
                  <ArrowUpRight className="h-5 w-5 text-[#5DB6E5] transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
                <p className="mt-3 text-sm leading-7 text-zinc-400 md:text-base">
                  {card.description}
                </p>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <Service />
        </div>

        <div className="mt-12 flex flex-col gap-4 rounded-[2rem] border border-white/10 bg-black/20 p-6 md:flex-row md:items-center md:justify-between md:p-8">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-white/45">
              Need a Tailored Solution?
            </p>
            <p className="mt-2 max-w-2xl text-base leading-8 text-zinc-300">
              Our team can guide you through the right service path for your
              project, from fabrication planning to export coordination.
            </p>
          </div>
          <Link to="/contact">
            <ShinyButton>Talk to Our Team</ShinyButton>
          </Link>
        </div>
      </div>
    </section>
  );
}
