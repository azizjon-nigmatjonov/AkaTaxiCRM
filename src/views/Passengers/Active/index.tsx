import { useMemo } from "react";
import CTable from "../../../components/CElements/CTable";
import SectionHeader from "../../../components/Sections/Header";
import FilterButton from "../../../components/Filters";
import { useQuery } from "react-query";
import passengerService from "../../../services/passengers";
import CLabel from "../../../components/CElements/CLabel";
import CSelect from "../../../components/CElements/CSelect";
import CDriver from "../../../components/CElements/CDivider";
import CSlider from "../../../components/CElements/CSlider";
import { useSelector } from "react-redux";

const ActivePassengers = () => {
  const { data: passengers, isLoading } = useQuery(
    ["GET_ACTIVE_PASSENGERS"],
    () => {
      return passengerService.getActivePassengers();
    }
  );
  const regions = useSelector((state: any) => state.regions.regions);

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
        permission: ["edit", "delete"],
      },
    ];
  }, []);

  const bodyColumns = useMemo(() => {
    return passengers?.data ?? [];
  }, [passengers]);

  return (
    <>
      <SectionHeader>
        <FilterButton text="filter">
          <div>
            <CLabel title="Viloyat" />
            <CSelect options={regions} id="filter" />
          </div>
          <CDriver classes="my-4" />
          <div>
            <CSlider />
          </div>
        </FilterButton>
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
