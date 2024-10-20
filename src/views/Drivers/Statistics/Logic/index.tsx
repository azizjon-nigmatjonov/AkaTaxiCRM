import { useQuery } from "react-query";
import driverService from "../../../../services/drivers";
import { useMemo } from "react";

export const FetchFunction = ({ cardDate }: { cardDate: string[] }) => {

  const { data: widgets, isLoading: widgetsLoading } = useQuery(
    ["GET_GRAPH_LIST", cardDate],
    () => {
      return driverService.getWidgets({ date: cardDate?.join(",") });
    }
  );

  const { data: graph, isLoading: barLoading } = useQuery(
    ["GET_GRAPH_DATA", cardDate],
    () => {
      return driverService.getDriversGraph({ date: cardDate?.join(",") });
    }
  );

  const { data: userRegion, isLoading: regionLoading } = useQuery(
    ["GET_REGION_USER"],
    () => {
      return driverService.getUserRegion();
    }
  );

  const DataList = useMemo(() => {
    let graphData = {};

    if (graph?.data) {
      const data = graph?.data;
      const label: any = [];
      const trip: any = [];
      const founded: any = [];

      data?.map(
        (val: any) => (
          label.push(val?.time),
          trip.push(val?.count),
          founded.push(val?.bookings)
        )
      );

      graphData = { label, trip, founded };
    }

    return {
      widgetsData: widgets?.data ?? [],
      graphData,
      regionUser: userRegion?.data ?? [],
    };
  }, [widgets, graph, userRegion]);

  return { data: DataList, widgetsLoading, barLoading, regionLoading };
};

export const breadCrumbs = [
  { label: "Haydovchilar", link: "/drivers/main" },
  { label: "Statistika" },
];
