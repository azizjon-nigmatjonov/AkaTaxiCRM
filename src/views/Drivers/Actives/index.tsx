import { useMemo, useState } from "react";
import CTable from "../../../components/CElements/CTable";
// import SectionHeader from "../../../components/UI/Sections/Header";
import { useQuery } from "react-query";
import driverService from "../../../services/drivers";
import { Header } from "../../../components/UI/Header";
import CBreadcrumbs from "../../../components/CElements/CBreadcrumbs";
import PassengerList from "./PassengerList";
// import LTabs from "../../../components/CElements/CTab/LineTab";
import { ActiveDriversTable, breadCrumbs } from "./Logic";
import { ActiveDriverFilter } from "./Filter";
// import DriversList from "../../../views/Passengers/Active/DriversList";
import { NoteTableButtonActions } from "../../../components/UI/CallModals/NoteModal/Logic";
import { OffersModal } from "./Offers";
import {
  FilterFunctions,
  getStoredFilters,
} from "../../../components/UI/Filter/Logic";
import usePageRouter from "../../../hooks/useObjectRouter";
import FilterButton from "../../../components/UI/Filters";

const ActiveDrivers = () => {
  const [passenger, setPassenger] = useState([]);
  // const { tabList } = FetchFunction();
  const [open, setOpen] = useState(false);
  const [filterParams, setFilterParams]: any = useState({});
  const { navigateTo } = usePageRouter();
  const { collectFilter, storeFilters } = FilterFunctions({
    store: true,
    filterParams,
    setFilterParams,
  });
  const { filters } = getStoredFilters({});
  const { gender, region_id, q, car_model_id, page } = filters;

  const handleOffers = (val: any) => {
    setOpen(true);
    console.log("obj", val);
  };

  const { headColumns } = ActiveDriversTable({
    setPassenger,
    handleOffers,
  });

  const {
    data: drivers,
    isLoading,
    refetch,
  } = useQuery(
    ["GET_ACTIVE_DRIVERS", q, gender, region_id, car_model_id, page],
    () => {
      return driverService.getActives({
        q,
        gender: gender?.value,
        region_id: region_id?.value,
        // f: filterParams?.f,
        car_model_id: car_model_id?.value,
        page: page || 1,
      });
    }
  );

  const driversData: any = useMemo(() => {
    if (!drivers) return [];
    const list: any = drivers?.data;

    return {
      list: list?.map((item: any) => {
        return {
          ...item,
          from: item.from_region_name + " - " + item.from_district_name,
          data: {
            phone: item.phone,
            full_name: item.full_name,
            gender: item.gender,
            image: item.image,
          },
          carInfo: {
            car_name: item.car_name,
            car_number: item.car_number,
          },
          notelist: {
            id: item.id,
            notelist: item.notes_count,
          },
        };
      }),
      ...drivers,
    };
  }, [drivers]);

  const handleFilterParams = (obj: any) => {
    setFilterParams(obj);
    storeFilters(obj);
  };

  const handleSearch = (value: any) => {
    collectFilter({ type: "q", val: value });
    handleFilterParams({ ...filterParams, q: value, page: 1 });
  };

  const handleActions = (el: { id: number }, type: string) => {
    if (type === "view") {
      navigateTo(`/drivers/main/${el.id}`);
    }
  };


  return (
    <>
      <Header>
        <CBreadcrumbs
          items={breadCrumbs}
          progmatic={true}
          handleSearch={handleSearch}
          defaultValue={filterParams?.q}
        />
        <div className="ml-5">
          <FilterButton text="filter" />
        </div>
      </Header>

      <div className="container">
        <ActiveDriverFilter
          filterParams={filterParams}
          setFilterParams={setFilterParams}
        />

        {/* <LTabs tabList={tabList} /> */}

        <CTable
          headColumns={headColumns}
          bodyColumns={driversData?.list}
          meta={driversData?.meta}
          isLoading={isLoading}
          filterParams={filterParams}
          handleActions={handleActions}
          handleFilterParams={handleFilterParams}
        />
        <OffersModal openModal={open} setOpenModal={setOpen} />
        <PassengerList data={passenger} />
        <NoteTableButtonActions refetchList={refetch} />
      </div>
    </>
  );
};

export default ActiveDrivers;
