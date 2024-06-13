import { useMemo, useState } from "react";
import CTable from "../../../components/CElements/CTable";
import SectionHeader from "../../../components/UI/Sections/Header";
import { useQuery } from "react-query";
import driverService from "../../../services/drivers";
import { useGetQueries } from "../../../hooks/useGetQueries";
import { Header } from "../../../components/UI/Header";
import CBreadcrumbs from "../../../components/CElements/CBreadcrumbs";
import PassengerList from "./PassengerList";
import LTabs from "../../../components/CElements/CTab/LineTab";
import { ActiveDriversTable, breadCrumbs, FetchFunction } from "./Logic";
import { ActiveDriverFilter } from "./Filter";
// import DriversList from "../../../views/Passengers/Active/DriversList";
import { NoteTableButtonActions } from "../../../components/UI/CallModals/NoteModal/Logic";
import { OffersModal } from "./Offers";
import { FilterFunctions } from "../../../components/UI/Filter/Logic";

const ActiveDrivers = () => {
  const [passenger, setPassenger] = useState([]);
  const { tabList } = FetchFunction();
  const [open, setOpen] = useState(false);
  const [filterParams, setFilterParams]: any = useState({});
  const { collectFilter, storeFilters } = FilterFunctions({ store: true, filterParams, setFilterParams });

  const handleOffers = (val: any) => {
    setOpen(true);
    console.log("obj", val);
  };
  
  const {
    currentPage,
    q,
    gender,
    region_id,
    f,
    car_model_id,
    status,
    birthday,
  } = useGetQueries();

  const { headColumns } = ActiveDriversTable({
    setPassenger,
    handleOffers,
  });

  const {
    data: drivers,
    isLoading,
    refetch,
  } = useQuery(
    [
      "GET_ACTIVE_DRIVERS",
      q,
      gender,
      region_id,
      f,
      car_model_id,
      currentPage,
      status,
      birthday,
    ],
    () => {
      return driverService.getActives({
        q,
        gender,
        region_id,
        f,
        car_model_id,
        page: currentPage,
        status,
      });
    }
  );

  // console.log(passenger);

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

  const handleSearch = (value: any) => {
    collectFilter({ type: "q", val: value });
  };

  const handleFilterParams = (obj: any) => {
    setFilterParams(obj);
    storeFilters(obj);
  };
  return (
    <>
      <Header sticky={true}>
        <CBreadcrumbs items={breadCrumbs} progmatic={true} />
      </Header>

      <div className="px-5">
        <SectionHeader
          handleSearch={handleSearch}
          defaultValue={q}
        ></SectionHeader>

        <ActiveDriverFilter filterParams={filterParams} setFilterParams={setFilterParams} />

        <LTabs tabList={tabList} />

        <CTable
          headColumns={headColumns}
          bodyColumns={driversData?.list}
          count={driversData?.meta?.pageCount}
          totalCount={driversData?.meta?.totalCount}
          isLoading={isLoading}
          filterParams={filterParams}
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
