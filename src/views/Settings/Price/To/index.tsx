import { useForm } from "react-hook-form";
import { OneSkeleton } from "../../../../components/CElements/CSkeleton/OneSkeleton";
import { PriceTable } from "../../../../components/UI/PriceTable";
import { FetchFunction } from "../From/Logic/price";
export const ToTashkent = () => {
  const { bodyColumns, isLoading, refetchPrice, refetchDistance } =
    FetchFunction({
      priceParams: { from_tashkent: 0 },
    });
  const { setValue, getValues } = useForm();

  if (isLoading) {
    return (
      <div className="container">
        <OneSkeleton height={700} />
      </div>
    );
  }

  const handleSucces = () => {
    refetchDistance();
    refetchPrice();
  };

  return (
    <div className="container">
      <div className="space-y-10">
        {bodyColumns?.map((item: any) => (
          <PriceTable
            key={item.region_id}
            region={item}
            handleSucces={handleSucces}
            getDistanceValues={getValues}
            handleDistanceSet={setValue}
            from_tashkent={0}
          />
        ))}
      </div>
    </div>
  );
};
