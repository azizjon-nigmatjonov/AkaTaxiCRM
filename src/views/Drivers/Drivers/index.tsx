import { useCallback, useMemo } from "react";
import AddButton from "../../../components/Buttons/AddButton";
import FilterButton from "../../../components/Filters";
import CTable from "../../../components/CElements/CTable";
import SectionHeader from "../../../components/Sections/Header";
import Form from "./Form";
import usePageRouter from "../../../hooks/useObjectRouter";
import driverService from "../../../services/drivers";
import { useQuery } from "react-query";

const Drivers = () => {
  const { navigateQuery, navigateTo } = usePageRouter();

  const { data: drivers, isLoading } = useQuery(
    ["GER_DRIVERS_LIST"],
    () => {
      return driverService.getList();
    },
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
      },
      {
        title: "car",
        id: "car_name",
      },
      {
        title: "mashina raqami",
        id: "car_number",
      },
      {
        title: "raqam viloyati",
        id: "car_number_region",
      },
      {
        title: "",
        id: "actions",
        permission: ["learn_more", "edit", "delete"],
      },
    ];
  }, []);

  const handleActions = useCallback((element: any, status: string) => {
    if (status === "learn_more") {
      navigateTo(`/drivers/driver/${element.id}`);
    }

    if (status === 'edit') navigateQuery({ id: element.id })
  }, []);

  return (
    <>
      <SectionHeader title="Haydovchilar ro‘yxati">
        <div className="flex items-center gap-3">
          <FilterButton text="filter" />
          <AddButton
            text="new_driver"
            onClick={() => navigateQuery({ id: "create" })}
          />
        </div>
      </SectionHeader>
      <CTable
        headColumns={headColumns}
        bodyColumns={drivers ?? []}
        count={1}
        handleActions={handleActions}
        isLoading={isLoading}
      />

      <Form />
    </>
  );
};

export default Drivers;
