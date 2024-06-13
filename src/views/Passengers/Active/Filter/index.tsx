import CSelect from "../../../../components/CElements/CSelect";
import Filters from "../../../../components/UI/Filter";
import { useState } from "react";
import { Reasons } from "../../../../constants/reason";
import { Status } from "../Logic";
import { FilterFunctions } from "../../../../components/UI/Filter/Logic";

export const FilterComponent = ({
  filterParams,
  setFilterParams,
}: {
  filterParams: any;
  setFilterParams: (val: any) => void;
}) => {
  const [openFilter, setOpenFilter] = useState(false);
  const { collectFilter } = FilterFunctions({filterParams, setFilterParams});

  const handleFilter = (type: string, val: any, status?: string) => {
    collectFilter({ type, val, status });
  };
  
  return (
    <Filters
      filter={openFilter}
      filterParams={filterParams}
      setFilterParams={setFilterParams}
      setOpen={setOpenFilter}
    >
      <div className="grid grid-cols-1 w-full gap-y-5">
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
      </div>
    </Filters>
  );
};
