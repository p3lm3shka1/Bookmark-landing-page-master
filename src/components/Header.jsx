import { useState } from "react";
import logo from "../assets/images/logo-bookmark.svg";
import logoWhite from "../assets/images/logo-bookmark.svg";
import iconHamburger from "../assets/images/icon-hamburger.svg";
import iconClose from "../assets/images/icon-close.svg";
import iconFacebook from "../assets/images/icon-facebook.svg";
import iconTwitter from "../assets/images/icon-twitter.svg";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="container mx-auto p-6 mt-6 flex items-center justify-between z-50 relative">
      <div>
        <img
          src={menuOpen ? logoWhite : logo}
          alt="Bookmark Logo"
          className="w-auto h-8"
        />
      </div>

      {/* Desktop nav */}
      <nav className="hidden md:flex items-center space-x-10 uppercase text-xs tracking-widest text-veryDarkBlue font-medium">
        <a
          href="#features"
          className="hover:text-softRed transition duration-300"
        >
          Features
        </a>
        <a
          href="#pricing"
          className="hover:text-softRed transition duration-300"
        >
          Pricing
        </a>
        <a
          href="#contact"
          className="hover:text-softRed transition duration-300"
        >
          Contact
        </a>
        <a
          href="#"
          className="bg-softRed text-white px-8 py-3 rounded-md shadow-md border-2 border-softRed hover:bg-white hover:text-softRed transition duration-300"
        >
          Login
        </a>
      </nav>

      <button
        className="md:hidden focus:outline-none z-50"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <img src={menuOpen ? iconClose : iconHamburger} alt="Menu" />
      </button>

      {menuOpen && (
        <div className="fixed inset-0 bg-veryDarkBlue/95 z-40 flex flex-col md:hidden">
          <div className="flex items-center justify-between p-6 mt-6">
            <img
              src={logoWhite}
              alt="Bookmark"
              className="h-8 brightness-0 invert"
            />
            <button onClick={() => setMenuOpen(false)} className="z-50">
              <img
                src={iconClose}
                alt="Close"
                className="brightness-0 invert"
              />
            </button>
          </div>

          <nav className="flex flex-col items-center mt-10 px-6 w-full">
            <a
              href="#features"
              onClick={() => setMenuOpen(false)}
              className="w-full text-center py-5 border-t border-gray-600 text-white uppercase tracking-[0.2em] text-lg"
            >
              Features
            </a>
            <a
              href="#pricing"
              onClick={() => setMenuOpen(false)}
              className="w-full text-center py-5 border-t border-gray-600 text-white uppercase tracking-[0.2em] text-lg"
            >
              Pricing
            </a>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="w-full text-center py-5 border-t border-b border-gray-600 text-white uppercase tracking-[0.2em] text-lg"
            >
              Contact
            </a>
            <a
              href="#"
              className="w-full text-center py-4 mt-6 border-2 border-white rounded text-white uppercase tracking-[0.2em] text-lg font-medium"
            >
              Login
            </a>
          </nav>

          <div className="flex gap-10 justify-center mt-auto mb-12">
            <a href="#">
              <img
                src={iconFacebook}
                alt="Facebook"
                className="brightness-0 invert"
              />
            </a>
            <a href="#">
              <img
                src={iconTwitter}
                alt="Twitter"
                className="brightness-0 invert"
              />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
