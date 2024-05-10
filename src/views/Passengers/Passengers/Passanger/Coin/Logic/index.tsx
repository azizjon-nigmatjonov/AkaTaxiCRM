import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import coinService from "../../../../../../services/passengers/coin";
import { useMemo } from "react";

export const FetchFunction = () => {
  const { id } = useParams();
  const { data: coinData, isLoading } = useQuery(
    ["GET_COIN_LIST"],
    () => {
      return coinService.getList(id);
    },
    {
      enabled: !!id,
    }
  );

  const CoinLists = useMemo(() => {
    const arr = coinData?.data?.bookings;
    const arr2 = coinData?.data?.invites
    let bookings = [];
    let invites = []
    if (arr?.length) {
      bookings = arr.map((el: any) => {
        return {
          start: `${el.start_location_region_name}, ${el.start_location_name}`,
          end: `${el.end_location_region_name}, ${el.end_location_name}`,
          ...el
        };
      });
    }
    if (arr2?.length) {
        invites = arr2.map((el: any) => {
          return {
            start: `${el.start_location_region_name}, ${el.start_location_name}`,
            end: `${el.end_location_region_name}, ${el.end_location_name}`,
            ...el
          };
        });
      }

    return { bookings, invites };
  }, [coinData]);

  return { coinData: CoinLists, isLoading };
};
