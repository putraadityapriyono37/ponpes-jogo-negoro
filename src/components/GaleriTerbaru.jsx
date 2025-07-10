// src/components/GaleriTerbaru.jsx
import React, { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import { Link } from "react-router-dom";

const GaleriTerbaru = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        // Ambil 8 gambar terbaru dari tabel 'galeri'
        const { data, error } = await supabase
          .from("galeri")
          .select("*")
          .order("created_at", { ascending: false })
          .limit(8);

        if (error) throw error;
        setImages(data);
      } catch (error) {
        console.error("Error fetching galeri terbaru:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
  }, []);

  if (loading) return null; // Jangan tampilkan apa-apa jika sedang loading

  return (
    <div id="galeri" className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Galeri Kegiatan
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-600">
            Momen-momen berharga di pondok pesantren kami.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image) => (
            <div
              key={image.id}
              className="overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={image.imageUrl}
                alt={image.caption || "Gambar galeri"}
                className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300 cursor-pointer"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/galeri"
            className="inline-block bg-green-700 text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-800 transition-colors"
          >
            Lihat Semua Galeri
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GaleriTerbaru;
