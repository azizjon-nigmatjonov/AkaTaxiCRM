import { useState } from "react";
import { ExchangeIcon } from "../../../../components/UI/IconGenerator/Svg";
import PointSelector from "./Point";
import { ColorConstants } from "../../../../constants/website";
import usePageRouter from "../../../../hooks/useObjectRouter";
import { usePlaces } from "../../../../hooks/usePlaces";

const Points = ({
  handleChange = () => { },
}: {
  handleChange: (val?: any) => void;
}) => {
  const [current, setCurrent] = useState(0);
  const { regionList } = usePlaces()
  const [selected, setSelected] = useState<any>([{list: []}, {list: []}]);
  const [open, setOpen] = useState(false);
  const { navigateQuery } = usePageRouter();


  const handleExchange = () => {
    const list: any = selected;
    const prev = list[0];
    list[0] = list[1];
    list[1] = prev;



    navigateQuery({ start: encodeURIComponent(list[0].list?.map((li: any) => li.id).join(',')) ?? "", end: encodeURIComponent(list[1].list?.map((li: any) => li.id)) } ?? "", true)

    setSelected([{}, {}]);
    handleChange(list);
    setTimeout(() => {
      setSelected(list);
    }, 0);
  };


  return (
    <div className="flex items-center justify-between space-x-2">

      <PointSelector
        step={0}
        regions={regionList}
        selected={selected}
        open={open}
        setOpen={setOpen}
        setSelected={setSelected}
        color={current === 0 ? ColorConstants.darkerGreen : ColorConstants.ink}
        selectedHandler={handleExchange}
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
        regions={regionList}
        selected={selected}
        open={open}
        setOpen={setOpen}
        setSelected={setSelected}
        color={current === 1 ? ColorConstants.darkerGreen : ColorConstants.ink}
        selectedHandler={handleExchange}
      />
    </div>
  );
};

export default Points;
