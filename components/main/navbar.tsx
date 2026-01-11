"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { NAV_LINKS, SOCIALS } from "@/constants";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001427] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex items-center justify-between relative">

        {/* KIRI — Logo */}
        <Link href="#about-me" className="flex items-center gap-3 z-10">
          <div className="relative w-[50px] h-[50px] rounded-full overflow-hidden border-2 border-purple-500">
            <Image
              src="/ardhitya.jpg"
              alt="Ardhitya Danur Siswondo"
              fill
              draggable={false}
              className="object-cover"
            />
          </div>

          <div className="hidden md:flex font-bold text-gray-300">
            Ardhitya Danur Siswondo
          </div>
        </Link>

        {/* TENGAH — NAV MENU */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
          <div className="flex items-center gap-8 border border-[rgba(112,66,248,0.38)] bg-[rgba(3,0,20,0.37)] px-8 py-2 rounded-full text-gray-200">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="cursor-pointer hover:text-purple-400 transition"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>

        {/* KANAN — SOSIAL */}
        <div className="hidden md:flex flex-row gap-5 z-10">
          {SOCIALS.map(({ link, name, icon: Icon }) => (
            <Link
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              key={name}
            >
              <Icon className="h-6 w-6 text-white hover:text-purple-400 transition" />
            </Link>
          ))}
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-white focus:outline-none text-4xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="absolute top-[65px] left-0 w-full bg-[#030014] p-5 flex flex-col items-center text-gray-300 md:hidden">
          <div className="flex flex-col items-center gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="cursor-pointer hover:text-purple-400 transition text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}
          </div>

          <div className="flex justify-center gap-6 mt-6">
            {SOCIALS.map(({ link, name, icon: Icon }) => (
              <Link
                href={link}
                target="_blank"
                rel="noreferrer noopener"
                key={name}
              >
                <Icon className="h-8 w-8 text-white hover:text-purple-400 transition" />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
