import { useQuery } from "react-query";
import driverService from "../../../../../services/drivers";
import { useCallback, useMemo } from "react";
import CTable from "../../../../../components/CElements/CTable";
import usePageRouter from "../../../../../hooks/useObjectRouter";
import { FormatTime } from "../../../../../utils/formatTime";
import { useGetQueries } from "../../../../../hooks/useGetQueries";

const DriverTrip = () => {
  const { navigateQuery, navigateTo } = usePageRouter();
  const { id } = useGetQueries();
  const { currentPage } = useGetQueries();

  const { data: trip, isLoading } = useQuery(
    ["GET_DRIVERS_TRIPS", id],
    () => {
      return driverService.getDriverTripHistory(id);
    },
    {
      enabled: !!id,
    }
    
    );  
    
  const TripData = useMemo(() => {
    const data: any = trip;
    return {
      list:
        data?.data?.map((i: any) => {
          return {
            ...i,
            start: {
              start_region_name: i.start_region_name,
              start_district_name: i.start_district_name,
            },
            end: {
              end_region_name: i.end_region_name,
              end_district_name: i.end_district_name,
            },
          };
        }) ?? [],
      meta: data?.meta,
    };
  }, [trip]);

  

  const headColumns = useMemo(() => {
    return [
      {
        title: "marshrut raqami",
        id: "start_region_name",
      },
      {
        title: "Start manzil",
        id: "start",
        render: (val?: any) => {
          return (
            <>
              {val?.start_region_name}, {val?.start_district_name}
            </>
          );
        },
      },
      {
        title: "borar manzil",
        id: "end",
        render: (val?: any) => {
          return (
            <>
              {val?.end_region_name}, {val?.end_district_name}
            </>
          );
        },
      },
      {
        title: "sana",
        id: "created_at",
        render: (val?: any) => {
          return <>{FormatTime(val)}</>;
        },
      },
      {
        title: "mijozlar",
        id: "passengers_count",
        render: (val?: any) => {
          return <>{val}ta mijoz</>;
        },
      },
      {
        title: "umumiy summa",
        id: "price_formatted",
        render:(val?:any)=>(
          <p>{val} so'm</p>
        )
      },
    ];
  }, []);

  const handleActions = useCallback((status: string, element: any) => {
    if (status === "learn_more") {
      navigateTo(`/drivers/driver/${element.id}`);
    }

    if (status === "edit") navigateQuery({ id: element.id });
  }, []);

  const handleRowClick = (item: any) => {
    navigateTo(`/partners/partner/${item.id}`);
  };

  return (
    <>
      <CTable
        headColumns={headColumns}
        bodyColumns={TripData?.list}
        count={TripData?.meta?.totalCount}
        handleActions={handleActions}
        handleRowClick={handleRowClick}
        isLoading={isLoading}
        currentPage={currentPage}
      />
    </>
  );
};

export default DriverTrip;
