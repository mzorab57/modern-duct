import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/projects";
import GradientTitle from "@/components/ui/gradiant-title";

export default function ProjectsPage() {
  return (
    <section className="min-h-screen bg-zinc-950 px-4 py-20 text-white md:px-6">
      <div className="mx-auto max-w-7xl ">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className=" text-center"
        >
          <p className="text-xs text-start uppercase tracking-[0.35em] text-[#b7a801]">
            Projects
          </p>
          <GradientTitle title="Selected Work Across Leading Destinations" />
            <p className="text-start mt-6 max-w-2xl text-base leading-8 text-zinc-400 md:text-lg">
            A curated look at the projects that trusted MODERN DUCT for
            diffusers, grilles, dampers, and complete air distribution
            solutions.
          </p>
         
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              className="group overflow-hidden rounded-[1rem] border border-white/10 bg-white/5 shadow-[0_18px_60px_rgba(0,0,0,0.28)]"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.coverImage}
                  alt={project.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"
                />
                <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs uppercase tracking-[0.25em] text-white/75 backdrop-blur">
                  {project.sector}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between text-sm text-white/50">
                  <span>{project.id}</span>
                  <span>{project.year}</span>
                </div>
                <h2 className="mt-4 text-2xl font-semibold">{project.name}</h2>
                <p className="mt-4 text-sm leading-7 text-zinc-400 md:text-base">
                  {project.description}
                </p>
                <Link
                  to={`/projects/${project.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white transition hover:text-[#b7a801]"
                >
                  View Project
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
