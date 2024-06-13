import HFSelect from "../../../../../components/FormElements/HFSelect";
import { useForm } from "react-hook-form";
import { Months } from "../../../../../constants/month";
import { getYears } from "../../../../../utils/getMonth";
import CFilterTab from "../../../../../components/CElements/CFilterTab";
import { tabList } from "../Logic";
import { useGetQueries } from "../../../../../hooks/useGetQueries";
import { getMonthWeeks } from "../../../../../utils/getWeekDays";

const Filters = () => {
  const { month, year } = useGetQueries();
  const { control } = useForm();

  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="text-base font-semibold">Narxlar o’zgarishi</p>
        <CFilterTab tabList={tabList} />
      </div>
      <div className="p-4 rounded-xl bg-[#F9FAFB] flex items-center gap-3 my-4">
        <HFSelect
          control={control}
          name={"year"}
          label="Yil"
          options={getYears()}
          defaultValue={new Date().getFullYear()}
        />
        <HFSelect
          control={control}
          name={"month"}
          label="Oy"
          options={Months}
          defaultValue={new Date().getMonth()}
        />
        <HFSelect
          control={control}
          name={"week"}
          label="Hafta"
          options={getMonthWeeks(year ?? new Date().getFullYear(), month ?? 1)}
          placeholder={"Tanglang"}
        />
      </div>
    </div>
  );
};

export default Filters;
