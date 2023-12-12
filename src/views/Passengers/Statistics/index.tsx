import CCard from "../../../components/CElements/CCard";
import StatisticsCard from "./Statistics";
import { StatisticsMap } from "./Statistics/Map";

const Statistics = () => {
  return (
    <>
      <div className="flex space-x-4">
        <CCard classes="w-full">{/* <StatisticsLineChart /> */}</CCard>
        <StatisticsCard />
      </div>
      <StatisticsMap />
    </>
  );
};

export default Statistics;
