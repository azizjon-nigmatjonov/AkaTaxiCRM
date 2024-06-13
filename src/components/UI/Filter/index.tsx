import React, { useMemo, useState } from "react";
import "./style.scss";
import { Closer } from "../Closer";
import { FilterData } from "./Logic";
import { FilterHeader } from "./Header";

interface Props {
  children?: React.ReactNode;
  filter: boolean;
  classes?: any;
  minWidth?: number;
  filterParams: any;
  setFilterParams: (val: any) => void;
  setOpen: (val: any) => void;
}

const Filters = ({
  children,
  filter = false,
  minWidth,
  filterParams = {},
  setOpen = () => {},
  setFilterParams = () => {},
}: Props) => {
  const [clear, setClear] = useState(true);
  const { handleSaveFilter, clearFilter } = FilterData({
    setClear,
    filterParams,
    setFilterParams,
  });

  const handleSubmit = () => {
    handleSaveFilter(filterParams);
    setOpen(false);
  };

  const rightPosition = useMemo(() => {
    if (filter) return 0
    if (minWidth) {
      return `-${minWidth}px`
    } else {
      return "-360px"
    }
  }, [minWidth, filter])

  return (
    <>
      <FilterHeader
        filter={filter}
        clearFilter={clearFilter}
        setOpen={setOpen}
      />

      <div
        className={`filterDrawer fixed duration-200 flex flex-col`}
        style={{ right: rightPosition }}
      >
        <div className="p-7" style={{ minWidth }}>
          {clear && (
            <div>
              <h2 className="text-[var(--black)] mb-5 text-xl font-[600]">
                Filtrlar
              </h2>
              {children}
              <div className="mt-6 flex space-x-3">
                <button className="custom-btn" onClick={() => handleSubmit()}>
                  Tasdiqlash
                </button>
                <button
                  className="cancel-btn"
                  onClick={() => clearFilter("all")}
                >
                  Tozalash
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      {filter && (
        <Closer
          handleClose={() => {
            setOpen(!filter);
          }}
          classes="bg-[#15151555] z-[98]"
        />
      )}
    </>
  );
};

export default Filters;
