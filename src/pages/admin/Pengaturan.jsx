// src/pages/admin/Pengaturan.jsx
import React, { useState, useEffect } from "react";
import { supabase } from "../../supabaseClient";

const Pengaturan = () => {
  const [settings, setSettings] = useState({
    pendaftaran: "",
    wa_kyai: "",
    wa_lurah: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchSettings = async () => {
      const { data, error } = await supabase.from("konfigurasi").select("*");
      if (error) {
        console.error("Gagal mengambil pengaturan:", error);
      } else {
        // Ubah array menjadi objek agar mudah diakses
        const settingsObj = data.reduce((acc, item) => {
          acc[item.nama] = item.link;
          return acc;
        }, {});
        setSettings(settingsObj);
      }
    };
    fetchSettings();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSettings((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      // Ubah setiap pengaturan satu per satu
      const updates = Object.entries(settings).map(([nama, link]) =>
        supabase.from("konfigurasi").update({ link }).eq("nama", nama)
      );

      await Promise.all(updates);
      alert("Pengaturan berhasil diperbarui!");
    } catch (error) {
      console.error("Error updating settings:", error);
      alert("Gagal memperbarui pengaturan.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Pengaturan Website</h1>
      <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
        <div>
          <label
            className="block text-xl font-semibold mb-2"
            htmlFor="pendaftaran"
          >
            Link Pendaftaran (Google Form)
          </label>
          <input
            id="pendaftaran"
            name="pendaftaran"
            type="url"
            value={settings.pendaftaran}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
          />
        </div>
        <div>
          <label className="block text-xl font-semibold mb-2" htmlFor="wa_kyai">
            Nomor WhatsApp Kyai (Format: 628...)
          </label>
          <input
            id="wa_kyai"
            name="wa_kyai"
            type="text"
            value={settings.wa_kyai}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
          />
        </div>
        <div>
          <label
            className="block text-xl font-semibold mb-2"
            htmlFor="wa_lurah"
          >
            Nomor WhatsApp Lurah Pondok (Format: 628...)
          </label>
          <input
            id="wa_lurah"
            name="wa_lurah"
            type="text"
            value={settings.wa_lurah}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
          />
        </div>
        <div>
          <button
            onClick={handleSave}
            disabled={loading}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
          >
            {loading ? "Menyimpan..." : "Simpan Semua Perubahan"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pengaturan;
