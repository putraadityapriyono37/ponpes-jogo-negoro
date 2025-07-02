// src/layouts/Header.jsx
import React, { useState } from "react";
// 1. Impor hooks dari router dan scroller dari react-scroll
import { useLocation, useNavigate, Link as RouterLink } from "react-router-dom";
import { scroller } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // 2. Dapatkan fungsi navigate dan lokasi saat ini
  const navigate = useNavigate();
  const location = useLocation();

  // 3. Buat fungsi navigasi pintar
  const handleNavClick = (section) => {
    // Tutup menu mobile jika terbuka
    closeMenu();

    // Cek apakah kita sudah di halaman utama
    if (location.pathname === "/") {
      // Jika ya, langsung scroll
      scroller.scrollTo(section, {
        smooth: true,
        offset: -60,
        duration: 500,
      });
    } else {
      // Jika tidak, pindah ke halaman utama dulu, lalu scroll
      navigate("/");
      setTimeout(() => {
        scroller.scrollTo(section, {
          smooth: true,
          offset: -30,
          duration: 500,
        });
      }, 100); // Beri jeda sedikit agar halaman sempat termuat
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Daftar menu untuk menghindari duplikasi kode
  const navLinks = [
    { to: "beranda", label: "Beranda" },
    { to: "tentang", label: "Tentang Kami" },
    { to: "program", label: "Program" },
    { to: "berita", label: "Berita" },
    { to: "kontak", label: "Kontak" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1
          onClick={() => handleNavClick("beranda")}
          className="text-2xl font-bold text-green-800 cursor-pointer"
        >
          Ponpes Jogo Negoro
        </h1>

        {/* NAVIGASI DESKTOP */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-6 text-gray-700 items-center">
            {navLinks.map((link) => (
              <li
                key={link.to}
                onClick={() => handleNavClick(link.to)}
                className="cursor-pointer hover:text-green-600"
              >
                {link.label}
              </li>
            ))}
            <li>
              <RouterLink
                to="/pendaftaran"
                className="bg-green-700 text-white font-semibold px-4 py-2 rounded-lg hover:bg-green-800"
              >
                Pendaftaran
              </RouterLink>
            </li>
          </ul>
        </nav>

        {/* TOMBOL HAMBURGER */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* NAVIGASI MOBILE */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white pb-4">
          <ul className="flex flex-col items-center space-y-4 text-gray-700">
            {navLinks.map((link) => (
              <li
                key={link.to}
                onClick={() => handleNavClick(link.to)}
                className="cursor-pointer hover:text-green-600"
              >
                {link.label}
              </li>
            ))}
            <li>
              <RouterLink
                to="/pendaftaran"
                onClick={closeMenu}
                className="bg-green-700 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-green-800"
              >
                Pendaftaran
              </RouterLink>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
