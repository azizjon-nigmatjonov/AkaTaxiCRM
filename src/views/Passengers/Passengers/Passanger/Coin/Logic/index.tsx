import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import coinService from "../../../../../../services/passengers/coin";

export const FetchFunction = () => {
  const { id } = useParams();
  const { data, isLoading } = useQuery(
    ["GET_COIN_LIST"],
    () => {
      return coinService.getList(id);
    },
    {
      enabled: !!id,
    }
  );

  return { coinData: data, isLoading };
};
