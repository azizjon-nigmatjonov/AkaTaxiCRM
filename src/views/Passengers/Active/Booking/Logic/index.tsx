import { useMemo } from "react";
import { usePlaces } from "../../../../../hooks/usePlaces";

export const SelectData = () => {
  const { regionList, districtList, villageList } = usePlaces();

  const districtOptions = useMemo(() => {
    return districtList?.map((item: any) => {
        return {
            label: item.name.uz,
            value: item.id
        }
    })
  }, [districtList])

  const villageOptions = useMemo(() => {
    return villageList?.map((item: any) => {
        return {
            label: item.name.uz,
            value: item.id
        }
    })
  }, [villageList])

  return { regionList, districtList: districtOptions, villageList: villageOptions }
};
