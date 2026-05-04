import { useEffect, useState } from "react";
import { Truck, CreditCard, Leaf } from "lucide-react";

const messages = [
  {
    text: "Free Delivery on All Orders",
    icon: <Truck size={16} />,
  },
  {
    text: "Secure Payment Available",
    icon: <CreditCard size={16} />,
  },
  {
    text: "100% Natural Herbal Products",
    icon: <Leaf size={16} />,
  },
];

const AnnouncementBar = () => {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % messages.length);
        setAnimate(true);
      }, 50);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-[#355e3b] text-white overflow-hidden">
      
      <div className="relative h-9 flex items-center justify-center text-sm font-medium">
        
        <div
          className={`flex items-center gap-2 absolute transition-all duration-500 ${
            animate
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-3"
          }`}
        >
          <span className="text-white">
            {messages[index].icon}
          </span>
          <span>{messages[index].text}</span>
        </div>

      </div>
    </div>
  );
};

export default AnnouncementBar;