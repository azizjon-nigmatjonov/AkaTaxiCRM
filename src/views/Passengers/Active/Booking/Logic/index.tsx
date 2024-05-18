import { useMemo } from "react";
import { usePlaces } from "../../../../../hooks/usePlaces";

export const SelectData = () => {
  const { regionList, districtList, villageList, setLocalIds } = usePlaces();

  const regionOptions = useMemo(() => {
    return regionList?.map((i: any) => {
      return {
        value: i.id,
        label: i.name.uz,
      };
    });
  }, [regionList]);

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


    
  return { regionList: regionOptions, districtList: districtOptions, villageList: villageOptions, setLocalIds }
};

export const breadcrumbs = [
  {
      label: "Yo'lovchi",
  },
  {
      label: "Aktiv",
      link: '/passengers/active_passengers'

  },
  {
      label: 'Buyurtma berish',
      // link: '/passengers/active_passengers'
  }
]
