"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HashLoader } from "react-spinners";
import { useAccentColor } from "@/hooks/useAccentColor";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const accentColor = useAccentColor();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          <HashLoader color={accentColor} size={50} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
