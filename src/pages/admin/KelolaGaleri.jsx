// src/pages/admin/KelolaGaleri.jsx
import React, { useState, useEffect } from "react";
import { supabase } from "../../supabaseClient";

const KelolaGaleri = () => {
  const [images, setImages] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [newImage, setNewImage] = useState(null);
  const [caption, setCaption] = useState("");

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    const { data, error } = await supabase
      .from("galeri")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) console.log("Error fetching images:", error);
    else setImages(data);
  };

  const handleUpload = async () => {
    if (!newImage) {
      alert("Silakan pilih file gambar terlebih dahulu.");
      return;
    }

    setUploading(true);
    try {
      const fileName = `galeri/${Date.now()}_${newImage.name}`;
      const { error: uploadError } = await supabase.storage
        .from("images")
        .upload(fileName, newImage);

      if (uploadError) throw uploadError;

      const { data: urlData } = supabase.storage
        .from("images")
        .getPublicUrl(fileName);

      const imageUrl = urlData.publicUrl;

      const { error: insertError } = await supabase
        .from("galeri")
        .insert([{ imageUrl, caption }]);

      if (insertError) throw insertError;

      fetchImages(); // Refresh galeri
      setNewImage(null);
      setCaption("");
      document.getElementById("image-input").value = null; // Reset input file
      alert("Gambar berhasil diunggah!");
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Gagal mengunggah gambar.");
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (imageId, imageUrl) => {
    if (!window.confirm("Yakin ingin menghapus gambar ini?")) return;

    try {
      // Hapus dari Storage
      const fileName = imageUrl.split("/").pop();
      await supabase.storage.from("images").remove([`galeri/${fileName}`]);

      // Hapus dari Database
      await supabase.from("galeri").delete().eq("id", imageId);

      fetchImages(); // Refresh galeri
      alert("Gambar berhasil dihapus.");
    } catch (error) {
      console.error("Error deleting image:", error);
      alert("Gagal menghapus gambar.");
    }
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Kelola Galeri</h1>

      {/* Form Upload */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">Unggah Gambar Baru</h2>
        <div className="space-y-4">
          <input
            id="image-input"
            type="file"
            accept="image/*"
            onChange={(e) => setNewImage(e.target.files[0])}
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
          />
          <input
            type="text"
            placeholder="Deskripsi singkat (caption)..."
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
          />
          <button
            onClick={handleUpload}
            disabled={uploading}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
          >
            {uploading ? "Mengunggah..." : "Upload Gambar"}
          </button>
        </div>
      </div>

      {/* Daftar Gambar */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {images.map((image) => (
          <div key={image.id} className="relative group">
            <img
              src={image.imageUrl}
              alt={image.caption}
              className="w-full h-40 object-cover rounded-lg shadow-md"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                onClick={() => handleDelete(image.id, image.imageUrl)}
                className="text-white text-3xl"
              >
                &times;
              </button>
            </div>
            <p className="text-xs text-center mt-1 text-gray-600">
              {image.caption}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KelolaGaleri;
