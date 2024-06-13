import { useQuery } from "react-query";
import priceService from "../../../../../services/price";
import { useEffect, useState } from "react";

export const FetchFunction = ({ priceParams }: { priceParams: any }) => {
  const { data: priceListData, refetch: refetchPrice } = useQuery(
    ["GET_PRICE_LIST", priceParams?.from_tashkent],
    () => {
      return priceService.getList(priceParams);
    }
  );

  const {
    data: distanceData,
    isLoading: distanceLoading,
    refetch: refetchDistance,
  } = useQuery(["GET_PRICE_DISTANCE_LIST", priceParams?.from_tashkent], () => {
    return priceService.getDistanceList(priceParams.from_tashkent);
  });
  
  const [bodyColumns, setBodyColumns] = useState([]);

  useEffect(() => {
    let arr = distanceData?.data;
    const price = priceListData?.data;

    if (arr?.length) {
      if (price?.length) {
        arr = arr.map((item: any) => {
          price.forEach((element: any) => {
            if (item.region_id === element.region_id)
              item.price = element.price;
          });

          return item;
        });
      }
    }
    setBodyColumns(arr);
  }, [distanceData, priceListData]);

  return {
    isLoading: distanceLoading,
    refetchDistance,
    refetchPrice,
    bodyColumns,
  };
};
