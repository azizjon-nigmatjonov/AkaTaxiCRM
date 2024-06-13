import { Months } from "../../../constants/month";
import CSelect from "../../../components/CElements/CSelect";
import { WrapperCard } from "../../../components/UI/WrapperCard";
import CDriver from "../../../components/CElements/CDivider";
import CList from "../../../components/CElements/CList";
import { getYears } from "../../../utils/getMonth";
import { GetMonth } from "../../../utils/getWeekDays";
import { useState } from "react";
import { FetchFunction } from "./Logic";
import { OneSkeleton } from "../../../components/CElements/CSkeleton/OneSkeleton";

const StatusStatics = () => {
  const { currentMonth, year } = GetMonth();
  const [params, setParams] = useState({ month: currentMonth, year });
  const { statistics, isLoading } = FetchFunction({ params });

  const handleParams = (type: string, val: any) => {
    setParams({ ...params, [type]: val });
  };

  return (
    <WrapperCard classes="p-[0]">
      <div className="p-[24px] flex items-center justify-between">
        <div className="space-y-1">
          <h3 className="text-base text-[var(--black)] font-semibold">
            Sabablar statistikasi
          </h3>
          <p className="text-sm text-[var(--gray60)] font-normal">
            Foydalanuvchilarning buyurtmalardagi holati
          </p>
        </div>
        <div className="w-[240px] flex items-center gap-5">
          <CSelect
            value={params.month}
            options={Months}
            handlerValue={(val: any) => handleParams("month", val.value)}
          />
          <CSelect
            value={params.year}
            options={getYears()}
            handlerValue={(val: any) => handleParams("year", val.value)}
          />
        </div>
      </div>
      <CDriver />

      {isLoading ? (
        <OneSkeleton height={240} />
      ) : (
        <div className="flex gap-x-5 p-5">
          <CList title="Yo'lovchi" list={statistics?.passengers} />
          <CList title="Haydovchi" list={statistics?.drivers} />
        </div>
      )}
    </WrapperCard>
  );
};

export default StatusStatics;
