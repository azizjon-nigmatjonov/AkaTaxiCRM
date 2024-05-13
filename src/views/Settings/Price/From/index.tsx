import { OneSkeleton } from "../../../../components/CElements/CSkeleton/OneSkeleton";
import { PriceTable } from "../../../../components/UI/PriceTable";
import { FetchFunction } from "./Logic";
export const FromTashkent = () => {
  const { bodyColumns, isLoading, refetchPrice, refetchDistance } = FetchFunction({
    priceParams: { from_tashkent: 1 },
  });

  if (isLoading) {
    return (
      <div className="container">
        <OneSkeleton height={700} />
      </div>
    );
  }

  const handleSucces = () => {
    refetchDistance()
    refetchPrice()
  }

  return (
    <div className="container">
      <div className="space-y-10">
        {bodyColumns?.map((item: any) => (
          <PriceTable key={item.region_id} region={item} handleSucces={handleSucces} />
        ))}
      </div>
    </div>
  );
};
