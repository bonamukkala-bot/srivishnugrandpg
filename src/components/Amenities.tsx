import { motion } from "framer-motion";
import { Wifi, Utensils, Snowflake, Shirt, Car, Cctv, Droplets, BedDouble, Sparkles, Key } from "lucide-react";
import { staggerParent, fadeInUp } from "@/lib/motion";
import TiltCard from "@/components/ui/TiltCard";

const items = [
  { icon: Wifi, title: "High-Speed Wi-Fi", desc: "Always-on fiber connectivity" },
  { icon: Utensils, title: "South & North Indian Food", desc: "Breakfast · Lunch · Dinner" },
  { icon: Snowflake, title: "AC Rooms", desc: "Climate-controlled comfort" },
  { icon: Shirt, title: "Washing machine", desc: "Available for use" },
  { icon: Car, title: "Parking", desc: "Two-wheeler parking" },
  { icon: Cctv, title: "24×7 CCTV", desc: "Secure premises" },
  { icon: Droplets, title: "Hot & Cold RO Water", desc: "Pure drinking water" },
  { icon: BedDouble, title: "2, 3 & 4 Sharing", desc: "Choose your comfort" },
  { icon: Sparkles, title: "Daily Housekeeping", desc: "Refreshed every day" },
  { icon: Key, title: "Locker Facility", desc: "Personal storage" },
];

export function Amenities() {
  return (
    <section id="amenities" className="relative py-28 bg-[#050e23]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center_top,rgba(245,197,66,0.06),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp} className="text-xs tracking-[0.35em] uppercase text-[#D4AF37] mb-3">
            Premium Amenities
          </motion.div>
          <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-5xl lg:text-6xl text-white">
            Everything You Need, <span className="text-gold-gradient italic">Refined</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-4 text-white/65 max-w-2xl mx-auto">
            Thoughtful comforts curated to make every day effortless.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5"
        >
          {items.map((it, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="group relative"
            >
              <TiltCard className="glass rounded-2xl p-6 hover:border-[#D4AF37]/50 transition-all duration-500 hover:shadow-[0_20px_50px_-15px_rgba(245,197,66,0.4)] overflow-hidden h-full">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,rgba(245,197,66,0.15),transparent_70%)] transition-opacity" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 border border-[#D4AF37]/30 flex items-center justify-center mb-4 group-hover:rotate-6 group-hover:scale-110 transition-transform duration-500">
                    <it.icon className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-white font-medium text-[15px] leading-snug">{it.title}</h3>
                  <p className="text-white/55 text-xs mt-1.5">{it.desc}</p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Amenities;
