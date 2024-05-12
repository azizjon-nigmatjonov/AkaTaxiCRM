import { useQuery } from "react-query";
import priceService from "../../../../../services/price";

export const FetchFunction = () => {
  const {
    data: priceListData,
    isLoading: priceListLoading,
    refetch,
  } = useQuery(["GET_PRICE_LIST"], () => {
    return priceService.getList();
  });

  return { priceListLoading, refetch, priceListData };
};
