// src/pages/admin/Dashboard.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../../supabaseClient";

const Dashboard = () => {
  const [beritaList, setBeritaList] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fungsi untuk mengambil data (tidak berubah)
  const fetchBerita = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("berita")
        .select("*")
        .order("tanggalPublikasi", { ascending: false });

      if (error) throw error;
      setBeritaList(data);
    } catch (error) {
      console.error("Error fetching berita:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBerita();
  }, []);

  // FUNGSI BARU UNTUK MENGHAPUS BERITA
  const handleDelete = async (beritaId, gambarUrl) => {
    // Konfirmasi sebelum menghapus
    if (!window.confirm("Apakah Anda yakin ingin menghapus berita ini?")) {
      return;
    }

    try {
      // 1. Hapus gambar dari Supabase Storage (jika ada)
      if (gambarUrl) {
        const fileName = gambarUrl.split("/").pop(); // Mengambil nama file dari URL
        const { error: storageError } = await supabase.storage
          .from("images")
          .remove([`berita/${fileName}`]); // Hapus dari folder 'berita'

        if (storageError) {
          // Tampilkan error tapi tetap lanjutkan proses hapus data dari tabel
          console.error(
            "Gagal menghapus gambar di storage, tapi tetap melanjutkan:",
            storageError
          );
        }
      }

      // 2. Hapus data dari tabel 'berita' di database
      const { error: dbError } = await supabase
        .from("berita")
        .delete()
        .eq("id", beritaId);

      if (dbError) throw dbError;

      // 3. Refresh data di halaman tanpa perlu reload
      fetchBerita();
      alert("Berita berhasil dihapus!");
    } catch (error) {
      console.error("Error deleting berita:", error);
      alert("Gagal menghapus berita.");
    }
  };

  if (loading) {
    return <div className="text-center py-20">Memuat data...</div>;
  }

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Dashboard Admin</h1>
        <div>
          <Link
            to="/admin/tambah-berita"
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
          >
            + Tambah Berita
          </Link>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Daftar Berita</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-2 px-4 text-left">Judul</th>
                <th className="py-2 px-4 text-left">Tanggal</th>
                <th className="py-2 px-4 text-left">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {beritaList.map((berita) => (
                <tr key={berita.id} className="border-b">
                  <td className="py-2 px-4">
                    <Link
                      to={`/berita/${berita.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-green-700 hover:underline"
                    >
                      {berita.judul}
                    </Link>
                  </td>
                  <td className="py-2 px-4">
                    {new Date(berita.tanggalPublikasi).toLocaleDateString(
                      "id-ID"
                    )}
                  </td>
                  <td className="py-2 px-4">
                    {/* Ubah button menjadi Link */}
                    <Link
                      to={`/admin/edit-berita/${berita.id}`}
                      className="text-blue-500 hover:text-blue-700 mr-2"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(berita.id, berita.gambarUrl)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
