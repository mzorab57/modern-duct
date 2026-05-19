import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import GradientTitle from "./ui/gradiant-title";
import ShinyButton from "./ui/shiny-button";
import { featuredProducts } from "../data/products";

function ProductCard({ product, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 shadow-[0_15px_50px_rgba(0,0,0,0.24)] backdrop-blur"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/35 px-3 py-1 text-xs tracking-[0.25em] text-white/75 backdrop-blur">
          {product.id}
        </div>
      </div>

      <div className="flex items-center justify-between gap-4 p-5">
        <div>
          <p className="text-lg font-medium text-white">{product.name}</p>
          <p className="mt-1 text-sm text-zinc-400">Premium air distribution product</p>
        </div>
        
      </div>
    </motion.article>
  );
}

export default function ProductShowcase() {
  return (
    <section className="relative  overflow-hidden px-4 py-20 text-white md:px-6 md:py-28">
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-full  -translate-x-1/2 rounded-full bg-duct-yellow/10 blur-[140px]" />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.35em] text-[#b7a801]">
              Products
            </p>
            <div className="mt-4 max-w-4xl">
              <GradientTitle title="Crafted for Every Airflow Need" />
            </div>
            <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-400 md:text-lg">
              A curated selection of diffusers, grilles, dampers, ventilators,
              and ventilation accessories built for modern projects.
            </p>
          </div>

          <Link to="/products" className="inline-flex w-fit">
            <ShinyButton>View All Products</ShinyButton>
          </Link>
        </motion.div>

        <div className="relative z-10 mt-12 grid gap-5 grid-cols-2 xl:grid-cols-4">
          {featuredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
