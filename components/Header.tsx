import React from 'react';
import { ShoppingCart, Search, Menu, Bell } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-md">
      {/* Top Banner */}
      <div className="bg-black/20 text-xs text-center py-1 px-2 font-medium">
        🎉 APP EXCLUSIVO: Responda e ganhe 90% OFF agora!
      </div>

      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Logo Section */}
          <div className="flex items-center gap-2">
            <Menu className="w-6 h-6 md:hidden" />
            <div className="font-black text-xl md:text-2xl italic tracking-tighter flex items-center">
              <span className="text-yellow-300 mr-1">MEGA</span>OFERTAS
            </div>
          </div>

          {/* Search Bar (Fake) */}
          <div className="flex-1 max-w-xl hidden md:flex relative">
            <input 
              type="text" 
              placeholder="Buscar ofertas, cupons..." 
              className="w-full py-2 px-4 rounded-md text-gray-800 focus:outline-none"
              readOnly
            />
            <button className="absolute right-0 top-0 h-full bg-orange-700 px-4 rounded-r-md">
              <Search className="w-5 h-5" />
            </button>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <Bell className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 bg-yellow-400 text-red-600 text-[10px] font-bold px-1 rounded-full">9+</span>
            </div>
            <div className="relative">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 bg-yellow-400 text-red-600 text-[10px] font-bold px-1 rounded-full">2</span>
            </div>
          </div>
        </div>
        
        {/* Mobile Search - Visible only on mobile */}
        <div className="mt-3 md:hidden relative">
          <input 
            type="text" 
            placeholder="Pesquisar cupons..." 
            className="w-full py-2 pl-3 pr-10 rounded-sm text-sm text-gray-800 focus:outline-none shadow-inner"
            readOnly
          />
          <Search className="w-4 h-4 text-orange-500 absolute right-3 top-2.5" />
        </div>
      </div>
    </header>
  );
};