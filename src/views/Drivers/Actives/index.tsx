import { useMemo, useState } from "react";
import CTable from "../../../components/CElements/CTable";
import SectionHeader from "../../../components/UI/Sections/Header";
import FilterButton from "../../../components/UI/Filters";
import usePageRouter from "../../../hooks/useObjectRouter";
import { useQuery } from "react-query";
import driverService from "../../../services/drivers";
import { useGetQueries } from "../../../hooks/useGetQueries";
import { Header } from "../../../components/UI/Header";
import CBreadcrumbs from "../../../components/CElements/CBreadcrumbs";
import PassengerList from "./PassengerList";
import LTabs from "../../../components/CElements/CTab/LineTab";
import { ActiveDriversTable } from "./Logic";
import { ActiveDriverFilter } from "./Filter";

const tabList = [
  { slug: "", name: "Aktiv" },
  { slug: "on-way", name: "Yo'lda" },
  { slug: "canceled", name: "Bekor qilingan" },
  { slug: "done", name: "Yetib borgan" },
];

const ActiveDrivers = () => {
  const [passenger, setPassenger] = useState([]);
  const { navigateQuery } = usePageRouter();

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

  const { headColumns } = ActiveDriversTable({ setPassenger });

  const { data: drivers, isLoading } = useQuery(
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

  const driversData: any = useMemo(() => {
    if (!drivers) return [];
    const list: any = drivers?.data;

    return {
      list: list.map((item: any) => {
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
        };
      }),
      ...drivers,
    };
  }, [drivers]);

  const handleSearch = (evt: any) => {
    navigateQuery({ q: evt });
  };

  const breadCrumbs = useMemo(() => {
    return [
      { label: "Haydovchilar", link: "/drivers/active" },
      { label: "Aktiv" },
    ];
  }, []);

  return (
    <>
      <Header sticky={true}>
        <CBreadcrumbs items={breadCrumbs} progmatic={true} />
      </Header>
      <div className="px-5">
        <SectionHeader handleSearch={handleSearch}>
          <FilterButton text="filter" />
        </SectionHeader>

        <ActiveDriverFilter />

        <LTabs tabList={tabList} />

        <CTable
          headColumns={headColumns}
          bodyColumns={driversData?.list}
          count={driversData?.meta?.pageCount}
          totalCount={driversData?.meta?.totalCount}
          isLoading={isLoading}
          currentPage={currentPage}
        />

        <PassengerList data={passenger} />
      </div>
    </>
  );
};

export default ActiveDrivers;
