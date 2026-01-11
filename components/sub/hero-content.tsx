"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      {/* LEFT CONTENT */}
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        {/* Badge */}
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[10px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Portofolio Web Developer
          </h1>
        </motion.div>

        {/* Main Title */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-4 mt-6 text-6xl font-bold text-white max-w-[650px]"
        >
          <span>
            Halo, saya{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Ardhitya Danur Siswondo
            </span>
          </span>
          <span className="text-4xl text-gray-300">
            Mahasiswa D3 Teknik Informatika
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[650px]"
        >
          Saya memiliki pengalaman dalam pengembangan website menggunakan
          Laravel, Node.js, dan Next.js. Portofolio ini berisi proyek akademik
          dan tim seperti Website Rental Mobil, Kursus Bahasa Asing, serta
          PSTEAM yang dikembangkan selama perkuliahan.
        </motion.p>

        {/* Button */}
        <motion.a
          variants={slideInFromLeft(1)}
          href="#projects"
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[220px]"
        >
          Lihat Portofolio
        </motion.a>
      </div>

      {/* RIGHT IMAGE */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/hero-bg.svg"
          alt="Hero Illustration"
          height={650}
          width={650}
          draggable={false}
          className="select-none"
        />
      </motion.div>
    </motion.div>
  );
};
