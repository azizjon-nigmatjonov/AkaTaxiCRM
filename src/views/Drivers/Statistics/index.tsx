import { useMemo, useState } from "react";
import CCard from "../../../components/CElements/CCard";
import { ArrowUp, ArrowDown } from '../../../components/UI/IconGenerator/Svg'
import { useQuery } from "react-query";
import driverService from "../../../services/drivers";
import { Skeleton } from "@mui/material";
import StatisticsLineChart from "./Bar";
import Progress from '../../../components/UI/Progress'
import { Header } from "../../../components/UI/Header";
import CBreadcrumbs from "../../../components/CElements/CBreadcrumbs";
import StatisticsHeader from "./Header";
import { useGetQueries } from "../../../hooks/useGetQueries";
import RangeDate from "../../../components/UI/RangeDate";
import { BiCaretDown, BiX } from "react-icons/bi";

const DriverStatistics = () => {
  const { year, month, week, start, end } = useGetQueries();
  const [value, setValue] = useState(false)

  const { data: widgets, isLoading } = useQuery(['GET_GRAPH_LIST', start, end], () => {
    return driverService.getWidgets({ start, end });
  })

  const { data: graph, isLoading: barLoading } = useQuery(['GET_GRAPH_DATA', year, week, month], () => {
    return driverService.getDriversGraph({ year, week, month })
  })

  const { data: userRegion } = useQuery(['GET_REGION_USER'], () => {
    return driverService.getUserRegion()
  })

  const widgetsData = useMemo(() => {
    return widgets?.data ?? []
  }, [widgets])

  const graphData: any = useMemo(() => {
    if (!graph?.data) return []
    let data = graph?.data;
    let label: any = [];
    let trip: any = [];
    let founded: any = [];

    data?.map((val: any) => (label.push(val?.time), trip.push(val?.count), founded.push(val?.bookings)))

    return { label, trip, founded }
  }, [graph])


  const regionUser: any = useMemo(() => {
    return userRegion?.data ?? []
  }, [userRegion])

  const breadCrumbs = useMemo(() => {
    return [
      { label: "Haydovchilar", link: '/drivers/main' },
      { label: 'Statistika', }
    ]
  }, [])



  return (
    <>
      <Header sticky={true}>
        <CBreadcrumbs items={breadCrumbs} progmatic={true} type="link" />
      </Header>
      <div className="sticky top-20 z-[12] py-[24px] pl-[12px]  w-[100%] bg-[var(--softGray)] flex items-center justify-between">
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
          {value && <RangeDate />}
        </div>
      </div>

      <div className="px-6 ">
        <div className="flex flex-wrap items-center gap-4">
          {isLoading ? Array.from(new Array(4)).map((num) => <Skeleton key={num} animation="wave" width={210} height={150} />) : widgetsData?.map(({ id, name, quantity, change }: { id?: number, name?: string, quantity?: number, change?: any }) => {
            return <CCard key={id} style={{ minHeight: 0 }}>
              <div className="flex items-center gap-[18px]">
                {change > 0 ? <ArrowUp fill={true} /> : <ArrowDown fill={true} />}
                <div>
                  <p className="text-[28px] font-semibold flex items-center gap-4">{quantity}<span className={`text-base ${change > 0 ? 'text-[var(--green)]' : 'text-[var(--danger)]'}`}>{change > 0 ? '+' + change : change}%</span></p>
                  <p className="text-[var-(--gray)] text-sm ">{name}</p>
                </div>
              </div>
            </CCard>
          })}
        </div>

        <div className="pt-[18px]">
          <CCard style={{ minHeight: 0 }}>
            <StatisticsHeader />
            <StatisticsLineChart grapData={graphData} loading={barLoading} />
          </CCard>
        </div>

        <div className="py-[18px]">
          <CCard style={{ minHeight: 0 }}>
            <div className="flex items-center justify-between mb-5">
              <p>Viloyatlararo yangi haydovchilar</p>
            </div>

            <div>
              {isLoading ? <Skeleton height={200} /> : <Progress size={70} color='var(--main)' data={regionUser} />}
            </div>

          </CCard>
        </div>
      </div>
    </>
  );
};

export default DriverStatistics;
