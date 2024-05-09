import { useQuery } from "react-query";
import priceService from "../../../../../services/price";
import { useMemo } from "react";

export const FetchFunction = ({ priceParams }: { priceParams: any }) => {
  const { data: priceListData, refetch: refetchPrice } = useQuery(
    ["GET_PRICE_LIST"],
    () => {
      return priceService.getList(priceParams);
    },
    {
      enabled: !!priceParams.from_tashkent,
    }
  );

  const {
    data: distanceData,
    isLoading: distanceLoading,
    refetch: refetchDistance,
  } = useQuery(["GET_PRICE_DISTANCE_LIST"], () => {
    return priceService.getDistanceList();
  });

  const bodyColumns = useMemo(() => {
    let arr = distanceData?.data;
    const price = priceListData?.data;
    const result: any = []

    if (arr?.length) {
      if (price?.length) {
        arr.forEach((item: any) => {
          price.forEach((element: any) => {
            if (item.region_id === element.region_id)
              item.price = element.price;
          });

          result.push(item);
        });
      }
    }

    return result;
  }, [distanceData, priceListData]);

  return {
    isLoading: distanceLoading,
    refetchDistance,
    refetchPrice,
    bodyColumns,
  };
};
