import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import About from "../components/About";
import ShinyButton from "../components/ui/shiny-button";

const values = [
  {
    title: "Quality First",
    description:
      "We focus on dependable fabrication, clean finishing, and consistent performance in every delivered product.",
  },
  {
    title: "Technical Precision",
    description:
      "Our workflow combines manufacturing discipline with practical engineering support for modern ventilation systems.",
  },
  {
    title: "Trusted Delivery",
    description:
      "From local projects to regional supply, we work with reliability, clear coordination, and long-term client trust.",
  },
];

export default function AboutPage() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 px-4 py-20 text-white md:px-6">
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-full max-w-5xl -translate-x-1/2 rounded-full bg-[#b7a801]/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.38em] text-[#b7a801]">
              About Us
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
              Built around precision, trust, and modern air distribution.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400 md:text-lg">
              MODERN DUCT develops diffuser and ventilation solutions that
              combine clean design, dependable fabrication, and practical
              performance for contemporary projects.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.25)] backdrop-blur-md"
              >
                <div className="flex items-start justify-between gap-4">
                  <h2 className="text-lg font-medium text-white">{value.title}</h2>
                  <ArrowUpRight className="h-5 w-5 text-[#b7a801]" />
                </div>
                <p className="mt-3 text-sm leading-7 text-zinc-400 md:text-base">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-[2rem] border border-white/10 bg-white/5 p-2 md:p-4">
          <About />
        </div>

        <div className="mt-12 flex flex-col gap-4 rounded-[2rem] border border-white/10 bg-black/20 p-6 md:flex-row md:items-center md:justify-between md:p-8">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-white/45">
              Let&apos;s Work Together
            </p>
            <p className="mt-2 max-w-2xl text-base leading-8 text-zinc-300">
              Explore our products, discover completed projects, or contact our
              team for your next ventilation requirement.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link to="/projects">
              <ShinyButton>Our Projects</ShinyButton>
            </Link>
            <Link to="/contact">
              <ShinyButton className="bg-white/5">Contact Us</ShinyButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
