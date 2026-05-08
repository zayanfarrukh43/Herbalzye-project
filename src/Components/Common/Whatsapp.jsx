import { Phone } from "lucide-react";

const Whatsapp = () => {
  const phoneNumber = "923292608369"; // 👉 replace with your number

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-5 right-5 z-50
        bg-[#355e3b] text-white
        p-4 rounded-full shadow-lg
        flex items-center justify-center
        transition-all duration-300
        hover:scale-110 hover:bg-[#2c4e31]
      "
    >
      <Phone size={22} />
    </a>
  );
};

export default Whatsapp;