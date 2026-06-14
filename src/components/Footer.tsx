import { motion } from "framer-motion";
import { Phone, MapPin, MessageCircle, Mail } from "lucide-react";
import { CONTACT, assets } from "@/lib/assets";
import { staggerParent, fadeInUp } from "@/lib/motion";
export function Footer() {
  return (
    <footer id="footer" className="relative bg-gradient-to-b from-[#0a1a3a] to-[#020714] pt-24 pb-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,197,66,0.1),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        {/* CTA bar */}
        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="glass-dark rounded-3xl p-8 md:p-12 grid md:grid-cols-3 gap-6 items-center border border-[#D4AF37]/20 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)]"
        >
          <motion.a variants={fadeInUp} href={`tel:${CONTACT.phone1}`} className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center group-hover:bg-[#D4AF37]/30 transition-colors">
              <Phone className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <div>
              <div className="text-white/55 text-xs uppercase tracking-widest">Call</div>
              <div className="text-white font-display text-lg">{CONTACT.phoneDisplay}</div>
            </div>
          </motion.a>
          <motion.a variants={fadeInUp} href={CONTACT.mapsQuery} target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center group-hover:bg-[#D4AF37]/30 transition-colors">
              <MapPin className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <div>
              <div className="text-white/55 text-xs uppercase tracking-widest">Visit</div>
              <div className="text-white text-sm">Rajiv Nagar Colony Rd, Gachibowli 500032</div>
            </div>
          </motion.a>
          <motion.a
            variants={fadeInUp}
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B8941F] text-[#0a1a3a] font-semibold animate-gold-pulse hover:scale-105 transition-transform"
          >
            <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
          </motion.a>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={assets.logo} alt="Sri Vishnu Grand Men's Hostel" className="h-10 w-10 rounded-full object-cover" />
              <div className="font-display text-lg text-gold-gradient">Sri Vishnu Grand</div>
            </div>
            <p className="text-white/55 text-sm leading-relaxed">Exclusive Men's Hostel · PG · Guest House. An elite residence for IT professionals, executives & serious students in Gachibowli.</p>
          </div>
          <div>
            <div className="text-white font-medium mb-4">Reach Us</div>
            <ul className="space-y-3 text-white/65 text-sm">
              <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-[#D4AF37]" />{CONTACT.phoneDisplay}</li>
              <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-[#D4AF37]" />{CONTACT.phoneDisplay2}</li>
              <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-[#D4AF37]" />srivishnugrand@hostel.in</li>
              <li className="flex items-start gap-2"><MapPin className="w-4 h-4 text-[#D4AF37] mt-0.5" />{CONTACT.address}</li>
            </ul>
          </div>
          <div>
            <div className="text-white font-medium mb-4">Quick Links</div>
            <ul className="space-y-2 text-white/65 text-sm">
              {["Amenities", "Rooms", "Location", "Reviews"].map((l) => (
                <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-[#D4AF37]">{l}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 text-center text-white/40 text-xs">
          © {new Date().getFullYear()} Sri Vishnu Grand. Crafted with care in Hyderabad.
        </div>
      </div>
    </footer>
  );
}

export function WhatsAppFloat() {
  return (
    <motion.a
      href={CONTACT.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="hidden md:flex fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25d366] items-center justify-center shadow-[0_15px_40px_-5px_rgba(34,197,94,0.6)] animate-whatsapp-pulse"
    >
      <motion.span
        aria-hidden
        className="absolute inset-0 rounded-full border-2 border-[#25d366]"
        animate={{ scale: [1, 1.5], opacity: [0.6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
      />
      <svg viewBox="0 0 32 32" className="relative w-7 h-7 fill-white">
        <path d="M16.001 3C9.373 3 4 8.373 4 15c0 2.385.703 4.605 1.911 6.473L4 29l7.74-1.881A11.94 11.94 0 0016 27c6.627 0 12-5.373 12-12S22.627 3 16.001 3zm0 21.6c-1.886 0-3.65-.525-5.16-1.438l-.37-.221-4.59 1.116 1.13-4.47-.241-.387A9.555 9.555 0 016.4 15c0-5.293 4.308-9.6 9.601-9.6 5.293 0 9.6 4.307 9.6 9.6s-4.307 9.6-9.6 9.6zm5.443-7.21c-.298-.15-1.764-.87-2.037-.97-.273-.099-.472-.149-.671.15-.198.298-.77.97-.942 1.168-.174.198-.347.223-.645.074-.298-.149-1.258-.464-2.396-1.478-.886-.79-1.484-1.766-1.658-2.064-.173-.298-.018-.46.13-.608.134-.133.298-.347.447-.52.149-.174.198-.298.298-.496.099-.198.05-.372-.025-.521-.075-.149-.671-1.616-.92-2.213-.242-.581-.487-.502-.671-.511l-.571-.01c-.198 0-.521.074-.795.372-.273.298-1.043 1.02-1.043 2.487 0 1.466 1.067 2.882 1.215 3.08.149.198 2.097 3.2 5.077 4.487.71.306 1.262.489 1.693.626.711.226 1.357.194 1.868.118.57-.085 1.764-.72 2.014-1.416.249-.695.249-1.29.174-1.416-.074-.124-.273-.198-.571-.347z" />
      </svg>
    </motion.a>
  );
}
export default Footer;