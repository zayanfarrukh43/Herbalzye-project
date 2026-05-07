import { Leaf, Truck, Flame } from "lucide-react";

const Horizontal = () => {
  const items = [
    {
      icon: <Leaf className="w-4 h-4" />,
      text: "Organic & Halal",
    },
    {
      icon: <Truck className="w-4 h-4" />,
      text: "Fuel Charges Are Now Effective",
    },
    {
      icon: <Flame className="w-4 h-4" />,
      text: "Upto 30% OFF",
    },
  ];

  return (
    <div className="w-full overflow-hidden bg-[#355e3b] py-3 relative">
      
      {/* MARQUEE */}
      <div className="flex w-max animate-marquee">

        {/* FIRST SET */}
        <div className="flex items-center gap-12 px-6 whitespace-nowrap text-white font-medium text-sm sm:text-base">
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              {item.icon}
              <span>{item.text}</span>
            </div>
          ))}
        </div>

        {/* DUPLICATE SET */}
        <div className="flex items-center gap-12 px-6 whitespace-nowrap text-white font-medium text-sm sm:text-base">
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              {item.icon}
              <span>{item.text}</span>
            </div>
          ))}
        </div>

        {/* DUPLICATE SET */}
        <div className="flex items-center gap-12 px-6 whitespace-nowrap text-white font-medium text-sm sm:text-base">
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              {item.icon}
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Horizontal;