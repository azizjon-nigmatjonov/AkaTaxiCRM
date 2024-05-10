<<<<<<< HEAD
import { useGetQueries } from "../../../../hooks/useGetQueries";
import { useQuery } from "react-query";
import driverService from "../../../../services/drivers";
import { useMemo } from "react";

export const FetchFunction = () => {
    const { year, month, week, start, end } = useGetQueries()

    const { data: widgets, isLoading: widgetsLoading } = useQuery(['GET_GRAPH_LIST', start, end], () => {
        return driverService.getWidgets({ start, end });
    })

    const { data: graph, isLoading: barLoading } = useQuery(['GET_GRAPH_DATA', year, week, month], () => {
        return driverService.getDriversGraph({ year, week, month })
    })

    const { data: userRegion, isLoading: regionLoading } = useQuery(['GET_REGION_USER'], () => {
        return driverService.getUserRegion()
    })

    const DataList = useMemo(() => {
        let graphData = {}

        if (graph?.data) {
            const data = graph?.data;
            const label: any = [];
            const trip: any = [];
            const founded: any = [];

            data?.map((val: any) => (label.push(val?.time), trip.push(val?.count), founded.push(val?.bookings)))

            graphData = { label, trip, founded }
        }

        return { widgetsData: widgets?.data ?? [], graphData, regionUser: userRegion?.data ?? [] };

    }, [widgets, graph, userRegion])

    return { data: DataList, widgetsLoading, barLoading, regionLoading }
}

export  const breadCrumbs = [
    { label: "Haydovchilar", link: '/drivers/main' },
    { label: 'Statistika', }
  ]
=======

const 
>>>>>>> 37966d5 (test)
