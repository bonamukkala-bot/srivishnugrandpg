import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { staggerParent, fadeInUp } from "@/lib/motion";

const faqs = [
  {
    q: "What meals are included?",
    a: "We serve fresh South & North Indian breakfast, lunch, and dinner daily. Meals are prepared in our hygienic kitchen and served in the marble dining hall. Special dietary requests can be discussed with management.",
  },
  {
    q: "What are the visiting hours for guests?",
    a: "Guests are welcome between 8:00 AM and 9:00 PM on all days. Overnight guest stays require prior approval from management. Please carry a valid photo ID when visiting.",
  },
  {
    q: "Is there a security deposit?",
    a: "Yes, a refundable security deposit is collected at the time of move-in. The amount varies by room type and is returned after notice period completion, subject to property inspection.",
  },
  {
    q: "How is the Wi-Fi connectivity?",
    a: "High-speed fiber Wi-Fi is available throughout the premises with 24×7 uptime. Each resident receives dedicated credentials suitable for work-from-home and video calls.",
  },
  {
    q: "Are washing machines available?",
    a: "Washing machines are available on-premises for self-service use. Residents can also use the washing area during designated hours.",
  },
  {
    q: "What ID proof is required for admission?",
    a: "A valid government photo ID (Aadhaar, PAN, or Passport) and a recent passport-size photograph are mandatory. Working professionals may also be asked for a company ID or offer letter.",
  },
  {
    q: "What is the notice period for vacating?",
    a: "A minimum notice period of 15 days is required before vacating. Early exit terms may apply if notice is not served — please confirm current policy with management at the time of booking.",
  },
  {
    q: "Is the property safe for valuables and laptops?",
    a: "Yes. 24×7 CCTV surveillance, personal lockers, and controlled entry ensure your belongings stay secure. Management maintains a polite, watchful presence on-premises.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="relative py-28 bg-[#0a1a3a]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,197,66,0.05),transparent_65%)]" />
      <div className="relative max-w-3xl mx-auto px-6">
        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12"
        >
          <motion.div variants={fadeInUp} className="text-xs tracking-[0.35em] uppercase text-[#D4AF37] mb-3">
            Common Questions
          </motion.div>
          <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-5xl text-white">
            Frequently Asked <span className="text-gold-gradient italic">Questions</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-4 text-white/60 text-sm">
            Everything you need to know before booking your stay.
          </motion.p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Accordion type="single" collapsible className="glass rounded-2xl px-6 border border-white/10">
            {faqs.map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-white/10">
                <AccordionTrigger className="text-white text-left hover:text-[#D4AF37] hover:no-underline font-medium">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-white/65 leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}

export default FAQ;
