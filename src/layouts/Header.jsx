// src/layouts/Header.jsx

import React from "react";
// Import 'Link' untuk navigasi tanpa reload halaman
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Bagian Logo */}
        <Link to="/" className="text-2xl font-bold text-green-800">
          {/* Ganti dengan logo jika ada, atau gunakan teks */}
          Ponpes Jogo Negoro
        </Link>

        {/* Bagian Menu Navigasi */}
        <nav>
          <ul className="flex space-x-6 text-gray-700">
            <li>
              <Link to="/" className="hover:text-green-600">
                Beranda
              </Link>
            </li>
            <li>
              <Link to="/tentang" className="hover:text-green-600">
                Tentang Kami
              </Link>
            </li>
            <li>
              <Link to="/program" className="hover:text-green-600">
                Program
              </Link>
            </li>
            <li>
              <Link to="/berita" className="hover:text-green-600">
                Berita
              </Link>
            </li>
            <li>
              <Link to="/galeri" className="hover:text-green-600">
                Galeri
              </Link>
            </li>
            <li>
              <Link to="/kontak" className="hover:text-green-600">
                Kontak
              </Link>
            </li>
            <li>
              {/* Tombol Pendaftaran kita buat menonjol */}
              <Link
                to="/pendaftaran"
                className="bg-green-700 text-white font-semibold px-4 py-2 rounded-lg hover:bg-green-800"
              >
                Pendaftaran
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
