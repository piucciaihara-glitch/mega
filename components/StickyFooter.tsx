
import React from 'react';
import { GOOGLE_FORM_URL } from '../constants';
import { ArrowRight } from 'lucide-react';

export const StickyFooter: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] p-3 z-50 md:hidden">
      <a 
        href={GOOGLE_FORM_URL}
        className="block w-full bg-red-600 text-white font-bold text-center py-3 rounded-lg shadow-lg flex items-center justify-center gap-2 animate-pulse-fast"
      >
        QUERO MEU CUPOM
        <ArrowRight className="w-5 h-5" />
      </a>
    </div>
  );
};