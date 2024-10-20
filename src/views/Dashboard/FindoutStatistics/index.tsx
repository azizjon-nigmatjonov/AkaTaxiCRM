// import CSelect from "../../../components/CElements/CSelect";
import CDriver from "../../../components/CElements/CDivider";
import { WrapperCard } from "../../../components/UI/WrapperCard";
import { StatisticsList } from "./List";
import { FetchFunction } from "./Logic";
import { useState } from "react";
import { CPeriodPicker } from "../../../components/CElements/CPeriodPicker";

export const FindoutStatistics = () => {
  const [filterParams, setFilterParams]: any = useState({});
  const { socialData, isLoading, defaultData } = FetchFunction({
    params: filterParams,
  });

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

        <div className="w-[235px]">
          <CPeriodPicker
            placeholder="Vaqtni tanlang"
            handleValue={(val: any) => setFilterParams({ date: val })}
            defaultValue={filterParams?.date}
          />
        </div>
      </div>
      <CDriver classes="mb-24px" />

      <StatisticsList
        socialData={socialData}
        defaultData={defaultData}
        isLoading={isLoading}
      />
    </WrapperCard>
  );
};
