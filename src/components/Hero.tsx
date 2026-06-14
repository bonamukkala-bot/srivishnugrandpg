import { useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, MapPin, Star } from "lucide-react";
import { photos, CONTACT } from "@/lib/assets";
import { staggerParent, fadeInUp, wordStagger, wordFadeUp } from "@/lib/motion";
import { AnimatedCounter } from "@/components/AnimatedCounter";

const headlineWords = "Sri Vishnu Grand".split(" ");

const ctaHover = {
  scale: 1.05,
  boxShadow: "0 20px 50px -10px rgba(245, 197, 66, 0.75)",
  transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] as const },
};

export function Hero() {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 600], [0, 150]); // parallax scroll

  useEffect(() => {
    if (!photos.building) {
      console.warn("Hero background image import path (photos.building) is broken or undefined!");
    }
  }, []);

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden flex items-center z-10 bg-[#050e23]">
      {/* Background with parallax & Ken Burns animation */}
      <div className="absolute inset-0 z-0 bg-[#050e23] overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: bgY }}>
          <motion.img
            src={photos.building}
            alt="Sri Vishnu Grand building"
            className="w-full h-full object-cover cinematic"
            initial={{ scale: 1 }}
            animate={{ scale: 1.08 }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
              repeatType: "reverse",
            }}
            onError={() => {
              console.warn("Hero background image failed to load or path is broken:", photos.building);
            }}
          />
        </motion.div>
        
        {/* Multi-layer dark gradient overlay for text readability */}
        <div className="absolute inset-0 z-10 bg-[linear-gradient(to_top,rgba(5,14,35,1)_0%,rgba(5,14,35,0.7)_40%,rgba(5,14,35,0.4)_100%)]" />
        <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,rgba(5,14,35,0.3)_0%,rgba(5,14,35,0.85)_100%)]" />
      </div>

      <motion.div
        variants={staggerParent}
        initial="hidden"
        animate="visible"
        className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 w-full z-20"
      >
        <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-7">
          <Star className="w-3.5 h-3.5 text-[#D4AF37] fill-[#D4AF37]" />
          <span className="text-xs tracking-widest uppercase text-white/85">
            <AnimatedCounter value={4.3} decimals={1} suffix=" ★" /> ·{" "}
            <AnimatedCounter value={26} suffix="+ Google Reviews" />
          </span>
        </motion.div>

        <motion.h1
          variants={wordStagger}
          initial="hidden"
          animate="visible"
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.02] text-white max-w-5xl"
        >
          {headlineWords.map((word, i) => (
            <motion.span key={i} variants={wordFadeUp} className="inline-block mr-[0.2em]">
              {word}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p variants={fadeInUp} className="mt-5 font-display text-2xl md:text-3xl text-gold-gradient italic">
          Elevated Men's Residence in Gachibowli.
        </motion.p>

        <motion.p variants={fadeInUp} className="mt-6 max-w-2xl text-base md:text-lg text-white/75 leading-relaxed">
          An exclusive men's hostel, PG & guest house engineered for IT professionals, executives and serious students.
          Discreet security, pristine hygiene, and a refined sense of home — moments from Microsoft, ISB & Raidurg Metro.
        </motion.p>

        <motion.div variants={fadeInUp} className="mt-10 flex flex-wrap items-center gap-4">
          <motion.a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noreferrer"
            whileHover={ctaHover}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B8941F] text-[#0a1a3a] font-semibold shadow-[0_15px_40px_-10px_rgba(245,197,66,0.6)]"
          >
            Book Your Stay
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </motion.a>
          <motion.a
            href="#rooms"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(245, 197, 66, 0.25)",
              borderColor: "rgba(212, 175, 55, 0.6)",
            }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full glass text-white border border-white/15 transition-colors"
          >
            Explore Rooms
          </motion.a>
        </motion.div>

        <motion.div variants={fadeInUp} className="mt-14 flex flex-wrap gap-x-10 gap-y-4 text-sm text-white/70">
          <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-[#D4AF37]" /> Gachibowli, Hyderabad</div>
          <div>· 5 min to Raidurg Metro</div>
          <div>· 10 min to Microsoft / ISB</div>
        </motion.div>
      </motion.div>

      <motion.a
        href="#rooms"
        aria-label="Scroll down"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/50 hover:text-[#D4AF37] transition-colors z-20"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <ChevronDown className="w-6 h-6" />
      </motion.a>
    </section>
  );
}

export default Hero;
