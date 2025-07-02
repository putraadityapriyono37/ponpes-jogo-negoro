// src/components/Hero.jsx
import React from "react";
import { Link } from "react-scroll"; // Impor Link dari react-scroll

const Hero = () => {
  return (
    // Ganti py-32 dengan min-h-screen dan tambahkan flex untuk centering
    <div className="relative text-white text-center min-h-screen flex flex-col justify-center items-center px-4">
      {/* Latar belakang gambar */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-green-800"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1593349480503-685d3a5e8460?q=80&w=2070')",
        }}
      >
        {/* Lapisan overlay gelap untuk kontras */}
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

        {/* Tombol ini sekarang akan scroll ke section pendaftaran/kontak */}
        {/* Ganti class tombol di bawah ini */}
        <Link
          to="kontak"
          smooth={true}
          offset={-70} // Nilai ini juga akan kita perbaiki nanti
          duration={500}
          // Class yang baru, disamakan dengan tombol Pendaftaran
          className="bg-green-700 text-white font-bold py-3 px-8 rounded-full hover:bg-green-800 transition duration-300 cursor-pointer"
        >
          Daftar Sekarang
        </Link>
      </div>
    </div>
  );
};

export default Hero;
