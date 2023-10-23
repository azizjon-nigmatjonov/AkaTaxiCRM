import { useMemo, useState } from "react";
import CTable from "../../../components/CElements/CTable";
import SectionHeader from "../../../components/Sections/Header";
import AddButton from "../../../components/Buttons/AddButton";
import FilterButton from "../../../components/Buttons/FilterButton";
import Form from "./Form";
import usePageRouter from "../../../hooks/useObjectRouter";
import { useQuery } from "react-query";
import passengerService from "../../../services/passengers";
import Filters from "./Filters";

const Passengers = () => {
  const { navigateQuery } = usePageRouter();
  const [open, setOpen] = useState("");

  const {
    data: passengers,
    isLoading,
    refetch,
  } = useQuery(
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
    return passengers ?? [];
  }, [passengers]);

  const handleActions = (status: string, el: any) => {
    if (status === "delete") {
      passengerService.deleteElement(el.id).then(() => {
        refetch();
      });
    }
    if (status === "edit") {
      navigateQuery({ id: el.id });
    }
  };

  return (
    <>
      <SectionHeader title="Yo‘lovchilar ro‘yxati">
        <div className="flex items-center gap-3">
          <div className="relative">
            <FilterButton text="filter" onClick={() => setOpen("filter")} />
            {open === "filter" && <Filters handleOpen={() => setOpen("")} />}
          </div>
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

      <Form refetch={refetch} />
    </>
  );
};

export default Passengers;
