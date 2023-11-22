import React from "react";
import Image from "next/image";
import image1 from "public/desktop/landing page/sisva-administration.svg";
import image2 from "public/desktop/landing page/sisva-classroom.svg";
import image3 from "public/desktop/landing page/website-sekolah.svg";
import image4 from "public/desktop/landing page/website-ppdb.svg";

const section4 = () => {
  return (
    <div className="w-full h-auto bg-[#FFFFFF] pt-5">
      <div className="w-[97%] bg-[#F96756] left-0 bottom-0">
        <div className="text-[#FFFFFF] text-[50px] font-[800] p-5 text-center">
          Layanan SISVA dari Hulu ke Hilir
        </div>
        <div className="flex flex-col gap-15 justify-center pl-20 pr-20">
          <div className="flex gap-10 mb-5">
            <div className="flex flex-column justify-center w-1/2 bg-[#FFFFFF] rounded-[25px] h-auto p-5 items-center">
              <div className="p-2">
                <Image src={image1} width={250}></Image>
              </div>
              <div className="flex flex-wrap">
                <div className="text-[#444444] text-[26px] text-center font-[700] p-2">
                  SISVA Administration
                </div>
                <div className="text-[#444444] text-[20px] font-[400] p-2">
                  Sistem manajemen administratif sekolah untuk mengakomodasi
                  kebutuhan tenaga Administrasi, Guru, Siswa dan Orang Tua dalam
                  semua kebutuhan.
                </div>
              </div>
            </div>
            <div className="flex flex-column justify-center w-1/2 bg-[#FFFFFF] rounded-[25px] h-auto p-5 items-center">
              <div className="p-2">
                <Image src={image2} width={250}></Image>
              </div>
              <div className="flex flex-wrap">
                <div className="text-[#444444] text-[26px] text-center font-[700] p-2">
                  SISVA Classroom
                </div>
                <div className="text-[#444444] text-[20px] font-[400] p-2">
                  Fasilitator dalam proses belajar mengajar di kelas untuk
                  meningkatkan fokus siswa dan guru dalam menunjang
                  produktivitas.
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-10 mb-10">
            <div className="flex flex-column justify-center w-1/2 bg-[#FFFFFF] rounded-[25px] h-auto p-5 items-center">
              <div className="p-2">
                <Image src={image3} width={250}></Image>
              </div>
              <div className="flex flex-wrap">
                <div className="text-[#444444] text-[26px] text-center font-[700] p-2">
                  Website Sekolah
                </div>
                <div className="text-[#444444] text-[20px] font-[400] p-2">
                  Membuat dan memanajemen website sekolah sebagai laman
                  publikasi yang selalu terbarukan dengan fungsionalitas
                  maksimal sesuai kebutuhan sekolah.
                </div>
              </div>
            </div>
            <div className="flex flex-column justify-center w-1/2 bg-[#FFFFFF] rounded-[25px] h-auto p-5 items-center">
              <div className="p-2">
                <Image src={image4} width={250}></Image>
              </div>
              <div className="flex flex-wrap">
                <div className="text-[#444444] text-[26px] text-center font-[700] p-2">
                  Website PPDB
                </div>
                <div className="text-[#444444] text-[20px] font-[400] p-2">
                  Efisiensi proses penerimaan peserta didik baru dengan website
                  PPDB khusus yang dirancang sesuai kebutuhan sekolah
                  terintegrasi melalui SISVA Administration.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default section4;
