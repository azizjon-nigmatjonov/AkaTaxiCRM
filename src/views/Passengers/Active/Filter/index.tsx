import CSelect from "../../../../components/CElements/CSelect";
import Filters from "../../../../components/UI/Filter";
import { useMemo } from "react";
import { Reasons } from "../../../../constants/reason";
import { Status } from "../Logic";
import { FilterFunctions } from "../../../../components/UI/Filter/Logic";
import { usePlaces } from "../../../../hooks/usePlaces";
import CMultibleSelect from "../../../../components/CElements/CMultibleSelect";
import { CPeriodPicker } from "../../../../components/CElements/CPeriodPicker";
import { EndPositions, StartPositions } from "./Positions";

const searchList = [
  {
    label: "Taksi",
    value: "passenger",
  },
  {
    label: "Pochta",
    value: "delivery",
  },
  // {
  //   label: "Sayohat",
  //   value: 3,
  // },
];

export const FilterComponent = ({
  filterParams,
  setFilterParams,
}: {
  filterParams: any;
  setFilterParams: (val: any) => void;
}) => {
  const { collectFilter } = FilterFunctions({ filterParams, setFilterParams });

  const handleFilter = (type: string, val: any, status?: string) => {
    collectFilter({ type, val, status });
  };

  const { regionList } = usePlaces();

  const Regions = useMemo(() => {
    return regionList?.map((i: any) => {
      return {
        value: i.id,
        label: i.name.uz,
      };
    });
  }, [regionList]);

  return (
    <Filters filterParams={filterParams} setFilterParams={setFilterParams}>
      <div className="grid grid-cols-1 w-full gap-y-5">
        <CMultibleSelect
          label="Ketish viloyati"
          options={Regions}
          placeholder="Tanlang"
          handlerValue={(val: any) => handleFilter("region", val)}
          defaultValue={filterParams?.region?.map((item: any) => item.value)}
        />
        <CSelect
          options={searchList}
          label="Qidiruv"
          placeholder="Barchasi"
          value={filterParams?.search?.value}
          handlerValue={(val: any) => handleFilter("type", val)}
        />
        <CSelect
          label="Sabablar"
          options={Reasons}
          value={filterParams?.reason?.value}
          placeholder="Tanlang"
          handlerValue={(val: any) => handleFilter("reason", val)}
        />
        <CSelect
          label="Status"
          options={Status}
          value={filterParams?.status?.value}
          placeholder="Tanlang"
          handlerValue={(val: any) => handleFilter("status", val)}
        />
        <StartPositions
          filterParams={filterParams}
          handleFilter={handleFilter}
        />
        <EndPositions filterParams={filterParams} handleFilter={handleFilter} />
        <CPeriodPicker
          label="Vaqt"
          placeholder="Vaqtni tanlang"
          defaultValue={filterParams?.date}
          handleValue={(val: any) => handleFilter("date", val)}
        />
      </div>
    </Filters>
  );
};
