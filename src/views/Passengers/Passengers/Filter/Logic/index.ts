import { usePlaces } from "../../../../../hooks/usePlaces";
import { useMemo } from "react";

export const GetRegion = () => {
  const { regionList: regions } = usePlaces()

  const regionList = useMemo(() => {
    return regions?.map((i: any) => {
      return {
        value: i.id,
        label: i.name.uz,
      };
    });
  }, [regions]);

  return { regionList }
};
