import { CPeriodPicker } from "../../../../components/CElements/CPeriodPicker";
import Filters from "../../../../components/UI/Filter";
import CSelect from "../../../../components/CElements/CSelect";
import { useMemo, useState } from "react";
import { useVersions } from "../../../../hooks/useVersions";
import { usePlaces } from "../../../../hooks/usePlaces";
import { DivicesList } from "../../../../constants/devices";
import CMultibleSelect from "../../../../components/CElements/CMultibleSelect";
import { PaymentList } from "../../../../constants/payment";
import { FilterFunctions } from "../../../../components/UI/Filter/Logic";
import { StatusList } from "../../../../constants/status";
interface Props {
  filterParams: any;
  setFilterParams: (val: any) => void;
}

export const FilterComponent = ({
  filterParams,
  setFilterParams = () => {},
}: Props) => {
  const [openFilter, setOpenFilter] = useState(false);
  const { VersionOptions } = useVersions();
  const { regionList } = usePlaces();
  const { collectFilter } = FilterFunctions({ filterParams, setFilterParams });

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
    <>
      <Filters
        filter={openFilter}
        filterParams={filterParams}
        setFilterParams={setFilterParams}
        setOpen={setOpenFilter}
      >
        <div className="grid grid-cols-1 gap-y-5 w-full">
          <CPeriodPicker
            label="Vaqt"
            placeholder="Vaqtni tanlang"
            handleValue={(val: any) => handleFilter("date", val)}
            defaultValue={filterParams?.date}
          />
          <CSelect
            handlerValue={(val: any) => handleFilter("is_paid", val)}
            options={PaymentList}
            label="To'lov"
            placeholder="Tanglang"
            value={filterParams?.is_paid?.value}
            all={true}
          />
          <CSelect
            handlerValue={(val: any) => handleFilter("status", val)}
            options={StatusList}
            label="Status holati"
            placeholder="Tanglang"
            value={filterParams?.status?.value}
            all={true}
          />
          <CSelect
            handlerValue={(val: any) => handleFilter("device_type", val)}
            options={DivicesList}
            label="Operatsion sistema"
            placeholder="Tanglang"
            value={filterParams?.device_type?.value}
            all={true}
          />
          <CSelect
            handlerValue={(val: any) => handleFilter("version", val)}
            options={VersionOptions}
            label="Versiyalar"
            placeholder="Tanglang"
            value={filterParams?.version?.value}
            all={true}
          />
          <CSelect
            handlerValue={(val: any) => handleFilter("gender", val)}
            options={[
              { value: "m", label: "Erkak" },
              { value: "f", label: "Ayol" },
            ]}
            label="Jinsi"
            placeholder="Tanlang"
            value={filterParams?.gender?.value}
            all={true}
          />
          <CMultibleSelect
            handlerValue={(val: any) => handleFilter("region", val, "arr")}
            options={Regions}
            label="Yashash joyi"
            placeholder="Tanlang"
            defaultValue={filterParams?.region?.map((item: any) => item.value)}
            all={true}
          />
        </div>
      </Filters>
    </>
  );
};
