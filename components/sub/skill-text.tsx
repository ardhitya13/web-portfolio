"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      {/* Badge */}
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[8px] px-[12px] border border-[#7042f88b] opacity-[0.9]"
      >
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[13px]">
          Fullstack Development Skills
        </h1>
      </motion.div>

      {/* Title */}
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[30px] text-white font-medium mt-[12px] text-center mb-[15px]"
      >
        Teknologi yang saya kuasai dan gunakan dalam proyek nyata
      </motion.div>

      {/* Description */}
      <motion.div
        variants={slideInFromRight(0.5)}
        className="cursive text-[18px] text-gray-300 mb-10 mt-[10px] text-center max-w-[750px]"
      >
        Saya memiliki pengalaman sebagai Fullstack Developer dalam membangun
        aplikasi berbasis web menggunakan React.js dan Next.js (TSX) di sisi
        frontend, serta Node.js dengan Express.js dan Prisma di sisi backend.
        Untuk pengelolaan data, saya terbiasa menggunakan MySQL,
        dan MongoDB, serta menerapkan Tailwind CSS untuk antarmuka yang modern
        dan responsif.
      </motion.div>
    </div>
  );
};
