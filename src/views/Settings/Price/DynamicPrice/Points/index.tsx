import { useState } from "react";
import { ExchangeIcon } from "../../../../../components/IconGenerator/Svg";
import PointSelector from "./Point";
import { ColorConstants } from "../../../../../constants/website";
import usePageRouter from "../../../../../hooks/useObjectRouter";

const Points = ({
  regions = [],
  selected = [],
}: {
  regions: any;
  selected: any;
}) => {
  const [current, setCurrent] = useState(0);
  const { navigateQuery } = usePageRouter();

  const handleSelect = (el: any, status: string) => {
    const list: any = selected;
    if (status === "first") {
      list[0] = el;
      navigateQuery({ start: el.id }, true);
    } else {
      list[1] = el;
      navigateQuery({ end: el.id }, true);
    }
  };

  const handleExchange = () => {
    const list: any = selected;
    const prev = list[0];
    list[0] = list[1];
    list[1] = prev;
    navigateQuery({ start: list[0].id, end: list[1].id }, true);
  };

  return (
    <div className="flex items-center justify-between space-x-2">
      <PointSelector
        step="first"
        element={selected[0]}
        regions={regions}
        handleSelect={handleSelect}
        checked={selected[1]}
        color={current === 0 ? ColorConstants.darkerGreen : ColorConstants.ink}
      />

      <div className="w-[60px]">
        <div
          onClick={() => {
            setCurrent((prev) => (prev === 0 ? 1 : 0));
            handleExchange();
          }}
          className="bg-white border border-[var(--lineGray)] w-[60px] h-[60px] rounded-[14px] flex items-center justify-center cursor-pointer"
        >
          <ExchangeIcon />
        </div>
      </div>
      <PointSelector
        step="second"
        element={selected[1]}
        checked={selected[0]}
        regions={regions}
        handleSelect={handleSelect}
        color={current === 1 ? ColorConstants.darkerGreen : ColorConstants.ink}
      />
    </div>
  );
};

export default Points;
