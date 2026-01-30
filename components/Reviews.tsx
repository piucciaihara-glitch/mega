
import React from 'react';
import { REVIEWS } from '../constants';
import { Star, CheckCircle } from 'lucide-react';

export const Reviews: React.FC = () => {
  return (
    <section className="bg-white py-6 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <h3 className="text-gray-800 font-bold text-lg mb-4 text-center">
          Quem já ganhou
        </h3>
        
        <div className="space-y-3">
          {REVIEWS.map((review, idx) => (
            <div key={idx} className="bg-gray-50 p-3 rounded-lg border border-gray-100">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-xs font-bold text-gray-600">
                    {review.name.charAt(0)}
                  </div>
                  <span className="text-sm font-semibold text-gray-800">{review.name}</span>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <p className="text-xs md:text-sm text-gray-600 mb-2">"{review.text}"</p>
              <div className="flex items-center gap-1 text-[10px] text-green-600">
                <CheckCircle className="w-3 h-3" />
                Compra Verificada
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};