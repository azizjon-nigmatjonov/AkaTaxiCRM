import CSelect from "../../../../components/CElements/CSelect";
import CCard from "../../../../components/CElements/CCard";
import CDriver from "../../../../components/CElements/CDivider";
import { MainIcon, WomenIcon } from "../../../../components/IconGenerator/Svg";
import { PercentCard } from "./PercentCard";
import { useEffect, useState } from "react";

const StatisticsCard = () => {
  const [dates, setDates] = useState<any>([]);

  useEffect(() => {
    setDates([{ label: "Haftalik", value: "weekly" }])
  }, [])
  return (
    <div className="space-y-4">
      <CCard style={{ minHeight: "0px" }}>
        <h3 className="font-[600]">Umumiy yo‘lovchilar</h3>
        <p className="text-[var(--gray)] mb-4">8,499 ta</p>
        <div className="flex flex-col">
          <PercentCard icon={<MainIcon />} text="Erkak" percent={100} />
          <CDriver classes="my-4" />
          <PercentCard
            icon={<WomenIcon />}
            text="Ayol"
            percent={0}
            color="#BB16D6"
          />
        </div>
      </CCard>
      <CCard style={{ minHeight: "0px" }}>
        <CSelect options={dates} />
        <div className="mt-4">
          <PercentCard
            icon={<MainIcon />}
            text="Aktiv yo‘lovchilar"
            percent={100}
            column={true}
          />
        </div>
      </CCard>
    </div>
  );
};

export default StatisticsCard;
