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
import { Header } from "../../../components/Header";
import usePageRouter from "../../../hooks/useObjectRouter";

const ActivePassengers = () => {
  const { currentPage, q } = useGetQueries();

  const { navigateQuery } = usePageRouter()


  const { data: passengers, isLoading } = useQuery(
    ["GET_ACTIVE_PASSENGERS", q, currentPage],
    () => {
      return passengerService.getActivePassengers({ q, page: currentPage });
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
        render: (val: any) => val && (
          <p>{val.from_region_name}, {val.from_district_name}</p>
        )
      },
      {
        title: "Qayerga",
        id: "to",
        render: (val: any) => val && (
          <p>{val.to_region_name}, {val.to_district_name}</p>
        )
      },
      {
        title: "qidiruv vaqti",
        id: "search_time",
        render: (val?: any) => {
          return <>{FormatTime(val, "time")}</>;
        },
      },
      // {
      //   title: "Mavjud taksilar",
      //   id: "taxi",
      //   render: (val: number) => {
      //     return val && <>{val} ta</>;
      //   },
      // },
      {
        title: 'Haydovchi',
        id:'driver_name'
      }
     
    ];
  }, []);


const bodyColumns: any = useMemo(() => {
  const list = passengers?.data?.map((item: any) => {
    return {
      ...item,
      from: {
        from_region_name: item?.from_region_name,
        from_district_name: item?.from_district_name
      },
      to: {
        to_region_name: item?.to_region_name,
        to_district_name: item?.to_district_name
      }
    }
  })


  return (
    {
      list,
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

// console.log(regions);



const handleSearch = (value: any) => {
  navigateQuery({ q: value })
};

return (
  <div>
    <Header title="Aktiv yo'lovchilar" />
    <div className="px-6">
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
        count={bodyColumns?.meta?.pageCount}
        isResizeble={true}
        isLoading={isLoading}
        currentPage={currentPage}
      />
    </div>
  </div>
);
};

export default ActivePassengers;
