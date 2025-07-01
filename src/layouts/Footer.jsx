// src/layouts/Footer.jsx

import React from "react";
import { Link } from "react-router-dom";

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
          <Link to="/kontak" className="hover:text-green-400">
            Hubungi Kami
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
