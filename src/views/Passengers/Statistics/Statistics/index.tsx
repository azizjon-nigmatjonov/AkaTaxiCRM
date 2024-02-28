import { ManIcon, WomenIcon } from "../../../../components/IconGenerator/Svg";
import { PercentCard } from "./PercentCard";
import { useEffect, useState } from "react";

interface IProps {
  data: {
    men: string;
    women: string;
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
        percent={parseInt(data?.men)}
      />
      <PercentCard
        icon={<WomenIcon />}
        text="Ayol"
        percent={parseInt(data?.women)}
        color="#BB16D6"
      />
    </div>
  )
};

export default StatisticsCard;
