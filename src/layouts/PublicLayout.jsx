// src/layouts/PublicLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const PublicLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />{" "}
        {/* Di sinilah konten halaman (Beranda, Berita, dll) akan muncul */}
      </main>
      <Footer />
    </>
  );
};

export default PublicLayout;
