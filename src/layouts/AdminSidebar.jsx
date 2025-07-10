// src/layouts/AdminSidebar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import { FaTimes } from "react-icons/fa"; // Ikon untuk tombol close

const AdminSidebar = ({ isSidebarOpen, setSidebarOpen }) => {
  const linkClasses =
    "block w-full text-left px-4 py-2.5 rounded-md hover:bg-gray-700 transition-colors";
  const activeLinkClasses = "bg-green-600 text-white";
  const inactiveLinkClasses = "text-gray-300";

  // Fungsi untuk menutup sidebar saat link di klik di mode mobile
  const handleLinkClick = () => {
    if (window.innerWidth < 768) {
      // md breakpoint
      setSidebarOpen(false);
    }
  };

  return (
    // Class responsif ditambahkan di sini
    <aside
      className={`absolute inset-y-0 left-0 bg-gray-800 text-white w-64 p-4 transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } z-30`}
    >
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">Admin Menu</h2>
        {/* Tombol close hanya muncul di mobile */}
        <button
          onClick={() => setSidebarOpen(false)}
          className="md:hidden text-gray-400 hover:text-white"
        >
          <FaTimes size={24} />
        </button>
      </div>
      <nav className="flex flex-col gap-2">
        <NavLink
          to="/admin/dashboard"
          onClick={handleLinkClick}
          className={({ isActive }) =>
            `${linkClasses} ${
              isActive ? activeLinkClasses : inactiveLinkClasses
            }`
          }
        >
          Kelola Berita
        </NavLink>
        <NavLink
          to="/admin/galeri"
          onClick={handleLinkClick}
          className={({ isActive }) =>
            `${linkClasses} ${
              isActive ? activeLinkClasses : inactiveLinkClasses
            }`
          }
        >
          Kelola Galeri
        </NavLink>
        <NavLink
          to="/admin/pengaturan"
          onClick={handleLinkClick}
          className={({ isActive }) =>
            `${linkClasses} ${
              isActive ? activeLinkClasses : inactiveLinkClasses
            }`
          }
        >
          Pengaturan
        </NavLink>
      </nav>
    </aside>
  );
};

export default AdminSidebar;
