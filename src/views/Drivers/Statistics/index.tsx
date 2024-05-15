import { useState } from "react";
import CCard from "../../../components/CElements/CCard";

import { Skeleton } from "@mui/material";
import StatisticsLineChart from "./Bar";
import Progress from '../../../components/UI/Progress'
import { Header } from "../../../components/UI/Header";
import CBreadcrumbs from "../../../components/CElements/CBreadcrumbs";
import StatisticsHeader from "./Header";
import { useGetQueries } from "../../../hooks/useGetQueries";
import RangeDate from "../../../components/UI/RangeDate";
import { BiCaretDown, BiX } from "react-icons/bi";
import { StatisticsCard } from "./Cards";
import { FetchFunction, breadCrumbs } from "./Logic";

const DriverStatistics = () => {
  const { start, end } = useGetQueries();
  const [value, setValue] = useState(false)
  const { data, barLoading, widgetsLoading, regionLoading } = FetchFunction()


  return (
    <>
      <Header sticky={true}>
        <CBreadcrumbs items={breadCrumbs} progmatic={true} type="link" />
      </Header>
      <div className="container sticky top-20 z-[12] py-[24px] w-[100%] bg-[var(--softGray)] flex items-center justify-between">
        <h1 className="text-2xl font-[600] text-[var(--black)]">
          Statistika: haydovchi
        </h1>
        <div className="mr-[15px]">
          <div className="flex items-center gap-2">
            <p className="border py-1 px-2 rounded-md border-black">{start ? start : 'Start Date'}</p>
            <p>-</p>
            <p className="border py-1 px-2 rounded-md border-black">{end ? end : 'End Date'}</p>
            <div onClick={() => setValue(!value)} className={`border py-1 px-2 rounded-md cursor-pointer ${value ? 'bg-red-100 border-red-400' : 'bg-slate-300 border-black'}  `}>
              {value ? <BiX color="red" /> : <BiCaretDown />}
            </div>
          </div>
          {value && <div className="absolute   right-[40px]">
            <RangeDate setShow={setValue} />
          </div>}
        </div>
      </div>
      <StatisticsCard data={data?.widgetsData} loading={widgetsLoading} />
      <div className="container grid gap-y-5">

        <CCard style={{ minHeight: 0 }}>
          <StatisticsHeader />
          <StatisticsLineChart grapData={data?.graphData} loading={barLoading} />
        </CCard>

        <CCard style={{ minHeight: 0 }}>
          <p className="mb-5">Viloyatlararo yangi haydovchilar</p>
          <div>
            {regionLoading ? <Skeleton height={200} /> : <Progress size={70} color='var(--main)' data={data?.regionUser} />}
          </div>

        </CCard>
      </div>
    </>
  );
};

export default DriverStatistics;
