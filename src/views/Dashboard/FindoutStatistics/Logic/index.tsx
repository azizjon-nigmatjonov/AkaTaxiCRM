import { useQuery } from "react-query";
import dashboardService from "../../../../services/dashboard";

export const FetchFunction = ({ params = {} }: { params: any }) => {
  const { data, isLoading } = useQuery(
    ["GET_SOCIALS_LIST_DASHBOARD", params?.year, params?.month],
    () => {
      return dashboardService.getSocialWidgets({
        year: params.year,
        month: params.month,
      });
    }
  );

  return { socialData: data?.data ?? [], isLoading };
};
