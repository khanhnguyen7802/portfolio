"use client";

import { useState, useEffect } from "react";

export function useAccentColor(fallback = "#1f19b3") {
  const [color, setColor] = useState(fallback);

  useEffect(() => {
    const hsl = getComputedStyle(document.documentElement)
      .getPropertyValue("--accent")
      .trim();
    if (hsl) setColor(`hsl(${hsl})`);
  }, []);

  return color;
}
