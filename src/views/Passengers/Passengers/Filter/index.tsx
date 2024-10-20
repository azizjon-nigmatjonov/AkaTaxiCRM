import CSelect from "../../../../components/CElements/CSelect";
import Filters from "../../../../components/UI/Filter";
import { DivicesList } from "../../../../constants/devices";
import { CPeriodPicker } from "../../../../components/CElements/CPeriodPicker";
import CMultibleSelect from "../../../../components/CElements/CMultibleSelect";
import { usePlaces } from "../../../../hooks/usePlaces";
import { useMemo } from "react";
import { useVersions } from "../../../../hooks/useVersions";
import { FilterFunctions } from "../../../../components/UI/Filter/Logic";

interface Props {
  filterParams: any;
  setFilterParams: (val: any) => void;
}

export const FilterPassenger = ({ filterParams, setFilterParams }: Props) => {
  const { regionList } = usePlaces();
  const { VersionOptions } = useVersions();

  const { collectFilter } = FilterFunctions({ filterParams, setFilterParams });

  const handleFilter = (type: string, val: any, status?: string) => {
    collectFilter({ type, val, status });
  };

  const regionlist = useMemo(() => {
    return regionList?.map((item: any) => {
      return {
        value: item.id,
        label: item.name.uz,
      };
    });
  }, [regionList]);

  return (
    <Filters filterParams={filterParams} setFilterParams={setFilterParams}>
      <div className="grid grid-cols-1 gap-y-5 w-full">
        <CPeriodPicker
          label="Vaqt"
          placeholder="Vaqtni tanlang"
          defaultValue={filterParams?.date}
          handleValue={(val: any) => handleFilter("date", val)}
        />
        <CSelect
          options={DivicesList}
          label="Operatsion sistema"
          placeholder="Tanglang"
          value={filterParams?.device_type?.value}
          handlerValue={(val: any) => handleFilter("device_type", val)}
        />
        <CSelect
          options={VersionOptions}
          label="Versiyalar"
          placeholder="Tanglang"
          value={filterParams?.version?.value}
          handlerValue={(val: any) => handleFilter("version", val)}
        />
        <CSelect
          options={[
            { value: "m", label: "Erkak" },
            { value: "f", label: "Ayol" },
          ]}
          label="Jinsi"
          value={filterParams?.gender?.value}
          placeholder="Tanlang"
          handlerValue={(val: any) => handleFilter("gender", val)}
        />

        <CMultibleSelect
          options={regionlist}
          label="Yashash joyi"
          placeholder="Tanlang"
          defaultValue={filterParams?.region_id?.map((item: any) => item.value)}
          handlerValue={(val: any) => handleFilter("region_id", val)}
        />
      </div>
    </Filters>
  );
};
