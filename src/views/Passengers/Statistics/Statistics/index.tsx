import { ManIcon, WomenIcon } from "../../../../components/IconGenerator/Svg";
import { PercentCard } from "./PercentCard";
import { useEffect, useState } from "react";

interface IProps {
  data: {
    men: number;
    women: number;
  };
}
const StatisticsCard = ({ data }: IProps) => {
  const setDates = useState<any>([])[1];


  useEffect(() => {
    setDates([{ label: "Haftalik", value: "weekly" }]);
  }, []);
  // let total: number = data?.men + data?.women;

  return (
    <div className="flex items-center divide-x-2 divide-[var(--lineGray)]">
      <PercentCard
        icon={<ManIcon />}
        text="Erkak"
        percent={Number(data?.men)}
      />
      <PercentCard
        icon={<WomenIcon />}
        text="Ayol"
        percent={Number(data?.women)}
        color="#FF35BA"
      />
    </div>
  )
};

export default StatisticsCard;
