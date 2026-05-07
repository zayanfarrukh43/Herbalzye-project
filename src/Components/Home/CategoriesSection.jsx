import { Heart, ShoppingCart, Star } from "lucide-react";

/* SWIPER */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const products = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=1200&auto=format&fit=crop",
    title: "Herbal Oil Medicine",
    oldPrice: "$100",
    price: "$50",
    rating: "4.5/5",
    badge: "Sale",
  },

  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?q=80&w=1200&auto=format&fit=crop",
    title: "Natural Skin Oil",
    oldPrice: "$120",
    price: "$60",
    rating: "4.8/5",
    badge: "30% Off",
  },

  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1200&auto=format&fit=crop",
    title: "Organic Herbal Drops",
    oldPrice: "$80",
    price: "$40",
    rating: "4.7/5",
    badge: "Hot",
  },

  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1200&auto=format&fit=crop",
    title: "Hair Growth Oil",
    oldPrice: "$140",
    price: "$70",
    rating: "4.9/5",
    badge: "Best Seller",
  },
];

const CategoryCard = () => {
  return (
    <section className="w-full bg-[#f5f3ee] py-14">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6">

        {/* HEADING */}
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-serif text-[#2d2a26]">
            Featured Products
          </h2>

          <p className="text-gray-500 mt-2">
            Discover our herbal wellness collection
          </p>
        </div>

        {/* SWIPER */}
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            480: {
              slidesPerView: 1.3,
            },

            640: {
              slidesPerView: 2,
            },

            768: {
              slidesPerView: 2.5,
            },

            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>

              <div className="bg-[#f7f5f2] rounded-[28px] p-5 shadow-sm hover:shadow-xl transition-all duration-300 border border-[#ebe5d8] group relative overflow-hidden">

                {/* BADGE */}
                {product.badge && (
                  <div className="absolute top-4 left-4 z-10 bg-[#355e3b] text-white text-xs sm:text-sm font-semibold px-3 py-2 rounded-xl shadow">
                    {product.badge}
                  </div>
                )}

                {/* HEART */}
                <button className="absolute top-4 right-4 z-10 bg-white/80 backdrop-blur-md p-2 rounded-full hover:bg-[#355e3b] hover:text-white transition">
                  <Heart className="w-5 h-5" />
                </button>

                {/* IMAGE */}
                <div className="rounded-[22px] overflow-hidden bg-white">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-[220px] sm:h-[260px] object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                {/* CONTENT */}
                <div className="pt-5">

                  {/* TITLE */}
                  <h3 className="text-lg sm:text-xl font-semibold text-[#2d2a26] mb-4">
                    {product.title}
                  </h3>

                  {/* PRICE + RATING */}
                  <div className="flex items-center justify-between mb-5 flex-wrap gap-2">

                    <div className="flex items-center gap-2">
                      <span className="text-gray-400 line-through text-lg font-semibold">
                        {product.oldPrice}
                      </span>

                      <span className="text-[#2d2a26] text-2xl font-bold">
                        {product.price}
                      </span>
                    </div>

                    {/* RATING */}
                    <div className="flex items-center gap-1 text-gray-500">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />

                      <span className="font-medium text-sm">
                        {product.rating}
                      </span>
                    </div>
                  </div>

                  {/* BUTTON */}
                  <button className="w-full border border-gray-400 rounded-full py-3 text-gray-700 font-semibold hover:bg-[#355e3b] hover:text-white hover:border-[#355e3b] transition-all duration-300 flex items-center justify-center gap-2">
                    <ShoppingCart className="w-4 h-4" />
                    Add To Cart
                  </button>
                </div>
              </div>

            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CategoryCard;