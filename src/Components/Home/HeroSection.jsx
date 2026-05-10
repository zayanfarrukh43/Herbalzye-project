import heroImg from '../../assets/banner.png';

const HeroSection = () => {
  return (
    <section className="relative w-full bg-black">
      {/* CRITICAL CHANGE: 
         We remove all "aspect-ratio" and "h-[vh]" classes. 
         We let the <img> tag sit naturally inside a relative div.
      */}
      <div className="relative w-full h-auto">
        
        {/* THE IMAGE: 
            Using 'block w-full h-auto' ensures the image 
            scales like a normal photo without ANY cropping.
        */}
        <img 
          src={heroImg} 
          alt="Banner" 
          className="block w-full h-auto aspect-[16/13] md:aspect-[21/9]"
        />

        {/* DARK OVERLAY: 
            By using 'absolute inset-0', it will always 
            match the exact size of the image above.
        */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* CONTENT CONTAINER */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="px-6 max-w-4xl text-center">
            
            <h2 className="text-[18px] xs:text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-2 md:mb-6 drop-shadow-md">
              Nature’s Power for <br className="block sm:hidden" /> Modern Wellness
            </h2>

            <p className="text-white/95 text-[10px] xs:text-[12px] sm:text-base md:text-lg lg:text-xl font-medium leading-relaxed mb-4 md:mb-10 max-w-[260px] xs:max-w-sm sm:max-w-2xl mx-auto drop-shadow-sm">
              Pure herbal remedies crafted with nature’s finest ingredients. 
              Experience holistic health with <span className="font-bold border-b border-white/30">HERBALYZE</span>.
            </p>

            <div className="flex flex-row items-center justify-center gap-2 md:gap-5">
              <button className="bg-[#355e3b] text-white py-1.5 md:py-4 px-4 md:px-10 rounded-full text-[10px] md:text-base font-bold uppercase tracking-wider hover:bg-[#2d4f32] transition-all shadow-xl">
                Shop Now
              </button>

              <button className="bg-white text-[#355e3b] py-1.5 md:py-4 px-4 md:px-10 rounded-full text-[10px] md:text-base font-bold uppercase tracking-wider hover:bg-gray-100 transition-all shadow-xl">
                Explore
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;




// import heroImg from '../../assets/banner.png';
// const HeroSection = () => {
//   return (
//     <section className="w-full relative">
      
//       {/* Image */}
//       <div className="h-[70vh] sm:h-[80vh] md:h-[90vh]">
//         <img
//           src={heroImg}
//           alt="Pain Relief Oil"
//           className="w-full h-full object-cover"
//         />
//       </div>

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/40"></div>

//       {/* Content */}
//       <div className="absolute inset-0 flex items-center">
//         <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
          
//           <div className="max-w-full sm:max-w-lg md:max-w-xl text-white">
            
//             {/* Rating */}
//             <p className="text-xs sm:text-sm mb-2 text-green-200">
//               ★★★★☆ Trusted by 500,000+ Satisfied Customers
//             </p>

//             {/* Heading */}
//             <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 font-serif">
//               Our Most Trusted Pain Relief Oil
//             </h1>

//             {/* Description */}
//             <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-6">
//               Fast-absorbing, steroid-free formula, science-backed to ease pain naturally.
//             </p>

//             {/* Button */}
//             <button className="bg-[#355e3b] hover:bg-[#2d4d2f] px-5 sm:px-7 md:px-8 py-2.5 sm:py-3 rounded-xl font-semibold text-sm sm:text-base transition">
//               Shop Our Best-Seller
//             </button>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;