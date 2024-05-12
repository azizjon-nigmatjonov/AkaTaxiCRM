import { useQuery } from "react-query";
import priceService from "../../../../../services/price";
import { useMemo } from "react";

export const FetchFunction = () => {
  // const {
  //   data: priceListData,
  //   isLoading: priceListLoading,
  //   refetch: refetchPrice,
  // } = useQuery(
  //   ["GET_PRICE_LIST"],
  //   () => {
  //     return priceService.getList(priceParams);
  //   },
  //   {
  //     enabled: !!priceParams.from_tashkent,
  //   }
  // );

  const {
    data: distanceData,
    isLoading: distanceLoading,
    refetch: refetchDistance,
  } = useQuery(["GET_PRICE_DISTANCE_LIST"], () => {
    return priceService.getDistanceList();
  });

  const bodyColumns = useMemo(() => {
    const arr = distanceData?.data;
    return arr;
  }, [distanceData]);

  return {
    isLoading: distanceLoading,
    refetchDistance,
    bodyColumns,
  };
};
