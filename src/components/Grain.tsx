"use client";
import React from "react";

/**
 * Subtle film-grain/noise overlay for dark surfaces — the texture visible
 * on iamabhinav.me's dark cards and massive-type sections. Pure CSS/SVG,
 * no image asset needed. Parent must be `relative` (and usually
 * `overflow-hidden` to keep it clipped to rounded corners).
 */
export default function Grain({
  opacity = 0.06,
  className = "absolute",
}: {
  opacity?: number;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none inset-0 ${className}`}
      style={{
        opacity,
        mixBlendMode: "overlay",
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
      }}
    />
  );
}
