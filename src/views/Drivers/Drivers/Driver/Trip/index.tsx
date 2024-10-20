import { useQuery } from "react-query";
import driverService from "../../../../../services/drivers";
import { useCallback, useMemo, useState } from "react";
import CTable from "../../../../../components/CElements/CTable";
import usePageRouter from "../../../../../hooks/useObjectRouter";
import { FormatTime } from "../../../../../utils/formatTime";
import { useParams } from "react-router-dom";
import { FilterFunctions } from "../../../../../components/UI/Filter/Logic";

const DriverTrip = () => {
  const { navigateQuery, navigateTo } = usePageRouter();
  const { id } = useParams();
  const [filterParams, setFilterParams]: any = useState({});
  const { storeFilters } = FilterFunctions({
    store: true,
    filterParams,
    setFilterParams,
  });

  const handleFilterParams = (obj: any) => {
    setFilterParams(obj);
    storeFilters(obj);
  };
  
  const { data: trip, isLoading } = useQuery(
    ["GET_DRIVERS_TRIPS", id, filterParams],
    () => {
      return driverService.getDriverTripHistory({
        id,
        page: filterParams?.page || 1,
      });
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
      // {
      //   title: "marshrut raqami",
      //   id: "id",
      // },
      {
        title: "Start manzil",
        id: "start",
        render: (val?: any) =>
          val && (
            <div>
              {val?.start_region_name}, {val?.start_district_name}
            </div>
          ),
      },
      {
        title: "borar manzil",
        id: "end",
        render: (val?: any) =>
          val && (
            <div>
              {val?.end_region_name}, {val?.end_district_name}
            </div>
          ),
      },
      {
        title: "sana",
        id: "created_at",
        render: (val?: any) => val && <>{FormatTime(val)}</>,
      },
      {
        title: "mijozlar",
        id: "passengers_count",
        render: (val?: any) => val && <>{val}ta mijoz</>,
      },
      {
        title: "Bekor qilish sababi",
        id: "",
      },
      {
        title: "umumiy summa",
        id: "price_formatted",
        render: (val?: any) => val && <p>{val} so'm</p>,
      },
    ];
  }, []);

  const handleActions = useCallback((status: string, element: any) => {
    if (status === "view") {
      navigateTo(`/drivers/driver/${element.id}`);
    }
    if (status === "edit") navigateQuery({ id: element.id });
  }, []);

  return (
    <>
      <CTable
        headColumns={headColumns}
        bodyColumns={TripData?.list}
        meta={TripData?.meta}
        handleActions={handleActions}
        isLoading={isLoading}
        filterParams={filterParams}
        handleFilterParams={handleFilterParams}
      />
    </>
  );
};

export default DriverTrip;
