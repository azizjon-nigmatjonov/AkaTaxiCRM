import { useCallback, useMemo } from "react";
import AddButton from "../../../components/UI/Buttons/AddButton";
import FilterButton from "../../../components/UI/Filters";
import CTable from "../../../components/CElements/CTable";
import SectionHeader from "../../../components/UI/Sections/Header";
import Form from "./Form";
import usePageRouter from "../../../hooks/useObjectRouter";
import driverService from "../../../services/drivers";
import { useGetQueries } from "../../../hooks/useGetQueries";
import { Header } from "../../../components/UI/Header";
import CBreadcrumbs from "../../../components/CElements/CBreadcrumbs";
import Filters from "../../../components/UI/Filter";
import DropDown from "../../../components/FormElements/DropDown";
import CSelect from "../../../components/CElements/CSelect";
import { useSelector } from "react-redux";
import { VersionsList } from "../../../constants/versions";
import { DivicesList } from "../../../constants/devices";
import { headColumns, FilterFunction, breadCrubmsItems, FetchFunctions } from './Logic';

const Drivers = () => {
  const { navigateQuery, navigateTo, getQueries } = usePageRouter();
  const { currentPage } = useGetQueries();
  const query = getQueries();
  const { handlerDiviceModel, handlerGender, handlerRegion, handlerVersion, handleSearch } = FilterFunction()
  const { drivers, driversLoading, driversRefetch } = FetchFunctions()

  const regions = useSelector((state: any) => state.regions.regions);

  const handleActions = useCallback((element: any, status: string) => {
    if (status === "view") {
      navigateTo(`/drivers/main/${element.id}`);
    }

    if (status === "edit") navigateQuery({ id: element.id });

    if (status === "delete") {
      driverService.deleteElement(element.id).then(() => {
        driversRefetch();
      });
    }
  }, []);


  const bodyColumns: any = useMemo(() => {
    let list: any = drivers?.data?.map((el: any) => {
      return {
        ...el,
        info: {
          full_name: el.full_name,
          image: el?.image,
          gender: el.gender,
        },
        car_info: {
          car: el.car_name,
          number: el.car_number,
        },
      };
    }) ?? []
    return { list, ...drivers }
  }, [drivers]);
  

  const Regions = useMemo(() => {
    return regions?.map((i: any) => {
      return {
        value: i.id,
        label: i.name.uz,
      };
    });
  }, [regions]);
  

  return (
    <>
      <Header>
        <CBreadcrumbs items={breadCrubmsItems} progmatic={true} />
      </Header>
      <div className="px-6">
        <SectionHeader
          extra={<FilterButton text="filter" />}
          handleSearch={handleSearch}
        >
          <div className="flex items-center gap-3">
            <AddButton
              text="new_driver"
              onClick={() => navigateTo("/drivers/main/add")}
            />
          </div>
        </SectionHeader>

        <Filters filter={!!query.filter}>
          <div className="grid grid-cols-5 gap-x-4">
            <DropDown
              label="Vaqt"
              name="Vaqt"
              placeholder="Tanlang"
              defaultValue={"01.01-.01.01"}
            />
            <CSelect
              handlerValue={handlerDiviceModel}
              options={DivicesList}
              label="Operatsion sistema"
              placeholder="Tanglang"
            />
            <CSelect
              handlerValue={handlerVersion}
              options={VersionsList}
              label="Versiyalar"
              placeholder="Tanglang"
            />
            <CSelect
              handlerValue={handlerGender}
              options={[
                { value: "m", label: "Erkak" },
                { value: "f", label: "Ayol" },
              ]}
              label="Jinsi"
              placeholder="Tanlang"
            />
            <CSelect
              handlerValue={handlerRegion}
              options={Regions}
              label="Viloyat"
              placeholder="Tanlang"
            />
          </div>
        </Filters>

        <CTable
          headColumns={headColumns}
          bodyColumns={bodyColumns.list ?? []}
          count={bodyColumns?.meta?.pageCount}
          totalCount={bodyColumns?.meta?.totalCount}
          handleActions={handleActions}
          isLoading={driversLoading}
          currentPage={currentPage}
          clickable={true}
        />
        <Form refetch={driversRefetch} />
      </div>
    </>
  );
};

export default Drivers;
