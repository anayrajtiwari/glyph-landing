import React from 'react';

export const BackgroundCircuit: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-30">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="laserGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#10b981" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#f97316" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Diagonal Memory Bus Wave Traces */}
        <path d="M-100 200 Q 400 100 800 500 T 1800 900" fill="none" stroke="url(#laserGrad1)" strokeWidth="1.5" strokeDasharray="6,12" />
        <path d="M-200 600 Q 300 800 900 400 T 2000 1200" fill="none" stroke="url(#laserGrad1)" strokeWidth="1" strokeDasharray="4,10" />

        {/* Compiler AST Node Connection Rings */}
        <circle cx="15%" cy="25%" r="180" fill="none" stroke="#06b6d4" strokeWidth="1" strokeOpacity="0.08" />
        <circle cx="85%" cy="65%" r="220" fill="none" stroke="#f97316" strokeWidth="1" strokeOpacity="0.08" />
        <circle cx="50%" cy="85%" r="150" fill="none" stroke="#10b981" strokeWidth="1" strokeOpacity="0.08" />

        {/* Floating Compiler Memory Nodes */}
        <circle cx="15%" cy="25%" r="4" fill="#06b6d4" fillOpacity="0.4" />
        <circle cx="85%" cy="65%" r="4" fill="#f97316" fillOpacity="0.4" />
        <circle cx="50%" cy="85%" r="4" fill="#10b981" fillOpacity="0.4" />
      </svg>
    </div>
  );
};
