// import SearchHeader from "../../../components/Header/SearchHeader";
import AccountStatistics from "./AccountStatistics";
import Selection from "./SelectionData";
import StatisticsGender from "./GenderRegions";
import { Header } from "../../../components/Header";
import CBreadcrumbs from "../../../components/CElements/CBreadcrumbs";
import { useMemo } from "react";


const Statistics = () => {

  const breadCrubmsItems = useMemo(() => {
    return [
      {
        label: "Yo'lovchi",
        // link: 'statistics'
      },
      {
        label: 'Statistika',
        link: '/statistics'
      }
    ]
  }, [])

  return (
    <section className="relative">
      <Header sticky={true}>
        <CBreadcrumbs items={breadCrubmsItems} progmatic={true} />
      </Header>
      <AccountStatistics />
      <Selection />
      <StatisticsGender />
    </section>
  );
};

export default Statistics;




{/* <div className=" sticky top-20 z-20 left-0 py-[24px] pl-[12px]  w-[100%] bg-[var(--softGray)]">
        <h1 className="text-2xl block font-[600] text-[var(--black)] ml-[15px]">
          Statistika: yo‘lovchi
        </h1>
      </div>
      <div className="p-[15px] pl-[20px] pr-[30px]  ">
        <div className="flex space-x-4 mb-[14px]">
          <CCard>
            <StatisticsLineChart data={bodyColumns.graph} />
          </CCard>
        </div>

        <div className="flex mb-[20px] w-[100%]">
          <RegionStats />
          <StatisticsMap />
        </div>
      </div> */}



