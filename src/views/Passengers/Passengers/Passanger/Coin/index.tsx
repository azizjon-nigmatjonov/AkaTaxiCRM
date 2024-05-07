import { PassengerTable } from "./PassengerTable";
import { ShareAppTable } from "./ShareAppTable";

export const PassengerCoin = () => {
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
