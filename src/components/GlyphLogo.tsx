import React from 'react';

interface GlyphLogoProps {
  size?: number;
  className?: string;
  glow?: boolean;
}

export const GlyphLogo: React.FC<GlyphLogoProps> = ({ size = 28, className = '', glow = false }) => {
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      {glow && (
        <div className="absolute inset-0 rounded-lg bg-cyan-500/30 blur-md animate-pulse pointer-events-none" />
      )}
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10"
      >
        {/* Outer Hexagonal Compiler Boundary */}
        <path
          d="M20 3L35 11.5V28.5L20 37L5 28.5V11.5L20 3Z"
          stroke="url(#glyph-grad-border)"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Left Compiler Angle Bracket '<' */}
        <path
          d="M14 15L9 20L14 25"
          stroke="#06b6d4"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Right Compiler Angle Bracket '>' */}
        <path
          d="M26 15L31 20L26 25"
          stroke="#10b981"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Center Compiler Core Slash / Node Interchange */}
        <path
          d="M22 13L18 27"
          stroke="#f97316"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Center AST Glowing Node Points */}
        <circle cx="20" cy="20" r="2" fill="#38bdf8" />
        <circle cx="12" cy="12" r="1.5" fill="#10b981" />
        <circle cx="28" cy="28" r="1.5" fill="#f97316" />

        {/* Gradients */}
        <defs>
          <linearGradient id="glyph-grad-border" x1="5" y1="3" x2="35" y2="37" gradientUnits="userSpaceOnUse">
            <stop stopColor="#06b6d4" />
            <stop offset="0.5" stopColor="#10b981" />
            <stop offset="1" stopColor="#f97316" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
