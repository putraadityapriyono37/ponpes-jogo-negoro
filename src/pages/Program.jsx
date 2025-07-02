// src/pages/Program.jsx
import React from "react";
import { useInView } from "react-intersection-observer";

// Kita buat data programnya di sini. Nanti, data ini akan kita pindahkan ke Firebase.
const programData = [
  {
    title: "Tahfidzul Qur'an (Menghafal Al-Qur'an)",
    description:
      "Program unggulan yang berfokus pada hafalan Al-Qur'an 30 Juz dengan metode yang sistematis, didukung setoran harian dan evaluasi berkala. Santri dibimbing untuk mencapai hafalan yang mutqin (kuat).",
    icon: "📖", // Emoji sebagai ikon sementara
  },
  {
    title: "Dirasah Islamiyah (Kajian Kitab Kuning)",
    description:
      "Mendalami ilmu-ilmu syar'i seperti Fiqih, Tauhid, Akhlak, dan Nahwu-Shorof melalui kajian kitab-kitab turats (klasik) karya para ulama Ahlus Sunnah wal Jama'ah.",
    icon: "📚",
  },
  {
    title: "Pendidikan Formal (SMP & SMA)",
    description:
      "Sinergi antara kurikulum pendidikan nasional dari Kemendikbud dengan kurikulum diniyah pondok. Santri mendapatkan ijazah formal yang diakui negara tanpa meninggalkan pendidikan agama.",
    icon: "🏫",
  },
  {
    title: "Bahasa Arab & Inggris",
    description:
      "Program intensif untuk penguasaan bahasa internasional. Bahasa Arab untuk mendalami Al-Qur'an dan kitab, serta Bahasa Inggris untuk komunikasi global.",
    icon: "🌍",
  },
  {
    title: "Ekstrakurikuler & Keterampilan",
    description:
      "Mengembangkan bakat dan minat santri melalui berbagai kegiatan seperti kaligrafi, hadrah, pencak silat, public speaking (muhadharah), dan kewirausahaan.",
    icon: "🎨",
  },
];

const Program = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Elemen dianggap terlihat jika 10% areanya masuk layar
  });
  return (
    <div
      id="program"
      ref={ref}
      className={`bg-white py-16 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ease-in-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Program Pendidikan
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-600">
            Komitmen kami untuk menyelenggarakan pendidikan yang holistik dan
            terintegrasi.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {programData.map((program, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 flex flex-col"
            >
              <div className="text-5xl mb-4">{program.icon}</div>
              <h3 className="text-xl font-bold text-green-800 mb-3">
                {program.title}
              </h3>
              <p className="text-gray-700 flex-grow">{program.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Program;
