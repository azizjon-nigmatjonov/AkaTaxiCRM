import { useMemo } from "react";
import CTable from "../../../components/CElements/CTable";
import SectionHeader from "../../../components/Sections/Header";
import FilterButton from "../../../components/Filters";
import { useQuery } from "react-query";
import passengerService from "../../../services/passengers";

const ActivePassengers = () => {

  const {
    data: passengers,
    isLoading,
  } = useQuery(
    ["GET_ACTIVE_PASSENGERS"],
    () => {
      return passengerService.getActivePassengers();
    }
  );
  

  const headColumns = useMemo(() => {
    return [
      {
        title: "Ism familya",
        id: "full_name",
      },
      {
        title: "Qayerdan",
        id: "from",
      },
      {
        title: "Qayerga",
        id: "to",
      },
      {
        title: "qidiruv vaqti",
        id: "search_time",
      },
      {
        title: "Mavjud taksilar",
        id: "taxi",
        render: (val: number) => {
          return val && <>{val} ta</>;
        },
      },
      {
        title: "",
        id: "actions",
        permission: ['edit', 'delete']
      },
    ];
  }, []);

  const bodyColumns = useMemo(() => {
    return passengers?.data ?? [];
  }, [passengers]);

  return (
    <>
      <SectionHeader title="Aktiv yo‘lovchilar ro‘yxati">
        <FilterButton text="filter" />
      </SectionHeader>
      <CTable
        headColumns={headColumns}
        bodyColumns={bodyColumns}
        count={6}
        isResizeble={true}
        isLoading={isLoading}
      />
    </>
  );
};

export default ActivePassengers;
