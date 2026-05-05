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
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">

      {/* Navbar */}
      <div className="px-4 py-3 flex items-center justify-between">

        {/* Toggle Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl text-[#2d4d2f]"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Logo */}
        {/* <h1 className="text-lg md:text-xl font-bold tracking-wide text-[#355e3b] font-serif">
          HERBALYZE
        </h1> */}

        <div className="flex items-center">
          <img
            src={navPic}
            alt="HerbalYze Logo"
            className="
      h-8 sm:h-10 md:h-12 lg:h-14
      w-auto
      object-contain
      rounded-xl
    "
          />
        </div>

        {/* Icons */}
        <div className="flex items-center gap-3 text-xl text-[#2d4d2f]">
          <FiSearch className="cursor-pointer" />
          <FiHeart className="cursor-pointer" />
          <FiShoppingCart className="cursor-pointer" />
        </div>
      </div>

      {/* Dropdown Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="bg-white border-t border-gray-200 px-5 py-4 flex flex-col gap-5 shadow-sm">

          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="text-[#355e3b] font-medium text-base hover:translate-x-1 transition"
          >
            Home
          </Link>

          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="text-[#355e3b] font-medium text-base hover:translate-x-1 transition"
          >
            About Us
          </Link>

          <Link
            to="/shop"
            onClick={() => setMenuOpen(false)}
            className="text-[#355e3b] font-medium text-base hover:translate-x-1 transition"
          >
            Shop
          </Link>

          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="text-[#355e3b] font-medium text-base hover:translate-x-1 transition"
          >
            Contact
          </Link>

        </div>
      </div>
    </header>
  );
};

export default Header;