import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  BadgeCheck,
  Boxes,
  Factory,
  Globe2,
  PencilRuler,
  Sparkles,
} from "lucide-react";
import Service from "../components/Service";
import ShinyButton from "../components/ui/shiny-button";
import GradientTitle from "@/components/ui/gradiant-title";

const serviceCards = [
  {
    title: "Manufacturing",
    description:
      "Premium production workflows for duct diffusers, grilles, dampers, and essential air distribution accessories.",
    link: "/manufacturing",
    icon: Factory,
  },
  {
    title: "Design",
    description:
      "Detailed engineering support to improve airflow planning, installation coordination, and project clarity.",
    link: "/design",
    icon: PencilRuler,
  },
  {
    title: "Export",
    description:
      "Reliable packaging, logistics, and regional delivery support for projects that demand dependable supply.",
    link: "/export",
    icon: Globe2,
  },
];

const stats = [
  { value: "3", label: "Core Services" },
  { value: "20+", label: "Product Solutions" },
  { value: "End-to-End", label: "Project Support" },
];

const serviceHighlights = [
  {
    title: "From Planning to Delivery",
    description:
      "Our services are structured to support the full project journey, from technical study and product selection to fabrication and supply.",
  },
  {
    title: "Built for Real Projects",
    description:
      "We focus on practical, buildable service support that works for commercial, residential, healthcare, and industrial applications.",
  },
  {
    title: "Support You Can Trust",
    description:
      "Every service is designed to improve clarity, reduce risk, and help the final installation perform the way the project needs.",
  },
];

const workflow = [
  "Study the project scope and define the right airflow solution.",
  "Recommend manufacturing, design, or export support based on need.",
  "Coordinate product details, dimensions, and finishing requirements.",
  "Deliver clear communication and dependable execution until completion.",
];

export default function ServicesPage() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 px-4 py-20 text-white md:px-6">
      <div className="pointer-events-none absolute left-1/2 top-10 h-72 w-full max-w-5xl -translate-x-1/2 rounded-full bg-[#5DB6E5]/10 blur-[140px]" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-80 w-80 rounded-full bg-[#b7a801]/10 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.38em] ">
              Services
            </p>
            <GradientTitle title=" More than service Complete project support from concept to delivery" />
          
            <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400 md:text-lg">
              We combine manufacturing capability, engineering thinking, and
              supply coordination to deliver complete air distribution solutions
              for modern commercial, residential, healthcare, and industrial
              projects.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/contact">
                <ShinyButton>Talk to Our Team</ShinyButton>
              </Link>
              <Link to="/projects">
                <ShinyButton className="bg-white/5">View Projects</ShinyButton>
              </Link>
            </div>
          </div>

         
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-white/10 bg-black/20 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.25)] md:p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-[#5DB6E5]">
              Why Our Services Matter
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
              A strong services page should explain value, not only list titles.
            </h2>
            <p className="mt-5 text-base leading-8 text-zinc-400">
              This page now gives more importance to your services by showing
              what each one solves, how your team works, and why clients can
              depend on Modern Duct from planning stage to final delivery.
            </p>

            <div className="mt-8 space-y-4">
              {workflow.map((step, index) => (
                <div
                  key={step}
                  className="flex items-start gap-4 rounded-[1.4rem] border border-white/10 bg-white/5 p-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#5DB6E5]/12 text-sm font-medium text-[#8fd9ff]">
                    0{index + 1}
                  </div>
                  <p className="text-sm leading-7 text-zinc-300 md:text-base">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            {serviceCards.map((card) => (
              <Link
                key={card.title}
                to={card.link}
                className="group rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.25)] backdrop-blur-md transition hover:border-[#5DB6E5]/30 hover:bg-white/10"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="rounded-2xl bg-[#5DB6E5]/12 p-3 text-[#5DB6E5]">
                    <card.icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-medium text-white">
                      {card.title}
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-zinc-400 md:text-base">
                      {card.description}
                    </p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-[#5DB6E5] transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {serviceHighlights.map((item) => (
            <div
              key={item.title}
              className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.2)]"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-white/5 p-3 text-[#5DB6E5]">
                  <Boxes className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-medium text-white">{item.title}</h3>
              </div>
              <p className="mt-4 text-sm leading-7 text-zinc-400 md:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <Service />
        </div>

        <div className="mt-12 grid gap-6 rounded-[2rem] border border-white/10 bg-black/20 p-6 md:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-white/45">
              Need a Tailored Solution?
            </p>
            <p className="mt-2 max-w-2xl text-base leading-8 text-zinc-300">
              Our team can guide you through the right service path for your
              project, from fabrication planning to export coordination.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact">
              <ShinyButton>Talk to Our Team</ShinyButton>
            </Link>
            <Link to="/products">
              <ShinyButton className="bg-white/5">Explore Products</ShinyButton>
            </Link>
          </div>
        </div>

        <div className="mt-10 rounded-[2rem] border border-[#5DB6E5]/15 bg-gradient-to-r from-[#5DB6E5]/10 via-white/5 to-transparent p-6 md:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#5DB6E5]/20 bg-[#5DB6E5]/10 px-4 py-2 text-sm text-[#9edfff]">
                <Sparkles className="h-4 w-4" />
                Service Strength
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-white md:text-3xl">
                Clearer service story. Stronger trust. Better project guidance.
              </h3>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-100">
              <BadgeCheck className="h-4 w-4" />
              End-to-End Support
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
