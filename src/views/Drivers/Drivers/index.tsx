import { useCallback, useMemo } from "react";
import AddButton from "../../../components/Buttons/AddButton";
import FilterButton from "../../../components/Filters";
import CTable from "../../../components/CElements/CTable";
import SectionHeader from "../../../components/Sections/Header";
import Form from "./Form";
import usePageRouter from "../../../hooks/useObjectRouter";
import driverService from "../../../services/drivers";
import { useQuery } from "react-query";
import { useGetQueries } from "../../../hooks/useGetQueries";
import { FormatTime } from "../../../utils/formatTime";
import CSlider from "../../../components/CElements/CSlider";

const Drivers = () => {
  const { navigateQuery, navigateTo } = usePageRouter();
  const { currentPage } = useGetQueries();

  const { data, isLoading, refetch } = useQuery(
    ["GER_DRIVERS_LIST", currentPage],
    () => {
      return driverService.getList({ page: currentPage, perPage: 10 });
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
        title: "car",
        id: "car_name",
      },
      {
        title: "mashina raqami",
        id: "car_number",
      },
      {
        title: "",
        id: "actions",
        permission: ["learn_more", "edit", "delete"],
      },
    ];
  }, []);

  const handleActions = useCallback((status: string, element: any) => {
    if (status === "learn_more") {
      navigateTo(`/drivers/driver?id=${element.id}`);
    }

    if (status === "edit") navigateQuery({ id: element.id });

    if (status === "delete") {
      driverService.deleteElement(element.id).then(() => {
        refetch();
      });
    }
  }, []);

  const drivers: any = useMemo(() => {
    return data ?? {};
  }, [data]);

  const handleSearch = (evt: any) => {
    console.log(evt);
  };
  return (
    <>
      <SectionHeader handleSearch={handleSearch}>
        <div className="flex items-center gap-3">
          <FilterButton text="filter">
            <CSlider />
          </FilterButton>

          <AddButton
            text="new_driver"
            onClick={() => navigateQuery({ id: "create" })}
          />
        </div>
      </SectionHeader>

      <CTable
        headColumns={headColumns}
        bodyColumns={drivers?.data ?? []}
        count={drivers?.meta?.pageCount}
        handleActions={handleActions}
        isLoading={isLoading}
        currentPage={currentPage}
        clickable={true}
      />

      <Form refetch={refetch} />
    </>
  );
};

export default Drivers;
