// src/pages/Tentang.jsx
import React from "react";
// 1. Impor hook 'useInView' dari library
import { useInView } from "react-intersection-observer";

const Tentang = () => {
  // 2. Gunakan hook-nya.
  // - `ref` akan kita pasang ke elemen yang diamati.
  // - `inView` akan bernilai `true` jika elemen terlihat, dan `false` jika tidak.
  // - `triggerOnce: true` berarti animasi hanya berjalan sekali.
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Elemen dianggap terlihat jika 10% areanya masuk layar
  });

  return (
    // 3. Pasang `ref` di sini dan atur kelas CSS berdasarkan nilai `inView`
    <div
      id="tentang"
      ref={ref}
      className={`bg-white py-16 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ease-in-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Tentang Pondok Pesantren Jogo Negoro
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-600">
            Mengenal lebih dekat sejarah, visi, dan misi kami dalam mencetak
            generasi Rabbani.
          </p>
        </div>

        {/* Bagian Sejarah */}
        <div className="mt-20">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h3 className="text-2xl font-bold text-green-800 mb-4">
                Sejarah Singkat
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Pondok Pesantren Jogo Negoro didirikan pada tahun 1990 oleh KH.
                Ahmad Subroto dengan cita-cita luhur untuk menciptakan lembaga
                pendidikan Islam yang mengakar pada tradisi salaf namun tetap
                terbuka dengan perkembangan zaman. Berawal dari sebuah surau
                kecil, kini kami telah berkembang menjadi lembaga yang menaungi
                ratusan santri dari berbagai daerah.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Nama "Jogo Negoro" yang berarti "Menjaga Negara" dipilih sebagai
                pengingat bahwa santri tidak hanya bertanggung jawab atas
                agamanya, tetapi juga atas keutuhan dan kemajuan bangsa dan
                negara.
              </p>
            </div>
            <div className="mt-10 lg:mt-0">
              <img
                className="rounded-lg shadow-xl"
                src="https://thumb.viva.id/vivatangerang/1265x711/2025/04/22/68078bfb3b7b7-ilustrasi-santri-mengaji_tangerang.jpg"
                alt="Santri mengaji"
              />
            </div>
          </div>
        </div>

        {/* Bagian Visi & Misi */}
        <div className="mt-20 bg-gray-50 p-12 rounded-lg">
          <h3 className="text-2xl font-bold text-green-800 text-center mb-8">
            Visi & Misi
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Visi</h4>
              <p className="text-gray-700">
                "Menjadi lembaga pendidikan Islam terdepan dalam membentuk
                generasi yang hafal Al-Qur'an, faqih dalam ilmu agama, berakhlak
                mulia, dan siap berkontribusi untuk negara."
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Misi</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  Menyelenggarakan program Tahfidzul Qur'an yang sistematis dan
                  terukur.
                </li>
                <li>
                  Melaksanakan kajian kitab kuning sebagai basis keilmuan
                  santri.
                </li>
                <li>
                  Membekali santri dengan keterampilan modern yang relevan.
                </li>
                <li>
                  Menanamkan nilai-nilai akhlakul karimah dalam kehidupan
                  sehari-hari.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tentang;
