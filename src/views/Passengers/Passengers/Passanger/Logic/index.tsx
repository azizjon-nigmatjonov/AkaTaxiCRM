import { PassengerCalls } from "../Calls";
import { PassengerCoin } from "../Coin";
import PassengerProfile from "../PassangerProfile";
import Trips from "../Trips";

export const tabList = [
  {
    slug: "trips",
    name: "Triplar",
  },
  {
    slug: "data",
    name: "Ma'lumotlar",
  },
  {
    slug: "coin",
    name: "Coin",
  },
  {
    slug: "calls",
    name: "Qo’ng’iroqlar",
  },
];

export const TabActions = () => {
  const GetCurrentPage = (tab: string) => {
    switch (tab) {
      case "data":
        return <PassengerProfile />;
      case "coin":
        return <PassengerCoin />;
      case "calls":
        return <PassengerCalls />;
      default:
        return <Trips />;
    }
  };

  return { GetCurrentPage };
};
