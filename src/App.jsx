// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

// Impor semua halaman yang akan kita buat nanti
import Beranda from "./pages/Beranda";
import Tentang from "./pages/Tentang";
import Program from "./pages/Program";
import Kontak from "./pages/Kontak";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Beranda />} />
          <Route path="/tentang" element={<Tentang />} />
          <Route path="/program" element={<Program />} />
          <Route path="/kontak" element={<Kontak />} />
          {/* Tambahkan route lain di sini */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
