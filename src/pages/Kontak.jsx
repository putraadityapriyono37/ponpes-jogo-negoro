// src/pages/Kontak.jsx
import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { supabase } from "../supabaseClient";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const Kontak = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const [formData, setFormData] = useState({ nama: "", email: "", pesan: "" });
  const [formStatus, setFormStatus] = useState("");

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [kontakInfo, setKontakInfo] = useState({
    wa_kyai: "",
    wa_lurah: "",
  });

  useEffect(() => {
    // Ambil data kontak dari Supabase
    const fetchKontak = async () => {
      const { data, error } = await supabase.from("konfigurasi").select("*");
      if (error) console.error("Error fetching kontak:", error);
      else {
        const kontakObj = data.reduce((acc, item) => {
          if (item.nama === "wa_kyai" || item.nama === "wa_lurah") {
            acc[item.nama] = item.link;
          }
          return acc;
        }, {});
        setKontakInfo(kontakObj);
      }
    };
    fetchKontak();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("sending");

    try {
      // JANGAN LUPA GANTI DENGAN URL FORMSPREE ANDA
      const response = await fetch("https://formspree.io/f/xanjrqjb", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus("success");
        setFormData({ nama: "", email: "", pesan: "" });
      } else {
        throw new Error("Network response was not ok.");
      }
    } catch (error) {
      console.error("There was a problem with your fetch operation:", error);
      setFormStatus("error");
    }
  };

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

        {/* Mengubah layout menjadi 2 kolom di layar besar */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* === KOLOM KIRI (Alamat & Peta) === */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-green-800 mb-4">
                Alamat 1 (Putra)
              </h3>
              <p className="text-gray-700 mb-4">
                Desa Pamijen RT.06 RW.02, Kecamatan Baturraden, Banyumas, Jawa
                Tengah 53151
              </p>
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1166.7674590338254!2d109.22854247050398!3d-7.374184339161939!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e655fb47306dadd%3A0x76a01494eee6e816!2sPonpes%20Jogo%20Negoro!5e0!3m2!1sid!2sid!4v1752154036769!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Peta Alamat 1"
                ></iframe>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-green-800 mb-4">
                Alamat 2 (Putri)
              </h3>
              <p className="text-gray-700 mb-4">
                Gg. Nerbabu, Karangjambu, Purwanegara, Kec. Purwokerto Timur,
                Kab. Banyumas, Jawa Tengah 53127
              </p>
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.5255344193724!2d109.22964967456805!3d-7.40693609260323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e655f139469f771%3A0x546fcefd010656ff!2sPondok%20Pesantren%20Jogo%20Negoro%202!5e0!3m2!1sid!2sid!4v1752153335203!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Peta Alamat 2"
                ></iframe>
              </div>
            </div>
          </div>

          {/* === KOLOM KANAN (Kontak & Form) === */}
          <div>
            <h3 className="text-xl font-bold text-green-800 mb-4">
              Kontak & Media Sosial
            </h3>
            <div className="space-y-4 text-gray-700 mb-6">
              {/* Nomor Kyai Ulumudin */}
              {kontakInfo.wa_kyai && (
                <a
                  href={`https://wa.me/${kontakInfo.wa_kyai}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-green-700"
                >
                  <FaWhatsapp className="text-green-700 mr-3" size={20} />
                  <span>Kirim WA ke Kyai Ulumudin</span>
                </a>
              )}
              {/* Nomor Lurah Pondok */}
              {kontakInfo.wa_lurah && (
                <a
                  href={`https://wa.me/${kontakInfo.wa_lurah}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-green-700"
                >
                  <FaWhatsapp className="text-green-700 mr-3" size={20} />
                  <span>Kirim WA ke Lurah Pondok (Salma)</span>
                </a>
              )}
              {/* Link Instagram */}
              <a
                href="https://www.instagram.com/ponpesjogonegoro/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-green-700"
              >
                <FaInstagram className="text-green-700 mr-3" size={20} />
                <span>Ikuti kami di Instagram</span>
              </a>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-inner">
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                Tinggalkan Pesan
              </h3>
              {formStatus === "success" ? (
                <p className="text-center text-green-700 font-bold">
                  Terima kasih! Pesan Anda telah terkirim.
                </p>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
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
                      value={formData.nama}
                      onChange={handleInputChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                      required
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
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                      required
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
                      value={formData.pesan}
                      onChange={handleInputChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                      required
                    ></textarea>
                  </div>
                  {formStatus === "error" && (
                    <p className="text-red-500">
                      Gagal mengirim pesan. Silakan coba lagi.
                    </p>
                  )}
                  <div>
                    <button
                      type="submit"
                      disabled={formStatus === "sending"}
                      className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-700 hover:bg-green-800 disabled:bg-gray-400"
                    >
                      {formStatus === "sending" ? "Mengirim..." : "Kirim Pesan"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kontak;
