import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

const serviceDetails = {
  manufacturing: {
    eyebrow: "Manufacturing",
    title: "Production of duct diffusers and air systems",
    description:
      "We operate with modern equipment and precise production workflows to deliver premium duct diffusers and air system components that match demanding project requirements.",
    points: [
      "Modern equipment for accurate fabrication",
      "Consistent quality control across every stage",
      "Reliable airflow performance and durability",
    ],
  },
  design: {
    eyebrow: "Design",
    title: "Detailed engineering for ventilation systems",
    description:
      "Our engineering team prepares detailed ventilation designs that optimize airflow, improve installation planning, and align with architectural and mechanical needs.",
    points: [
      "Detailed engineering layouts and calculations",
      "Optimized air distribution and space planning",
      "Design support for efficient project execution",
    ],
  },
  export: {
    eyebrow: "Export",
    title: "Delivering products locally and abroad",
    description:
      "We manage packaging, logistics, and coordination carefully so our products reach local and international projects safely, efficiently, and on schedule.",
    points: [
      "Secure packaging for long-distance delivery",
      "Reliable logistics coordination and dispatch",
      "Supply support for local and international projects",
    ],
  },
};

export default function ServiceDetailPage({ serviceKey }) {
  const service = serviceDetails[serviceKey];

  if (!service) {
    return null;
  }

  return (
    <section className="min-h-screen bg-zinc-950 px-4 py-20 text-white md:px-6">
      <div className="mx-auto max-w-6xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10 hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back Home
        </Link>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.38em] text-[#b7a801]">
              {service.eyebrow}
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
              {service.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400 md:text-lg">
              {service.description}
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
            <p className="text-sm uppercase tracking-[0.3em] text-white/45">
              Key Highlights
            </p>
            <div className="mt-8 space-y-4">
              {service.points.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-4 rounded-2xl border border-white/10 bg-black/20 px-5 py-4"
                >
                  <div className="mt-1 rounded-full bg-[#5DB6E5]/15 p-2 text-[#5DB6E5]">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                  <p className="text-sm leading-7 text-zinc-300 md:text-base">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
