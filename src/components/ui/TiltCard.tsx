import { motion } from "framer-motion";
import React from "react";
import { useTilt } from "@/hooks/use-tilt";

interface TiltCardProps extends React.ComponentPropsWithoutRef<typeof motion.div> {
  children: React.ReactNode;
  className?: string;
}

export function TiltCard({ children, className, ...props }: TiltCardProps) {
  const { rotateX, rotateY, onMouseMove, onMouseLeave } = useTilt();

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      whileHover={{ scale: 1.03 }}
      className={className}
      {...props}
    >
      <div style={{ transform: "translateZ(15px)", height: "100%", width: "100%" }}>
        {children}
      </div>
    </motion.div>
  );
}

export default TiltCard;
