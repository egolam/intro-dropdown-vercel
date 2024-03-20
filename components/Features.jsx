"use client";

import TodoIcon from "@/public/icon-todo.svg";
import CalendarIcon from "@/public/icon-calendar.svg";
import RemindersIcon from "@/public/icon-reminders.svg";
import PlanningIcon from "@/public/icon-planning.svg";
import { MdKeyboardArrowDown } from "react-icons/md";
import Image from "next/image";
import { useState } from "react";

const Features = ({ hoverDisabled }) => {
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
      onClick={() => setIsOpen((prev) => !prev)}
      onMouseEnter={() => handleHoverOver()}
      onMouseLeave={() => handleHoverExit()}
      className="md:h-full cursor-pointer md:flex md:items-center"
    >
      <div className="flex flex-col relative ">
        <div className="flex items-center gap-2">
          <p>Features</p>
          <MdKeyboardArrowDown
            style={{ rotate: isOpen ? "180deg" : "" }}
            className="transition-all"
          />
        </div>

        <div
          onClick={() => setIsOpen(false)}
          className={`md:absolute -left-1/2 md:mt-8 mt-6 flex flex-col gap-4 md:shadow-2xl md:rounded-lg md:p-6 text-nowrap pl-6 ${
            isOpen ? "flex" : "hidden"
          }`}
        >
          <div className="flex items-center gap-3 hover:text-[#151515] cursor-pointer">
            <Image src={TodoIcon} />
            <p>Todo List</p>
          </div>
          <div className="flex items-center gap-3 hover:text-[#151515] cursor-pointer">
            <Image src={CalendarIcon} />
            <p>Calendar</p>
          </div>
          <div className="flex items-center gap-3 hover:text-[#151515] cursor-pointer">
            <Image src={RemindersIcon} />
            <p>Reminders</p>
          </div>
          <div className="flex items-center gap-3 hover:text-[#151515] cursor-pointer">
            <Image src={PlanningIcon} />
            <p>Planning</p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Features;
