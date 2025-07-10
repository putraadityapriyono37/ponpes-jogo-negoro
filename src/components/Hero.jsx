// src/components/Hero.jsx
import React, { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import heroBg from "../assets/images/hero-background.jpg"; // Pastikan path gambar ini benar

const Hero = () => {
  const [linkPendaftaran, setLinkPendaftaran] = useState("");

  useEffect(() => {
    // Mengambil link pendaftaran dari Supabase saat komponen dimuat
    const fetchLink = async () => {
      try {
        const { data, error } = await supabase
          .from("konfigurasi")
          .select("link")
          .eq("nama", "pendaftaran")
          .single();

        if (error) throw error;

        if (data) {
          setLinkPendaftaran(data.link);
        }
      } catch (error) {
        console.error("Gagal mengambil link pendaftaran untuk Hero:", error);
      }
    };
    fetchLink();
  }, []);

  return (
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

        {/* Mengubah Link menjadi tag <a> yang dinamis */}
        <a
          href={linkPendaftaran || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-700 text-white font-bold py-3 px-8 rounded-full hover:bg-green-800 transition duration-300"
        >
          Daftar Sekarang
        </a>
      </div>
    </div>
  );
};

export default Hero;
