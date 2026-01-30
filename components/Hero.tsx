import React from 'react';
import { GOOGLE_FORM_URL } from '../constants';
import { Countdown } from './Countdown';
import { Ticket, ArrowRight, Zap, ShieldCheck } from 'lucide-react';

export const Hero: React.FC = () => {
  const handleRedirect = () => {
    window.location.href = GOOGLE_FORM_URL;
  };

  return (
    <section className="relative bg-white pb-4 overflow-hidden">
      {/* Banner Graphic */}
      <div className="w-full h-56 md:h-72 bg-gradient-to-br from-orange-600 via-red-600 to-red-700 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
          <div className="animate-shake mb-3">
            <span className="bg-yellow-400 text-red-800 font-black px-4 py-1.5 text-xs md:text-sm rounded-full shadow-2xl border-2 border-white inline-flex items-center gap-1">
              <Zap className="w-3 h-3 fill-current" /> ÚLTIMA CHANCE
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-white drop-shadow-2xl mb-2 tracking-tighter italic">
            PESQUISA PREMIADA
          </h1>
          
          <p className="text-orange-100 text-sm md:text-xl font-bold max-w-md mx-auto mb-6 drop-shadow leading-tight">
            Ganhe cupons de até <span className="text-yellow-300 underline decoration-2 underline-offset-4">90% DE DESCONTO</span> respondendo apenas 3 perguntas.
          </p>
          
          <Countdown />
        </div>
      </div>

      {/* Action Card */}
      <div className="container mx-auto px-4 -mt-10 relative z-20">
        <div className="bg-white rounded-2xl shadow-2xl p-5 md:p-8 border border-orange-50 ring-4 ring-black/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="bg-orange-500 p-4 rounded-2xl shadow-inner shadow-orange-700 hidden md:block">
                <Ticket className="w-10 h-10 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <ShieldCheck className="w-4 h-4 text-green-500" />
                  <h2 className="text-xl md:text-2xl font-black text-gray-900 leading-tight">
                    Resgate Disponível
                  </h2>
                </div>
                <p className="text-gray-500 text-sm font-medium">
                  Seu perfil foi selecionado para participar. <br className="hidden md:block"/>
                  Tempo médio de resposta: <span className="text-orange-600 font-bold">45 segundos</span>.
                </p>
              </div>
            </div>
            
            <button 
              onClick={handleRedirect}
              className="w-full md:w-auto bg-gradient-to-r from-orange-500 via-red-600 to-red-700 hover:scale-105 active:scale-95 text-white font-black py-4 px-10 rounded-2xl shadow-[0_10px_20px_-5px_rgba(220,38,38,0.5)] transition-all flex items-center justify-center gap-3 animate-pulse-fast group"
            >
              <span className="text-lg">QUERO MEU DESCONTO</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};