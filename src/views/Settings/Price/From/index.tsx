import { WrapperCard } from "../../../../components/UI/WrapperCard";
import { useSelector } from "react-redux";

export const FromTashkent = () => {
  const regions = useSelector((state: any) => state.regions.regions);
  console.log("regions", regions);

  return <WrapperCard>to</WrapperCard>;
};
