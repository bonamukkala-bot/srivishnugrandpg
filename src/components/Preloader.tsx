import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { logo } from "@/lib/assets";

const SESSION_KEY = "hasVisited";
const DISPLAY_MS = 1400;

export function Preloader() {
  const [visible, setVisible] = useState(
    () => typeof window !== "undefined" && sessionStorage.getItem(SESSION_KEY) !== "true",
  );

  useEffect(() => {
    if (!visible) return;

    const timer = window.setTimeout(() => {
      sessionStorage.setItem(SESSION_KEY, "true");
      setVisible(false);
    }, DISPLAY_MS);

    return () => window.clearTimeout(timer);
  }, [visible]);

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050e23]"
        >
          <motion.img
            src={logo}
            alt="Sri Vishnu Grand Men's Hostel"
            initial={{ opacity: 0, scale: 0.82 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.08 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="h-24 w-24 rounded-full object-cover drop-shadow-[0_0_30px_rgba(245,197,66,0.45)]"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Preloader;
