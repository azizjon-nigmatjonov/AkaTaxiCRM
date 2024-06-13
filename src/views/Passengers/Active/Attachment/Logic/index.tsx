import { usePlaces } from "../../../../../hooks/usePlaces";
import { useMemo } from "react";

export const breadCrumbs = () => {
  const breadCrumbsItems = useMemo(() => {
    return [
      {
        label: "Alktiv yo’lovchilar",
        link: "/passengers/active-passengers",
      },
      {
        label: 'Haydovchi',
        link: "/passengers/active-passengers",
      },
      {
        label: "Biriktirish"
      },
    ];
  }, []);

  return { breadCrumbsItems };
};

export const GetRegions = () => {
  const { regionList } = usePlaces();

  const regionOptions = useMemo(() => {
    return regionList?.map((i: any) => {
      return {
        value: i.id,
        label: i.name.uz,
      };
    });
  }, [regionList]);

  return { regionOptions };
};