// src/pages/DetailBerita.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../supabaseClient"; // Pastikan import ke supabase

const DetailBerita = () => {
  const { slug } = useParams();
  const [berita, setBerita] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBerita = async () => {
      try {
        const { data, error } = await supabase
          .from("berita")
          .select("*")
          .eq("slug", slug)
          .single();

        if (error) throw error;
        setBerita(data);
      } catch (error) {
        console.error("Error fetching detail berita: ", error);
        setBerita(null); // Set berita jadi null jika error
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchBerita();
    }
  }, [slug]);

  if (loading) {
    return <div className="text-center py-20">Memuat...</div>;
  }

  if (!berita) {
    return <div className="text-center py-20">Berita tidak ditemukan.</div>;
  }

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4 lg:px-20">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          {berita.judul}
        </h1>
        <p className="text-md text-gray-500 mb-6">
          Dipublikasikan pada:{" "}
          {new Date(berita.tanggalPublikasi).toLocaleDateString("id-ID", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <img
          src={berita.gambarUrl}
          alt={berita.judul}
          className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-lg mb-8"
        />
        <div className="prose lg:prose-xl max-w-full text-gray-800 whitespace-pre-wrap">
          {berita.isi}
        </div>
      </div>
    </div>
  );
};

export default DetailBerita;
