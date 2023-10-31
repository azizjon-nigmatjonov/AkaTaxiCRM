import { useQuery } from "react-query";
import calendarService from "../../../services/calendar";
import SectionHeader from "../../../components/Sections/Header";
import FilterButton from "../../../components/Filters";
import CalendarUI from "./UI";
import { Skeleton } from "@mui/material";

const Calendar = () => {
  const { data: calendar, isLoading } = useQuery(
    ["GET_CALENDAR"],
    () => {
      return calendarService.getList();
    },
    {
      enabled: true,
    }
  );

  return (
    <>
      <SectionHeader title="Kalendar bo‘yicha ma’lumotlar">
        <FilterButton text="filter" />
      </SectionHeader>

      {!isLoading ? (
        <CalendarUI list={calendar?.data} />
      ) : (
        <div className="h-[1000px] mt-[-220px]">
          <Skeleton style={{ height: "100%", borderRadius: '14px' }} />
        </div>
      )}
    </>
  );
};

export default Calendar;
