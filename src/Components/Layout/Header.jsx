import { useState } from "react";
import {
  FiMenu,
  FiSearch,
  FiShoppingCart,
  FiHeart,
  FiX,
} from "react-icons/fi";

import { Link } from "react-router-dom";

import navPic from "../../assets/herblayze.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">

      {/* NAVBAR */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">

        {/* LEFT SIDE */}
        <div className="flex items-center gap-4">

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-[#355e3b] md:hidden"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>

          {/* LOGO */}
          <Link to="/">
            <img
              src={navPic}
              alt="HerbalYze Logo"
              className="h-8 sm:h-10 md:h-12 w-auto object-contain"
            />
          </Link>
        </div>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="text-[#355e3b] font-medium hover:text-[#2d4d2f] transition"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="text-[#355e3b] font-medium hover:text-[#2d4d2f] transition"
          >
            About Us
          </Link>

          <Link
            to="/shop"
            className="text-[#355e3b] font-medium hover:text-[#2d4d2f] transition"
          >
            Products
          </Link>

          <Link
            to="/contact"
            className="text-[#355e3b] font-medium hover:text-[#2d4d2f] transition"
          >
            Contact Us
          </Link>

          <Link
            to="/track"
            className="text-[#355e3b] font-medium hover:text-[#2d4d2f] transition"
          >
            Track Order
          </Link>

          <Link
            to="/blogs"
            className="text-[#355e3b] font-medium hover:text-[#2d4d2f] transition"
          >
            Blogs
          </Link>

          <Link
            to="/services"
            className="text-[#355e3b] font-medium hover:text-[#2d4d2f] transition"
          >
            Services
          </Link>
        </nav>

        {/* RIGHT ICONS */}
        <div className="flex items-center gap-3 sm:gap-4 text-xl text-[#355e3b]">
          <FiSearch className="cursor-pointer hover:scale-110 transition" />
          <FiHeart className="cursor-pointer hover:scale-110 transition" />
          <FiShoppingCart className="cursor-pointer hover:scale-110 transition" />
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="bg-[#f8f5ee] border-t border-gray-200 px-5 py-5 flex flex-col gap-5 shadow-md">

          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="text-[#355e3b] font-medium hover:translate-x-2 transition"
          >
            Home
          </Link>

          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="text-[#355e3b] font-medium hover:translate-x-2 transition"
          >
            About Us
          </Link>

          <Link
            to="/products"
            onClick={() => setMenuOpen(false)}
            className="text-[#355e3b] font-medium hover:translate-x-2 transition"
          >
            Products
          </Link>

          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="text-[#355e3b] font-medium hover:translate-x-2 transition"
          >
            Contact
          </Link>

          <Link
            to="/track"
            onClick={() => setMenuOpen(false)}
            className="text-[#355e3b] font-medium hover:translate-x-2 transition"
          >
            Track Order
          </Link>


          <Link
            to="/blogs"
            onClick={() => setMenuOpen(false)}
            className="text-[#355e3b] font-medium hover:translate-x-2 transition"
          >
            Blogs
          </Link>

            <Link
            to="/services"
            onClick={() => setMenuOpen(false)}
            className="text-[#355e3b] font-medium hover:translate-x-2 transition"
          >
            Services
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;