import { useCallback, useMemo } from "react";
import CTable from "../../../../components/CElements/CTable";
import SectionHeader from "../../../../components/Sections/Header";
import FilterButton from "../../../../components/Filters";
import { useQuery } from "react-query";
import driverService from "../../../../services/drivers";
import { useGetQueries } from "../../../../hooks/useGetQueries";
import CBreadcrumbs from "../../../../components/CElements/CBreadcrumbs";
import carService from "../../../../services/cars";
import { FormatTime } from "../../../../utils/formatTime";
import { Header } from "../../../../components/Header";

const SingleCar = () => {
  const { id, currentPage } = useGetQueries();
  const { data: driversData } = useQuery(
    ["GET_DRIVERS_BY_CAR"],
    () => {
      return driverService.getList({ car_id: id });
    },
    {
      enabled: !!id,
    }
  );

  const { data: carData } = useQuery(
    ["GET_BY_CAR"],
    () => {
      return carService.getElement(id);
    },
    {
      enabled: !!id,
    }
  );

  const headColumns = useMemo(() => {
    return [
      {
        title: "Ism familya",
        id: "full_name",
      },
      {
        title: "phone_number",
        id: "phone",
      },
      {
        title: "Tug‘ilgan sana",
        id: "birthday",
        render: (val?: any) => {
          return <>{FormatTime(val)}</>;
        },
      },
      {
        title: "mashina raqami",
        id: "car_number",
      },
      {
        title: "status",
        id: "status",
        render: (val: any) => (
          <div
            className={
              val === false
                ? "text-[var(--error)]"
                : val === true
                ? "text-[var(--green)]"
                : ""
            }
          >
            {val === false ? "Noaktiv" : val === true ? "Aktiv" : ""}
          </div>
        ),
      },
      {
        title: "",
        id: "actions",
        permission: ["edit", "delete", "learn_more"],
      },
    ];
  }, []);

  const drivers: any = useMemo(() => {
    return {
      list: driversData?.data ?? [],
      ...driversData,
    };
  }, [driversData]);

  const handleActions = useCallback((element: any, status: string) => {
    if (status === "edit") {
      console.log(element);
    }
  }, []);

  const breadCrumbItems = useMemo(() => {
    return [
      {
        label: "Haydovchilar ro‘yxati ",
        link: "/drivers/cars",
      },
      {
        label: carData?.data?.name.uz || "Mashina",
      },
    ];
  }, [carData]);

  return (
    <>
      <Header><CBreadcrumbs items={breadCrumbItems} progmatic={true} type="link" /></Header>
      <div className="px-5">
      <SectionHeader>
        <FilterButton text="filter" />
      </SectionHeader>

      <CTable
        headColumns={headColumns}
        bodyColumns={drivers?.list}
        count={drivers?.meta?.totalCount}
        handleActions={handleActions}
        currentPage={currentPage}
      />
      </div>
    </>
  );
};

export default SingleCar;
