// src/components/Hero.jsx
import React from 'react';

const Hero = () => {
  return (
    <div className="relative bg-green-800 text-white text-center py-32 px-4">
      {/* Anda bisa mengganti URL gambar ini dengan gambar pondok Anda nanti */}
      <div 
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1593349480503-685d3a5e8460?q=80&w=2070')" }}
      ></div>
      <div className="relative z-10">
        <h1 className="text-5xl font-extrabold mb-4">Membentuk Generasi Qur'ani, Berakhlak, dan Berprestasi</h1>
        <p className="text-xl mb-8">Bergabunglah dengan Pondok Pesantren Jogo Negoro untuk pendidikan Islam yang komprehensif.</p>
        <a href="/pendaftaran" className="bg-white text-green-800 font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition duration-300">
          Daftar Sekarang
        </a>
      </div>
    </div>
  );
};

export default Hero;