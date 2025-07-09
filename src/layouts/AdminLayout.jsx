// src/layouts/AdminLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import AdminHeader from "./AdminHeader";

const AdminLayout = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <AdminHeader />
      <main>
        <Outlet /> {/* Di sinilah konten dashboard admin akan muncul */}
      </main>
    </div>
  );
};

export default AdminLayout;
