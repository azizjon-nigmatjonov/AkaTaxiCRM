import { useEffect, useMemo, useState } from "react";
import CTable from "../../../components/CElements/CTable";
import SectionHeader from "../../../components/UI/Sections/Header";
import FilterButton from "../../../components/UI/Filters";
import usePageRouter from "../../../hooks/useObjectRouter";
import { useQuery } from "react-query";
import driverService from "../../../services/drivers";
import { useGetQueries } from "../../../hooks/useGetQueries";
import { Header } from "../../../components/UI/Header";
import { useSelector } from "react-redux";
import carService from "../../../services/cars";
import CBreadcrumbs from "../../../components/CElements/CBreadcrumbs";

import PassengerList from "./PassengerList";
import LTabs from "../../../components/CElements/CTab/LineTab";
import { ActiveDriversTable } from "./Logic";
import Filters from "../../../components/UI/Filter";
import CSelect from "../../../components/CElements/CSelect";

const tabList = [
  { slug: "", name: "Aktiv" },
  { slug: "on-way", name: "Yo'lda" },
  { slug: "canceled", name: "Bekor qilingan" },
  { slug: "done", name: "Yetib borgan" },
];

const ActiveDrivers = () => {
  const [passenger, setPassenger] = useState([]);
  const { navigateQuery, getQueries } = usePageRouter();
  const { filter } = getQueries();
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

  const regions = useSelector((state: any) => state.regions.regions);

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

  const { data: carModals } = useQuery(["GET_CAR_MODELS"], () => {
    return carService.getCarModel();
  });

  const carModalData: any = useMemo(() => {
    if (!carModals) return [];
    const list = carModals?.data;
    return {
      list: list.map((model: any) => {
        return {
          value: model.id,
          label: model.name,
        };
      }),
    };
  }, [carModals]);

  const handleSearch = (evt: any) => {
    navigateQuery({ q: evt });
  };

  const Regions = useMemo(() => {
    return regions?.map((i: any) => {
      return {
        value: i.id,
        label: i.name.uz,
      };
    });
  }, [regions]);

  const handleRegion = (evt: any) => {
    navigateQuery({ region_id: evt });
  };

  const handleGender = (evt: any) => {
    navigateQuery({ gender: evt });
  };

  const handleCarModel = (evt: any) => {
    navigateQuery({ car_model_id: evt });
  };

  const breadCrumbs = useMemo(() => {
    return [
      { label: "Haydovchilar", link: "/drivers/active" },
      { label: "Aktiv" },
    ];
  }, []);

  useEffect(() => {
    Regions.unshift({ value: 0, label: "Barchasi" });
    carModalData?.list?.unshift({ value: 0, label: "Barchasi" });
  }, [Regions]);

  return (
    <>
      <Header sticky={true}>
        <CBreadcrumbs items={breadCrumbs} progmatic={true} />
      </Header>
      <div className="px-5">
        <SectionHeader handleSearch={handleSearch}>
          <FilterButton text="filter">
            {/* <div>
                <CSelect
                  handlerValue={handleRegion}
                  options={Regions}
                  id="filter"
                  label="Viloyat"
                />
              </div>
              <CDriver classes="my-4" />
              <div>
                <CSelect
                  handlerValue={handleGender}
                  options={[
                    { value: "barchasi", label: "Barchasi" },
                    { value: "m", label: "Male" },
                    { value: "f", label: "Female" },
                  ]}
                  id="filter"
                  label="Jins"
                />
              </div>
              <CDriver classes="my-4" />
              <div>
                <CSelect
                  handlerValue={handleCarModel}
                  options={carModalData.list}
                  id="filter"
                  label="Model"
                />
              </div>

              <CDriver classes="my-4" />
              <span
                onClick={() => setSearchParams({})}
                className="text-[var(--main)]  text-end block cursor-pointer "
              >
                {t("ignore_text")}
              </span> */}
          </FilterButton>
        </SectionHeader>
        <Filters filter={!!filter}>
          <div className="grid grid-cols-4">
            <CSelect
              handlerValue={handleRegion}
              options={Regions}
              id="filter"
              label="Viloyat"
            />
            <CSelect
              handlerValue={handleGender}
              options={[
                { value: "barchasi", label: "Barchasi" },
                { value: "m", label: "Male" },
                { value: "f", label: "Female" },
              ]}
              id="filter"
              label="Jins"
            />
            <CSelect
              handlerValue={handleCarModel}
              options={carModalData.list}
              id="filter"
              label="Model"
            />
          </div>
        </Filters>

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
