// src/layouts/MainLayout.jsx
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom"; // Kita akan install ini sebentar lagi

const MainLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet /> {/* Di sini konten halaman dinamis akan muncul */}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
