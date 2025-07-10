// src/components/Hero.jsx
import React from "react";
import { Link } from "react-router-dom";
// 1. Impor gambar dari path yang benar
import heroBg from "../assets/images/hero-background.jpg";

const Hero = () => {
  return (
    // 2. Gunakan div terpisah untuk latar belakang gambar
    <div className="relative text-white text-center min-h-screen flex flex-col justify-center items-center px-4">
      {/* Latar belakang gambar dengan overlay gelap */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      </div>

      {/* Konten di tengah */}
      <div className="relative z-10">
        <h1 className="text-5xl font-extrabold mb-4 leading-tight">
          Membentuk Generasi Qur'ani, Berakhlak, dan Berprestasi
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Bergabunglah dengan Pondok Pesantren Jogo Negoro untuk pendidikan
          Islam yang komprehensif.
        </p>
        <Link
          to="/pendaftaran"
          className="bg-green-600 text-white font-bold py-3 px-8 rounded-full hover:bg-green-700 transition duration-300"
        >
          Daftar Sekarang
        </Link>
      </div>
    </div>
  );
};

export default Hero;
