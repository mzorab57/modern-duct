import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, BadgeCheck, Filter, Sparkles } from "lucide-react";
import { productCategories, products } from "../data/products";
import GradientTitle from "@/components/ui/gradiant-title";

export default function ProductsPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProducts = useMemo(() => {
    if (activeFilter === "all") {
      return products;
    }

    return products.filter((product) => product.filterKey === activeFilter);
  }, [activeFilter]);

  const counts = useMemo(() => {
    return productCategories.reduce((accumulator, category) => {
      if (category.key === "all") {
        accumulator[category.key] = products.length;
        return accumulator;
      }

      accumulator[category.key] = products.filter(
        (product) => product.filterKey === category.key
      ).length;
      return accumulator;
    }, {});
  }, []);


  return (
    <section className="relative min-h-screen overflow-hidden bg-zinc-950 px-4 py-16 text-white md:px-6 md:py-20">
      <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-full max-w-6xl -translate-x-1/2 rounded-full bg-[#b7a801]/10 blur-[160px]" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-72 w-72 rounded-full bg-cyan-400/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
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
          className="mt-10 grid gap-8  lg:items-end"
        >
          <div>
          
           <GradientTitle title=" Products Premium HVAC   Product Collection"/>


        
            <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-400 md:text-lg">
             All main types of diffusers, grilles, louvers, and dampers 
are beautifully organized here, along with descriptions, sizes, types, 
and images for each product.
            </p>
          </div>

    
        </motion.div>

        <div className="mt-12 rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-[0_18px_70px_rgba(0,0,0,0.25)] backdrop-blur-xl md:p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#b7a801]/20 bg-[#b7a801]/10 px-4 py-2 text-sm text-[#f3e988]">
                <Filter className="h-4 w-4" />
                Filter By Category
              </div>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-400 md:text-base">
              You can filter by product type to view only the section you need.
              </p>
            </div>

            {/* <div className="rounded-[1.5rem] border border-white/10 bg-black/20 px-4 py-3 text-sm text-zinc-300">
              <span className="font-medium text-white">
                {filteredProducts.length}
              </span>{" "}
             Products Found
            </div> */}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {productCategories.map((category) => {
              const isActive = activeFilter === category.key;

              return (
                <button
                  key={category.key}
                  type="button"
                  onClick={() => setActiveFilter(category.key)}
                  className={`rounded-full border px-4 py-3 text-sm transition ${
                    isActive
                      ? "border-[#b7a801]/40 bg-[#b7a801]/15 text-white shadow-[0_0_30px_rgba(183,168,1,0.18)]"
                      : "border-white/10 bg-white/5 text-zinc-300 hover:border-white/20 hover:bg-white/10"
                  }`}
                >
                  {category.labelKu} {counts[category.key]}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2 2xl:grid-cols-3">
          {filteredProducts.map((product, index) => (
            <motion.article
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
              className="group overflow-hidden rounded-[1rem] border border-white/10 bg-white/5 shadow-[0_18px_60px_rgba(0,0,0,0.24)] backdrop-blur-md transition hover:-translate-y-1 hover:border-white/20"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[16/10] w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
                <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                  <span className="rounded-full border border-white/10 bg-black/35 px-3 py-1 text-xs tracking-[0.25em] text-white/75 backdrop-blur">
                    {product.id}
                  </span>
                  <span className="rounded-full border border-[#b7a801]/20 bg-[#b7a801]/12 px-3 py-1 text-xs text-[#f6eb88]">
                    {product.categoryKu}
                  </span>
                </div>
              </div>

              <div className="border-t border-white/10 p-5 md:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-semibold text-white">
                      {product.name}
                    </h2>
                    <p className="mt-1 text-sm text-[#f0de72]">
                      {product.nameKu}
                    </p>
                  </div>
                  <Sparkles className="h-5 w-5 shrink-0 text-[#b7a801]" />
                </div>

                <p className="mt-4 text-sm leading-7 text-zinc-300 md:text-base">
                  {product.description}
                </p>

                {product.sizes?.length ? (
                  <div className="mt-5">
                    <p className="text-xs uppercase tracking-[0.28em] text-white/45">
                     Sizes
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {product.sizes.map((size) => (
                        <span
                          key={size}
                          className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-zinc-200"
                        >
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : null}

                {product.types?.length ? (
                  <div className="mt-5">
                    <p className="text-xs uppercase tracking-[0.28em] text-white/45">
                     Types
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {product.types.map((type) => (
                        <span
                          key={type}
                          className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5 text-xs text-cyan-100"
                        >
                          {type}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : null}

                {product.certification ? (
                  <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-100">
                    <BadgeCheck className="h-4 w-4" />
                    Certification: {product.certification}
                  </div>
                ) : null}
              </div>
            </motion.article>
          ))}
        </div>

        {filteredProducts.length === 0 ? (
          <div className="mt-12 rounded-[1rem] border border-dashed border-white/10 bg-white/5 px-6 py-12 text-center text-zinc-400">
            هیچ بەرهەمێک بۆ ئەم category ـە نەدۆزرایەوە.
          </div>
        ) : null}
      </div>
    </section>
  );
}
