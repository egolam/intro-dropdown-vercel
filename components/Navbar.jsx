"use client";

import Logo from "@/public/logo.svg";
import Image from "next/image";

import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import MobileSidebar from "./MobileSidebar";
import AuthButtons from "./AuthButtons";
import NavElements from "./NavElements";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  

  return (
    <nav className="h-20 flex relative items-center justify-between p-4 md:text-sm font-medium text-[#686868]">
      <Image src={Logo} />

      <div className="md:flex items-center gap-10 flex-1 ml-16 hidden h-full">
        <NavElements />
        <AuthButtons />
      </div>

      <aside
        className={`fixed h-screen bg-white top-0 right-0 md:hidden transition-all z-10 overflow-x-hidden md:px-0 pt-20 md:pt-0 ${
          isOpen ? "w-[66.66667%]" : "w-0"
        }`}
      >
        <MobileSidebar />
      </aside>

      <span
        onClick={() => setIsOpen((prev) => !prev)}
        className="md:hidden z-20 hover:text-[#151515] text-3xl"
      >
        {isOpen ? <MdClose /> : <RxHamburgerMenu />}
      </span>
    </nav>
  );
};

export default Navbar;
