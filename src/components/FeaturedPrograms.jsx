// src/components/FeaturedPrograms.jsx
import React from "react";

const programs = [
  {
    name: "Tahfidzul Qur'an",
    description:
      "Program intensif menghafal Al-Qur'an dengan bimbingan ustadz berpengalaman.",
  },
  {
    name: "Kajian Kitab Kuning",
    description:
      "Mendalami khazanah keilmuan Islam melalui kitab-kitab klasik para ulama.",
  },
  {
    name: "Pendidikan Formal",
    description:
      "Mengintegrasikan kurikulum nasional (SMP/SMA) dengan pendidikan diniyah.",
  },
];

const FeaturedPrograms = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Program Unggulan Kami
        </h2>
        <p className="text-gray-600 mb-12">
          Fokus pada pembentukan karakter dan keunggulan akademik.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-green-800 mb-4">
                {program.name}
              </h3>
              <p className="text-gray-700">{program.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedPrograms;
