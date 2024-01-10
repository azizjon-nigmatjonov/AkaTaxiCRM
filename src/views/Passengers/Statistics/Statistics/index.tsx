import CSelect from "../../../../components/CElements/CSelect";
import CCard from "../../../../components/CElements/CCard";
import CDriver from "../../../../components/CElements/CDivider";
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
  const [dates, setDates] = useState<any>([]);

  useEffect(() => {
    setDates([{ label: "Haftalik", value: "weekly" }]);
  }, []);
  // let total: number = data?.men + data?.women;
  return (
    <div className="space-y-4">
      <CCard style={{ minHeight: "0px" }}>
        <h3 className="font-[600]">Umumiy yo‘lovchilar</h3>
        <p className="text-[var(--gray)] mb-4">{0}</p>
        <div className="flex flex-col">
          <PercentCard
            icon={<ManIcon />}
            text="Erkak"
            percent={parseInt(data?.men) }
          />
          <CDriver classes="my-4" />
          <PercentCard
            icon={<WomenIcon />}
            text="Ayol"
            percent={parseInt(data?.women) }
            color="#BB16D6"
          />
        </div>
      </CCard>
      <CCard style={{ minHeight: "0px" }}>
        <CSelect options={dates} />
        <div className="mt-4">
          <PercentCard
            icon={
              parseInt(data?.men) > parseInt(data?.women) ? (
                <ManIcon />
              ) : (
                <WomenIcon />
              )
            }
            text="Aktiv yo‘lovchilar"
            percent={
              parseInt(data?.men) > parseInt(data?.women)
                ? parseInt(data?.men) 
                : parseInt(data?.women)
            }
            column={true}
          />
        </div>
      </CCard>
    </div>
  );
};

export default StatisticsCard;
