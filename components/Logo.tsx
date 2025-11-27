import React from 'react';

export const Logo = ({ className = "w-10 h-10" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0ea5e9" /> {/* Brand 500 */}
        <stop offset="100%" stopColor="#8b5cf6" /> {/* Accent 500 */}
      </linearGradient>
      <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="5" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>
    
    <path 
      d="M30 35 C 30 20, 70 20, 70 35 C 70 50, 30 50, 30 65 C 30 80, 70 80, 70 65" 
      stroke="url(#logoGradient)" 
      strokeWidth="12" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      filter="url(#glow)"
    />
    <rect x="15" y="15" width="70" height="70" rx="20" stroke="white" strokeWidth="2" strokeOpacity="0.1" />
  </svg>
);