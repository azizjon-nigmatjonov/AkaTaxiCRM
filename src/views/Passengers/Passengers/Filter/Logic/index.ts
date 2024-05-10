import { useMemo } from "react";
import { useSelector } from "react-redux";

export const GetRegion = () => {
  const regions = useSelector((state: any) => state.regions.regions);

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
