import { Link } from "react-router-dom";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { socialLinks, whatsappHref, whatsappNumber } from "../data/socialLinks";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Projects", to: "/projects" },
];

const serviceLinks = [
  { label: "Manufacturing", to: "/manufacturing" },
  { label: "Design", to: "/design" },
  { label: "Export", to: "/export" },
];

const contactInfo = [
  { label: "Location", value: "Sulaymaniyah City, Iraq" },
  { label: "WhatsApp", value: whatsappNumber, href: whatsappHref },
  { label: "Email", value: "info@modernduct.com" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    // بەکارهێنانی ڕەشی قەترانی وەک بنەما
    <footer className="bg-[#050505] text-white pt-24 pb-8 overflow-hidden font-['Roboto',sans-serif]">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        
     

        {/* بەشی ناوەڕاست: لینکەکان و زانیارییەکان */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 py-16  border-t border-zinc-800">
          
          {/* لای چەپ: زانیاری کۆمپانیا */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-[#b7a801] font-semibold mb-6">
                Modern Duct
              </p>
              <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed max-w-sm">
                Premium airflow solutions, precision manufacturing, and engineering for modern projects globally.
              </p>
            </div>
            
            {/* ئامارەکان بە شێوازی مینیماڵ */}
            <div className="flex gap-10 mt-12">
              <div>
                <p className="text-4xl font-light text-white">20+</p>
                <p className="text-xs uppercase tracking-widest text-zinc-500 mt-2">Products</p>
              </div>
              <div>
                <p className="text-4xl font-light text-white">100%</p>
                <p className="text-xs uppercase tracking-widest text-zinc-500 mt-2">Custom</p>
              </div>
            </div>
          </div>

          {/* ناوەڕاست: لینکەکان (بە ستایلی Editorial) */}
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-600 mb-8">Navigation</p>
            <ul className="flex flex-col">
              {[...quickLinks, ...serviceLinks].map((item) => (
                <li key={item.to} className="border-b border-zinc-800/50">
                  <Link
                    to={item.to}
                    className="group flex items-center justify-between py-4 text-xl md:text-2xl font-light text-zinc-300 transition-colors hover:text-[#b7a801]"
                  >
                    <span className="transition-transform duration-300 group-hover:translate-x-3">
                      {item.label}
                    </span>
                    <ArrowUpRight className="h-5 w-5 opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* لای ڕاست: پەیوەندی و سۆشیاڵ */}
          <div className="md:col-span-4 md:pl-10">
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-600 mb-8">Contact Us</p>
            <div className="flex flex-col gap-8">
              {contactInfo.map((item) => (
                <div key={item.label} className="group">
                  <p className="text-sm text-zinc-500 mb-1">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-lg text-white font-light transition-colors group-hover:text-[#b7a801]"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-lg text-white font-light transition-colors group-hover:text-[#b7a801]">
                      {item.value}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="mt-10 group flex items-center justify-between rounded-[1.6rem] border border-[#b7a801]/20 bg-[#b7a801]/8 px-5 py-4 transition hover:border-[#b7a801]/40 hover:bg-[#b7a801]/12"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-[#b7a801]/15 p-3 text-[#d7c82c]">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                    WhatsApp
                  </p>
                  <p className="mt-1 text-sm text-white">{whatsappNumber}</p>
                </div>
              </div>
              <ArrowUpRight className="h-5 w-5 text-[#d7c82c] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>

            <div className="mt-16">
              <p className="text-xs uppercase tracking-[0.3em] text-zinc-600 mb-4">Follow Us</p>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-zinc-800 bg-zinc-950/60 px-4 py-2 text-sm text-zinc-300 transition-all hover:border-[#b7a801]/30 hover:text-white"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* بەشی کۆتایی: Watermark Text و مافەکان */}
        <div className="relative mt-10 pt-8 border-t border-zinc-900 flex flex-col items-center justify-center">
          
          <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-600 mb-10 md:mb-0 relative z-10">
            <p>© {year} Modern Duct.</p>
            <div className="flex gap-6">
              <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>

          {/* ناوی زەبەلاحی کۆمپانیا (Ultra Premium Signature) */}
          <h1 className="text-[2.5rem] sm:text-[5.5rem] md:text-[6.5rem] lg:text-[7.5rem] xl:text-[10.5rem] opacity-35 mx-auto  tracking-wide uppercase text-center  w-full
     font-bold leading-tight bg-gradient-to-r from-[#d7c82c]  to-duct-white bg-clip-text text-transparent">
            MODERNDUCT
          </h1>
        </div>

      </div>
    </footer>
  );
}
