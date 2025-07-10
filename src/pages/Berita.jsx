// src/pages/Berita.jsx
import React, { useState, useEffect } from "react";
import { supabase } from "../supabaseClient"; // Pastikan import ke supabase
import { Link } from "react-router-dom";

const Berita = () => {
  const [beritaList, setBeritaList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBerita = async () => {
      try {
        const { data, error } = await supabase
          .from("berita")
          .select("*")
          .order("tanggalPublikasi", { ascending: false });

        if (error) throw error;
        setBeritaList(data);
      } catch (error) {
        console.error("Error fetching berita: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBerita();
  }, []);

  if (loading) {
    return <div className="text-center py-20">Memuat berita...</div>;
  }

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Arsip Berita & Kegiatan
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-600">
            Semua perkembangan dan kegiatan di Pondok Pesantren Jogo Negoro.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {beritaList.map((berita) => (
            <div
              key={berita.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col group"
            >
              <div className="overflow-hidden">
                <img
                  src={berita.gambarUrl}
                  alt={berita.judul}
                  className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-base font-bold text-gray-800 mb-1 leading-tight group-hover:text-green-700">
                  {berita.judul}
                </h3>
                <p className="text-xs text-gray-500 mb-2">
                  {new Date(berita.tanggalPublikasi).toLocaleDateString(
                    "id-ID"
                  )}
                </p>
                <p className="text-sm text-gray-600 flex-grow">
                  {berita.isi.substring(0, 60)}...
                </p>
                <Link
                  to={`/berita/${berita.slug}`}
                  className="text-green-600 hover:text-green-800 font-semibold mt-3 text-sm self-start"
                >
                  Baca Selengkapnya
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Berita;
