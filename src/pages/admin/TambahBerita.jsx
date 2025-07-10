// src/pages/admin/TambahBerita.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "../../supabaseClient"; // Ganti import ke supabase

const TambahBerita = () => {
  const [judul, setJudul] = useState("");
  const [isi, setIsi] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const createSlug = (text) => {
    return text
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let gambarUrl = "";

      if (image) {
        const fileName = `berita/${Date.now()}_${image.name}`;
        const { error: uploadError } = await supabase.storage
          .from("images")
          .upload(fileName, image);

        if (uploadError) throw uploadError;

        const { data: urlData } = supabase.storage
          .from("images")
          .getPublicUrl(fileName);

        gambarUrl = urlData.publicUrl;
      }

      const { error: insertError } = await supabase.from("berita").insert([
        {
          judul: judul,
          isi: isi,
          gambarUrl: gambarUrl,
          slug: createSlug(judul),
          tanggalPublikasi: new Date().toISOString(),
        },
      ]);

      if (insertError) throw insertError;

      alert("Berita berhasil ditambahkan!");
      navigate("/admin/dashboard");
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Gagal menambahkan berita.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Tambah Berita Baru</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="judul"
          >
            Judul Berita
          </label>
          <input
            id="judul"
            type="text"
            value={judul}
            onChange={(e) => setJudul(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="isi"
          >
            Isi Berita
          </label>
          <textarea
            id="isi"
            rows="10"
            value={isi}
            onChange={(e) => setIsi(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="gambar"
          >
            Gambar Utama
          </label>
          <input
            id="gambar"
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
          />
        </div>
        <div className="flex items-center space-x-4">
          <button
            type="submit"
            disabled={loading}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 disabled:bg-gray-400"
          >
            {loading ? "Menyimpan..." : "Simpan Berita"}
          </button>
          <Link
            to="/admin/dashboard"
            className="text-gray-600 hover:text-gray-800"
          >
            Batal
          </Link>
        </div>
      </form>
    </div>
  );
};

export default TambahBerita;
