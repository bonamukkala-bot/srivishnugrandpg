import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { staggerParent, fadeInUp } from "@/lib/motion";
import { AnimatedCounter } from "@/components/AnimatedCounter";

const reviews = [
  { name: "Rakesh K.", text: "Polite owner and very friendly nature. The new building feels fresh and clean.", highlight: ["polite owner", "friendly nature", "new building"] },
  { name: "Sandeep M.", text: "Good food, hygienic rooms and superb maintenance. Honestly the best PG I've stayed in.", highlight: ["good food", "hygienic"] },
  { name: "Vamsi R.", text: "Spacious double sharing, great Wi-Fi, and the location is unbeatable near Raidurg Metro.", highlight: ["spacious", "location"] },
  { name: "Arjun S.", text: "Owner takes personal care. Tasty South Indian breakfast every morning.", highlight: ["personal care", "tasty"] },
  { name: "Praveen T.", text: "Hot water, RO drinking water, daily housekeeping  feels premium for the price.", highlight: ["premium"] },
  { name: "Karthik V.", text: "CCTV everywhere makes it really safe. Recommended for working professionals.", highlight: ["safe"] },
];

function highlight(text: string, words: string[]) {
  let segs: React.ReactNode[] = [text];
  words.forEach((w, wi) => {
    const next: React.ReactNode[] = [];
    segs.forEach((seg, si) => {
      if (typeof seg !== "string") { next.push(seg); return; }
      const parts = seg.split(new RegExp(`(${w})`, "i"));
      parts.forEach((p, pi) => {
        if (p.toLowerCase() === w.toLowerCase()) {
          next.push(<span key={`${wi}-${si}-${pi}`} className="text-[#D4AF37] font-semibold">{p}</span>);
        } else {
          next.push(p);
        }
      });
    });
    segs = next;
  });
  return segs;
}

export function Reviews() {
  const loop = [...reviews, ...reviews];
  return (
    <section id="reviews" className="relative py-28 bg-[#0a1a3a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-14">
        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
        >
          <motion.div variants={fadeInUp} className="text-xs tracking-[0.35em] uppercase text-[#D4AF37] mb-3">
            Loved by Residents
          </motion.div>
          <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-5xl lg:text-6xl text-white">
            <span className="text-gold-gradient italic">
              <AnimatedCounter value={4.3} decimals={1} />
            </span>{" "}
            on Google · <AnimatedCounter value={26} suffix="+ Reviews" />
          </motion.h2>
          <motion.div variants={fadeInUp} className="mt-4 flex justify-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]" />
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerParent}
        className="relative"
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0a1a3a] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0a1a3a] to-transparent z-10" />
        <motion.div
          variants={fadeInUp}
          className="flex gap-6 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 45, ease: "linear", repeat: Infinity }}
        >
          {loop.map((r, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="w-[340px] md:w-[420px] glass rounded-3xl p-7 shrink-0 border-white/10 hover:border-[#D4AF37]/40 hover:scale-[1.02] hover:shadow-[0_20px_50px_-15px_rgba(245,197,66,0.25)] transition-all duration-500"
            >
              <Quote className="w-7 h-7 text-[#D4AF37]/60 mb-4" />
              <p className="text-white/85 leading-relaxed text-[15px]">{highlight(r.text, r.highlight)}</p>
              <div className="mt-6 flex items-center gap-3 pt-5 border-t border-white/10">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#b8860b] text-[#0a1a3a] font-display font-bold flex items-center justify-center">
                  {r.name[0]}
                </div>
                <div>
                  <div className="text-white text-sm font-medium">{r.name}</div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-[#D4AF37] text-[#D4AF37]" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
export default Reviews;