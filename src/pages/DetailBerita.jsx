// src/pages/DetailBerita.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Hook untuk mengambil parameter dari URL
import { db } from "../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

const DetailBerita = () => {
  const { slug } = useParams(); // Mengambil 'slug' dari URL, contoh: /berita/kegiatan-lomba-17-agustus
  const [berita, setBerita] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBerita = async () => {
      try {
        // Query untuk mencari dokumen di koleksi 'berita' yang field 'slug'-nya sama dengan slug dari URL
        const q = query(collection(db, "berita"), where("slug", "==", slug));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          // Ambil data dari dokumen pertama yang ditemukan
          const docData = querySnapshot.docs[0].data();
          setBerita(docData);
        } else {
          console.log("Tidak ada berita dengan slug tersebut!");
        }
      } catch (error) {
        console.error("Error fetching detail berita: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBerita();
  }, [slug]); // useEffect ini akan berjalan lagi jika nilai slug berubah

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
          {new Date(berita.tanggalPublikasi.seconds * 1000).toLocaleDateString(
            "id-ID",
            {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            }
          )}
        </p>
        <img
          src={berita.gambarUrl}
          alt={berita.judul}
          className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-lg mb-8"
        />
        {/* Gunakan 'whitespace-pre-wrap' agar format paragraf (enter) dari database tetap tampil */}
        <div className="prose lg:prose-xl max-w-full text-gray-800 whitespace-pre-wrap">
          {berita.isi}
        </div>
      </div>
    </div>
  );
};

export default DetailBerita;
