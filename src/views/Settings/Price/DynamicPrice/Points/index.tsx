import { useState } from "react";
import { ExchangeIcon } from "../../../../../components/IconGenerator/Svg";
import PointSelector from "./Point";

const Points = () => {
  const [current, setCurrent] = useState(0);
  const list = [
    {
      label: "Andijon viloyati",
      value: "andijan",
    },
    {
      label: "Buxoro viloyati",
      value: "buxora",
    },
  ];
  return (
    <div className="flex items-center justify-between space-x-2">
      <PointSelector step="first" element={list[current === 0 ? 0 : 1]} />
      <div className="w-[60px]">
        <div
          onClick={() => setCurrent((prev) => (prev === 0 ? 1 : 0))}
          className="bg-white border border-[var(--lineGray)] w-[60px] h-[60px] rounded-[14px] flex items-center justify-center cursor-pointer"
        >
          <ExchangeIcon />
        </div>
      </div>
      <PointSelector step="second" element={list[current === 1 ? 0 : 1]} />
    </div>
  );
};

export default Points;
