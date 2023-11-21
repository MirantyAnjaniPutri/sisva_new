import { FOOTER_LINKS, SOCIALS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "public/Sisva_Logo_-01.png";

const Footer = () => {
  return (
    <footer className="flexCenter mb-24">
      <div className="padding-container max-container flex w-full flex-col gap-14">
        <div className="flex flex-wrap items-start justify-center gap-[10%] md:flex-row">
          <div className="flex flex-col w-auto h-auto sm:justify-between md:flex-1">
            <Link href="/" className="mb-10 pl-20">
              <Image src={Logo} alt="logo" width={190} height={100} />
            </Link>
          </div>

          <div className="flex-wrap gap-10 w-auto h-auto sm:justify-between md:flex-1">
            {FOOTER_LINKS.map((columns) => (
              <FooterColumn title={columns.title}>
                <ul className="w-[300px] flex flex-col gap-4 text-gray-30">
                  {columns.links.map((link) => (
                    <Link href="/" key={link}>
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            {/* <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <Link
                    href="/"
                    key={link.label}
                    className="flex gap-4 md:flex-col lg:flex-row"
                  >
                    <p className="whitespace-nowrap">{link.label}:</p>
                    <p className="medium-14 whitespace-nowrap text-blue-70">
                      {link.value}
                    </p>
                  </Link>
                ))}
              </FooterColumn>
            </div> */}
          </div>
          <div className="flex-wrap gap-7 w-auto h-auto sm:justify-between md:flex-1">
            <FooterColumn title={SOCIALS.title}>
              <ul className="flex-col flex gap-4 text-gray-30 w-auto h-auto">
                {SOCIALS.links.map((link, index) => (
                  <Link href="/" key={SOCIALS.keys[index]}>
                    <div className="flex items-center gap-2">
                      <Image src={link} alt="logo" width={24} height={24} />
                      <span>{SOCIALS.labels[index]}</span>
                    </div>
                  </Link>
                ))}
              </ul>
            </FooterColumn>
          </div>
        </div>
      </div>
    </footer>
  );
};

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="text-[18px] font-[700] whitespace-nowrap">{title}</h4>
      <div className="opacity-[65%]">{children}</div>
    </div>
  );
};

export default Footer;
