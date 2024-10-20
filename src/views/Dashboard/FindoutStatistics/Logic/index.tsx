import { useQuery } from "react-query";
import dashboardService from "../../../../services/dashboard";
import { useMemo } from "react";
const defaultData = [
  {
    platform: "by facebook",
    count: 0,
  },
  {
    platform: "by friend",
    count: 0,
  },
  {
    platform: "by instagram",
    count: 0,
  },
  {
    platform: "by telegram",
    count: 0,
  },
  {
    platform: "by youtube",
    count: 0,
  },
  {
    platform: "other..",
    count: 0,
  },
];
export const FetchFunction = ({ params = {} }: { params: any }) => {
  const { data, isLoading } = useQuery(
    ["GET_SOCIALS_LIST_DASHBOARD", params],
    () => {
      const created_at =
        params.date?.length > 1 ? `${params.date[0]},${params.date[1]}` : "";
      return dashboardService.getSocialWidgets({
        created_at,
      });
    }
  );

  const newData = useMemo(() => {
    const obj: any = {};
    if (data?.data) {
      for (let key in data.data) {
        if (key === "driver") {
          obj.driver_count = 0;
          obj.driver = data.data[key];
        } else {
          obj.passenger_count = 0;
          obj.passenger = data.data[key];
        }
        for (let value of data.data[key]) {
          if (key === "driver") {
            obj.driver_count += value.count;
          } else {
            obj.passenger_count += value.count;
          }
        }
      }
    }

    return obj;
  }, [data]);

  return { socialData: newData, defaultData, isLoading };
};
