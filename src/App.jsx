// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./layouts/Header.jsx";
import Footer from "./layouts/Footer.jsx";
import Beranda from "./pages/Beranda.jsx";
import Berita from "./pages/Berita.jsx";
import Pendaftaran from "./pages/Pendaftaran.jsx";
import DetailBerita from "./pages/DetailBerita.jsx"; // 1. Impor komponen baru

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/berita" element={<Berita />} />
        {/* 2. Tambahkan rute dinamis ini. :slug adalah placeholder */}
        <Route path="/berita/:slug" element={<DetailBerita />} />
        <Route path="/pendaftaran" element={<Pendaftaran />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
