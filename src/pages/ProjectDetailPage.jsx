import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { getProjectBySlug, projects } from "../data/projects";

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <section className="min-h-screen bg-zinc-950 px-4 py-20 text-white md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-white/55">Project not found.</p>
          <Link
            to="/projects"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/80 transition hover:bg-white/10 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>
        </div>
      </section>
    );
  }

  const relatedProjects = projects
    .filter((item) => item.slug !== project.slug)
    .slice(0, 3);

  return (
    <section className="min-h-screen bg-zinc-950 px-4 py-16 text-white md:px-6">
      <div className="mx-auto max-w-7xl">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/80 transition hover:bg-white/10 hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Link>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10">
              <img
                src={project.coverImage}
                alt={project.name}
                className="h-[26rem] w-full object-cover md:h-[36rem]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 w-full p-6 md:p-10">
                <div className="inline-flex rounded-full border border-white/10 bg-black/35 px-4 py-2 text-xs uppercase tracking-[0.32em] text-white/75 backdrop-blur">
                  {project.sector} · {project.year}
                </div>
                <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-6xl">
                  {project.name}
                </h1>
                <p className="mt-5 max-w-3xl text-base leading-8 text-white/75 md:text-lg">
                  {project.description}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
              <p className="text-xs uppercase tracking-[0.35em] text-[#b7a801]">
                Project Overview
              </p>
              <p className="mt-5 text-base leading-8 text-zinc-300 md:text-lg">
                {project.longDescription}
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.28)]">
              <p className="text-xs uppercase tracking-[0.35em] text-white/50">
                Key Highlights
              </p>
              <div className="mt-6 space-y-4">
                {project.highlights.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-4 rounded-2xl border border-white/10 bg-black/20 px-5 py-4"
                  >
                    <div className="mt-1 rounded-full bg-[#b7a801]/15 p-2 text-[#b7a801]">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                    <p className="text-sm leading-7 text-zinc-300 md:text-base">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {project.gallery.map((image, index) => (
            <motion.div
              key={`${image}-${index}`}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 + index * 0.08 }}
              className="overflow-hidden rounded-[1.75rem] border border-white/10"
            >
              <img
                src={image}
                alt={`${project.name} gallery ${index + 1}`}
                className="h-64 w-full object-cover"
              />
            </motion.div>
          ))}
        </div>

        <div className="mt-16">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#b7a801]">
                More Projects
              </p>
              <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
                Continue Exploring
              </h2>
            </div>
            <Link
              to="/projects"
              className="hidden rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/80 transition hover:bg-white/10 hover:text-white md:inline-flex"
            >
              View All
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {relatedProjects.map((item) => (
              <Link
                key={item.slug}
                to={`/projects/${item.slug}`}
                className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5"
              >
                <img
                  src={item.coverImage}
                  alt={item.name}
                  className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="p-5">
                  <p className="text-xs uppercase tracking-[0.28em] text-white/45">
                    {item.sector} · {item.year}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold">{item.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
