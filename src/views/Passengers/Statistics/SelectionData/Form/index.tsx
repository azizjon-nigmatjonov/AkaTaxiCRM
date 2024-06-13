import { getYears } from "../../../../../utils/getMonth";
import usePageRouter from "../../../../../hooks/useObjectRouter";
import Detail from "./Detail";
import { useGetQueries } from "../../../../../hooks/useGetQueries";
import { Months } from "../../../../../constants/month";
import { getMonthWeeks } from "../../../../../utils/getWeekDays";
// import { useEffect } from 'react'

const Form = ({ value }: { value: string }) => {
  const { navigateQuery } = usePageRouter();
  const { month, year } = useGetQueries();

  const handlerYear = (evt: string) => {
    navigateQuery({ year: evt });
  };

  const handlerMonth = (evt: string) => {
    navigateQuery({ month: evt });
  };

  const handleWeek = (evt: string) => {
    navigateQuery({ week: evt });
  };

  return (
    <div className="bg-[var(--softGray)] mt-4 p-4 rounded-lg grid grid-cols-3 gap-3 w-full">
      <Detail
        handlerValue={handlerYear}
        disabled={value != "year" ? false : true}
        label="Yil"
        options={getYears()}
      />
      <Detail
        handlerValue={handlerMonth}
        disabled={value == "month" || value == "year" ? true : false}
        label="Oy"
        options={Months}
      />
      <Detail
        handlerValue={handleWeek}
        disabled={value == "week" ? false : true}
        label="Hafta (Du-Ya)"
        options={getMonthWeeks(month ?? 1, year ?? new Date().getFullYear())}
      />
    </div>
  );
};

export default Form;
