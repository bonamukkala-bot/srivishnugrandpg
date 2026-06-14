import { useMotionValue, useTransform, useSpring } from "framer-motion";
import React from "react";

export function useTilt() {
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  // Rotate up to 8 degrees based on hover position within card
  const rotateX = useTransform(y, [0, 1], [8, -8]);
  const rotateY = useTransform(x, [0, 1], [-8, 8]);

  // Spring configuration for smooth transition
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const rotateXSpring = useSpring(rotateX, springConfig);
  const rotateYSpring = useSpring(rotateY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Normalize coordinates to [0, 1] range
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    x.set(mouseX / width);
    y.set(mouseY / height);
  };

  const handleMouseLeave = () => {
    // Reset back to center
    x.set(0.5);
    y.set(0.5);
  };

  return {
    rotateX: rotateXSpring,
    rotateY: rotateYSpring,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
  };
}
