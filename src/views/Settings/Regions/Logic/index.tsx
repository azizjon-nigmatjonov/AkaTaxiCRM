import regionService from "../../../../services/regions";
import { useGetQueries } from "../../../../hooks/useGetQueries";
import Region from "../Region";
import { useQuery } from "react-query";
import { useMemo } from "react";
import { usePlaces } from "../../../../hooks/usePlaces";

export const breadCrumbsItems = [
  {
    label: "Sozlamalar",
    link: "settings/regions",
  },
  {
    label: "Joylar nomi",
  },
];

export const tabList = [
  {
    slug: "uz",
    name: "O'zbekcha",
  },
  {
    slug: "oz",
    name: "Крилча",
  },
  {
    slug: "ru",
    name: "Русский",
  },
  {
    slug: "en",
    name: "English",
  },
];

export const GetCurrentPage = () => {
  const { tab } = useGetQueries();

  const currentPage = () => {
    switch (tab) {
      case "ru":
        return "ru";
      case "kr":
        return "kril";
      default:
        return <Region />;
    }
  };

  return { currentPage };
};

export const FetchFunction = () => {
  const {
    regionList,
    getRegionsLoading,
    getRegionsRefetch,
    districtList,
    getDistrictsLoading,
    getDistrictsRefetch,
    villageList,
    getVillagesLoading,
    getVillagesRefetech,
  } = usePlaces();

  return {
    regions: regionList,
    regionLoading: getRegionsLoading,
    regionRefetch: getRegionsRefetch,
    districts: districtList,
    districtLoading: getDistrictsLoading,
    districtRefetch: getDistrictsRefetch,
    villages: villageList,
    villageLoading: getVillagesLoading,
    villageRefetch: getVillagesRefetech,
  };
};

export const FetchData = () => {
  const { edit_region, edit_district, edit_village } = useGetQueries();

  const { data: regionData } = useQuery(
    ["GET_REGION_INFO", edit_region],
    () => {
      return regionService.getRegion(edit_region);
    },
    {
      enabled: !!edit_region,
    }
  );

  const { data: distrcitData } = useQuery(
    ["GET_DISTRICT_INFO", edit_district],
    () => {
      return regionService.getDistrictInfo(edit_district);
    },
    {
      enabled: !!edit_district,
    }
  );

  const { data: villageData } = useQuery(
    ["GET_VILLAGE_INFO", edit_village],
    () => {
      return regionService.getVillageInfo(edit_village);
    },
    {
      enabled: !!edit_village,
    }
  );

  const defaultData: any = useMemo(() => {
    return regionData?.data || distrcitData?.data || villageData?.data;
  }, [regionData, distrcitData, villageData]);

  return { defaultData };
};

export const GetTitle = () => {
  const {
    edit_region,
    edit_district,
    edit_village,
    add_region,
    add_district,
    add_village,
  } = useGetQueries();

  if (edit_region) return "Viloyat tahrirlash";
  if (edit_district) return "Tuman tahrirlash";
  if (edit_village) return "Qishloq tahrirlash";

  if (add_region) return "Viloyat qo'shish";
  if (add_district) return "Tuman qo'shish";
  if (add_village) return "Qishloq qo'shish";
};
