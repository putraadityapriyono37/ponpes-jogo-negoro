// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import Layouts
import PublicLayout from "./layouts/PublicLayout.jsx";
import AdminLayout from "./layouts/AdminLayout.jsx";

// Import Halaman Publik
import Beranda from "./pages/Beranda.jsx";
import Berita from "./pages/Berita.jsx";
import DetailBerita from "./pages/DetailBerita.jsx";
import Pendaftaran from "./pages/Pendaftaran.jsx";
import Galeri from "./pages/Galeri.jsx";

// Import Halaman Admin
import Login from "./pages/admin/Login.jsx";
import Dashboard from "./pages/admin/Dashboard.jsx";
import TambahBerita from "./pages/admin/TambahBerita.jsx";
import EditBerita from "./pages/admin/EditBerita.jsx";
import KelolaGaleri from "./pages/admin/KelolaGaleri.jsx";
import Pengaturan from "./pages/admin/Pengaturan.jsx";

// Import Komponen Bantu
import ProtectedRoute from "./components/ProtectedRoute.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* === RUTE PUBLIK === */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Beranda />} />
          <Route path="/berita" element={<Berita />} />
          <Route path="/berita/:slug" element={<DetailBerita />} />
          <Route path="/pendaftaran" element={<Pendaftaran />} />
          <Route path="/galeri" element={<Galeri />} />
        </Route>

        {/* === RUTE ADMIN === */}
        {/* Halaman Login tidak pakai layout admin */}
        <Route path="/admin/login" element={<Login />} />

        {/* Halaman setelah login akan menggunakan AdminLayout dan dilindungi */}
        <Route
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/tambah-berita" element={<TambahBerita />} />
          <Route path="/admin/edit-berita/:id" element={<EditBerita />} />
          <Route path="/admin/galeri" element={<KelolaGaleri />} />
          <Route path="/admin/pengaturan" element={<Pengaturan />} />
          {/* Nanti route admin lain (tambah/edit berita) ditaruh di sini */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
