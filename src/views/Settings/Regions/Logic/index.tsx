import regionService from "../../../../services/regions";
import { useGetQueries } from "../../../../hooks/useGetQueries";
import Region from "../Region";
import { useQuery } from "react-query";
import { useMemo } from "react";

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
  const { region, district } = useGetQueries();
  const {
    data: regions,
    isLoading: regionLoading,
    refetch: regionRefetch,
  } = useQuery(["GER_REGION_LIST"], () => {
    return regionService.getList();
  });

  const {
    data: districts,
    isLoading: districtLoading,
    refetch: districtRefetch,
  } = useQuery(
    ["GET_DIRSTRICTS_LIST", region],
    () => {
      return regionService.getDistrict(region);
    },
    {
      enabled: !!region,
    }
  );

  const {
    data: villages,
    isLoading: villageLoading,
    refetch: villageRefetch,
  } = useQuery(
    ["GET_DIRSTRICTS_LIST", district],
    () => {
      return regionService.getVillage(district);
    },
    {
      enabled: !!district,
    }
  );

  return {
    regionLoading,
    regionRefetch,
    districtRefetch,
    villageRefetch,
    regions: regions?.data ?? [],
    districts: districts?.data ?? [],
    villages: villages?.data ?? [],
    districtLoading,
    villageLoading,
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
