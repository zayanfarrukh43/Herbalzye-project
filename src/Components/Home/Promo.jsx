const PromoBanner = () => {
  return (
    <section className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 py-6 bg-white">
      <div className="bg-[#355e3b] rounded-2xl sm:rounded-3xl text-white px-4 sm:px-8 md:px-12 py-8 sm:py-10 md:py-12 text-center shadow-md">
        
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-3 leading-snug">
          Get 20% OFF Your First Order
        </h2>

        <p className="mb-5 text-base sm:text-lg md:text-xl">
          Use Code:{" "}
          <span className="font-bold bg-white text-[#355e3b] px-3 py-1 rounded-lg inline-block mt-2 sm:mt-0">
            HERB20
          </span>
        </p>

        <button className="bg-white text-[#355e3b] px-6 sm:px-8 py-3 rounded-xl font-bold text-sm sm:text-base md:text-lg hover:scale-105 transition-transform duration-300">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default PromoBanner;