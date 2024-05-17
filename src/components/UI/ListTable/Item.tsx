import { ArrowDoubleIcon } from "../IconGenerator/Svg";
import { EditIcon } from "../IconGenerator/Svg";
import { useState } from "react";

export const ListItem = ({
  element,
  id,
  type,
  handleClickActions,
}: {
  element: any;
  id?: string;
  type: string;
  handleClickActions: (val: string, val2: number) => void;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <li
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className={`h-[50px] flex items-center border-t border-[var(--gray20)] cursor-pointer flex justify-between relative `}
    >
      <p
        onClick={() => handleClickActions(type, element.id)}
        className={`w-full relative z-[2] h-full flex items-center px-5 ${
          id == element.id ? "bg-[var(--lineGray)]" : ""
        }`}
      >
        {element.name.uz}
      </p>

      {open && (
        <button
          onClick={() => handleClickActions(`edit_${type}`, element.id)}
          className="absolute right-[20px] z-[3] bg-[var(--gray50)] w-[30px] h-[30px] flex items-center justify-center rounded-full border border-[var(--gray20)] z-[5] common-shadow"
        >
          <EditIcon width={14} fill="black" />
        </button>
      )}
      {open && (
        <button className="absolute right-[-40px] w-[40px] rounded-r-full flex justify-end items-center h-[50px] border border-[var(--gray20)] pr-[8px] z-[3] bg-white">
          <ArrowDoubleIcon />
        </button>
      )}
    </li>
  );
};
