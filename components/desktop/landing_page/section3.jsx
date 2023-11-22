import React from "react";
import Image from "next/image";
import vector_1 from "public/desktop/landing page/vector-1-mengenal-sisva.svg";
import vector_2 from "public/desktop/landing page/vector-2-mengenal-sisva.svg";
import vector_1a from "public/desktop/landing page/vector-puzzle.svg";
import vector_2a from "public/desktop/landing page/vector-user-friendly.svg";
import vector_3a from "public/desktop/landing page/vector-3-kebutuhan-pendidikan.svg";
import foto_kiri from "public/desktop/landing page/foto-mengenal-sisva-kiri.svg";

const section3 = () => {
  return (
    <div className="w-auto bg-[#11003E] flex flex-column justify-self-start overflow-hidden">
      <div className="w-auto h-full">
        <Image src={foto_kiri} className="h-full left-0"></Image>
      </div>
      <div className="p-10">
        <div className="text-[#FFFFFF] text-[64px] font-[700] p-2">
          Mengenal Sisva
        </div>
        <div className="p-2 pb-5">
          <Image src={vector_1}></Image>
        </div>
        <div className="text-[#FFFFFF] text-[20px] font-[400] p-2 w-4/5">
          SISVA berfungsi untuk meningkatkan efektivitas kinerja sekolah dalam
          manajemen dan ruang kelas, serta memfasiliatsi dekolah dalam
          pengembangan sistem pembelajaran dan kurikulum.
        </div>
        <div className="p-2 pb-5">
          <Image src={vector_2}></Image>
        </div>
        <div className="text-[#FFFFFF] text-[20px] font-[400] p-2 w-4/5">
          SISVA adalah alat dan fasilitator dalam pengelolaan sekolah serta
          kegiatan pembelajaran antara guru dan siswa.
        </div>
        {/* Column foto 3 */}
        <div className="flex flex-column justify-between gap-20 w-4/5 pt-10">
          {/* Solusi Terintegrasi */}
          <div className="container bg-gradient-to-r from-[#225ED5] to-[#1F8CD3] p-2 w-[300px] rounded-[25px]">
            <div className="flex flex-col items-center justify-center">
              <div className="p-5">
                <Image src={vector_1a}></Image>
              </div>
              <div className="text-[#FFFFFF] text-[22px] text-center font-[400] p-2">
                Solusi Terintegrasi
              </div>
            </div>
          </div>

          {/* User Friendly */}
          <div className="container bg-gradient-to-r from-[#225ED5] to-[#1F8CD3] p-2 w-[300px] rounded-[25px]">
            <div className="flex flex-col items-center justify-center">
              <div className="p-5">
                <Image src={vector_2a}></Image>
              </div>
              <div className="text-[#FFFFFF] text-[22px] text-center font-[400] p-2">
                User Friendly
              </div>
            </div>
          </div>

          {/* Kebutuhan Pendidikan */}
          <div className="container bg-gradient-to-r from-[#225ED5] to-[#1F8CD3] p-2 w-[300px] rounded-[25px]">
            <div className="flex flex-col items-center justify-center">
              <div className="p-5">
                <Image src={vector_3a}></Image>
              </div>
              <div className="text-[#FFFFFF] text-[22px] text-center font-[400] p-2">
                Sesuai Kebutuhan Pendidikan
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default section3;
