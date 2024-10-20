import { useQuery } from "react-query";
import driverService from "../../../../../../services/drivers";
import { useMemo } from "react";

export const FeaturesLogic = ({
  q,
  locationIds,
}: {
  q: string;
  locationIds: { start: number; end: number };
}) => {
  const { data: driverList } = useQuery(
    ["GET_DRIVER_LIST_ALL_SEARCH", q, locationIds],
    () => {
      return driverService.getAllDriver({ q, locationIds });
    },
    {
      enabled: !!locationIds.start && !!locationIds?.end,
    }
  );

  const completeOptions = useMemo(() => {
    return (
      driverList?.data?.map((item: any) => {
        return {
          label: item.full_name + ' ' + item.phone,
          value: item.id,
        };
      }) ?? []
    );
  }, [driverList]);

  return { completeOptions };
};
