import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/assets";

export function MobileActionBar() {
  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed bottom-0 inset-x-0 z-40 md:hidden glass-dark border-t border-[#D4AF37]/20 px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]"
    >
      <div className="flex gap-3 max-w-lg mx-auto">
        <a
          href={`tel:${CONTACT.phone1}`}
          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full border border-[#D4AF37]/50 text-[#D4AF37] font-semibold text-sm hover:bg-[#D4AF37]/10 transition-colors"
        >
          <Phone className="w-4 h-4" />
          Call Now
        </a>
        <a
          href={CONTACT.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B8941F] text-[#0a1a3a] font-semibold text-sm shadow-[0_8px_24px_-6px_rgba(245,197,66,0.5)]"
        >
          <MessageCircle className="w-4 h-4" />
          WhatsApp
        </a>
      </div>
    </motion.div>
  );
}

export default MobileActionBar;
