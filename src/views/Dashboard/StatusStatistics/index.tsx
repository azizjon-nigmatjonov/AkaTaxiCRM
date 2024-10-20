import CSelect from "../../../components/CElements/CSelect";
import { WrapperCard } from "../../../components/UI/WrapperCard";
import CDriver from "../../../components/CElements/CDivider";
import CList from "../../../components/CElements/CList";
import { useState } from "react";
import { FetchFunction } from "./Logic";
import { OneSkeleton } from "../../../components/CElements/CSkeleton/OneSkeleton";
import { CPeriodPicker } from "../../../components/CElements/CPeriodPicker";
import { UseOperators } from "../../../hooks/useOperators";
import { formatNumberWithSpaces } from "../../../utils/formatMoney";

const StatusStatics = () => {
  const { operatorOptions } = UseOperators({});
  const [filterParams, setFilterParams]: any = useState({});
  const { statistics, isLoading } = FetchFunction({
    params: { operator_id: operatorOptions?.[0]?.value, ...filterParams },
  });

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
        <div className="w-[500px] grid grid-cols-2 gap-x-5">
          <CSelect
            placeholder="Operator tanlang"
            options={operatorOptions}
            value={operatorOptions?.[0]?.value}
            handlerValue={(val: any) =>
              setFilterParams({ ...filterParams, operator_id: val.value })
            }
          />

          <div>
            <CPeriodPicker
              placeholder="Vaqtni tanlang"
              handleValue={(val: any) =>
                setFilterParams({ ...filterParams, date: val })
              }
              defaultValue={filterParams?.date}
            />
          </div>
        </div>
      </div>
      <CDriver />

      {isLoading ? (
        <OneSkeleton height={240} />
      ) : (
        <div className="flex gap-x-5 p-5">
          <CList
            title={`Yo'lovchi (${formatNumberWithSpaces(statistics?.passenger_count ?? 0)} ta)`}
            list={statistics?.passengers}
          />
          <CList
            title={`Haydovchi (${formatNumberWithSpaces(statistics?.driver_count ?? 0)}
          ta)`}
            list={statistics?.drivers}
          />
        </div>
      )}
    </WrapperCard>
  );
};

export default StatusStatics;
