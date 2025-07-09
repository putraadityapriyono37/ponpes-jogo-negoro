// src/components/ProtectedRoute.jsx
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { supabase } from "../supabaseClient"; // Ganti import ke supabase

const ProtectedRoute = ({ children }) => {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. Cek sesi yang sedang aktif saat komponen dimuat
    const getSession = async () => {
      const { data } = await supabase.auth.getSession();
      setSession(data.session);
      setLoading(false);
    };
    getSession();

    // 2. Dengarkan perubahan status otentikasi (login/logout)
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
      }
    );

    // Cleanup listener saat komponen di-unmount
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  if (loading) {
    return <div className="text-center py-20">Memeriksa otentikasi...</div>;
  }

  // Jika tidak ada sesi (belum login), arahkan ke halaman login
  if (!session) {
    return <Navigate to="/admin/login" />;
  }

  // Jika ada sesi (sudah login), tampilkan konten yang dilindungi
  return children;
};

export default ProtectedRoute;
