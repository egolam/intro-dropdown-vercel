"use client";

import { MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";

const Company = ({ hoverDisabled }) => {
  const [isOpen, setIsOpen] = useState(false);

  function handleHoverOver() {
    if (hoverDisabled) return;
    setIsOpen(true);
  }

  function handleHoverExit() {
    if (hoverDisabled) return;
    setIsOpen(false);
  }

  return (
    <li
      onClick={() => setIsOpen(prev => !prev)}
      onMouseEnter={() => handleHoverOver()}
      onMouseLeave={() => handleHoverExit()}
      className="md:h-full cursor-pointer align-middle md:flex md:items-center group"
    >
      <div className="flex flex-col relative text-nowrap">
        <div className="flex items-center gap-2">
          <p>Company</p>
          <MdKeyboardArrowDown
            style={{ rotate: isOpen ? "180deg" : "" }}
            className="transition-all"
          />
        </div>

        <div
          className={`md:absolute overflow-hidden md:mt-8 flex-col gap-4 md:shadow-2xl md:rounded-lg md:p-6 pl-6 mt-6 ${
            isOpen ? "flex" : "hidden"
          }`}
        >
          <p className="hover:text-[#151515] cursor-pointer">History</p>
          <p className="hover:text-[#151515] cursor-pointer">Our Team</p>
          <p className="hover:text-[#151515] cursor-pointer">Blog</p>
        </div>
      </div>
    </li>
  );
};

export default Company;
