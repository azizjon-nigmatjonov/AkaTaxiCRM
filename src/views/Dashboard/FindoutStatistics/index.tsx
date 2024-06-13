import CSelect from "../../../components/CElements/CSelect";
import CDriver from "../../../components/CElements/CDivider";
import { WrapperCard } from "../../../components/UI/WrapperCard";
import { StatisticsList } from "./List";
import { FetchFunction } from "./Logic";
import { getYears } from "../../../utils/getMonth";
import { Months } from "../../../constants/month";
import { GetMonth } from "../../../utils/getWeekDays";
import { useState } from "react";

export const FindoutStatistics = () => {
  const { currentMonth, year } = GetMonth();
  const [params, setParams]: any = useState({ month: currentMonth, year });

  const { socialData, isLoading } = FetchFunction({ params });
  const yearsOption = getYears();

  const handleParams = (type: string, val: any) => {
    setParams({ ...params, [type]: val });
  };

  return (
    <WrapperCard classes="p-[0]">
      <div className="p-24px flex items-center justify-between">
        <div>
          <h3 className="text-lg font-[600] text-[var(--gray90)]">
            Statistika
          </h3>
          <p className="text-[var(--gray60)]">
            Foydalanuvchilarning bizni qayerdan topgani bo’yicha
          </p>
        </div>
        <div className="grid grid-cols-2 gap-x-5">
          <CSelect
            options={Months}
            value={params.month}
            handlerValue={(obj: any) => handleParams("month", obj.value)}
          />

          <CSelect
            options={yearsOption}
            value={params.year}
            handlerValue={(obj: any) => handleParams("year", obj.value)}
          />
        </div>
      </div>
      <CDriver classes="mb-24px" />

      <StatisticsList socialData={socialData} isLoading={isLoading} />
    </WrapperCard>
  );
};
