import React from "react";
import Image from "next/image";
import content from "public/desktop/landing page/Content-Banner.svg";
import ornament_panjang from "public/desktop/landing page/Ornament-1.png";
import ornament_kiri from "public/desktop/landing page/Ornament.png";

const section1_hero = () => {
  return (
    <div className="bg-[#FFFFFF] border-b border-[#F96756] border-solid width-[100%] overflow-hidden relative">
      <div className="absolute bottom-0 left-0 z-0 w-full pl-[-30]">
        <Image
          src={ornament_kiri}
          alt="ornament kiri"
          width={200}
          height={200}
        ></Image>
      </div>
      <div className="w-[100%] z-1 justify-center relative">
        <div className="absolute left-10 top-5">
          <Image
            src={content}
            alt="content-banner"
            width={800}
            height={800}
            className="transform translate-x-1/5"
          ></Image>
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/4 top-40 p-5 z-1 flex flex-wrap ml-75 gap-5">
          <div className="text-[#11003E] text-[64px] font-[700] mx-auto max-w-[750px]">
            Solusi Digitalisasi dan Modernisasi Sekolah
          </div>
          <div className="text-[#11003E] text-[20px] font-[400] mx-auto max-w-[750px]">
            memberikan kemudahan pembelajaran kepada siswa dan tenaga pendidik
            dengan sistem integrasi yang efisien
          </div>
        </div>
      </div>
      <div className="object:fill z-1 bottom-0">
        <Image
          src={ornament_panjang}
          alt="ornament panjang"
          className="w-full h-auto"
        ></Image>
      </div>
    </div>
  );
};

export default section1_hero;
