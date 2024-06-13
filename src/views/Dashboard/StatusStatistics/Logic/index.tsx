import { useQuery } from "react-query";
import statistics from "../../../../services/statistics";

export const FetchFunction = ({ params }: { params: {} }) => {
  const { data, isLoading } = useQuery(["GET_REASON_STATISTICS", params], () => {
    return statistics.getReasonStatistics(params);
  });

  return { statistics: data?.data ?? {}, isLoading };
};
