// src/pages/Beranda.jsx
import React from "react";
import Hero from "../components/Hero.jsx";
// Pastikan tidak ada import FeaturedPrograms di sini
import Tentang from "./Tentang.jsx";
import Program from "./Program.jsx";
import Kontak from "./Kontak.jsx";
import BeritaTerbaru from "../components/BeritaTerbaru.jsx";
import GaleriTerbaru from "../components/GaleriTerbaru.jsx";

const Beranda = () => {
  return (
    // Kita tambahkan id="beranda" untuk link Beranda di navbar
    <main id="beranda">
      <Hero />
      <Tentang />
      <Program />
      <BeritaTerbaru />
      <GaleriTerbaru />
      <Kontak />
    </main>
  );
};

export default Beranda;
