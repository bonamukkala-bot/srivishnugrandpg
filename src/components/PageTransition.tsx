import { AnimatePresence, motion } from "framer-motion";
import { useRouterState } from "@tanstack/react-router";
import { Outlet } from "@tanstack/react-router";
import type { ReactNode } from "react";

const transition = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
  transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] as const },
};

export function AnimatedOutlet() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname} className="min-h-screen" {...transition}>
        <Outlet />
      </motion.div>
    </AnimatePresence>
  );
}

type FadeInProps = {
  children: ReactNode;
};

/** Single-page fade-in for App.tsx (no router) */
export function PageFadeIn({ children }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default AnimatedOutlet;
