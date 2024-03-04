import { useMemo } from "react";
import { useQuery } from "react-query";
import calendarService from "../../../services/calendar";
// import SectionHeader from "../../../components/Sections/Header";
// import FilterButton from "../../../components/Filters";
import CalendarUI from "./UI";
import { Skeleton } from "@mui/material";
import { Header } from "../../../components/Header";
import { GetMonth } from "../../../utils/getMonth";
import { useGetQueries } from "../../../hooks/useGetQueries";
import CBreadcrumbs from "../../../components/CElements/CBreadcrumbs";
// import BasicDatepicker from "../../../components/CElements/CDatePicker/BasicDatepicker";
// import MultiDatePicker from "../../../components/CElements/CDatePicker/MultiDatepicker";
// import { MultiDatePicker } from "../../../components/CElements/CDatePicker/MultiDatepicker";



const Calendar = () => {
  const month: any = GetMonth()
  const { date } = useGetQueries();
  const { data, isLoading } = useQuery(
    ["GET_CALENDAR", date],
    () => { return calendarService.getList(date) }, { enabled: true, }
  );


  const calendar: any = useMemo(() => {
    return data?.data ?? []
  }, [data])

  const breadCrumbs = useMemo(() => {
    return [
      {
        label: "Ma'lumotlar",
      },
      {
        label: "Kalendar",
        link: 'infos/calendar'
      }
    ]
  }, [])

  return (
    <>
      <Header sticky={true} >
        <CBreadcrumbs items={breadCrumbs} progmatic={true} />
      </Header>
      <div className="px-5">
        {/* <SectionHeader>
          <FilterButton text="filter" >
            <MultiDatePicker />
          </FilterButton>
        </SectionHeader> */}

        {!isLoading ? (
          <CalendarUI list={calendar} month={month} />
        ) : (
          <div className="h-[1000px] mt-[-220px]">
            <Skeleton style={{ height: "100%", borderRadius: "14px" }} />
          </div>
        )}
      </div>
    </>
  );
};

export default Calendar;