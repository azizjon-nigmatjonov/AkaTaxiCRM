import { useState } from "react";
import { ExchangeIcon } from "../../../../components/UI/IconGenerator/Svg";
import PointSelector from "./Point";
import { ColorConstants } from "../../../../constants/website";
// import usePageRouter from "../../../../hooks/useObjectRouter";
import { usePlaces } from "../../../../hooks/usePlaces";

const Points = ({
  selected,
  handleChange = () => {},
  setSelected = () => {},
}: {
  selected?: any;
  handleChange: () => void;
  setSelected: (val: any) => void;
}) => {
  const [current, setCurrent] = useState(0);
  const { regionList } = usePlaces();
  const [open, setOpen] = useState(false);
  // const { navigateQuery } = usePageRouter();

  const handleExchange = () => {
    const list: any = selected;
    const prev = list[0];
    list[0] = list[1];
    list[1] = prev;
    // console.log('list', list);
    
    // navigateQuery(
    //   {
    //     start:
    //       encodeURIComponent(list[0].list?.map((li: any) => li.id).join(",")) ??
    //       "",
    //     end: encodeURIComponent(list[1].list?.map((li: any) => li.id)),
    //   } ?? "",
    //   true
    // );
    
    setCurrent((prev) => (prev === 0 ? 1 : 0));
    setSelected([{}, {}]);
    handleChange()
    setTimeout(() => {
      setSelected(list);
    }, 0);
  };

  const handleOpen = (val: boolean) => {
    setOpen(val)
    if (!val) {
      handleChange()
    }
  }

  return (
    <div className="flex items-center justify-between space-x-2">
      <PointSelector
        step={0}
        regions={regionList}
        selected={selected}
        open={open}
        setOpen={handleOpen}
        setSelected={setSelected}
        color={current === 0 ? ColorConstants.darkerGreen : ColorConstants.ink}
        selectedHandler={handleExchange}
      />

      <div className="w-[60px]">
        <div
          onClick={() => {
   
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
        setOpen={handleOpen}
        setSelected={setSelected}
        color={current === 1 ? ColorConstants.darkerGreen : ColorConstants.ink}
        selectedHandler={handleExchange}
      />
    </div>
  );
};

export default Points;
