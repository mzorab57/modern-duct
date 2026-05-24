import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import GradientTitle from "./ui/gradiant-title";
import ShinyButton from "./ui/shiny-button";
import { products } from "../data/products";

function getProductSamples(product) {
  if (product.sizes?.length) {
    return product.sizes[0];
  }

  if (product.types?.length) {
    return product.types[0];
  }

  return product.categoryKu || product.category;
}

function getShowcaseProducts(items) {
  const seen = new Set();
  const mixed = [];

  for (const item of items) {
    if (!seen.has(item.filterKey)) {
      seen.add(item.filterKey);
      mixed.push(item);
    }
  }

  return mixed.slice(0, 4);
}

function ProductCard({ product, index }) {
  const sample = getProductSamples(product);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group h-full"
    >
      <Link
        to="/products"
        onClick={() => window.scrollTo(0, 0)}
        className="flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5 transition duration-300 hover:border-white/20 hover:bg-white/[0.07]"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            decoding="async"
            className="h-full w-full  transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        </div>

        <div className="flex flex-1 flex-col p-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[#b7a801]">
                {product.categoryKu || product.category}
              </p>
              <p className="mt-2 text-lg font-medium text-white">{product.name}</p>
            </div>
            <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-white/55 transition group-hover:text-white" />
          </div>

          <p className="mt-3 text-sm leading-7 text-zinc-400">
            {product.description}
          </p>

          <div className="mt-5 border-t border-white/10 pt-4">
            <p className="text-[11px] uppercase tracking-[0.28em] text-white/40">
              Sample
            </p>
            <p className="mt-2 text-sm text-white/80">{sample}</p>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

export default function ProductShowcase() {
  const showcaseProducts = getShowcaseProducts(products);

  return (
    <section className="relative overflow-hidden px-4 py-20 text-white md:px-6 md:py-28">
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-full -translate-x-1/2 rounded-full bg-duct-yellow/10 blur-[140px]" />

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
            {/* <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-400 md:text-lg">
              Selected product samples from our premium range of diffusers,
              grilles, and airflow accessories for modern HVAC projects.
            </p> */}
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
    
            <Link to="/products" className="inline-flex w-fit">
              <ShinyButton>View All Products</ShinyButton>
            </Link>
          </div>
        </motion.div>

        <div className="relative z-10 mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {showcaseProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
