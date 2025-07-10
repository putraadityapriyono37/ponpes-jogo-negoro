// src/pages/Galeri.jsx
import React, { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const Galeri = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from("galeri")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) throw error;
        setImages(data);
      } catch (error) {
        console.error("Error fetching galeri:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
  }, []);

  const slides = images.map((img) => ({
    src: img.imageUrl,
    title: img.caption,
  }));

  const openLightbox = (imageIndex) => {
    setIndex(imageIndex);
    setOpen(true);
  };

  if (loading) {
    return <div className="text-center py-20">Memuat galeri...</div>;
  }

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Galeri Kegiatan
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-600">
            Dokumentasi momen dan kegiatan di Pondok Pesantren Jogo Negoro.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, idx) => (
            <div
              key={image.id}
              className="cursor-pointer group"
              onClick={() => openLightbox(idx)}
            >
              <div className="overflow-hidden rounded-lg">
                <img
                  src={image.imageUrl}
                  alt={image.caption || "Gambar galeri"}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              {image.caption && (
                <p className="text-center text-sm mt-2 text-gray-600">
                  {image.caption}
                </p>
              )}
            </div>
          ))}
        </div>

        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={slides}
          index={index}
        />
      </div>
    </div>
  );
};

export default Galeri;
