import { useState } from "react";
import { Collapse } from "@mui/material";

const PointSelector = ({
  step,
  element = {},
  regions = [],
  handleSelect = () => {},
  checked = {},
  color = "",
}: {
  step: string;
  element: any;
  regions?: any;
  checked?: any;
  color: string;
  handleSelect: (val: any, val2: any) => void;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full relative">
      <div
        onClick={() => setOpen((prev) => !prev)}
        className="bg-white rounded-[18px] border border-[var(--lightGray)] flex items-center p-[14px] space-x-2"
      >
        <div
          className="w-[32px] h-[32px] rounded-full font-medium text-white flex items-center justify-center uppercase"
          style={{ background: color }}
        >
          {element?.name?.uz?.substring(0, 2)}
        </div>
        <span className="font-medium">{element?.name?.uz}</span>
      </div>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <div className="absolute w-full">
          <ul className="bg-white border border-[var(--lightGray)] rounded-[18px] mt-2 overflow-hidden">
            {regions?.map(
              (el: any, index: number) =>
                el.id !== checked.id && (
                  <li
                    key={index}
                    onClick={() => {
                      handleSelect(el, step);
                      setOpen(false);
                    }}
                    className={`hover:bg-[var(--lightGray)] px-4 py-2 cursor-pointer ${
                      element.id === el.id ? "bg-[var(--lightGray)]" : ""
                    }`}
                  >
                    {el.name.uz}
                  </li>
                )
            )}
          </ul>
        </div>
      </Collapse>
    </div>
  );
};

export default PointSelector;
