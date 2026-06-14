import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { CONTACT, logo } from "@/lib/assets";

const links = [
  { href: "#home", label: "Home" },
  { href: "#rooms", label: "Rooms" },
  { href: "#amenities", label: "Amenities" },
  { href: "#location", label: "Location" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

const sectionIds = links.map((l) => l.href.slice(1));

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { scrollYProgress } = useScroll();
  const bgOpacity = useTransform(scrollYProgress, [0, 0.08], [0, 1]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollToSection = useCallback((href: string) => {
    const id = href.slice(1);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  }, []);

  const linkClass = (href: string) => {
    const id = href.slice(1);
    const isActive = activeSection === id;
    return `relative text-sm transition-colors after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:h-px after:bg-[#D4AF37] after:transition-all after:duration-300 ${
      isActive
        ? "text-[#D4AF37] after:w-full"
        : "text-white/80 hover:text-[#D4AF37] after:w-0 hover:after:w-full"
    }`;
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-[padding,box-shadow] duration-500 ${
        scrolled ? "py-3 shadow-[0_8px_30px_rgba(0,0,0,0.35)]" : "py-5"
      }`}
    >
      <motion.div
        style={{ opacity: bgOpacity }}
        className="absolute inset-0 bg-[#050e23]/85 backdrop-blur-xl border-b border-white/5 pointer-events-none"
        aria-hidden
      />
      <div className="relative max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("#home");
          }}
          className="flex items-center gap-3 group"
        >
          <img
            src={logo}
            alt="Sri Vishnu Grand Men's Hostel"
            className="h-10 w-10 rounded-full object-cover drop-shadow-[0_0_12px_rgba(245,197,66,0.4)]"
          />
          <div className="leading-tight">
            <div className="font-display text-base md:text-lg text-gold-gradient font-semibold">Sri Vishnu Grand</div>
            <div className="text-[10px] tracking-[0.25em] text-white/60 uppercase">Hostel  PG  Guest House</div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(l.href);
              }}
              className={linkClass(l.href)}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={CONTACT.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#D4AF37]/5 text-[#D4AF37] font-semibold text-sm border border-[#D4AF37]/60 animate-gold-pulse hover:bg-[#D4AF37] hover:text-[#0a1a3a] transition-colors"
        >
          <MessageCircle className="w-4 h-4" /> WhatsApp
        </a>

        <button onClick={() => setOpen(!open)} className="lg:hidden text-white p-2" aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-full inset-x-0 mx-4 mt-3 rounded-2xl glass-dark border border-white/10 shadow-2xl overflow-hidden lg:hidden z-50"
          >
            <div className="flex flex-col p-6 gap-5">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(l.href);
                  }}
                  className={`text-base font-medium transition-colors ${
                    activeSection === l.href.slice(1)
                      ? "text-[#D4AF37]"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.a
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: links.length * 0.05 }}
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="mt-2 w-full py-3 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B8941F] text-[#0a1a3a] font-bold text-center text-sm shadow-[0_8px_20px_-4px_rgba(212,175,55,0.4)] flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;
