import { useQuery } from "react-query";
import calendarService from "../../../services/calendar";
import SectionHeader from "../../../components/Sections/Header";
import FilterButton from "../../../components/Buttons/FilterButton";
import CalendarUI from "./UI";

const Calendar = () => {
  const { data: calendar } = useQuery(
    ["GET_CALENDAR"],
    () => {
      return calendarService.getList();
    },
    {
      enabled: true,
    }
  );

  console.log("calendar,", calendar);

  return (
    <>
      <SectionHeader title="Kalendar bo‘yicha ma’lumotlar">
        <FilterButton text="filter" />
      </SectionHeader>

      <CalendarUI list={calendar} />
    </>
  );
};

export default Calendar;
