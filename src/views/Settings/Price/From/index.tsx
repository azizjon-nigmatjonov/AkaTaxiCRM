import { OneSkeleton } from "../../../../components/CElements/CSkeleton/OneSkeleton";
import { PriceTable } from "../../../../components/UI/PriceTable";
import { FetchFunction } from "./Logic";
export const FromTashkent = () => {
  const { bodyColumns, isLoading } = FetchFunction();

  if (isLoading) {
    return (
      <div className="container">
        <OneSkeleton height={700} />
      </div>
    );
  }

  return (
    <div className="container">
      <PriceTable bodyColumns={bodyColumns} />
    </div>
  );
};
