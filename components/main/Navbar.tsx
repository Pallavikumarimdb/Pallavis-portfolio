import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
  <div className="w-full h-[65px] fixed top-0 backdrop-blur-md z-50 grid place-items-center px-4 sm:px-6 md:px-10">
  <div className="w-full h-full flex items-center justify-center m-auto px-[10px]">
    <div className="w-full max-w-[500px] h-full flex items-center justify-center">
      <div className="flex items-center justify-between w-full border border-[#7042f861] bg-[#0300145e] px-4 sm:px-6 py-2 rounded-full text-gray-200 overflow-x-auto gap-3">
        {Socials.map((social) => (
          <a href={social.link} target="_blank" key={social.key} className="min-w-[24px]">
            <Image
              src={social.src}
              alt={social.name}
              width={24}
              height={24}
            />
          </a>
        ))}
      </div>
    </div>
  </div>
</div>

  );
};

export default Navbar;
