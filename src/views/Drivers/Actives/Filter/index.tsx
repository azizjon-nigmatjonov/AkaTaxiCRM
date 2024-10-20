import Filters from "../../../../components/UI/Filter";
import CSelect from "../../../../components/CElements/CSelect";
import { useMemo } from "react";
import { useQuery } from "react-query";
import carService from "../../../../services/cars";
import { usePlaces } from "../../../../hooks/usePlaces";
import { FilterFunctions } from "../../../../components/UI/Filter/Logic";

export const ActiveDriverFilter = ({
  filterParams,
  setFilterParams,
}: {
  filterParams: any;
  setFilterParams: (val: any) => void;
}) => {
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

  const { data: carModals } = useQuery(["GET_CAR_MODELS"], () => {
    return carService.getCarModel();
  });

  const carModalData: any = useMemo(() => {
    if (!carModals) return [];
    const list = carModals?.data;
    return (
      list?.map((model: any) => {
        return {
          value: model.id,
          label: model.name,
        };
      }) ?? []
    );
  }, [carModals]);

  const handleFilter = (type: string, val: any) => {
    collectFilter({ type, val });
  };

  return (
    <Filters filterParams={filterParams} setFilterParams={setFilterParams}>
      <div className="grid grid-cols-1 gap-y-5 w-full">
        <CSelect
          options={Regions}
          label="Viloyat"
          value={filterParams?.region_id?.value}
          placeholder="Tanlang"
          handlerValue={(val: any) => handleFilter("region_id", val)}
        />
        <CSelect
          options={[
            { value: "m", label: "Male" },
            { value: "f", label: "Female" },
          ]}
          label="Jins"
          value={filterParams?.gender?.value}
          placeholder="Tanlang"
          handlerValue={(val: any) => handleFilter("gender", val)}
        />
        <CSelect
          options={carModalData}
          label="Model"
          value={filterParams?.car_model_id?.value}
          placeholder="Tanlang"
          handlerValue={(val: any) => handleFilter("car_model_id", val)}
        />
      </div>
    </Filters>
  );
};
