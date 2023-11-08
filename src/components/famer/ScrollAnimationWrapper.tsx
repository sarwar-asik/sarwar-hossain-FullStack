import { motion } from "framer-motion";
import React from "react";

export default function ScrollAnimationWrapper({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  // Include other props with their respective types
}) {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
