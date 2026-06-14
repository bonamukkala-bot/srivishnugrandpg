import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarIcon, Send, MessageSquare } from "lucide-react";
import { format } from "date-fns";
import { toast } from "sonner";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CONTACT } from "@/lib/assets";
import { staggerParent, fadeInUp } from "@/lib/motion";

export function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [roomPreference, setRoomPreference] = useState("");
  const [moveInDate, setMoveInDate] = useState<Date | undefined>(undefined);
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validations
    if (!name.trim()) {
      toast.error("Please enter your name");
      return;
    }
    if (!phone.trim()) {
      toast.error("Please enter your phone number");
      return;
    }
    if (!roomPreference) {
      toast.error("Please select a room sharing preference");
      return;
    }
    if (!moveInDate) {
      toast.error("Please select your preferred move-in date");
      return;
    }

    const formattedDate = format(moveInDate, "PPP");
    const waText = `Hi, I'm interested in a room at Sri Vishnu Grand.
Name: ${name}
Phone: ${phone}
Room Preference: ${roomPreference}
Move-in Date: ${formattedDate}
Message: ${message ? message : "N/A"}`;

    const whatsappUrl = `https://wa.me/${CONTACT.phone1.replace("+", "")}?text=${encodeURIComponent(waText)}`;
    
    toast.success("Redirecting to WhatsApp...");
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 1000);
  };

  return (
    <section id="contact" className="relative py-24 bg-[#050e23] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center_bottom,rgba(245,197,66,0.06),transparent_60%)]" />
      <div className="relative max-w-4xl mx-auto px-6">
        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12"
        >
          <motion.div variants={fadeInUp} className="text-xs tracking-[0.35em] uppercase text-[#D4AF37] mb-3">
            Get in Touch
          </motion.div>
          <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-5xl text-white">
            Enquire <span className="text-gold-gradient italic">Now</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-4 text-white/60 text-sm max-w-xl mx-auto">
            Fill out the details below to instantly format a WhatsApp inquiry message and check room availability.
          </motion.p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="glass rounded-3xl p-6 md:p-10 border border-white/10 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.6)] bg-white/[0.01]"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name field */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white/80 text-xs uppercase tracking-wider font-semibold">
                  Name <span className="text-[#D4AF37]">*</span>
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-white/[0.02] border-white/15 text-white placeholder:text-white/30 focus-visible:ring-[#D4AF37] rounded-xl h-11"
                  required
                />
              </div>

              {/* Phone field */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-white/80 text-xs uppercase tracking-wider font-semibold">
                  Phone Number <span className="text-[#D4AF37]">*</span>
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="e.g. +91 98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="bg-white/[0.02] border-white/15 text-white placeholder:text-white/30 focus-visible:ring-[#D4AF37] rounded-xl h-11"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Room preference dropdown */}
              <div className="space-y-2">
                <Label className="text-white/80 text-xs uppercase tracking-wider font-semibold">
                  Room Preference <span className="text-[#D4AF37]">*</span>
                </Label>
                <Select value={roomPreference} onValueChange={setRoomPreference}>
                  <SelectTrigger className="bg-[#050e23] border-white/15 text-white focus:ring-[#D4AF37] rounded-xl h-11">
                    <SelectValue placeholder="Select room type" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#0a1a3a] border-white/10 text-white rounded-xl">
                    <SelectItem value="Two Sharing">Two Sharing (₹12,000/mo)</SelectItem>
                    <SelectItem value="Three Sharing">Three Sharing (₹9,000/mo)</SelectItem>
                    <SelectItem value="Four Sharing">Four Sharing (₹7,700/mo)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Move-in Date Picker */}
              <div className="space-y-2 flex flex-col">
                <Label className="text-white/80 text-xs uppercase tracking-wider font-semibold mb-1">
                  Preferred Move-in Date <span className="text-[#D4AF37]">*</span>
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={`justify-start text-left font-normal bg-white/[0.02] border-white/15 hover:bg-white/5 hover:text-white text-white rounded-xl h-11 ${
                        !moveInDate && "text-white/30"
                      }`}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4 text-[#D4AF37]" />
                      {moveInDate ? format(moveInDate, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-transparent border-0" align="start">
                    <Calendar
                      mode="single"
                      selected={moveInDate}
                      onSelect={setMoveInDate}
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            {/* Optional message textarea */}
            <div className="space-y-2">
              <Label htmlFor="message" className="text-white/80 text-xs uppercase tracking-wider font-semibold">
                Message / Custom Requests <span className="text-white/40">(Optional)</span>
              </Label>
              <Textarea
                id="message"
                placeholder="Ask about AC availability, guest policies, or custom requirements..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="bg-white/[0.02] border-white/15 text-white placeholder:text-white/30 focus-visible:ring-[#D4AF37] rounded-xl min-h-[100px]"
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-[#D4AF37] to-[#B8941F] hover:from-[#B8941F] hover:to-[#D4AF37] text-[#0a1a3a] font-semibold tracking-wide py-3 rounded-full text-sm shadow-[0_12px_30px_rgba(212,175,55,0.4)] flex items-center justify-center gap-2 transition-all duration-300"
            >
              <MessageSquare className="w-4 h-4" /> Send Enquiry via WhatsApp <Send className="w-4 h-4" />
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactForm;
