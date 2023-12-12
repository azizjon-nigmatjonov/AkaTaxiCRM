import { useMemo } from "react";
import CTable from "../../../components/CElements/CTable";
import SectionHeader from "../../../components/Sections/Header";
import FilterButton from "../../../components/Filters";
import { useQuery } from "react-query";
import passengerService from "../../../services/passengers";
import CSelect from "../../../components/CElements/CSelect";
import CDriver from "../../../components/CElements/CDivider";
import CSlider from "../../../components/CElements/CSlider";
import { useSelector } from "react-redux";
import { useGetQueries } from "../../../hooks/useGetQueries";
import { FormatTime } from "../../../utils/formatTime";

const ActivePassengers = () => {
  const { currentPage } = useGetQueries();
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
        render: (val?: any) => {
          return <>{FormatTime(val, "time")}</>;
        },
      },
      {
        title: "Mavjud taksilar",
        id: "taxi",
        render: (val: number) => {
          return val && <>{val} ta</>;
        },
      },
    ];
  }, []);

  const bodyColumns: any = useMemo(() => {
    return (
      {
        list: passengers?.data,
        ...passengers,
      } ?? []
    );
  }, [passengers]);

  const Regions = useMemo(() => {
    return regions?.map((i: any) => {
      return {
        value: i.id,
        label: i.name.uz,
      };
    });
  }, [regions]);

  const handleSearch = (value: any) => {
    console.log("va", value);
  };


  return (
    <>
      <SectionHeader handleSearch={handleSearch}>
        <FilterButton text="filter">
          <div>
            <CSelect options={Regions} id="filter" label="Viloyat" />
          </div>
          <CDriver classes="my-4" />
          <div>
            <CSlider />
          </div>
        </FilterButton>
      </SectionHeader>
      <CTable
        headColumns={headColumns}
        bodyColumns={bodyColumns?.list}
        count={bodyColumns?.meta?.totalCount}
        isResizeble={true}
        isLoading={isLoading}
        currentPage={currentPage}
      />
    </>
  );
};

export default ActivePassengers;
