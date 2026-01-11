import Link from "next/link";
import { FOOTER_DATA } from "@/constants";

export const Footer = () => {
  return (
    <div className="w-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">

        {/* BARIS UTAMA */}
        <div className="w-full flex flex-row justify-around items-start flex-wrap">
          {FOOTER_DATA.map((column) => (
            <div
              key={column.title}
              className="min-w-[200px] flex flex-col items-center"
            >
              {/* JUDUL — DIBIKIN TINGGI SAMA */}
              <h3 className="font-bold text-[16px] h-[24px] mb-4">
                {column.title}
              </h3>

              {/* ISI */}
              {column.data.map(({ icon: Icon, name, link }) => (
                <Link
                  key={`${column.title}-${name}`}
                  href={link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center my-[10px]"
                >
                  {Icon && <Icon className="mr-2" />}
                  <span className="text-[15px]">{name}</span>
                </Link>
              ))}
            </div>
          ))}
        </div>

        {/* COPYRIGHT */}
        <div className="mt-6 mb-[20px] text-[15px] text-center">
          © Ardhitya Danur Siswondo {new Date().getFullYear()} Inc. All rights reserved.
        </div>
      </div>
    </div>
  );
};
