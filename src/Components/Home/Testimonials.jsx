import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import t1 from "../../assets/t1.jpg";
// import t2 from "../../assets/t2.jpg";
// import t3 from "../../assets/t3.jpg";
// import t4 from "../../assets/t4.jpg";

const testimonials = [
  {
    name: "Hina Nadeem",
    image: "t1.jpg",
    review:
      "I didn’t expect much at first, but this teeth whitening powder genuinely impressed me...",
  },
  {
    name: "Minhaj Akbar",
    image: "t2.jpg",
    review:
      "The powder works well but you need to be consistent...",
  },
  {
    name: "Asma Arif",
    image: "t3.jpg",
    review:
      "I’ve been using this senna powder for a few weeks now...",
  },
  {
    name: "Serish Nawaz",
    image: "t4.jpg",
    review:
      "I’ve been using body pain oils for quite some time...",
  },
];

const Card = ({ item }) => (
  <div className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition">
    
    {/* Image with zoom */}
    <div className="w-full h-48 mb-4 overflow-hidden rounded-xl">
      <img
        src={item.image}
        alt={item.name}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
      />
    </div>

    {/* Name */}
    <h3 className="font-semibold text-[#2d2a26]">
      {item.name}
    </h3>

    {/* Stars */}
    <div className="flex text-yellow-500 mt-1 mb-2">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={16} fill="currentColor" />
      ))}
    </div>

    {/* Review */}
    <p className="text-sm text-gray-600 leading-relaxed">
      {item.review}
    </p>
  </div>
);

const Testimonials = () => {
  return (
    <section className="bg-[#f5f3ee] py-14 px-4">
      
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-serif text-[#2d2a26]">
          What Our Customers Say
        </h2>
        <p className="text-gray-500 mt-2">
          Real results from real people
        </p>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {testimonials.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>

      {/* Mobile Slider */}
      <div className="md:hidden">
        <Swiper spaceBetween={16} slidesPerView={1.2}>
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <Card item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </section>
  );
};

export default Testimonials;