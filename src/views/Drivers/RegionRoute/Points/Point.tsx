import { useEffect, useState } from "react";
import { Collapse } from "@mui/material";
import { CheckLine } from "../../../../components/UI/IconGenerator/Svg";
import { ColorConstants } from "../../../../constants/website";
// import usePageRouter from "../../../../hooks/useObjectRouter";
import { PointData } from "../Logic";
// import { Closer } from "../../../../components/UI/Closer";
// import { useGetQueries } from "../../../../hooks/useGetQueries";

const PointSelector = ({
  step = 0,
  regions = [],
  color = "",
  selected = [],
  setSelected = () => {},
  open,
  setOpen,
}: {
  open: boolean;
  step: number;
  regions?: any;
  color: string;
  selected: any;
  setSelected: (val: any) => void;
  selectedHandler?: () => void;
  setOpen: (val: any) => void;
}) => {
  // const { navigateQuery } = usePageRouter();
  const { districtList, setLocalIds } = PointData();
  const [checkedList, setCheckedList]: any = useState([]);
  const [allSelect, setAllSelect] = useState(false);

  const handleCheck = (obj: any) => {
    const newList = selected;
    if (obj === "all") {
      let districtIds = [];
      const districtNewList = districtList;

      if (checkedList?.length !== districtList?.length) {
        districtIds = districtList.map((i: any) => i.id);
      }
      setCheckedList(districtIds);
      newList[step].list = districtNewList;
    } else if (checkedList.find((i: any) => i === obj.id)) {
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

  useEffect(() => {
    if (!selected[step]?.id) {
      setCheckedList([]);
    }
  }, [selected, step]);

  useEffect(() => {
    if (allSelect) {
      handleCheck("all");
    }
  }, [allSelect, districtList]);

  const handleList = (element: any) => {
    setCheckedList([]);
    // navigateQuery({
    //   start: "",
    //   end: "",
    // });

    const selectList: any = selected;

    selectList[step] = {
      ...element,
      list: [],
    };

    setSelected(selectList);
    setLocalIds("region", element.id);

    if (element.id === 22) {
      setAllSelect(true);
    } else {
      setAllSelect(false);
    }
  };

  const selectHanlder = () => {
    const list: any = selected;

    if (list[0].list.length || list[1].list.length) {
      // navigateQuery({
      //   start: list[0].list.length
      //     ? encodeURIComponent(list[0].list.map((i: any) => i.id).toString())
      //     : "",
      //   end: list[1].list.length
      //     ? encodeURIComponent(list[1].list.map((i: any) => i.id).toString())
      //     : "",
      // });

      setOpen(false);
    }
  };

  const clearFilter = () => {
    setSelected([{ list: [] }, { list: [] }]);
    setOpen(false);
    // navigateQuery({
    //   start: "",
    //   end: "",
    // });
  };

  return (
    <div className="w-full relative z-[90]">
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
                <>Tumanlar soni {selected[step].list?.length}</>
              )}
            </p>
          ) : (
            ""
          )}
        </div>
      </div>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <div className="absolute w-full z-[99] grid grid-cols-2 gap-x-5">
          <ul className="w-full bg-white border border-[var(--lightGray)] rounded-[18px] mt-2 px-4 shadow-xl max-h-[510px] overflow-y-scroll remove-scrol">
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
          {selected[step]?.id !== 22 && (
            <ul className="w-full bg-white border border-[var(--lightGray)] rounded-[18px] mt-2 overflow-hidden px-4 shadow-xl max-h-[510px] overflow-scroll remove-scrol">
              {districtList.length ? (
                <li
                  onClick={() => handleCheck("all")}
                  className={`py-2 cursor-pointer flex items-center justify-between font-medium`}
                >
                  <span>Barchasi</span>
                  <div
                    className={`w-[18px] h-[18px] rounded-[4px] border-2 ${
                      checkedList?.length === districtList?.length
                        ? "border-[var(--main500)] bg-[var(--main500)]"
                        : "border-[var(--lineGray)]"
                    }`}
                  >
                    {checkedList?.length === districtList?.length ? (
                      <CheckLine />
                    ) : (
                      ""
                    )}
                  </div>
                </li>
              ) : (
                ""
              )}
              {districtList.length
                ? districtList.map((item: any, index: number) => (
                    <li
                      key={index}
                      onClick={() => handleCheck(item)}
                      className={`py-2 cursor-pointer flex items-center justify-between  border-[var(--lineGray)] font-medium border-t`}
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
                  ))
                : ""}
            </ul>
          )}

          {step === 1 ? (
            <div className="grid grid-cols-2 gap-x-4 w-1/2 absolute bottom-[-50px] right-0">
              <button onClick={() => clearFilter()} className="cancel-btn">
                Bekor qilish
              </button>
              <button onClick={() => selectHanlder()} className="custom-btn">
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
            clearFilter()
          }}
        />
      )} */}
    </div>
  );
};

export default PointSelector;
