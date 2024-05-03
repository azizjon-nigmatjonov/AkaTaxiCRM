import { WrapperCard } from "../../../../components/UI/WrapperCard";
import { useSelector } from "react-redux";
import { PriceTable } from "./PriceTable";

export const FromTashkent = () => {
  const regions = useSelector((state: any) => state.regions.regions);
  console.log("regions", regions);

  return (
    <div className="mx-5">
      <PriceTable />
    </div>
  );
};
