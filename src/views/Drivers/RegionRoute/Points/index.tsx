import { useEffect, useState } from "react";
import { ExchangeIcon } from "../../../../components/IconGenerator/Svg"; 
import PointSelector from "./Point";
import { useSelector } from "react-redux";
import { ColorConstants } from "../../../../constants/website";
import usePageRouter from "../../../../hooks/useObjectRouter";
import { useGetQueries } from "../../../../hooks/useGetQueries";

const Points = ({ hanldeSelect = () => {} }: { hanldeSelect: (val?: any) => void }) => {
  const [current, setCurrent] = useState(0);
  const regions = useSelector((state: any) => state.regions.regions);
  const [selected, setSelected] = useState<any>([]);
  const { navigateQuery } = usePageRouter();
  const { start, end } = useGetQueries();
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!start || !end) return;
    const first = regions.find((i: any) => i.id == start);
    const second = regions.find((i: any) => i.id == end);
    const data: any = [first, second];

    setSelected(data);

    setTimeout(() => {
      setLoading(false)
    }, 1000);
  }, [regions, start, end]);

  const handleSelect = (el: any, status: string) => {
    const list: any = selected;
    if (status === "first") {
      list[0] = el;
      navigateQuery({ start: el.id }, true);
    } else {
      list[1] = el;
      navigateQuery({ end: el.id }, true);
    }
    setSelected([]);
    hanldeSelect(list)
    setTimeout(() => {
      setSelected(list);
    }, 0);
  };

  const handleExchange = () => {
    const list: any = selected;
    const prev = list[0];
    list[0] = list[1];
    list[1] = prev;
    navigateQuery({ start: list[0].id, end: list[1].id }, true);

    setSelected([]);
    hanldeSelect(list)
    setTimeout(() => {
      setSelected(list);
    }, 0);
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
        loading={loading}
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
        loading={loading}
        color={current === 1 ? ColorConstants.darkerGreen : ColorConstants.ink}
      />
    </div>
  );
};

export default Points;
