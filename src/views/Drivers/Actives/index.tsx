import { useCallback, useMemo } from "react";
import CTable from "../../../components/CElements/CTable";
import SectionHeader from "../../../components/Sections/Header";
import FilterButton from "../../../components/Filters";
import Form from "./Form";
import usePageRouter from "../../../hooks/useObjectRouter";
import { useQuery } from "react-query";
import driverService from "../../../services/drivers";
import { useGetQueries } from "../../../hooks/useGetQueries";
import CSlider from "../../../components/CElements/CSlider";
import { Header } from "../../../components/Header";

const ActiveDrivers = () => {
  const { navigateQuery } = usePageRouter();
  const { currentPage, q } = useGetQueries();

  const { data: drivers, isLoading } = useQuery(["GET_ACTIVE_DRIVERS", q], () => {
    return driverService.getActives({ q });
  });

  const driversData = useMemo(() => {
    if (!drivers) return [];
    const list: any = drivers?.data;
    return {
      list: list.map((item: any) => {
        return {
          ...item,
          data: {
            car_name: item.car_name,
            full_name: item.full_name,
            car_number: item.car_number,
          },
        };
      }),
      ...drivers?.data,
    };
  }, [drivers]);

  const headColumns = useMemo(() => {
    return [
      {
        title: "Ism / mashina",
        id: "data",
        render: (obj: any) => {
          return obj?.full_name ? (
            <div className="py-2">
              <p>{obj.full_name}</p>
              <span className="text-[var(--gray)] uppercase">
                {obj.car_name} - {obj.car_number}
              </span>
            </div>
          ) : (
            ""
          );
        },
      },
      {
        title: "Tel.raqam",
        id: "phone",
      },
      {
        title: "Qayerdan",
        id: "from",
      },
      {
        title: "qayerga",
        id: "where",
      },
      {
        title: "qidiruv vaqti",
        id: "time_search",
      },
    ];
  }, []);

  const handleActions = useCallback((status: string, element: any) => {
    if (status === "edit") navigateQuery({ id: element.id });

    if (status === "delete") {
      // driverService.deleteActive(element.id).then(() => {
      //   refetch();
      // });
    }
  }, []);

  const handleSearch = (evt: any) => {
    navigateQuery({ q: evt })
  };

  return (
    <>
      <Header title="Aktiv haydovchilar" />
      <div className="px-6">
        <SectionHeader handleSearch={handleSearch}>
          <div className="flex items-center gap-3">
            <FilterButton text="filter">
              <CSlider />
            </FilterButton>
          </div>
        </SectionHeader>

        <CTable
          headColumns={headColumns}
          bodyColumns={driversData?.list}
          count={driversData?.meta?.totalCount}
          handleActions={handleActions}
          isLoading={isLoading}
          currentPage={currentPage}
        />

        <Form />
      </div>
    </>
  );
};

export default ActiveDrivers;
