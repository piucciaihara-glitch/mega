import React, { useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CouponList } from './components/CouponList';
import { Products } from './components/Products';
import { Reviews } from './components/Reviews';
import { StickyFooter } from './components/StickyFooter';
import { GOOGLE_FORM_URL } from './constants';

function App() {
  // Fake notification toast logic (Console only for now, but UI ready)
  useEffect(() => {
    const names = ["Marcos", "Leticia", "Vanessa", "Rodrigo", "Felipe"];
    const interval = setInterval(() => {
      const name = names[Math.floor(Math.random() * names.length)];
      console.log(`[Social Proof] ${name} resgatou um cupom de 90% agora!`);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col pb-24 md:pb-0 font-sans antialiased">
      <Header />
      
      <main className="flex-1 w-full max-w-4xl mx-auto bg-white shadow-2xl min-h-screen">
        <Hero />
        
        {/* Real-time Counter Section */}
        <div className="bg-red-50 p-3 mx-4 mt-6 rounded-xl border border-red-100 flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-3">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
              </div>
              <p className="text-xs text-red-800 font-semibold uppercase tracking-tight">
                Acesso em Tempo Real
              </p>
            </div>
            <p className="text-xs text-red-900 font-bold bg-white px-2 py-1 rounded-lg border border-red-200">
                <span className="text-red-600">847</span> usuários ativos
            </p>
        </div>

        <CouponList />
        
        <div className="px-4 py-2">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent w-full"></div>
        </div>

        <Products />
        <Reviews />
        
        {/* Official Brand Badges */}
        <section className="py-12 px-4 bg-gray-50 border-t border-gray-100 text-center">
            <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-6">Rede de Vantagens Homologada</h4>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-40 grayscale contrast-125">
                <div className="text-xl font-black text-gray-700">Shopee</div>
                <div className="text-xl font-black text-gray-700 italic">amazon</div>
                <div className="text-xl font-black text-gray-700">SHEIN</div>
                <div className="text-xl font-black text-gray-700 uppercase">Mercado Livre</div>
            </div>
            <div className="mt-10 max-w-xs mx-auto">
              <p className="text-[9px] text-gray-400 leading-relaxed uppercase font-medium">
                © 2025 Mega Varejo Rewards Brasil. <br/>
                Certificação de Segurança Digital SSL Ativa. <br/>
                As promoções são de responsabilidade dos anunciantes parceiros.
              </p>
            </div>
        </section>
      </main>

      <StickyFooter />
    </div>
  );
}

export default App;