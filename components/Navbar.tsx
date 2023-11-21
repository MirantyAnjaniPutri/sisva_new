"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Logo from "public/Sisva_Logo_-01.png";
import { NAV_LINKS } from "@/constants";
import Button from "./Button";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [activePath, setActivePath] = useState(pathname);
  useEffect(() => {
    setActivePath(pathname);
  }, [pathname]);
  return (
    <nav className="bg-white flex items-center justify-between max-container px-6 lg:px-20 3xl:px-0 relative z-30 py-5">
      <Link href="/">
        <Image src={Logo} alt="logo" width={100} height={72} />
      </Link>
      <ul className="hidden h-full gap-8 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="flex items-center justify-center cursor-position pb-1.5 transition-all text-[16px]  hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
        <div className="lg:flex items-center justify-center hidden gap-8">
          <div className="opacity-70 p-5">|</div>
          <Link
            href={activePath === "/" ? "/hubungi-kami" : "/"}
            className={`${
              activePath === "/"
                ? "bg-transparent text-[#F96756] border-2 border-[#F96756]"
                : "bg-transparent text-[#F96756] border-2 border-[#F96756]"
            } px-4 py-2 rounded-full transition duration-300 hover:bg-orange-500 hover:text-white`}
            style={{
              fontFamily: "Khumb sans, sans-serif",
              fontWeight: "400",
              fontSize: "16px",
            }}
          >
            {activePath === "/" ? "Hubungi Kami" : "Explore"}
          </Link>
        </div>
      </ul>

      <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
};

export default Navbar;
