import React from "react";
import Image from "next/image";
import image1 from "public/desktop/landing page/optimized-adaptable.svg";
import ornament1 from "public/desktop/landing page/ornament-optimized-adaptable.svg";
import image2 from "public/desktop/landing page/merdeka-mengajar.svg";

const section5 = () => {
  return (
    <div className="bg-[#B9B9B9] w-4/5 mx-auto flex justify-self-center mt-10 rounded-[25px] pl-5 pt-5 pr-5 relative">
      <div className="relative left-0 bottom-0">
        <Image src={ornament1} className="z-0 absolute bottom-0"></Image>
        <div className="rounded-[25px] bg-white p-3 z-2 relative left-0 bottom-20">
          <Image src={image2}></Image>
        </div>
        <Image src={image1} className="z-1 relative"></Image>
      </div>
    </div>
  );
};

export default section5;
