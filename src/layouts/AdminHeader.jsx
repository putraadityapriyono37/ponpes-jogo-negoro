// src/layouts/AdminHeader.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient"; // Ganti import ke supabase

const AdminHeader = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    // Gunakan fungsi logout dari Supabase
    await supabase.auth.signOut();
    navigate("/admin/login");
  };

  return (
    <header className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold">Admin Panel Jogo Negoro</h1>
        <button
          onClick={handleLogout}
          className="bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700 text-sm"
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default AdminHeader;
