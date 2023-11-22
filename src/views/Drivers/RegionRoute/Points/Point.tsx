import { useState } from "react";
import { Collapse } from "@mui/material";
import { ColorConstants } from "../../../../constants/website";
import { CheckLine } from "../../../../components/IconGenerator/Svg";

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
  loading: boolean;
  handleSelect: (val: any, val2: any) => void;
}) => {
  const [open, setOpen] = useState(false);

  const [checkedRegions, setcheckedRegions] = useState([]);

  return (
    <div className="w-full relative">
      <div
        onClick={() => setOpen((prev) => !prev)}
        className="bg-white rounded-[18px] border border-[var(--lightGray)] flex items-center p-[14px] space-x-2 cursor-pointer"
      >
        <div
          className="w-[32px] h-[32px] rounded-full font-medium text-white flex items-center justify-center uppercase"
          style={{
            background: element?.name?.uz ? color : ColorConstants.lineGray,
          }}
        >
          {element?.name?.uz ? element?.name?.uz?.substring(0, 2) : "XX"}
        </div>
        <span className="font-medium">
          {element?.name?.uz ? element?.name?.uz : "Manzilni tanlang"}
        </span>
      </div>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <div className="absolute w-full z-[99] flex space-x-2">
          <ul className="w-full bg-white border border-[var(--lightGray)] rounded-[18px] mt-2 overflow-hidden px-4">
            {regions?.map(
              (el: any, index: number, row: any) =>
                el.id !== checked.id && (
                  <li
                    key={index}
                    onClick={() => {
                      handleSelect(el, step);
                      setOpen(false);
                    }}
                    className={`py-2 cursor-pointer border-[var(--lineGray)] font-medium ${
                      element.id === el.id
                        ? "text-[var(--black)]"
                        : "text-[var(--gray)]"
                    } ${index === row.length - 1 ? "" : "border-b"}`}
                  >
                    {el.name.uz}
                  </li>
                )
            )}
          </ul>
          <ul className="w-full bg-white border border-[var(--lightGray)] rounded-[18px] mt-2 overflow-hidden px-4">
            <li className="py-2 cursor-pointer flex items-center justify-between border-b border-[var(--lineGray)] font-medium">
              <span>Chilonzor</span>
              <div className="w-[18px] h-[18px] rounded-[4px] border-2 border-[var(--mainLight)] bg-[var(--mainLight)]">
                <CheckLine />
              </div>
            </li>
          </ul>
        </div>
      </Collapse>
    </div>
  );
};

export default PointSelector;
