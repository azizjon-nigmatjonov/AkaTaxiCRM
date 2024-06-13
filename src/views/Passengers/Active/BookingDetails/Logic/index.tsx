import { useQuery } from "react-query";
import { useGetQueries } from "../../../../../hooks/useGetQueries";
import bookingService from "../../../../../services/booking";

export const FetchFunction = () => {
  const { booking } = useGetQueries();
  const { data: bookingData, isLoading } = useQuery(
    ["GET_BOOKING_SHOW_LIST", booking],
    () => {
      return bookingService.getList(booking);
    },
    {
      enabled: !!booking,
    }
  );

  return { bookingData: bookingData?.data?.booking ?? {}, isLoading }
};
