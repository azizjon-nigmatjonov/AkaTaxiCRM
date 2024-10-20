import { FilterFunctions } from "../../../../components/UI/Filter/Logic";
import CSelect from "../../../../components/CElements/CSelect";
import Filters from "../../../../components/UI/Filter";
import { usePlaces } from "../../../../hooks/usePlaces";
import { useMemo } from "react";

interface Props {
  filterParams: any;
  setFilterParams: (val: any) => void;
}

export const FilterComponent = ({ filterParams, setFilterParams }: Props) => {
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
    <div className="container">
      <Filters
        filterParams={filterParams}
        setFilterParams={setFilterParams}
      >
        <CSelect
          options={Regions}
          label="Viloyat"
          placeholder="Tanlang"
          value={filterParams?.region?.value}
          handlerValue={(val: any) => handleFilter("region", val)}
        />
      </Filters>
    </div>
  );
};
