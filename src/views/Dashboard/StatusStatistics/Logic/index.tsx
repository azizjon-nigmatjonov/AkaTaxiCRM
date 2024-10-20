import { useQuery } from "react-query";
import statistics from "../../../../services/statistics";
import { useMemo } from "react";

export const FetchFunction = ({ params }: { params: any }) => {
  const { data, isLoading } = useQuery(
    ["GET_REASON_STATISTICS", params],
    () => {
      const created_at =
        params.date?.length > 1
          ? `${params.date[0]},${params.date[1]}`
          : undefined;
      return statistics.getReasonStatistics({
        created_at,
        operator_id: params?.operator_id,
      });
    }
  );

  const newData = useMemo(() => {
    const obj: any = {
      drivers: data?.data?.drivers ?? [],
      passengers: data?.data?.passengers ?? [],
    };
    if (data?.data) {
      for (let key in data?.data) {
        if (data?.data?.[key]?.length) {
          if (key === "driver") {
            obj.driver_count = 0;
            // obj.drivers = data.data[key];
          } else {
            obj.passenger_count = 0;
            // obj.passengers = data.data[key];
          }
          for (let value of data?.data?.[key]) {
            if (key === "driver") {
              obj.driver_count += value.count;
            } else {
              obj.passenger_count += value.count;
            }
          }
        }
      }
    }

    return obj;
  }, [data]);

  return { statistics: newData ?? {}, isLoading };
};
