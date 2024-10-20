import { useState } from "react";
import CBreadcrumbs from "../../components/CElements/CBreadcrumbs";
import { Header } from "../../components/UI/Header";
import { CallCard } from "./Call";
import { breadCrumbsItems } from "./Logic";
import { OperatorTable } from "./OperatorTable";
import { FetchFunctions } from "./OperatorTable/Logic";
import { CallCenterStatistics } from "./Statistics";
import { CPeriodPicker } from "../../components/CElements/CPeriodPicker";
import CSelect from "../../components/CElements/CSelect";

const CallCenter = () => {
  const [filterParams, setFilterParams]: any = useState({});
  const { bodyData, isLoading, operatorOptions, StatisticsData, CardData } =
    FetchFunctions({ filterParams });

  return (
    <>
      <Header>
        <CBreadcrumbs items={breadCrumbsItems} />
      </Header>

      <div className="px-5 space-y-8 pb-10">
        <div className="flex items-center justify-end space-x-5">
          <div className="w-[240px]">
            <CPeriodPicker
              handleValue={(val: any) => {
                console.log("time", val);
              }}
              placeholder="Vaqt tanlang"
            />
          </div>
          <div className="w-[240px]">
            <CSelect
              options={operatorOptions}
              handlerValue={(val) =>
                setFilterParams({ ...filterParams, sip_id: val.value })
              }
              placeholder="Operator tanlang"
            />
          </div>
        </div>

        <CallCard list={CardData} isLoading={isLoading} />

        <CallCenterStatistics
          statisticsList={StatisticsData}
          isLoading={isLoading}
        />
        <OperatorTable
          filterParams={filterParams}
          bodyData={bodyData}
          isLoading={isLoading}
        />
      </div>
    </>
  );
};

export default CallCenter;
