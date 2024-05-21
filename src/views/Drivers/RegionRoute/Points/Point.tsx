import { useState } from "react";
import { Collapse } from "@mui/material";
import { CheckLine } from "../../../../components/UI/IconGenerator/Svg";
import { ColorConstants } from "../../../../constants/website";
import usePageRouter from "../../../../hooks/useObjectRouter";
import { PointData } from "../Logic";

const PointSelector = ({
  step = 0,
  regions = [],
  color = "",
  selected = [],
  setSelected = () => {},
  open,
  setOpen,
}: // selectedHandler = () => { }
{
  open: boolean;
  step: number;
  regions?: any;
  color: string;
  selected: any;
  setSelected: (val: any) => void;
  selectedHandler?: () => void;
  setOpen: (val: any) => void;
}) => {
  const { navigateQuery } = usePageRouter();
  const { districtList, setLocalIds } = PointData();
  const [checkedList, setCheckedList]: any = useState([]);

  const handleCheck = (obj: any) => {
    const newList = selected;
    if (checkedList.find((i: any) => i === obj.id)) {
      setCheckedList(checkedList.filter((i: any) => i !== obj.id));
      newList[step].list = newList[step].list.filter(
        (item: any) => item.id !== obj.id
      );
    } else {
      setCheckedList((prev: any) => [...prev, obj.id]);
      newList[step].list = [...newList[step].list, obj];
    }

    setSelected(newList);
  };

  const handleList = (element: any) => {
    const selectList: any = selected;

    selectList[step] = {
      ...element,
      list: [],
    };

    setSelected(selectList);
    setLocalIds("region", element.id);
  };

  const seledHandler = () => {
    const list: any = selected;

    if (list[0].list.length && list[1].list.length) {
      navigateQuery({
        start: encodeURIComponent(
          list[0].list.map((i: any) => i.id).toString()
        ),
        end: encodeURIComponent(list[1].list.map((i: any) => i.id).toString()),
      });

      setOpen(false);
    }
  };
  const clearFilter = () => {
    setSelected([{}, {}]);
    setOpen(false);
    navigateQuery({
      start: "",
      end: "",
    });
  };

  return (
    <div className="w-full relative z-[99]">
      <div
        onClick={() => setOpen(true)}
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
            ? selected[step].name.uz.substring(0, 2)
            : "XX"}
        </div>

        <div className="font-medium">
          {selected[step]?.name?.uz
            ? selected[step].name.uz
            : "Manzilni tanlang"}{" "}
          {selected[step].list?.length ? (
            <p className="text-[var(--gray)]">
              {" "}
              {selected[step].list.length < 2 ? (
                <>
                  {selected[step].list.map((i: any) => (
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
        <div className="absolute w-full z-[99] flex space-x-5">
          <ul className="w-full bg-white border border-[var(--lightGray)] rounded-[18px] mt-2 overflow-hidden px-4 shadow-xl max-h-[510px] overflow-scroll">
            {regions?.map((el: any, index: number, row: any) => (
              <li
                key={index}
                onClick={() => handleList(el)}
                className={`py-2 cursor-pointer border-[var(--lineGray)] font-medium ${
                  el.id === selected[step]?.id
                    ? "text-[var(--black)]"
                    : "text-[var(--gray)]"
                } ${index === row.length - 1 ? "" : "border-b"}`}
              >
                {el.name.uz}
              </li>
            ))}
          </ul>

          <ul className="w-full bg-white border border-[var(--lightGray)] rounded-[18px] mt-2 overflow-hidden px-4 shadow-xl max-h-[510px] overflow-scroll">
            {districtList.map((item: any, index: number) => (
              <li
                key={index}
                onClick={() => handleCheck(item)}
                className={`py-2 cursor-pointer flex items-center justify-between  border-[var(--lineGray)] font-medium ${
                  index === districtList.length - 1 ? "" : "border-b"
                }`}
              >
                <span>{item?.name?.uz}</span>
                <div
                  className={`w-[18px] h-[18px] rounded-[4px] border-2 ${
                    checkedList?.includes(item.id)
                      ? "border-[var(--main500)] bg-[var(--main500)]"
                      : "border-[var(--lineGray)]"
                  }`}
                >
                  {checkedList?.includes(item.id) ? <CheckLine /> : ""}
                </div>
              </li>
            ))}
          </ul>
          {step === 1 ? (
            <div className="grid grid-cols-2 gap-x-4 w-1/2 absolute bottom-[-50px] right-0">
              <button onClick={() => clearFilter()} className="cancel-btn">
                Bekor qilish
              </button>
              <button onClick={() => seledHandler()} className="custom-btn">
                Tasdiqlsah
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
      </Collapse>

      {/* {open && (
        <Closer
          handleClose={() => {
            seledHandler();
            // handleSelect(selected, step);

            setOpen(false);
          }}
        />
      )} */}
    </div>
  );
};

export default PointSelector;
