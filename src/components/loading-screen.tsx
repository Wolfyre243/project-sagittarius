"use client";

import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 0, y: -100 }}
      transition={{ duration: 3, ease: 'easeOut' }}
      className="absolute w-full h-screen top-0 z-50 flex items-center justify-center bg-background"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          repeat: Infinity, 
          duration: 1, 
          repeatType: "reverse" 
        }}
        className="text-4xl font-bold"
      >
        Compiling profile...
      </motion.div>
    </motion.div>
  );
}