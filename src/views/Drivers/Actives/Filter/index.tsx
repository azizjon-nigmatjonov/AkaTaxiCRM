import { useGetQueries } from "../../../../hooks/useGetQueries";
import Filters from "../../../../components/UI/Filter";
import CSelect from "../../../../components/CElements/CSelect";
import { CustomFunctions } from "./Logic";
import { useEffect, useMemo } from "react";
import { useQuery } from "react-query";
import carService from "../../../../services/cars";
import { usePlaces } from "../../../../hooks/usePlaces";

export const ActiveDriverFilter = () => {
  const { filter } = useGetQueries();
  const { handleRegion, handleGender, handleCarModel } = CustomFunctions();
  const { regionList } = usePlaces()

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
    return {
      list: list.map((model: any) => {
        return {
          value: model.id,
          label: model.name,
        };
      }),
    };
  }, [carModals]);

  useEffect(() => {
    Regions.unshift({ value: 0, label: "Barchasi" });
    carModalData?.list?.unshift({ value: 0, label: "Barchasi" });
  }, [Regions]);

  return (
    <Filters filter={!!filter}>
      <div className="grid grid-cols-4 gap-x-4">
        <CSelect
          handlerValue={handleRegion}
          options={Regions}
          id="filter"
          label="Viloyat"
        />
        <CSelect
          handlerValue={handleGender}
          options={[
            { value: "barchasi", label: "Barchasi" },
            { value: "m", label: "Male" },
            { value: "f", label: "Female" },
          ]}
          id="filter"
          label="Jins"
        />
        <CSelect
          handlerValue={handleCarModel}
          options={carModalData.list}
          id="filter"
          label="Model"
        />
      </div>
    </Filters>
  );
};
