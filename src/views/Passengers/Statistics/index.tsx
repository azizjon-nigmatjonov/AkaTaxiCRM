import CCard from "../../../components/CElements/CCard";
import StatisticsCard from "./Statistics";
import { StatisticsMap } from "./Statistics/Map";
import StatisticsLineChart from "./LineChart";
import SearchHeader from "../../../components/Header/SearchHeader";
import statistics from "../../../services/statistics";
import RegionStats from "./Statistics/PieChart";
import { useQuery } from "react-query";
import { useMemo } from "react";


const Statistics = () => {

  const { data: stats } = useQuery(
    ["GET_NEW_USER_STAT"],
    () => {
      return statistics.getNewUserStat();
    },
    {
      enabled: true,
    }
  );
  const bodyColumns = useMemo(() => {
    return stats?.data ?? [];
  }, [stats]);



  return (
    <section className="relative">
      <SearchHeader />
      <div className=" sticky top-20 z-20 left-0 py-[24px] pl-[12px]  w-[100%] bg-[var(--softGray)]">
        <h1 className="text-2xl block font-[600] text-[var(--black)] ml-[15px]">
          Statistika: yo‘lovchi
        </h1>
      </div>
      <div className="p-[15px] pl-[20px] pr-[30px]  ">
        <div className="flex space-x-4 mb-[14px]">
          <CCard>
            <StatisticsLineChart data={bodyColumns.graph} />
          </CCard>
          <StatisticsCard data={bodyColumns?.passengers} />
        </div>

        <div className="flex mb-[20px] w-[100%]">
          <RegionStats />
          <StatisticsMap />
        </div>
      </div>
    </section>
  );
};

export default Statistics;
