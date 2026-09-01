import React from 'react';

export const BackgroundCircuit: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-20 transform-gpu">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="laserGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#f97316" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        <path d="M-100 200 Q 400 100 800 500 T 1800 900" fill="none" stroke="url(#laserGrad1)" strokeWidth="1" strokeDasharray="6,12" />
        <circle cx="15%" cy="25%" r="140" fill="none" stroke="#06b6d4" strokeWidth="1" strokeOpacity="0.06" />
        <circle cx="85%" cy="65%" r="180" fill="none" stroke="#f97316" strokeWidth="1" strokeOpacity="0.06" />
      </svg>
    </div>
  );
};
