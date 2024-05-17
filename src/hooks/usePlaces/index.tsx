import { useQuery } from "react-query";
import { useGetQueries } from "../../hooks/useGetQueries";
import regionService from "../../services/regions";

export const usePlaces = () => {
  const { region, district } = useGetQueries();
  const {
    data: regions,
    isLoading: getRegionsLoading,
    refetch: getRegionsRefetch,
  } = useQuery(["GET_REGION_LIST_GLOBAL"], () => {
    return regionService.getList();
  });

  const {
    data: districts,
    isLoading: getDistrictsLoading,
    refetch: getDistrictsRefetch,
  } = useQuery(
    ["GET_DIRSTRICTS_LIST_GLOBAL", region],
    () => {
      return regionService.getDistrict(region);
    },
    {
      enabled: !!region,
    }
  );

  const {
    data: villages,
    isLoading: getVillagesLoading,
    refetch: getVillagesRefetech,
  } = useQuery(
    ["GET_DIRSTRICTS_LIST_GLOBAL", district],
    () => {
      return regionService.getVillage(district);
    },
    {
      enabled: !!district,
    }
  );

  return {
    regionList: regions?.data ?? [],
    getRegionsLoading,
    getRegionsRefetch,
    districtList: districts?.data ?? [],
    getDistrictsLoading,
    getDistrictsRefetch,
    villageList: villages?.data ?? [],
    getVillagesLoading,
    getVillagesRefetech,
  };
};
