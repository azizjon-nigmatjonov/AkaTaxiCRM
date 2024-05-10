import { PassengerTable } from "./PassengerTable";
import { ShareAppTable } from "./ShareAppTable";
import { FetchFunction } from "./Logic";

export const PassengerCoin = () => {
  const { coinData, isLoading } = FetchFunction()
  
  return (
    <>
      <div className="mb-5">
        <img className="ml-[-20px]" src="/images/website/coin.png" alt="coin" />
      </div>

      <PassengerTable list={coinData?.bookings} isLoading={isLoading} />
      <div className="mt-5">
        <ShareAppTable list={coinData?.invites} isLoading={isLoading} />
      </div>
    </>
  );
};
