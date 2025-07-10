// src/pages/Kontak.jsx
import React from "react";
import { useInView } from "react-intersection-observer";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Kontak = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      id="kontak"
      ref={ref}
      className={`bg-white py-16 transition-all duration-1000 ease-in-out ${
        inView ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Hubungi & Kunjungi Kami
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Kolom Kiri: Info Kontak */}
          <div>
            <h3 className="text-2xl font-bold text-green-800 mb-6">
              Informasi Kontak
            </h3>
            <div className="space-y-6 text-gray-700">
              <div className="flex items-start">
                <FaMapMarkerAlt
                  className="text-green-700 mt-1 mr-4 flex-shrink-0"
                  size={20}
                />
                <span>
                  <strong>Alamat 1 (Putra):</strong>
                  <br />
                  Desa Pamijen RT.06 RW.02, Kecamatan Baturraden, Banyumas, Jawa
                  Tengah 53151
                </span>
              </div>
              <div className="flex items-start">
                <FaMapMarkerAlt
                  className="text-green-700 mt-1 mr-4 flex-shrink-0"
                  size={20}
                />
                <span>
                  <strong>Alamat 2 (Putri):</strong>
                  <br />
                  Gg. Nerbabu, Karangjambu, Purwanegara, Kec. Purwokerto Timur,
                  Kab. Banyumas, Jawa Tengah 53127
                </span>
              </div>
              <div className="flex items-center">
                <FaPhoneAlt
                  className="text-green-700 mr-4 flex-shrink-0"
                  size={20}
                />
                <span>
                  <strong>Telepon (Kyai Ulumudin):</strong> 085743958992
                </span>
              </div>
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
                {/* Tempel kode iframe baru Anda dari Google Maps di sini */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.8181248441033!2d109.22613657456773!3d-7.374271492635127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e655fb47306dadd%3A0x76a01494eee6e816!2sPonpes%20Jogo%20Negoro!5e0!3m2!1sid!2sid!4v1752105947305!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }} // Diubah menjadi objek JavaScript
                  allowFullScreen="" // 'f' dan 's' menjadi huruf besar
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade" // 'p' menjadi huruf besar
                  title="Peta Lokasi Pondok Pesantren Jogo Negoro" // Tambahkan title untuk aksesibilitas
                ></iframe>
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Formulir Kontak */}
          <div>
            <h3 className="text-2xl font-bold text-green-800 mb-6">
              Kirim Pesan
            </h3>
            <form
              action="#"
              method="POST"
              className="space-y-6 bg-gray-50 p-8 rounded-lg"
            >
              <div>
                <label
                  htmlFor="nama"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  name="nama"
                  id="nama"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Alamat Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div>
                <label
                  htmlFor="pesan"
                  className="block text-sm font-medium text-gray-700"
                >
                  Pesan
                </label>
                <textarea
                  name="pesan"
                  id="pesan"
                  rows="4"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Kirim Pesan
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kontak;
