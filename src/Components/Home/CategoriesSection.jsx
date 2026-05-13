import React from 'react';
import { ShoppingCart, Star, Heart, Eye } from "lucide-react";

const products = [
  { id: 1, name: "Purifying Clay Mask", price: "$19", oldPrice: "$25", badge: "Best Seller" },
  { id: 2, name: "Natural Moisturizer", price: "$25", oldPrice: "$30", badge: "New" },
  { id: 3, name: "Rosemary Herbal Balm", price: "$20", oldPrice: "$28", badge: "" },
  { id: 4, name: "Herbal Body Cream", price: "$25", oldPrice: "$35", badge: "Sale" },
];

const CategoryCard = () => {
  return (
    <section className="w-full bg-[#fcfaf7] py-16 sm:py-24">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-[#355e3b]/10 text-[#355e3b] px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-4">
              <Star size={14} fill="currentColor" />
              Our Curated Collection
            </div>
            <h2 className="text-[#2d2a26] text-4xl sm:text-5xl font-extrabold tracking-tight">
              Best Seller <span className="text-[#355e3b]">Products</span>
            </h2>
          </div>
          <button className="text-[#355e3b] font-bold border-b-2 border-[#355e3b] pb-1 hover:text-[#d4a017] hover:border-[#d4a017] transition-all">
            View All Collection
          </button>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-[32px] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative"
            >
              {/* BADGE */}
              {product.badge && (
                <div className="absolute top-5 left-5 z-20 bg-[#355e3b] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
                  {product.badge}
                </div>
              )}

              {/* IMAGE CONTAINER */}
              <div className="relative aspect-[4/5] overflow-hidden bg-[#f3f4f1]">
                <img
                  src={product.image || "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?q=80&w=500&auto=format&fit=crop"}
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-1000 ease-in-out"
                />
                
                {/* HOVER OVERLAY ACTIONS */}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-3">
                  <button className="p-3 bg-white rounded-full text-slate-800 hover:bg-[#355e3b] hover:text-white transition-all shadow-xl">
                    <Heart size={20} />
                  </button>
                  <button className="p-3 bg-white rounded-full text-slate-800 hover:bg-[#355e3b] hover:text-white transition-all shadow-xl">
                    <Eye size={20} />
                  </button>
                </div>
              </div>

              {/* TEXT CONTENT */}
              <div className="p-7 text-center">
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-2 font-medium">Skincare</p>
                <h3 className="text-xl font-bold text-[#2d2a26] mb-3 group-hover:text-[#355e3b] transition-colors">
                  {product.name}
                </h3>

                <div className="flex items-center justify-center gap-3 mb-6">
                  <span className="text-2xl font-black text-[#355e3b]">{product.price}</span>
                  <span className="text-sm text-gray-400 line-through font-medium">{product.oldPrice}</span>
                </div>

                <button className="w-full relative overflow-hidden group/btn bg-transparent border-2 border-[#355e3b] text-[#355e3b] py-3.5 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all duration-300 hover:text-white cursor-pointer">
                  {/* BUTTON FILL ANIMATION */}
                  <div className="absolute inset-0 w-0 group-hover/btn:w-full bg-[#355e3b] transition-all duration-300 -z-10" />
                  <ShoppingCart size={18} className="group-hover/btn:rotate-12 transition-transform" />
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryCard;