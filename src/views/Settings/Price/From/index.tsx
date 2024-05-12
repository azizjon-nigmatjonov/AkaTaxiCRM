import { PriceTable } from "../../../../components/UI/PriceTable";
import { FetchFunction } from "./Logic";

export const FromTashkent = () => {
  const { priceListData } = FetchFunction()
  console.log('priceListData', priceListData);
  
  return (
    <div className="container">
      <PriceTable />
    </div>
  );
};
