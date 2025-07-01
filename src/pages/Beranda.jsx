// src/pages/Beranda.jsx
import React from "react";
import Hero from "../components/Hero.jsx";
import FeaturedPrograms from "../components/FeaturedPrograms.jsx";

const Beranda = () => {
  return (
    <div>
      <Hero />
      <FeaturedPrograms />
      {/* Di sini kita bisa menambahkan section lain nanti, seperti Berita Terbaru, dll. */}
    </div>
  );
};

export default Beranda;
