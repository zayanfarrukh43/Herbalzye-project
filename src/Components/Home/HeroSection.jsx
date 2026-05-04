// import heroImg from '../../assets/m1.png';

const HeroSection = () => {
  return (
    <section className="bg-[#f8f5ee] px-4 py-8">
      <div className="flex flex-col gap-6">
      <div className="flex flex-col items-center justify-center text-center px-4 py-8">

  <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1f2f1f] leading-tight mb-4 max-w-2xl">
    Nature’s Power for Modern Wellness
  </h2>

  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 max-w-xl">
    Pure herbal remedies crafted with nature’s finest ingredients.
    Experience holistic health with HERBALYZE.
  </p>

  <div className="flex flex-col sm:flex-row items-center gap-4">

    <button className="bg-[#355e3b] text-white py-3 px-6 rounded-xl font-medium w-full sm:w-[170px] transition hover:opacity-90">
      Shop Now
    </button>

    <button className="bg-[#355e3b] text-white py-3 px-6 rounded-xl font-medium w-full sm:w-[175px] transition hover:opacity-90">
      Explore Products
    </button>

  </div>
</div>
        <div>
          {/* <img
            src={heroImg}
            alt="Herbal Wellness"
            className="rounded-3xl w-full object-cover"
          /> */}clr
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