import { useCallback, useMemo } from "react";
import CTable from "../../../components/CElements/CTable";
import SectionHeader from "../../../components/Sections/Header";
import AddButton from "../../../components/Buttons/AddButton";
import FilterButton from "../../../components/Filters";
import Form from "./Form";
import usePageRouter from "../../../hooks/useObjectRouter";
import { useQuery } from "react-query";
import driverService from "../../../services/drivers";

const ActiveDrivers = () => {
  const { navigateQuery, navigateTo } = usePageRouter();

  const {
    data: drivers,
    isLoading,
    refetch,
  } = useQuery(["GET_ACTIVE_DRIVERS"], () => {
    return driverService.getActives();
  });

  console.log("drivers", drivers);

  const bodyColumns = useMemo(() => {
    if (!drivers) return [];
    const list: any = drivers;
    return list.map((item: any) => {
      return {
        ...item,
        data: {
          car_name: item.car_name,
          full_name: item.full_name,
          car_number: item.car_number,
        },
      };
    });
  }, [drivers]);

  const headColumns = useMemo(() => {
    return [
      {
        title: "Ism / mashina",
        id: "data",
        render: (obj: any) => {
          return obj?.full_name ? (
            <>
              <p>{obj.full_name}</p>
              <span className="text-[var(--gray)] uppercase">
                {obj.car_name} - {obj.car_number}
              </span>
            </>
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
      {
        title: "",
        id: "actions",
        permission: ["delete", "edit"],
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

  return (
    <>
      <SectionHeader title="Aktiv haydovchilar ro'yxati">
        <div className="flex items-center gap-3">
          <FilterButton text="filter" />
          <AddButton
            text="Yangi marshrut"
            onClick={() => navigateQuery({ id: "create" })}
          />
        </div>
      </SectionHeader>
      <CTable
        headColumns={headColumns}
        bodyColumns={bodyColumns}
        count={1}
        handleActions={handleActions}
        isLoading={isLoading}
      />

      <Form />
    </>
  );
};

export default ActiveDrivers;
