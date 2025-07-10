// src/pages/Tentang.jsx
import React from "react";
import { useInView } from "react-intersection-observer";

// Pastikan Anda sudah meletakkan foto di folder assets/images
// dan nama filenya sesuai dengan yang di-import di sini.
import FotoKeluarga from "../assets/images/keluarga-pengasuh.jpg";

const Tentang = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
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
        </div>

        {/* Bagian Sejarah */}
        <div className="mt-16 prose lg:prose-lg max-w-full text-gray-700 text-justify">
          <h3 className="text-2xl font-bold text-green-800 mb-4 text-center">
            Sejarah Singkat
          </h3>
          <p>
            Pondok Pesantren Jogo Negoro didirikan pada tahun 2017 bertempat di
            Desa Pamijen Kecamatan Baturraden. Pendirinya bapak kyai Ulumudin
            dengan didukung istrinya, Ibu Nyai Siti Sofuro. Sebelum berdiri
            pesantren ini, sering berdatangan tamu kepada beliau untuk
            menanyakan Ilmu Hikmah. Kemudian beliau sowan kepada K.H. Amir
            Ma’ruf Tempuran, Magelang. Atas saran sang guru, beliau diperintah
            untuk melakukan Riyadhoh, dengan mengamalkan Manaqib dan berpuasa.
            Tentunya dalam berdirinya pesantren ini, bapak kyai Ulumudin meminta
            izin terlebih dahulu kepada guru-gurunya. Nama “Jogo Negoro” ini
            beliau angkat sebagai nama pesantren yang merupakan nama dari bupati
            pertama Wonosobo dan sesuai saran dari guru beliau.
          </p>
          <p>
            Dimulai tahun 2013 s/d 2015, bermula dari jamaah manaqib dengan
            jumlah sampai puluhan orang. Kemudian beliau mengajar pengaosan
            dengan anak-anak remaja Desa Pamijen dengan jumlah 60 anak. Serta,
            mengadakan TPQ atau madrasah untuk anak-anak warga Desa Pamijen.
            Kemudian, beliau mendirikan Pondok Pesantren Jogo Negoro pada tahun
            2017.
          </p>
          <p>
            Di tahun 2019, datang santri yang merupakan Mahasiswa IAIN
            Purwokerto yang berdomisili dekat dari Pondok Pesantren Jogo Negoro.
            Mereka datang pada saat kegiatan dan pulang kembali ke tempat
            tinggal masing-masing setelah kegiatan selesai. Seiring dengan
            bertambahnya santri, maka pada tahun 2021, Pondok Pesantren Jogo
            Negoro resmi bermitra dengan UIN SAIZU, dengan jumlah santri lebih
            dari 90 dan sebagian santri putri menempati asrama yang ada di Desa
            Karang Jambu sampai sekarang.
          </p>
          <blockquote className="border-l-4 border-green-700 pl-4 italic text-gray-800">
            "Janganlah berharap kepada selain Allah SWT. dan harus selalu berani
            melangkah dan berbuat. Niscaya, ilmu akan terasa. Tentunya dengan
            Istiqomah, menjadi manfaat dan berkah."
            <cite className="block not-italic mt-2 font-semibold">
              - Kyai Ulumudin
            </cite>
          </blockquote>
        </div>

        {/* Section Foto Keluarga */}
        <div className="my-16">
          <img
            src={FotoKeluarga}
            alt="Keluarga Pengasuh Pondok Pesantren Jogo Negoro"
            className="w-full max-w-3xl mx-auto rounded-lg shadow-xl"
          />
        </div>

        {/* Bagian Profil Pengasuh */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-green-800 mb-8 text-center">
            Profil Pengasuh
          </h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-xl font-bold text-gray-800 mb-2">
                Kyai Ulumudin
              </h4>
              <p className="text-gray-700 mb-4 text-sm text-justify">
                Kelahiran Wonosobo, 15 Oktober 1980. Beliau berasal dari
                keluarga petani biasa, putra dari bapak Ahmad dan Ibu Sofiyah,
                yang merupakan anak bungsu dari 8 bersaudara. Menurut adat
                disana, bahwa seorang anak bungsu memiliki sedikit kemungkinan
                untuk berpindah domisili, dan beliau juga menjadi kepala
                Madrasah Diniyyah Al Islach Kejiwan, Wonosobo. Pada tahun 2008,
                beliau menikahi gadis dari Desa Pamijen Kecamatan Baturraden,
                putri dari bapak Abdul Muchit (jalur nasab Syekh Imam Rozi
                Sokaraja) dan ibu Musrifah. Dikaruniai dua orang putri. Sampai
                sekarang bapak Kyai Ulumudin Bersama istri dan anak-anaknya
                berdomisili di Desa Pamijen, Kecamatan Baturraden.
              </p>
              <h5 className="font-semibold mb-2">Riwayat Pendidikan:</h5>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>
                  Pondok Pesantren Sirojul Mukhlasin Magelang selama 5 tahun,
                  dibawah asuhan K.H. Ahmad bin Mukhlasin, seorang putra dari
                  Sang Proklamator (pencipta bambu runcing). Beliau belajar`
                  Nahwu sampai Alfiyah dan Ilmu Fiqh (Safinah-Fathul
                  Mu’in/Fathul Wahab)
                </li>
                <li>
                  Pondok Pesantren Miftahul Huda Siwatu, Kecamatan Watu Malang,
                  Wonosobo. Beliau berguru dengan Gus Masrur putra dari Simbah
                  Ghozali selama 2 tahun.
                </li>
                <li>
                  Tahun 2017, beliau berguru kepada ulama besar, Syekh Johari
                  Umar (Sohibul Manaqib Jawahirul Makhani) kemudian mendapatkan
                  Surat Izin Meng-ijazahi para santrinya.
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-xl font-bold text-gray-800 mb-2">
                Ibu Nyai Siti Sofuro
              </h4>
              <p className="text-gray-700 mb-4 text-sm text-justify">
                Berasal dari Desa Pamijen, putri dari bapak Abdul Muchit (jalur
                nasab Syekh Imam Rozi Sokaraja) dan ibu Musrifah.
              </p>
              <h5 className="font-semibold mb-2">Riwayat Pendidikan:</h5>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>
                  Pondok Pesantren At Taujieh Leler, Banyumas selama 3 tahun
                </li>
                <li>Pondok Pesantren Al- Ittihad Solo Tigo selama 3 tahun</li>
                <li>Pondok Pesantren Al-Hidayah Magelang selama 4 tahun</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bagian Visi & Misi */}
        <div className="mt-16 bg-green-50 p-12 rounded-lg text-justify">
          <h3 className="text-2xl font-bold text-green-800 text-center mb-8">
            Visi & Misi
          </h3>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Visi</h4>
              <p className="text-gray-700">
                "Membangun generasi yang tangguh dan menebar kemanfaatan serta
                kerahmatan dunia akherat."
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Misi</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  Menyelenggarakan pembelajaran Al-Qur’an dan kitab kuning yang
                  praktis dan sistematis pada usia dini
                </li>
                <li>
                  Melakukan pendidikan dasar-dasar keIslaman berdasarkan
                  Al-Qur’an dan Al-Hadits Ijma’ Qiyas (Ahlu Sunnah Wal Jamaah)
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
