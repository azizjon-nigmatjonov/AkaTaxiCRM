import { useQuery } from "react-query";
import { PassengerTable } from "./PassengerTable";
import { ShareAppTable } from "./ShareAppTable";
import coinService from "../../../../../services/passengers/coin";

export const PassengerCoin = () => {
  const { data } = useQuery(['GET_COIN_LIST'], () => {
    return coinService.getList()
  })
  console.log(data);
  
  return (
    <>
      <div className="mb-5">
        <img src="/images/website/coin.png" alt="coin" />
      </div>

      <PassengerTable />
      <div className="mt-5">
        <ShareAppTable />
      </div>
    </>
  );
};
