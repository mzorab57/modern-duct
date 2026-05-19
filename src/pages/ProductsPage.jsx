import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { products } from "../data/products";

export default function ProductsPage() {
  return (
    <section className="min-h-screen bg-zinc-950 px-4 py-16 text-white md:px-6 md:py-20">
      <div className="mx-auto max-w-7xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/80 transition hover:bg-white/10 hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-10 max-w-4xl text-center"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-[#b7a801]">
            Products
          </p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-6xl">
            Complete Product
            <br />
            Collection
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-zinc-400 md:text-lg">
            Explore our full range of diffusers, grilles, dampers, louvers,
            ventilators, and custom air distribution products.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product, index) => (
            <motion.article
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
              className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5 shadow-[0_18px_60px_rgba(0,0,0,0.24)]"
            >
              <div className="overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/3] w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>
              <div className="border-t border-white/10 px-4 py-4">
                <p className="text-xs uppercase tracking-[0.25em] text-white/45">
                  {product.id}
                </p>
                <h2 className="mt-2 text-base font-medium text-white md:text-lg">
                  {product.name}
                </h2>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
