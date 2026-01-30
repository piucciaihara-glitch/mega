import React from 'react';
import { GOOGLE_FORM_URL, FAKE_PRODUCTS } from '../constants';
import { Star, ShoppingBag, TrendingUp } from 'lucide-react';

export const Products: React.FC = () => {
  return (
    <section className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-red-600" />
            <h3 className="text-gray-900 font-black text-xl uppercase tracking-tight">Mais Desejados</h3>
          </div>
          <span className="text-xs font-bold text-orange-600 bg-orange-50 px-3 py-1 rounded-full border border-orange-100">
            LIQUIDAÇÃO
          </span>
        </div>

        <div className="flex flex-col gap-4">
          {FAKE_PRODUCTS.map((product) => (
            <a 
              key={product.id}
              href={GOOGLE_FORM_URL}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 flex group h-36 sm:h-44"
            >
              {/* Image Section */}
              <div className="relative w-32 sm:w-44 h-full flex-shrink-0">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-2 left-2 bg-yellow-400 text-red-900 font-black text-[10px] px-2 py-1 rounded-lg shadow-lg z-10 border border-white">
                  {product.discount}
                </div>
              </div>
              
              {/* Content Section */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-sm sm:text-lg font-bold text-gray-800 line-clamp-2 leading-tight mb-2">
                    {product.name}
                  </h4>
                  <div className="flex items-center gap-1.5">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-[10px] font-bold text-gray-400">(2.4k vendidos)</span>
                  </div>
                </div>
                
                <div className="flex items-end justify-between">
                  <div className="space-y-1">
                    <p className="text-xs text-gray-400 line-through font-medium">{product.oldPrice}</p>
                    <div className="flex items-center gap-2">
                      <p className="text-2xl font-black text-red-600 tracking-tighter">{product.price}</p>
                      <span className="text-[9px] bg-red-600 text-white px-1.5 py-0.5 rounded font-black">PIX</span>
                    </div>
                  </div>
                  
                  <div className="bg-gray-900 group-hover:bg-red-600 text-white p-3 rounded-xl shadow-lg transition-colors flex items-center justify-center">
                     <ShoppingBag className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};