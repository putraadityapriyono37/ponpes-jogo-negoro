// src/layouts/Footer.jsx
import React from "react";
// Ganti import dari 'react-router-dom' menjadi 'react-scroll'
import { Link } from "react-scroll";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-6 text-center">
        <p>
          &copy; {currentYear} Pondok Pesantren Jogo Negoro. All Rights
          Reserved.
        </p>
        <div className="mt-4">
          {/* Gunakan Link dari react-scroll untuk smooth scrolling */}
          <Link
            to="kontak" // ID section kontak
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer hover:text-green-400"
          >
            Hubungi Kami
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
