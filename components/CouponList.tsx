
import React from 'react';
import { GOOGLE_FORM_URL } from '../constants';
import { Lock } from 'lucide-react';

const COUPONS = [
  { store: "Shopee", discount: "R$ 50,00 OFF", min: "Sem mínimo", color: "bg-orange-500" },
  { store: "Shein", discount: "90% OFF", min: "Compras acima de R$20", color: "bg-black" },
  { store: "Amazon", discount: "Frete Grátis", min: "+ R$ 100 de bônus", color: "bg-blue-900" },
  { store: "AliExpress", discount: "R$ 150,00", min: "Cupom de primeira compra", color: "bg-red-600" },
];

export const CouponList: React.FC = () => {
  return (
    <section className="py-6 container mx-auto px-4">
      <h3 className="text-gray-800 font-bold text-lg mb-4 flex items-center gap-2">
        <span className="w-1 h-6 bg-red-600 rounded-full block"></span>
        Cupons Disponíveis
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {COUPONS.map((coupon, idx) => (
          <a 
            key={idx}
            href={GOOGLE_FORM_URL}
            className="flex bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden relative cursor-pointer hover:shadow-lg transition"
          >
            {/* Left side (Logo area mimic) */}
            <div className={`${coupon.color} w-24 md:w-32 flex flex-col items-center justify-center text-white p-2 text-center`}>
              <span className="font-bold text-lg md:text-xl">{coupon.store}</span>
            </div>

            {/* Right side (Details) */}
            <div className="flex-1 p-3 md:p-4 flex flex-col justify-center">
              <div className="font-bold text-lg text-gray-800">{coupon.discount}</div>
              <div className="text-xs text-gray-500 mb-2">{coupon.min}</div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                <div className="bg-red-500 h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
              <p className="text-[10px] text-red-500 mt-1 font-semibold">85% reservado</p>
            </div>

            {/* Locked Overlay */}
            <div className="absolute inset-0 bg-white/60 backdrop-blur-[1px] flex items-center justify-center">
              <div className="bg-gray-900/90 text-white px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 shadow-lg">
                <Lock className="w-3 h-3" />
                BLOQUEADO
              </div>
            </div>
          </a>
        ))}
      </div>
      
      <div className="mt-4 text-center">
        <p className="text-xs text-gray-500">
          *Os cupons são liberados imediatamente após o preenchimento da pesquisa.
        </p>
      </div>
    </section>
  );
};