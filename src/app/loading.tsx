"use client";

import { HashLoader } from "react-spinners";
import { useAccentColor } from "@/hooks/useAccentColor";

export default function Loading() {
  const accentColor = useAccentColor();

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <HashLoader color={accentColor} size={40} />
    </div>
  );
}
