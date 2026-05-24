import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  BadgeCheck,
  Boxes,
  Factory,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import About from "../components/About";
import ShinyButton from "../components/ui/shiny-button";
import GradientTitle from "@/components/ui/gradiant-title";

const values = [
  {
    title: "Quality First",
    description:
      "We focus on dependable fabrication, clean finishing, and consistent performance in every delivered product.",
    icon: ShieldCheck,
  },
  {
    title: "Technical Precision",
    description:
      "Our workflow combines manufacturing discipline with practical engineering support for modern ventilation systems.",
    icon: Factory,
  },
  {
    title: "Trusted Delivery",
    description:
      "From local projects to regional supply, we work with reliability, clear coordination, and long-term client trust.",
    icon: BadgeCheck,
  },
];

const stats = [
  { value: "20+", label: "Product Solutions" },
  { value: "4", label: "Core Categories" },
  { value: "100%", label: "Custom Support" },
];

const pillars = [
  {
    title: "Who We Are",
    description:
      "Modern Duct is focused on manufacturing and supplying premium air distribution products for projects that demand quality, clarity, and long-term reliability.",
  },
  {
    title: "What We Build",
    description:
      "We develop diffusers, grilles, louvers, dampers, and related HVAC components with attention to performance, durability, and visual finish.",
  },
  {
    title: "How We Work",
    description:
      "Our team supports clients from product selection to delivery, combining practical engineering thinking with disciplined production and dependable coordination.",
  },
];

const workflow = [
  "Understand the project requirement and airflow need.",
  "Recommend the right product type, size, and finish.",
  "Manufacture with precision and consistent quality control.",
  "Deliver dependable support for installation and supply.",
];

export default function AboutPage() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 px-4 py-20 text-white md:px-6">
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-full max-w-5xl -translate-x-1/2 rounded-full bg-[#b7a801]/10 blur-[140px]" />
      <div className="pointer-events-none absolute right-0 top-1/4 h-80 w-80 rounded-full bg-cyan-400/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10  lg:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.38em] text-[#b7a801]">
              About Us
            </p>
            <GradientTitle title="More than products  Built on trust, precision, and performance" />
          
            <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400 md:text-lg">
              MODERN DUCT develops premium diffuser and ventilation solutions
              for residential, commercial, healthcare, and industrial
              projects. Our work is not only about supplying products, but
              about supporting better airflow, cleaner finishing, and reliable
              long-term project value.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/products">
                <ShinyButton>Explore Products</ShinyButton>
              </Link>
              <Link to="/contact">
                <ShinyButton className="bg-white/5">Talk to Our Team</ShinyButton>
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.25)] backdrop-blur-md"
              >
                <p className="text-3xl font-semibold text-white md:text-4xl">
                  {item.value}
                </p>
                <p className="mt-3 text-sm uppercase tracking-[0.25em] text-white/45">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-white/10 bg-black/20 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.25)] md:p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-[#b7a801]">
              Why We Matter
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
              A stronger about page should show your value, not only your name.
            </h2>
            <p className="mt-5 text-base leading-8 text-zinc-400">
              This page now gives more weight to your brand by explaining what
              you do, how you work, and why clients can trust your company.
              Instead of being only a simple intro, it now feels like a real
              company profile.
            </p>

            <div className="mt-8 space-y-4">
              {workflow.map((step, index) => (
                <div
                  key={step}
                  className="flex items-start gap-4 rounded-[1.4rem] border border-white/10 bg-white/5 p-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#b7a801]/12 text-sm font-medium text-[#f1de73]">
                    0{index + 1}
                  </div>
                  <p className="text-sm leading-7 text-zinc-300 md:text-base">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.25)] backdrop-blur-md"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="rounded-2xl bg-[#b7a801]/12 p-3 text-[#b7a801]">
                    <value.icon className="h-5 w-5" />
                  </div>
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

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.2)]"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-white/5 p-3 text-[#b7a801]">
                  <Boxes className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-medium text-white">{pillar.title}</h3>
              </div>
              <p className="mt-4 text-sm leading-7 text-zinc-400 md:text-base">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-[2rem] border border-white/10 bg-white/5 p-2 md:p-4">
          <About />
        </div>

        <div className="mt-12 grid gap-6 rounded-[2rem] border border-white/10 bg-black/20 p-6 md:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-white/45">
              Let&apos;s Work Together
            </p>
            <p className="mt-2 max-w-2xl text-base leading-8 text-zinc-300">
              Explore our products, review completed projects, or contact our
              team to discuss the right ventilation solution for your next
              project. We are ready to support you with products, planning, and
              dependable delivery.
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

        <div className="mt-10 rounded-[2rem] border border-[#b7a801]/15 bg-gradient-to-r from-[#b7a801]/10 via-white/5 to-transparent p-6 md:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#b7a801]/20 bg-[#b7a801]/10 px-4 py-2 text-sm text-[#f0de73]">
                <Sparkles className="h-4 w-4" />
                Brand Strength
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-white md:text-3xl">
                Stronger story. Better trust. Clearer company image.
              </h3>
            </div>
            <Link to="/services">
              <ShinyButton>View Services</ShinyButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
