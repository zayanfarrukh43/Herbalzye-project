import { ShoppingCart, Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// IMPORT IMAGES
// import product1 from "../../assets/product1.webp";
// import product2 from "../../assets/product2.webp";
// import product3 from "../../assets/product3.webp";
// import product4 from "../../assets/product4.webp";

const products = [
  {
    id: 1,
    name: "Purifying Clay Mask",
    price: "$19",
    // image: product1,
  },
  {
    id: 2,
    name: "Natural Moisturizer",
    price: "$25",
    // image: product2,
  },
  {
    id: 3,
    name: "Rosemary Herbal Balm",
    price: "$20",
    // image: product3,
  },
  {
    id: 4,
    name: "Herbal Body Cream",
    price: "$25",
    // image: product4,
  },
];

const CategoryCard = () => {
  return (
    <section className="w-full bg-[#f8f5ee] py-16 sm:py-20 overflow-hidden">
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* TOP CONTENT */}
        <div className="text-center max-w-3xl mx-auto mb-14">

          {/* SMALL BADGE */}
          <div
            className="
              inline-flex
              items-center
              gap-2
              bg-[#355e3b]/10
              text-[#355e3b]
              px-5
              py-2
              rounded-full
              text-sm
              font-semibold
              mb-5
            "
          >
            <Star size={16} fill="currentColor" />
            Best Selling Products
          </div>

          {/* HEADING */}
          <h2
            className="
              text-[#2d2a26]
              text-4xl
              sm:text-5xl
              lg:text-6xl
              font-bold
              leading-tight
            "
          >
            Best Seller{" "}
            <span className="text-[#355e3b] relative inline-block">
              Product
              <span
                className="
                  absolute
                  left-0
                  bottom-1
                  w-full
                  h-3
                  bg-[#d4a017]/30
                  -z-10
                  rounded-full
                "
              />
            </span>
          </h2>

          {/* SUBTEXT */}
          <p
            className="
              text-gray-600
              text-sm
              sm:text-base
              lg:text-lg
              leading-8
              mt-6
            "
          >
            Discover our premium herbal essentials crafted
            with natural ingredients for healthier skin,
            wellness, and daily self-care.
          </p>
        </div>

        {/* DESKTOP GRID */}
        <div
          className="
            hidden
            md:grid
            grid-cols-2
            lg:grid-cols-4
            gap-7
          "
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="
                group
                bg-white
                rounded-[28px]
                overflow-hidden
                border
                border-[#ebe5d8]
                shadow-sm
                hover:shadow-2xl
                transition-all
                duration-500
              "
            >

              {/* IMAGE */}
              <div className="overflow-hidden relative">

                <img
                  src={product.image}
                  alt={product.name}
                  className="
                    w-full
                    h-[320px]
                    object-cover
                    group-hover:scale-110
                    transition-all
                    duration-700
                  "
                />

                {/* HOVER OVERLAY */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-black/10
                    opacity-0
                    group-hover:opacity-100
                    transition
                  "
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">

                <h3
                  className="
                    text-xl
                    font-semibold
                    text-[#2d2a26]
                    mb-2
                  "
                >
                  {product.name}
                </h3>

                <p
                  className="
                    text-3xl
                    font-bold
                    text-[#355e3b]
                    mb-5
                  "
                >
                  {product.price}
                </p>

                {/* BUTTON */}
                <button
                  className="
                    w-full
                    bg-[#355e3b]
                    hover:bg-[#2d4d2f]
                    text-white
                    py-3.5
                    rounded-full
                    font-medium
                    flex
                    items-center
                    justify-center
                    gap-2
                    transition-all
                    duration-300
                    hover:scale-[1.02]
                    cursor-pointer
                  "
                >
                  <ShoppingCart size={18} />
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* MOBILE SWIPER */}
        <div className="md:hidden">
          <Swiper
            spaceBetween={18}
            slidesPerView={1.15}
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>

                <div
                  className="
                    bg-white
                    rounded-[24px]
                    overflow-hidden
                    border
                    border-[#ebe5d8]
                    shadow-sm
                  "
                >

                  {/* IMAGE */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="
                      w-full
                      h-[300px]
                      object-cover
                    "
                  />

                  {/* CONTENT */}
                  <div className="p-5">

                    <h3
                      className="
                        text-lg
                        font-semibold
                        text-[#2d2a26]
                        mb-2
                      "
                    >
                      {product.name}
                    </h3>

                    <p
                      className="
                        text-2xl
                        font-bold
                        text-[#355e3b]
                        mb-5
                      "
                    >
                      {product.price}
                    </p>

                    <button
                      className="
                        w-full
                        bg-[#355e3b]
                        hover:bg-[#2d4d2f]
                        text-white
                        py-3
                        rounded-full
                        font-medium
                        flex
                        items-center
                        justify-center
                        gap-2
                        transition-all
                        duration-300
                      "
                    >
                      <ShoppingCart size={18} />
                      Add To Cart
                    </button>
                  </div>
                </div>

              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
};

export default CategoryCard;