import { motion } from "framer-motion";
import { Check, ShieldCheck, Utensils, Wifi, Cctv, Droplets, Lock } from "lucide-react";
import { assets, CONTACT } from "@/lib/assets";
import { staggerParent, fadeInUp, scaleIn } from "@/lib/motion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import TiltCard from "@/components/ui/TiltCard";
import BlurImage from "@/components/ui/BlurImage";

const comparisonRows = [
  {
    type: "Two Sharing",
    price: "₹12,000 / mo",
    occupancy: "2 persons · twin beds",
    amenities: "Meals, Wi-Fi, locker, wardrobe, daily housekeeping",
  },
  {
    type: "Three Sharing",
    price: "₹9,000 / mo",
    occupancy: "3 persons · curtained zones",
    amenities: "Meals, Wi-Fi, locker, study lights, washing machine",
  },
  {
    type: "Four Sharing",
    price: "₹7,700 / mo",
    occupancy: "4 persons · curtained zones",
    amenities: "Meals, Wi-Fi, locker, study lights, washing machine",
  },
];

const rooms = [
  {
    title: "2-Sharing Suite",
    tag: "Most Private",
    img: assets.doubleBed,
    features: [
      "Twin premium beds",
      "Personal wardrobe & locker",
      "Attached washroom",
      "AC available on request",
    ],
  },
  {
    title: "3-Sharing Suite",
    tag: "Most Popular",
    img: assets.twinWhite,
    features: [
      "Three private bed zones",
      "Daily housekeeping",
      "High-speed Wi-Fi",
    ],
  },
  {
    title: "4-Sharing Suite",
    tag: "Best Value",
    img: assets.twinBeds,
    features: [
      "Spacious shared room",
      "Locker for every resident",
      "All meals included",
    ],
  },
];

const proAmenities = [
  { icon: Wifi, label: "Fiber Wi-Fi" },
  { icon: Cctv, label: "247 CCTV" },
  { icon: Droplets, label: "Hot & Cold RO" },
  { icon: Lock, label: "Personal Locker" },
];

export function Rooms() {
  return (
    <section id="rooms" className="relative py-24 md:py-32 bg-gradient-to-b from-[#050e23] via-[#0a1a3a] to-[#050e23]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div>
            <motion.div variants={fadeInUp} className="text-xs tracking-[0.35em] uppercase text-[#D4AF37] mb-3">
              Sharing Models
            </motion.div>
            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-5xl lg:text-6xl text-white max-w-2xl leading-[1.05]">
              Suites tailored for the <span className="text-gold-gradient italic">discerning man</span>
            </motion.h2>
          </div>
          <motion.a
            variants={fadeInUp}
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="self-start md:self-auto px-6 py-3 rounded-full glass text-white text-sm border border-[#D4AF37]/40 hover:bg-[#D4AF37]/10 transition-colors"
          >
            Enquire Availability
          </motion.a>
        </motion.div>

        {/* Three sharing models  equal premium cards */}
        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {rooms.map((r, i) => (
            <motion.article
              key={i}
              variants={scaleIn}
              className="group relative"
            >
              <TiltCard className="relative overflow-hidden rounded-2xl glass border border-white/10 hover:border-[#D4AF37]/50 hover:shadow-[0_30px_70px_-25px_rgba(212,175,55,0.45)] transition-all duration-500">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <BlurImage
                    src={r.img}
                    alt={r.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover cinematic group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050e23]/80 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#D4AF37]/95 text-[#0a1a3a] text-[10px] font-semibold tracking-wider uppercase">
                    {r.tag}
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="font-display text-2xl text-white">{r.title}</h3>
                  <div className="mt-2">
                    <span className="text-[#D4AF37] text-sm tracking-wider uppercase">Pricing Available on Request</span>
                  </div>
                  <ul className="mt-5 space-y-2.5">
                    {r.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-sm text-white/75">
                        <Check className="w-4 h-4 text-[#D4AF37]" strokeWidth={2} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={CONTACT.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex w-full justify-center items-center gap-2 px-5 py-3 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/50 text-[#D4AF37] text-sm font-medium hover:bg-[#D4AF37] hover:text-[#0a1a3a] transition-colors"
                  >
                    Reserve This Suite
                  </a>
                </div>
              </TiltCard>
            </motion.article>
          ))}
        </motion.div>

        {/* Room comparison table */}
        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-16"
        >
          <motion.div variants={fadeInUp} className="text-center mb-8">
            <div className="text-xs tracking-[0.35em] uppercase text-[#D4AF37] mb-3">Compare Suites</div>
            <h3 className="font-display text-3xl md:text-4xl text-white">
              Find your <span className="text-gold-gradient italic">perfect fit</span>
            </h3>

          </motion.div>

          <motion.div variants={fadeInUp} className="glass rounded-2xl border border-white/10 overflow-hidden">
            {/* Desktop table */}
            <div className="hidden md:block overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-white/10 hover:bg-transparent">
                    <TableHead className="text-[#D4AF37] font-display">Room Type</TableHead>
                    <TableHead className="text-[#D4AF37] font-display">Monthly Rent</TableHead>
                    <TableHead className="text-[#D4AF37] font-display">Occupancy</TableHead>
                    <TableHead className="text-[#D4AF37] font-display">Amenities Included</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {comparisonRows.map((row) => (
                    <TableRow key={row.type} className="border-white/10 hover:bg-white/[0.03]">
                      <TableCell className="font-medium text-white">{row.type}</TableCell>
                      <TableCell className="text-[#D4AF37] font-semibold">{row.price}</TableCell>
                      <TableCell className="text-white/75">{row.occupancy}</TableCell>
                      <TableCell className="text-white/65 text-sm">{row.amenities}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* Mobile cards */}
            <div className="md:hidden p-4 space-y-4">
              {comparisonRows.map((row) => (
                <div key={row.type} className="glass rounded-xl p-5 border border-white/10">
                  <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-3">
                    <span className="font-display text-lg text-white font-semibold">{row.type}</span>
                    <span className="text-[#D4AF37] font-semibold text-base">{row.price}</span>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <span className="text-[10px] text-white/45 uppercase tracking-wider block">Occupancy</span>
                      <p className="text-white/80 text-sm">{row.occupancy}</p>
                    </div>
                    <div>
                      <span className="text-[10px] text-white/45 uppercase tracking-wider block">Amenities Included</span>
                      <div className="flex flex-wrap gap-1.5 mt-1">
                        {row.amenities.split(", ").map((amenity) => (
                          <span key={amenity} className="text-[11px] bg-white/5 px-2.5 py-1 rounded-lg border border-white/5 text-white/75">
                            {amenity}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bento highlight strip */}
        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-8 grid grid-cols-1 md:grid-cols-6 gap-6"
        >
          {/* Royal Marble Dining  large */}
          <motion.div
            variants={scaleIn}
            whileHover={{ scale: 1.02 }}
            className="group relative md:col-span-4 aspect-[16/9] md:aspect-auto md:min-h-[380px] rounded-2xl overflow-hidden glass hover:shadow-[0_30px_70px_-25px_rgba(212,175,55,0.35)] transition-all duration-500"
          >
            <BlurImage
              src={assets.dining}
              alt="Royal marble dining hall"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover cinematic group-hover:scale-110 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050e23] via-[#050e23]/30 to-transparent" />
            <div className="absolute bottom-0 inset-x-0 p-8">
              <div className="flex items-center gap-2 text-[#D4AF37] text-xs tracking-[0.3em] uppercase mb-3">
                <Utensils className="w-4 h-4" strokeWidth={1.5} /> The Royal Marble Dining
              </div>
              <h3 className="font-display text-3xl md:text-4xl text-white max-w-xl leading-tight">
                Hand-crafted South & North Indian meals, served thrice daily.
              </h3>
              <p className="text-white/70 mt-3 max-w-xl text-sm">
                A polished marble dining hall designed to feel like a private club  fresh, hygienic, and unhurried.
              </p>
            </div>
          </motion.div>

          {/* Security & Asset Integrity */}
          <motion.div
            variants={scaleIn}
            whileHover={{ scale: 1.02 }}
            className="group relative md:col-span-2 aspect-[4/3] md:aspect-auto md:min-h-[380px] rounded-2xl overflow-hidden glass hover:shadow-[0_30px_70px_-25px_rgba(212,175,55,0.35)] transition-all duration-500"
          >
            <BlurImage
              src={assets.wardrobe}
              alt="Personal wardrobes & lockers"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover cinematic group-hover:scale-110 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050e23] via-[#050e23]/40 to-[#050e23]/30" />
            <div className="absolute bottom-0 inset-x-0 p-7">
              <div className="flex items-center gap-2 text-[#D4AF37] text-xs tracking-[0.3em] uppercase mb-3">
                <ShieldCheck className="w-4 h-4" strokeWidth={1.5} /> Asset Integrity
              </div>
              <h3 className="font-display text-2xl text-white leading-tight">
                Your laptop, gadgets & valuables  locked, monitored, safe.
              </h3>
            </div>
          </motion.div>

          {/* Professional amenities row */}
          <motion.div
            variants={scaleIn}
            className="md:col-span-3 rounded-2xl glass p-7 flex flex-col justify-between min-h-[220px]"
          >
            <div>
              <div className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase mb-3">Professional Amenities</div>
              <h3 className="font-display text-2xl text-white leading-tight">Built for IT professionals & executives.</h3>
            </div>
            <div className="mt-6 grid grid-cols-4 gap-3">
              {proAmenities.map((a) => (
                <div key={a.label} className="flex flex-col items-center text-center gap-2 p-3 rounded-xl bg-white/[0.03] border border-white/10">
                  <a.icon className="w-5 h-5 text-[#D4AF37]" strokeWidth={1.5} />
                  <span className="text-[11px] text-white/70 leading-tight">{a.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Building / Property */}
          <motion.div
            variants={scaleIn}
            whileHover={{ scale: 1.02 }}
            className="group relative md:col-span-3 aspect-[16/10] md:aspect-auto md:min-h-[220px] rounded-2xl overflow-hidden glass hover:shadow-[0_30px_70px_-25px_rgba(212,175,55,0.35)] transition-all duration-500"
          >
            <BlurImage
              src={assets.building}
              alt="Sri Vishnu Grand property"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover cinematic group-hover:scale-110 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050e23] via-[#050e23]/40 to-transparent" />
            <div className="absolute inset-0 p-7 flex flex-col justify-center max-w-sm">
              <div className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase mb-3">The Residence</div>
              <h3 className="font-display text-2xl text-white leading-tight">A purpose-built address in the heart of Gachibowli.</h3>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
export default Rooms;