import { motion } from "framer-motion";
import { MapPin, Train, Briefcase, GraduationCap } from "lucide-react";
import { CONTACT } from "@/lib/assets";
import { staggerParent, fadeInUp } from "@/lib/motion";
const places = [
  { icon: Train, name: "Raidurg Metro Station", dist: "5 min", category: "Transit" },
  { icon: Briefcase, name: "Microsoft Hyderabad", dist: "8 min", category: "Workplace" },
  { icon: Briefcase, name: "Google Hyderabad", dist: "10 min", category: "Workplace" },
  { icon: GraduationCap, name: "Indian School of Business (ISB)", dist: "9 min", category: "Education" },
  { icon: Briefcase, name: "TCS Synergy Park", dist: "12 min", category: "Workplace" },
  { icon: Briefcase, name: "Amazon Hyderabad", dist: "14 min", category: "Workplace" },
];

export function Location() {
  return (
    <section id="location" className="relative py-28 bg-[#050e23] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(245,197,66,0.08),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp} className="text-xs tracking-[0.35em] uppercase text-[#D4AF37] mb-3">
            Prime Location
          </motion.div>
          <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-5xl lg:text-6xl text-white">
            At the heart of <span className="text-gold-gradient italic">Gachibowli</span>
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid lg:grid-cols-5 gap-8 items-stretch"
        >
          {/* Map card */}
          <motion.div
            variants={fadeInUp}
            className="lg:col-span-3 relative rounded-3xl overflow-hidden glass h-80 md:h-96 lg:h-auto lg:min-h-[460px]"
          >
            <iframe
              title="Sri Vishnu Grand Map"
              src={CONTACT.mapsEmbed}
              width="100%"
              height="100%"
              className="absolute inset-0 w-full h-full border-0 grayscale-[30%] contrast-110 brightness-90 rounded-3xl"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#0a1a3a]/60 via-transparent to-[#D4AF37]/10" />
            <div className="absolute bottom-5 left-5 right-5 glass-dark rounded-2xl p-5 flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-[#D4AF37] flex items-center justify-center shrink-0 animate-gold-pulse">
                <MapPin className="w-5 h-5 text-[#0a1a3a]" />
              </div>
              <div>
                <div className="text-white font-display text-lg">Sri Vishnu Grand</div>
                <div className="text-white/65 text-sm">{CONTACT.address}</div>              </div>
            </div>
          </motion.div>

          {/* Distances */}
          <motion.div
            variants={staggerParent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-2 space-y-3"
          >
            {places.map((p, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ x: 6 }}
                className="group glass rounded-2xl p-5 flex items-center gap-4 hover:border-[#D4AF37]/40 transition-colors"
              >
                <div className="w-11 h-11 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center group-hover:bg-[#D4AF37]/25 transition-colors">
                  <p.icon className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div className="flex-1">
                  <div className="text-white text-sm font-medium">{p.name}</div>
                  <div className="text-white/50 text-xs">{p.category}</div>
                </div>
                <div className="text-[#D4AF37] font-display text-lg">{p.dist}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
export default Location;