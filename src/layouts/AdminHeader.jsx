// src/layouts/AdminHeader.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";
import { FaBars } from "react-icons/fa"; // Ikon untuk hamburger

const AdminHeader = ({ setSidebarOpen }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin/login");
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 md:px-8 py-3 flex justify-between items-center">
        {/* Tombol Hamburger hanya muncul di mobile */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="md:hidden text-gray-700"
        >
          <FaBars size={24} />
        </button>
        <h1 className="text-xl font-bold text-gray-800 hidden md:block">
          Admin Panel Jogo Negoro
        </h1>
        <button
          onClick={handleLogout}
          className="bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700 text-sm text-white"
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default AdminHeader;
