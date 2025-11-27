import React from 'react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4 text-slate-600 text-sm">
        <div className="flex items-center gap-2">
            <Logo className="w-6 h-6 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
            <p>© 2025 SYS Studios. All rights reserved.</p>
        </div>
        <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};