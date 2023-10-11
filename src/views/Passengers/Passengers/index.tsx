import { useMemo } from "react";
import CTable from "../../../components/CElements/CTable";
import SectionHeader from "../../../components/Sections/Header";
import AddButton from "../../../components/Buttons/AddButton";
import FilterButton from "../../../components/Buttons/FilterButton";
import Form from "./Form";
import usePageRouter from "../../../hooks/useObjectRouter";
import { useQuery } from "react-query";
import passengerService from "../../../services/passengers";

const Passengers = () => {
  const { navigateQuery } = usePageRouter();

  const { data: passengers, isLoading } = useQuery(
    ["GET_PASSENGER_LIST"],
    () => {
      return passengerService.getList();
    },
    {
      enabled: true,
    }
  );

  const headColumns = useMemo(() => {
    return [
      {
        title: "Ism familya",
        id: "full_name",
      },
      {
        title: "Viloyat",
        id: "region",
      },
      {
        title: "Tel.raqam",
        id: "username",
      },
      {
        title: "Tug‘ilgan sana",
        id: "birthday",
      },
      {
        title: "",
        id: "actions",
        permission: ["edit", "delete"],
      },
    ];
  }, []);

  const bodyColumns = useMemo(() => {
    return passengers ?? []
  }, [passengers])

  const handleActions = (status: string, el: any) => {
    console.log("1", status, el);
  };

  return (
    <>
      <SectionHeader title="Yo‘lovchilar ro‘yxati">
        <div className="flex items-center gap-3">
          <FilterButton text="filter" />
          <AddButton
            text="new_passenger"
            onClick={() => navigateQuery({ id: "create" })}
          />
        </div>
      </SectionHeader>
      <CTable
        headColumns={headColumns}
        bodyColumns={bodyColumns}
        count={10}
        isLoading={isLoading}
        handleActions={handleActions}
      />

      <Form />
    </>
  );
};

export default Passengers;
