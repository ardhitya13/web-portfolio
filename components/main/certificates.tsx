"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CERTIFICATES } from "@/constants";

export const Certificates = () => {
  const [activeCert, setActiveCert] = useState<string | null>(null);

  return (
    <section
      id="certificates"
      className="w-full min-h-screen flex flex-col items-center justify-center px-10 py-20"
    >
      {/* Judul */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-white mb-4"
      >
        Sertifikat
      </motion.h2>

      {/* Deskripsi */}
      <p className="text-gray-400 mb-12 text-center max-w-[700px]">
        Berikut adalah sertifikat yang saya peroleh dari kegiatan akademik
        maupun non-akademik sebagai pendukung kemampuan di bidang teknologi
        informasi.
      </p>

      {/* Grid Sertifikat */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {CERTIFICATES.map((cert, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-[#0f0b2a] rounded-xl p-4 border border-purple-500/30 cursor-pointer"
            onClick={() => setActiveCert(cert.image)}
          >
            <Image
              src={cert.image}
              alt={cert.title}
              width={400}
              height={300}
              className="rounded-lg object-cover"
            />
            <h3 className="text-white mt-4 font-semibold">
              {cert.title}
            </h3>
            <p className="text-gray-400 text-sm">
              {cert.issuer}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Modal Preview */}
      {activeCert && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setActiveCert(null)}
        >
          <div className="relative max-w-4xl w-full p-5">
            <Image
              src={activeCert}
              alt="Pratinjau Sertifikat"
              width={1200}
              height={800}
              className="rounded-xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};
