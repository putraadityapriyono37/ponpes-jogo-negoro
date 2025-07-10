// src/pages/Program.jsx
import React from "react";
import { useInView } from "react-intersection-observer";

// Data kitab yang dikaji
const kitabData = [
  "Amtsilah Tashrifiyah",
  "Al Jurumiyyah",
  "Safinah",
  "Taqrib",
  "Ta’limul Muta’alim",
  "Risalah Haid",
  "Sulam Taufiq",
  "Fathul Qorib",
  "Uqud al-Lijain",
  "dan lainnya.",
];

const Program = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      id="program"
      ref={ref}
      className={`bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ease-in-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Program & Kajian
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-600">
            Fokus utama pada pendalaman Ilmu Fiqh dan dasar-dasar keislaman.
          </p>
        </div>

        <div className="mt-12 max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold text-green-800 mb-6 text-center">
            Kitab-kitab yang Dikaji
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-4">
            {kitabData.map((kitab, index) => (
              <div key={index} className="flex items-center">
                <span className="text-green-600 mr-2">✓</span>
                <span className="text-gray-700">{kitab}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Program;
