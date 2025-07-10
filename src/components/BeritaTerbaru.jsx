// src/components/BeritaTerbaru.jsx
import React, { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import { Link } from "react-router-dom";

const BeritaTerbaru = () => {
  const [beritaList, setBeritaList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBerita = async () => {
      try {
        const { data, error } = await supabase
          .from("berita")
          .select("*")
          .order("tanggalPublikasi", { ascending: false })
          .limit(3);

        if (error) throw error;
        setBeritaList(data);
      } catch (error) {
        console.error("Error fetching berita terbaru: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBerita();
  }, []);

  // Jangan tampilkan section ini sama sekali jika tidak ada berita atau masih loading
  if (loading || beritaList.length === 0) {
    return null;
  }

  return (
    <div id="berita" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Berita & Kegiatan Terbaru
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-600">
            Ikuti perkembangan dan kegiatan di Pondok Pesantren Jogo Negoro.
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

        <div className="text-center mt-12">
          <Link
            to="/berita"
            className="inline-block bg-green-700 text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-800 transition-colors"
          >
            Lihat Semua Berita
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BeritaTerbaru;
