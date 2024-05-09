import CSelect from "../../../components/CElements/CSelect";
import CDriver from "../../../components/CElements/CDivider";
import { WrapperCard } from "../../../components/UI/WrapperCard";
import { StatisticsList } from "./List";

const options = [
  {
    label: "Bugun",
    value: "today",
  },
];

export const FindoutStatistics = () => {
  return (
    <WrapperCard classes="p-[0]">
      <div className="p-24px flex items-center justify-between">
        <div>
          <h3 className="text-lg font-[600] text-[var(--gray90)]">
            Statistika
          </h3>
          <p className="text-[var(--gray60)]">
            Userlarning bizni qayerdan topgani bo’yicha
          </p>
        </div>
        <div className="w-[240px]">
          <CSelect options={options} />
        </div>
      </div>
      <CDriver classes="mb-24px" />

      <StatisticsList />
    </WrapperCard>
  );
};
