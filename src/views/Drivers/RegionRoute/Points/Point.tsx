import { useState } from "react";
import { Collapse } from "@mui/material";
import { CheckLine } from "../../../../components/IconGenerator/Svg";
import { Closer } from "../../../../components/Closer";
import { ColorConstants } from "../../../../constants/website";

const PointSelector = ({
  step = 0,
  regions = [],
  color = "",
  selected = [],
  setSelected = () => { },
}: {
  step: number;
  regions?: any;
  color: string;
  selected: any;
  setSelected: (val: any) => void;
}) => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(false);
  const [checkedList, setCheckedList] = useState([]);
console.log(active);


  const handleList = (element: any) => {
    const selectList: any = selected;
    if (step === 0) {
      selectList[0] = element;
    } else {
      selectList[1] = element;
    }
    setActive((prev) => !prev);
    setSelected(selectList);
  };
  


  const handleCheck = (parent: any, child: any) => {    
    const obj: any = {
      ...child,
      checked: !child.checked,
    };
    const checked: any = [];
    const list: any = [];

    parent.list?.forEach((element: any) => {
      if (element.id === obj.id) {
        element = obj;
      }
      if (element.checked) checked.push(obj);
      list.push(element);
    });
    setCheckedList(checked);
    handleList({ ...parent, list });
  };



  return (
    <div className="w-full relative z-[99]">
      <div
        onClick={() => setOpen((prev) => !prev)}
        className="bg-white rounded-[18px] border border-[var(--lightGray)]  flex items-center h-[70px] px-[14px] space-x-2 cursor-pointer"
      >
        <div
          className="w-[32px] h-[32px] rounded-full font-medium text-white flex items-center justify-center uppercase"
          style={{
            background: selected[step]?.name?.uz
              ? color
              : ColorConstants.lineGray,
          }}
        >
          {selected[step]?.name?.uz
            ? selected[step]?.name?.uz?.substring(0, 2)
            : "XX"}
        </div>

        <div className="font-medium">
          {selected[step]?.name?.uz
            ? selected[step]?.name?.uz
            : "Manzilni tanlang"}
          {checkedList?.length ? (
            <p className="text-[var(--gray)]">
              {checkedList?.length < 2 ? (
                <>
                  {checkedList?.map((i: any) => (
                    <span>{i.name.uz}</span>
                  ))}
                </>
              ) : (
                <>Tumanlar soni {checkedList.length}</>
              )}
            </p>
          ) : (
            ""
          )}
        </div>
      </div>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <div className="absolute w-full z-[99] flex space-x-2">
          <ul className="w-full bg-white border border-[var(--lightGray)] rounded-[18px] mt-2 overflow-hidden px-4 shadow-xl">
            {regions?.map((el: any, index: number, row: any) => (
              <li
                key={index}
                onClick={() => handleList(el)}
                className={`py-2 cursor-pointer border-[var(--lineGray)] font-medium ${el.id === selected[step]?.id
                    ? "text-[var(--black)]"
                    : "text-[var(--gray)]"
                  } ${index === row.length - 1 ? "" : "border-b"}`}
              >
                {el.name.uz}
              </li>
            ))}
          </ul>
          <ul className="w-full bg-white border border-[var(--lightGray)] rounded-[18px] mt-2 overflow-hidden px-4 shadow-xl">
            {selected[step]?.list?.map((item: any, index: number) => (
              <li
                key={index}
                onClick={() => handleCheck(selected[step], item)}
                className="py-2 cursor-pointer flex items-center justify-between border-b border-[var(--lineGray)] font-medium"
              >
                <span>{item?.name?.uz}</span>
                <div
                  className={`w-[18px] h-[18px] rounded-[4px] border-2 ${item.checked
                      ? "border-[var(--mainLight)] bg-[var(--mainLight)]"
                      : "border-[var(--lineGray)]"
                    }`}
                >
                  {item.checked ? <CheckLine /> : ""}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Collapse>

      {open && (
        <Closer
          handleClose={() => {
            // handleSelect(selected, step);
            setOpen(false);
          }}
        />
      )}
    </div>
  );
};

export default PointSelector;
