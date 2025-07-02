// src/pages/Kontak.jsx
import React from "react";
import { useInView } from "react-intersection-observer";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Kontak = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      id="kontak"
      ref={ref}
      className={`bg-white transition-all duration-1000 ease-in-out ${
        inView ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Hubungi Kami
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-600">
            Kami siap menjawab pertanyaan Anda. Silakan hubungi kami melalui
            detail di bawah ini atau kirimkan pesan.
          </p>
        </div>

        {/* Pastikan class grid ada di sini */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Kolom Kiri: Info Kontak & Peta */}
          <div>
            <h3 className="text-2xl font-bold text-green-800 mb-6">
              Informasi Kontak
            </h3>
            <div className="space-y-4 text-gray-700">
              <div className="flex items-start">
                <FaMapMarkerAlt
                  className="text-green-700 mt-1 mr-4 flex-shrink-0"
                  size={20}
                />
                <span>
                  <strong>Alamat:</strong>
                  <br />
                  Jl. Kiai Santri No. 123, Desa Maju Jaya, Kec. Berkah,
                  Kabupaten Sejahtera, 54321
                </span>
              </div>
              <div className="flex items-center">
                <FaPhoneAlt
                  className="text-green-700 mr-4 flex-shrink-0"
                  size={20}
                />
                <span>
                  <strong>Telepon:</strong> (0274) 123-456
                </span>
              </div>
              <div className="flex items-center">
                <FaEnvelope
                  className="text-green-700 mr-4 flex-shrink-0"
                  size={20}
                />
                <span>
                  <strong>Email:</strong> info@jgonegoro.ponpes.id
                </span>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold text-green-800 mb-4">
                Peta Lokasi
              </h3>
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.153928734279!2d110.3644217153669!3d-7.77344737920153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a584985555555%3A0x524ed3563f828a35!2sUniversitas%20Gadjah%20Mada!5e0!3m2!1sen!2sid!4v1625841639345!5m2!1sen!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Peta Lokasi Ponpes Jogo Negoro"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Formulir Kontak */}
          <div>
            <h3 className="text-2xl font-bold text-green-800 mb-6">
              Kirim Pesan
            </h3>
            <form action="#" method="POST" className="space-y-6">
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
