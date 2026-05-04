import { Leaf, ShieldCheck, Truck, CreditCard } from "lucide-react";

const features = [
  { text: "100% Natural", icon: <Leaf size={18} /> },
  { text: "Scientifically Tested", icon: <ShieldCheck size={18} /> },
  { text: "Free Delivery", icon: <Truck size={18} /> },
  { text: "Secure Payment", icon: <CreditCard size={18} /> },
];

const FeaturesBar = () => {
  return (
    <section className="px-3 py-6">
      
      <div
        className="
          grid gap-4 
          grid-cols-2 
          sm:grid-cols-2 
          md:grid-cols-4
          max-w-5xl mx-auto
        "
      >
        {features.map((feature, index) => (
          <div
            key={index}
            className="
              group flex items-center gap-3 
              bg-white rounded-xl py-3 px-3 
              border border-[#eee] shadow-sm 
              transition-all duration-300 ease-in-out
              hover:shadow-lg hover:-translate-y-1 hover:border-[#355e3b]/30
            "
          >
            {/* Icon */}
            <div
              className="
                bg-[#355e3b]/10 text-[#355e3b] p-2 rounded-lg 
                transition-all duration-300
                group-hover:bg-[#355e3b]/20 group-hover:scale-110
              "
            >
              {feature.icon}
            </div>

            {/* Text */}
            <p className="text-sm font-semibold text-[#355e3b] leading-tight">
              {feature.text}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default FeaturesBar;