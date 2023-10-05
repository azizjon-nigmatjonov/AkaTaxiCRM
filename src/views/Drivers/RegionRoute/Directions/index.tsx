import { ExchangeIcon } from "../../../../components/IconGenerator/Svg";
import DirectionCard from "./DirectionCard";

const comeList = [
  {
    region: "Andijon viloyati",
    district: "Baliqchi tumani",
  },
  {
    region: "Andijon viloyati",
    district: "Asaka tumani",
  },
  {
    region: "Andijon viloyati",
    district: "shahrihon tumani",
  },
];

const goingList = [
  {
    region: "Toshkent shahar",
    district: "yashnabod tumani",
  },
];

const Directions = () => {
  return (
    <div className="grid grid-cols-2 gap-x-[14px] relative h-full">
      <div>
        <DirectionCard title="Qayerdan" list={comeList} direction="come" />
      </div>
      <div className="bg-white border border-[var(--lineGray)] w-[60px] h-[60px] rounded-[14px] flex items-center justify-center absolute top-[360px] left-1/2 -translate-x-1/2 cursor-pointer">
        <ExchangeIcon />
      </div>
      <div>
        <DirectionCard title="Qayerga" list={goingList} direction="go" />
      </div>
    </div>
  );
};

export default Directions;
