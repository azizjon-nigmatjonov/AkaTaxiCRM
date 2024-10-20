import { useState } from "react";
import CCard from "../../../components/CElements/CCard";

import { Skeleton } from "@mui/material";
import StatisticsLineChart from "./Bar";
import Progress from "../../../components/UI/Progress";
import { Header } from "../../../components/UI/Header";
import CBreadcrumbs from "../../../components/CElements/CBreadcrumbs";
// import StatisticsHeader from "./Header";
import { StatisticsCard } from "./Cards";
import { FetchFunction, breadCrumbs } from "./Logic";
import { CPeriodPicker } from "../../../components/CElements/CPeriodPicker";

const DriverStatistics = () => {
  const [cardDate, setCardDate] = useState([]);
  const { data, barLoading, widgetsLoading, regionLoading } = FetchFunction({ cardDate });

  return (
    <>
      <Header>
        <CBreadcrumbs items={breadCrumbs} progmatic={true} type="link" />
      </Header>
      <div className="container sticky top-20 z-[12] py-5 w-[100%] bg-[var(--softGray)] flex items-center justify-between">
        <h1 className="text-2xl font-[600] text-[var(--black)]">
          Statistika: haydovchi
        </h1>
        <div className="w-[250px]">
          <CPeriodPicker placeholder="Vaqt tanlang" defaultValue={cardDate} handleValue={setCardDate} />
        </div>
      </div>
      <div className="container">
        <StatisticsCard data={data?.widgetsData} loading={widgetsLoading} />
      </div>
      <div className="container grid gap-y-5">
        <CCard style={{ minHeight: 0 }}>
          {/* <StatisticsHeader /> */}
          <StatisticsLineChart
            grapData={data?.graphData}
            loading={barLoading}
          />
        </CCard>

        <CCard style={{ minHeight: 0 }}>
          <p className="mb-5">Viloyatlararo yangi haydovchilar</p>
          <div>
            {regionLoading ? (
              <Skeleton height={200} />
            ) : (
              <Progress size={70} color="var(--main)" data={data?.regionUser} />
            )}
          </div>
        </CCard>
      </div>
    </>
  );
};

export default DriverStatistics;
