import { useState } from "react";
import { Collapse } from "@mui/material";
import { ColorConstants } from "../../../../../constants/website";

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
        className="bg-white rounded-[18px] border border-[var(--lightGray)] flex items-center p-[14px] space-x-2 cursor-pointer"
      >
        <div
          className="w-[32px] h-[32px] rounded-full font-medium text-white flex items-center justify-center uppercase"
          style={{ background: element?.name?.uz ? color : ColorConstants.lineGray }}
        >
          {element?.name?.uz ? element?.name?.uz?.substring(0, 2) : 'XX'}
        </div>
        <span className="font-medium">{element?.name?.uz ? element?.name?.uz : 'Manzilni tanlang'}</span>
      </div>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <div className="absolute w-full z-[2]">
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
