

const Footer = () => {
  return (
    <footer className="bg-[#f5f3ee] text-[#2d2a26] p-10 mt-10">
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        
        <div>
          <h2 className="text-xl font-bold text-[#355e3b]">HerbalYze</h2>
          <p className="text-sm mt-2">
            Premium herbal wellness.
          </p>
        </div>

        <div>
          <h3 className="font-semibold">Links</h3>
          <ul className="text-sm mt-2 space-y-1">
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">Support</h3>
          <ul className="text-sm mt-2 space-y-1">
            <li>FAQ</li>
            <li>Shipping</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">Social</h3>
          {/* <div className="flex gap-3 mt-2">
            <Facebook />
            <Instagram />
            <Twitter />
          </div> */}
        </div>

      </div>

    </footer>
  );
};

export default Footer;









// import {
//   Facebook,
//   Instagram,
//   Twitter,
//   Mail,
//   Phone,
//   MapPin,
// } from "lucide-react";

// const Footer = () => {
//   return (
//     <footer className="bg-[#f5f3ee] text-[#2d2a26] py-12 mt-16">
//       <div className="max-w-7xl mx-auto px-4 grid gap-10 sm:grid-cols-2 md:grid-cols-4">

//         {/* Brand + Contact */}
//         <div>
//           <h2 className="text-2xl font-serif text-[#355e3b] mb-4">
//             HerbalYze
//           </h2>

//           <div className="space-y-3 text-sm text-gray-600">
//             <p className="flex items-center gap-2">
//               <MapPin size={16} /> Karachi, Pakistan
//             </p>

//             <p className="flex items-center gap-2">
//               <Mail size={16} /> info@herbalyze.com
//             </p>

//             <p className="flex items-center gap-2">
//               <Phone size={16} /> +92 300 1234567
//             </p>
//           </div>

//           {/* Social Icons */}
//           <div className="flex gap-4 mt-5">
//             <Facebook className="cursor-pointer hover:text-[#355e3b] transition" />
//             <Instagram className="cursor-pointer hover:text-[#355e3b] transition" />
//             <Twitter className="cursor-pointer hover:text-[#355e3b] transition" />
//           </div>
//         </div>

//         {/* Policies */}
//         <div>
//           <h3 className="font-semibold mb-4 text-[#355e3b]">Policies</h3>
//           <ul className="space-y-2 text-sm text-gray-600">
//             <li className="hover:text-[#355e3b] cursor-pointer">Terms of Service</li>
//             <li className="hover:text-[#355e3b] cursor-pointer">Shipping Policy</li>
//             <li className="hover:text-[#355e3b] cursor-pointer">Privacy Policy</li>
//             <li className="hover:text-[#355e3b] cursor-pointer">Refund Policy</li>
//           </ul>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h3 className="font-semibold mb-4 text-[#355e3b]">Quick Links</h3>
//           <ul className="space-y-2 text-sm text-gray-600">
//             <li className="hover:text-[#355e3b] cursor-pointer">Home</li>
//             <li className="hover:text-[#355e3b] cursor-pointer">Shop</li>
//             <li className="hover:text-[#355e3b] cursor-pointer">About</li>
//             <li className="hover:text-[#355e3b] cursor-pointer">Contact</li>
//           </ul>
//         </div>

//         {/* Newsletter */}
//         <div>
//           <h3 className="font-semibold mb-4 text-[#355e3b]">
//             Newsletter Signup
//           </h3>

//           <p className="text-sm text-gray-600 mb-4">
//             Get updates, offers & herbal tips.
//           </p>

//           <div className="flex border border-gray-300 rounded-full overflow-hidden">
//             <input
//               type="email"
//               placeholder="Your email"
//               className="px-4 py-2 w-full text-sm outline-none bg-transparent"
//             />
//             <button className="bg-[#355e3b] text-white px-5 text-sm hover:bg-[#2c4e31] transition">
//               Subscribe
//             </button>
//           </div>
//         </div>

//       </div>

//       {/* Bottom */}
//       <div className="text-center text-xs text-gray-500 mt-10">
//         © {new Date().getFullYear()} HerbalYze. All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;