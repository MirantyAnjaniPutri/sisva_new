import React from "react";
import Image from "next/image";
import vector_1 from "public/desktop/landing page/vector-1-reading-book.svg";
import vector_2 from "public/desktop/landing page/user-friendly.svg";
import vector_3 from "public/desktop/landing page/vector-kampus-merdeka.svg";

const section2 = () => {
  const customGradient = {
    background: "linear-gradient(-45deg, #F96756, #F9614F, #F8604F, #F96756)",
  };

  return (
    <div
      className="jutify-center items-center gap-10 w-full relative overflow-hidden"
      style={customGradient}
    >
      <div className="w-[80%] flex flex-wrap justify-center items-center mx-auto">
        {/* All in one */}
        <div className="w-1/3 h-auto flex flex-column items-center p-5">
          <Image src={vector_1}></Image>
          <div className="flex flex-col gap-2 p-2">
            <div className="text-[#FFFFFF] text-[24px] font-[700]">
              All in one
            </div>
            <div className="text-[#FFFFFF] text-[20px] font-[400]">
              Semua kebutuhan pendidikan menjadi satu
            </div>
          </div>
        </div>
        {/* User Friendly */}
        <div className="w-1/3 h-auto flex flex-column items-center p-5">
          <Image src={vector_2}></Image>
          <div className="flex flex-col gap-2 p-2">
            <div className="text-[#FFFFFF] text-[24px] font-[700]">
              User Friendly
            </div>
            <div className="text-[#FFFFFF] text-[20px] font-[400]">
              Mudah untuk digunakan untuk menunjang kegiatan pendidikan
            </div>
          </div>
        </div>
        {/* Kampus Merdeka */}
        <div className="w-1/3 h-auto flex flex-column items-center p-5">
          <Image src={vector_3}></Image>
          <div className="flex flex-col gap-2 p-2">
            <div className="text-[#FFFFFF] text-[24px] font-[700]">
              Kampus Merdeka
            </div>
            <div className="text-[#FFFFFF] text-[20px] font-[400]">
              Optimalisasi & adaptasi dengan kurikulum terbaru
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default section2;
