// src/pages/Pendaftaran.jsx
import React, { useEffect } from "react";
import { supabase } from "../supabaseClient";

const Pendaftaran = () => {
  useEffect(() => {
    const fetchAndRedirect = async () => {
      const { data } = await supabase
        .from("konfigurasi")
        .select("link")
        .eq("nama", "pendaftaran")
        .single();

      if (data && data.link) {
        // Arahkan pengguna ke link G-Form
        window.location.href = data.link;
      }
    };
    fetchAndRedirect();
  }, []);

  return (
    <div className="text-center py-20">
      <p>Mengalihkan ke halaman pendaftaran...</p>
    </div>
  );
};

export default Pendaftaran;
