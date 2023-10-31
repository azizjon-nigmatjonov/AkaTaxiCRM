import { useMemo } from "react";
import CTable from "../../../components/CElements/CTable";
import SectionHeader from "../../../components/Sections/Header";
import AddButton from "../../../components/Buttons/AddButton";
import FilterButton from "../../../components/Filters";
import Form from "./Form";
import usePageRouter from "../../../hooks/useObjectRouter";
import { useQuery } from "react-query";
import passengerService from "../../../services/passengers";
import { useGetQueries } from "../../../hooks/useGetQueries";
import { FormatTime } from "../../../utils/formatTime";

const Passengers = () => {
  const { navigateQuery } = usePageRouter();
  const { currentPage } = useGetQueries();

  const { data, isLoading, refetch } = useQuery(
    ["GET_PASSENGER_LIST", currentPage],
    () => {
      return passengerService.getList({ page: currentPage, perPage: 10 });
    },
    {
      enabled: true,
    }
  );

  const passengers: any = useMemo(() => {
    return data ?? {};
  }, [data]);

  const headColumns = useMemo(() => {
    return [
      {
        title: "Ism familya",
        id: "full_name",
      },
      {
        title: "Viloyat",
        id: "region_name",
      },
      {
        title: "Tel.raqam",
        id: "username",
      },
      {
        title: "Tug‘ilgan sana",
        id: "birthday",
        render: (val?: any) => {
          return (
            <>{FormatTime(val)}</>
          )
        }
      },
      {
        title: "",
        id: "actions",
        permission: ["edit", "delete"],
      },
    ];
  }, []);

  const bodyColumns = useMemo(() => {
    return passengers?.data ?? [];
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
            <FilterButton text="filter">filter</FilterButton>
            {/* {open === "filter" && <Filters handleOpen={() => setOpen("")} />} */}
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
        count={passengers?.meta?.pageCount}
        isLoading={isLoading}
        handleActions={handleActions}
        currentPage={currentPage}
      />

      <Form refetch={refetch} />
    </>
  );
};

export default Passengers;
