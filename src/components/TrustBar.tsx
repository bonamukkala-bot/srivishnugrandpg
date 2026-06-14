import { motion } from "framer-motion";
import { Star, ShieldCheck, Sparkles, UserCheck } from "lucide-react";
import { staggerParent, fadeInUp } from "@/lib/motion";
import { AnimatedCounter } from "@/components/AnimatedCounter";

const items = [
  {
    icon: Star,
    title: (
      <>
        <AnimatedCounter value={4.3} decimals={1} /> Google Rating
      </>
    ),
    desc: (
      <>
        <AnimatedCounter value={26} suffix="+ verified reviews" />
      </>
    ),
  },
  { icon: UserCheck, title: "Polite Management", desc: "Personal owner care" },
  { icon: Sparkles, title: "Pristine Hygiene", desc: "Daily housekeeping" },
  { icon: ShieldCheck, title: "Asset Integrity", desc: "24×7 CCTV & lockers" },
];

export function TrustBar() {
  return (
    <section className="relative -mt-10 z-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="glass-dark rounded-3xl border border-[#D4AF37]/20 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)] grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10"
        >
          {items.map((it, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="flex items-center gap-4 px-6 py-6"
            >
              <div className="w-11 h-11 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/40 flex items-center justify-center shrink-0">
                <it.icon className="w-5 h-5 text-[#D4AF37]" strokeWidth={1.5} />
              </div>
              <div className="min-w-0">
                <div className="text-white font-display text-[15px] leading-tight">{it.title}</div>
                <div className="text-white/55 text-xs mt-0.5">{it.desc}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default TrustBar;
