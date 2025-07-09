// src/pages/admin/EditBerita.jsx
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "../../supabaseClient";

const EditBerita = () => {
  const { id } = useParams(); // Mengambil ID berita dari URL
  const navigate = useNavigate();

  const [judul, setJudul] = useState("");
  const [isi, setIsi] = useState("");
  const [image, setImage] = useState(null);
  const [gambarLamaUrl, setGambarLamaUrl] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Ambil data berita yang ada untuk ditampilkan di form
    const fetchBerita = async () => {
      const { data, error } = await supabase
        .from("berita")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        console.error(error);
        alert("Gagal memuat data berita.");
        navigate("/admin/dashboard");
      } else {
        setJudul(data.judul);
        setIsi(data.isi);
        setGambarLamaUrl(data.gambarUrl);
      }
    };
    fetchBerita();
  }, [id, navigate]);

  const createSlug = (text) =>
    text
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let gambarUrl = gambarLamaUrl;

      // Jika ada gambar baru yang di-upload
      if (image) {
        // 1. Upload gambar baru
        const fileName = `berita/${Date.now()}_${image.name}`;
        await supabase.storage.from("images").upload(fileName, image);

        // 2. Dapatkan URL publik gambar baru
        const { data: urlData } = supabase.storage
          .from("images")
          .getPublicUrl(fileName);
        gambarUrl = urlData.publicUrl;

        // 3. Hapus gambar lama (jika ada)
        if (gambarLamaUrl) {
          const oldFileName = gambarLamaUrl.split("/").pop();
          await supabase.storage
            .from("images")
            .remove([`berita/${oldFileName}`]);
        }
      }

      // Update data di tabel 'berita'
      const { error } = await supabase
        .from("berita")
        .update({
          judul,
          isi,
          gambarUrl,
          slug: createSlug(judul),
        })
        .eq("id", id);

      if (error) throw error;

      alert("Berita berhasil diperbarui!");
      navigate("/admin/dashboard");
    } catch (error) {
      console.error("Error updating document: ", error);
      alert("Gagal memperbarui berita.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Edit Berita</h1>
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
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
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
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="gambar"
          >
            Ganti Gambar Utama (Opsional)
          </label>
          {gambarLamaUrl && (
            <img
              src={gambarLamaUrl}
              alt="Gambar lama"
              className="w-32 h-auto mb-2"
            />
          )}
          <input
            id="gambar"
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
        >
          {loading ? "Memperbarui..." : "Update Berita"}
        </button>
      </form>
    </div>
  );
};

export default EditBerita;
