import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { photos } from "@/lib/assets";
import { staggerParent, fadeInUp, scaleIn } from "@/lib/motion";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import TiltCard from "@/components/ui/TiltCard";
import BlurImage from "@/components/ui/BlurImage";

const galleryItems = [
  { src: photos.building, label: "Property Exterior" },
  { src: photos.doubleBed, label: "Double Sharing" },
  { src: photos.twinWhite, label: "Twin Sharing" },
  { src: photos.twinBeds, label: "Shared Suite" },
  { src: photos.dining, label: "Dining Hall" },
  { src: photos.washroom, label: "Washroom" },
  { src: photos.wardrobe, label: "Wardrobe & Locker" },
  { src: photos.doors, label: "Room Entrance" },
  { src: photos.reception, label: "Lobby Branding" },
] as const;

export function Gallery() {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const goPrev = useCallback(() => {
    setActiveIndex((i) => (i - 1 + galleryItems.length) % galleryItems.length);
  }, []);

  const goNext = useCallback(() => {
    setActiveIndex((i) => (i + 1) % galleryItems.length);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, goPrev, goNext]);

  const openAt = (index: number) => {
    setActiveIndex(index);
    setOpen(true);
  };

  const active = galleryItems[activeIndex];

  return (
    <section id="gallery" className="relative py-28 bg-[#050e23]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,197,66,0.06),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-14"
        >
          <motion.div variants={fadeInUp} className="text-xs tracking-[0.35em] uppercase text-[#D4AF37] mb-3">
            Property Gallery
          </motion.div>
          <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-5xl lg:text-6xl text-white">
            A glimpse inside <span className="text-gold-gradient italic">Sri Vishnu Grand</span>
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
        >
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.label}
              variants={scaleIn}
              className="group relative aspect-[4/3]"
            >
              <TiltCard
                onClick={() => openAt(i)}
                className="w-full h-full text-left rounded-2xl overflow-hidden glass border border-white/10 hover:border-[#D4AF37]/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] cursor-pointer"
              >
                <BlurImage
                  src={item.src}
                  alt={item.label}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover cinematic group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050e23]/80 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                <span className="absolute bottom-3 left-3 right-3 text-left text-white text-xs font-medium">
                  {item.label}
                </span>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-4xl w-[95vw] p-0 overflow-hidden bg-[#0a1a3a] border-[#D4AF37]/20">
          <DialogTitle className="sr-only">{active.label}</DialogTitle>
          <div className="relative aspect-[16/10] bg-black">
            <motion.img
              key={activeIndex}
              src={active.src}
              alt={active.label}
              className="w-full h-full object-contain cursor-grab active:cursor-grabbing select-none"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.6}
              onDragEnd={(_e, info) => {
                const swipeThreshold = 50;
                if (info.offset.x < -swipeThreshold) {
                  goNext();
                } else if (info.offset.x > swipeThreshold) {
                  goPrev();
                }
              }}
            />
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass-dark flex items-center justify-center text-white hover:text-[#D4AF37] transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass-dark flex items-center justify-center text-white hover:text-[#D4AF37] transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          <div className="px-6 py-4 flex items-center justify-between">
            <p className="text-white font-medium">{active.label}</p>
            <p className="text-white/50 text-sm">
              {activeIndex + 1} / {galleryItems.length}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}

export default Gallery;
