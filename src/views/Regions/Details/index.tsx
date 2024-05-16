import { useState } from "react";
import {
  EditIcon,
  ArrowDoubleIcon,
} from "../../../components/UI/IconGenerator/Svg";

export const Column = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-r border-[var(--gray20)]">
      <div className="header bg-[var(--gray25)] h-[44px] px-5 flex items-center">
        <p className="text-12px text-[var(--gray60)]">Viloyatlar</p>
      </div>
      <ul>
        <li
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          className="h-[50px] flex items-center px-5 border-t border-[var(--gray20)] flex justify-between relative z-[2] bg-white group"
        >
          <p className="w-full bg-white relative z-[2] h-full flex items-center">
            Nomi 1 viloyati
          </p>

          {open && (
            <button className="absolute right-[20px] z-[3] hidden group-hover:block">
              <EditIcon fill="black" />
            </button>
          )}
          {open && (
            <button className="absolute right-[-60px] w-[100px] rounded-full flex justify-end items-center h-[50px] border border-[var(--gray20)] pr-20px z-[1]">
              <ArrowDoubleIcon />
            </button>
          )}
        </li>
      </ul>
    </div>
  );
};
