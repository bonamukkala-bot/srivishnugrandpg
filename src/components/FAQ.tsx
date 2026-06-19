import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { staggerParent, fadeInUp } from "@/lib/motion";
import { faqs } from "@/data/faqData";
import { FAQSchema } from "@/components/FAQSchema";

export function FAQ() {
  return (
    <>
      <FAQSchema />
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
                  <AccordionTrigger className="faq-question text-white text-left hover:text-[#D4AF37] hover:no-underline font-medium">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="faq-answer text-white/65 leading-relaxed">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default FAQ;