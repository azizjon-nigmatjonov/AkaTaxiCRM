import { usePlaces } from "../../../hooks/usePlaces";
import Filters from "../../../components/UI/Filter";
import { useMemo, useState } from "react";
import CSelect from "../../../components/CElements/CSelect";
import { FilterFunctions } from "../../../components/UI/Filter/Logic";

interface Props {
  filterParams: any;
  setFilterParams: (val: any) => void;
}

export const FilterComponent = ({ filterParams, setFilterParams }: Props) => {
  const [openFilter, setOpenFilter] = useState(false);
  const { collectFilter } = FilterFunctions({ filterParams, setFilterParams });
  const { regionList } = usePlaces();
  const Regions = useMemo(() => {
    return regionList?.map((i: any) => {
      return {
        value: i.id,
        label: i.name.uz,
      };
    });
  }, [regionList]);

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
      <CSelect
        options={Regions}
        label="Viloyat"
        placeholder="Tanlang"
        value={filterParams?.region?.value}
        handlerValue={(val: any) => handleFilter("region", val)}
      />
    </Filters>
  );
};
