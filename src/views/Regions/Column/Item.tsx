import { ArrowDoubleIcon } from "../../../components/UI/IconGenerator/Svg";
import { EditIcon } from "../../../components/UI/IconGenerator/Svg";
import { useState } from "react";

export const ListItem = () => {
  const [open, setOpen] = useState(false);
  return (
    <li
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="h-[50px] flex items-center px-5 border-t border-[var(--gray20)] cursor-pointer flex justify-between relative bg-white"
    >
      <p className="w-full bg-white relative z-[2] h-full flex items-center">
        Nomi 1 viloyati
      </p>

      {open && (
        <button className="absolute right-[20px] z-[3] bg-[var(--gray50)] w-[30px] h-[30px] flex items-center justify-center rounded-full border border-[var(--gray20)] common-shadow">
          <EditIcon width={14} fill="black" />
        </button>
      )}
      {open && (
        <button className="absolute right-[-60px] w-[60px] rounded-r-full flex justify-end items-center h-[50px] border border-[var(--gray20)] pr-20px z-[2]">
          <ArrowDoubleIcon />
        </button>
      )}
    </li>
  );
};
