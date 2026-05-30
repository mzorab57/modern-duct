import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import { socialLinks } from "../data/socialLinks";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/products" },
  { label: "Projects", to: "/projects" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Contact Us", to: "/contact" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredPath, setHoveredPath] = useState(null);

  const { scrollY } = useScroll();

  // ئەم بەشە بەرپرسە لە بردنە سەرەوەی پەیجەکە کاتێک بەکارهێنەر کلیک لەسەر لینکەکان دەکات
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant" // یان دەتوانیت بڕیاری "smooth" بدەیت ئەگەر بتەوێت بە نەرمی بڕواتە سەرەوە
    });
  }, [location.pathname]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    
    if (latest <= 50) {
      setIsScrolled(false);
      setIsHidden(false);
    } else {
      setIsScrolled(true);
      if (latest > previous && latest > 150) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
    }
  });

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Desktop & Main Header */}
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={isHidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`fixed inset-x-0 top-0 z-[90] transition-colors duration-300 ${
          isScrolled
            ? "bg-[#050505]/90 backdrop-blur-xl shadow-2xl"
            : "bg-transparent"
        }`}
      >
        <div 
          className={`absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#b7a801]/30 to-transparent transition-opacity duration-300 ${
            isScrolled ? "opacity-100" : "opacity-0"
          }`} 
        />

        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 md:px-10 h-24">
          
          {/* Logo */}
          <Link to="/" className="relative z-50 flex items-center group" onClick={closeMenu}>
            <div className="relative flex items-center justify-center transition-transform duration-300 group-hover:opacity-80">
               <img src="/logo2.png" alt="Duct" className="w-24 md:w-28 scale-150 object-contain drop-shadow-2xl" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 relative h-full">
            {navItems.map((item) => {
              const isActive = location.pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  onMouseEnter={() => setHoveredPath(item.to)}
                  onMouseLeave={() => setHoveredPath(null)}
                  className="relative flex items-center h-full text-[13px] tracking-[0.1em] uppercase font-medium transition-colors"
                >
                  <span className={`relative z-10 transition-all duration-300 ${
                    isActive 
                      ? "text-white italic" 
                      : "text-zinc-500 hover:text-white"
                  }`}>
                    {item.label}
                  </span>

                  {hoveredPath === item.to && (
                    <motion.div
                      layoutId="navbar-top-line"
                      className="absolute top-0 left-0 right-0 h-[2px] bg-[#b7a801]"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  
                  {isActive && (
                    <motion.div
                      layoutId="navbar-active-line"
                      className="absolute top-0 left-0 right-0 h-[2px] bg-white shadow-[0_0_10px_#ffffff]"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Call to Action */}
          <div className="hidden lg:flex items-center relative z-50">
            <Link 
              to="/projects"
              className="group flex items-center gap-3 text-white border-b border-[#b7a801]/30 pb-1 hover:border-[#b7a801] transition-colors"
            >
              <span className="text-[11px] font-semibold tracking-widest uppercase">Start Project</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#b7a801] transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            className="flex h-12 w-12 relative z-[100] items-center justify-end text-white transition-all duration-300 lg:hidden"
          >
            {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[85] bg-[#050505] lg:hidden flex flex-col"
          >
            <div className="absolute top-0 right-0 w-[80vw] h-[80vw] bg-[#b7a801]/5 blur-[100px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3"></div>

            <div className="flex-1 flex flex-col justify-center px-8 pt-20 pb-10 relative z-10 h-full overflow-y-auto">
              <motion.nav 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-col gap-6 md:gap-8"
              >
                {navItems.map((item) => {
                  const isActive = location.pathname === item.to;
                  
                  return (
                    <div key={item.to} variants={itemVariants}>
                      <NavLink
                        to={item.to}
                        onClick={closeMenu}
                        className="group flex items-center gap-4 w-fit"
                      >
                        <span className={`h-[2px] transition-all duration-500 ease-out bg-[#b7a801] ${
                          isActive ? "w-8 md:w-12" : "w-0 group-hover:w-6"
                        }`} />
                        
                        <span className={`text-2xl md:text-6xl tracking-tight transition-all duration-500 ${
                          isActive 
                            ? "text-white font-medium italic" 
                            : "text-zinc-500 font-light hover:text-white hover:translate-x-2"
                        }`}>
                          {item.label}
                        </span>
                      </NavLink>
                    </div>
                  );
                })}
              </motion.nav>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.02, duration: 0.5 }}
                className="mt-8"
              >
                <p className="mb-4 ml-2 text-[10px] font-semibold uppercase tracking-[0.4em] text-zinc-500">
                  Follow Us
                </p>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-zinc-800 bg-zinc-900/80 px-4 py-2.5 text-xs uppercase tracking-[0.2em] text-zinc-300 transition-all hover:border-[#b7a801]/30 hover:text-white"
                    >
                      {social.name}
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}