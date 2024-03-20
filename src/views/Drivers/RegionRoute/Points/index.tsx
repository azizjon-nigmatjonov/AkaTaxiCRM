import { useState } from "react";
import { ExchangeIcon } from "../../../../components/IconGenerator/Svg";
import PointSelector from "./Point";
import { useSelector } from "react-redux";
import { ColorConstants } from "../../../../constants/website";
import usePageRouter from "../../../../hooks/useObjectRouter";

const Points = ({
  handleChange = () => {},
}: {
  handleChange: (val?: any) => void;
}) => {
  const [current, setCurrent] = useState(0);
  const regions = useSelector((state: any) => state.regions.regions);
  const [selected, setSelected] = useState<any>([]);
  const { navigateQuery } = usePageRouter();
    
  const handleExchange = () => {
    const list: any = selected;
    const prev = list[0];
    list[0] = list[1];
    list[1] = prev;
    navigateQuery({ start: list[0].id, end: list[1].id }, true);

    setSelected([]);
    handleChange(list);
    setTimeout(() => {
      setSelected(list);
    }, 0);
  };

  
  return (
    <div className="flex items-center justify-between space-x-2">
      
      <PointSelector
        step={0}
        regions={regions}
        selected={selected}
        setSelected={setSelected}
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
        step={1}
        regions={regions}
        selected={selected}
        setSelected={setSelected}
        color={current === 1 ? ColorConstants.darkerGreen : ColorConstants.ink}
      />
    </div>
  );
};

export default Points;
