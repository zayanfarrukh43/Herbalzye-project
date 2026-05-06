import {
  Mail,
  Phone,
} from "lucide-react";

import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1f2f1f] text-gray-300 pt-14 pb-8">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10">
        
        {/* LOGO + CONTACT */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-white">HerbalYze</h2>

          <p className="text-sm">Karachi</p>

          <div className="flex items-center gap-3 text-sm">
            <Mail className="w-5 h-5 text-[#6aa56a]" />
            <p>info@herbalyze.com</p>
          </div>

          <div className="flex items-center gap-3 text-sm">
            <Phone className="w-5 h-5 text-[#6aa56a]" />
            <p>(+92) 335 4104444</p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 pt-2 text-lg">
            <FaFacebook className="hover:text-white cursor-pointer" />
            <FaInstagram className="hover:text-white cursor-pointer" />
            <FaYoutube className="hover:text-white cursor-pointer" />
          </div>
        </div>

        {/* POLICIES */}
        <div>
          <h3 className="text-white font-semibold mb-4">Policies</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Terms of Service</li>
            <li className="hover:text-white cursor-pointer">Shipping Policy</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">Refund Policy</li>
            <li className="hover:text-white cursor-pointer">FAQs</li>
          </ul>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Track Order</li>
            <li className="hover:text-white cursor-pointer">Testimonials</li>
            <li className="hover:text-white cursor-pointer">Contact Us</li>
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Blogs</li>
          </ul>
        </div>

        {/* PRODUCT RANGE */}
        <div>
          <h3 className="text-white font-semibold mb-4">Product Range</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Herbal Oils</li>
            <li className="hover:text-white cursor-pointer">Wellness Teas</li>
            <li className="hover:text-white cursor-pointer">Skin Care</li>
            <li className="hover:text-white cursor-pointer">Hair Care</li>
            <li className="hover:text-white cursor-pointer">Supplements</li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Newsletter Signup
          </h3>

          <p className="text-sm mb-4">
            Subscribe to receive tips, offers, and updates.
          </p>

          <div className="flex items-center border border-gray-500 rounded-full overflow-hidden">
            <input
              type="email"
              placeholder="Your email address"
              className="bg-transparent px-4 py-2 w-full outline-none text-sm"
            />

            <button className="bg-[#355e3b] hover:bg-[#2d4d2f] px-4 py-2 text-white text-sm">
              Subscribe
            </button>
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="text-center text-xs text-gray-400 mt-10">
        © 2025 Herbalyze. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;









