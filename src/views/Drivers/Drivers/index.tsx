import { useMemo, useState } from "react";
import AddButton from "../../../components/UI/Buttons/AddButton";
import CTable from "../../../components/CElements/CTable";
import SectionHeader from "../../../components/UI/Sections/Header";
import Form from "./Form";
import usePageRouter from "../../../hooks/useObjectRouter";
import { Header } from "../../../components/UI/Header";
import CBreadcrumbs from "../../../components/CElements/CBreadcrumbs";
import { breadCrubmsItems, FetchFunctions, TableData } from "./Logic";
import { NoteTableButtonActions } from "../../../components/UI/CallModals/NoteModal/Logic";
import { FilterComponent } from "./Filter";
import { FilterFunctions } from "../../../components/UI/Filter/Logic";
import { CExcelDownloader } from "../../../components/CElements/CExcelDownloader";

const Drivers = () => {
  const { navigateTo } = usePageRouter();
  const { drivers, driversLoading, driversRefetch } = FetchFunctions();
  const [filterParams, setFilterParams]: any = useState({});
  const { headColumns, handleActions } = TableData({
    driversRefetch,
    filterParams,
    handleFilterParams,
  });
  const { collectFilter, storeFilters } = FilterFunctions({
    store: true,
    filterParams,
    setFilterParams,
  });

  const bodyColumns: any = useMemo(() => {
    let list: any =
      drivers?.data?.map((el: any) => {
        return {
          ...el,
          info: {
            full_name: el.full_name,
            image: el?.image,
            gender: el.gender,
            id: el.id,
            status: el.status,
          },
          car_info: {
            car: el.car_name,
            number: el.car_number,
          },
          notelist: {
            id: el.id,
            notelist: el.notes_count,
          },
        };
      }) ?? [];
    return { list, ...drivers };
  }, [drivers]);

  const handleSearch = (value: any) => {
    collectFilter({ type: "q", val: value });
  };

  function handleFilterParams(obj: any) {
    setFilterParams(obj);
    storeFilters(obj);
  }

  return (
    <>
      <Header>
        <CBreadcrumbs items={breadCrubmsItems} progmatic={true} />
      </Header>
      <div className="px-6">
        <SectionHeader
          handleSearch={(val: any) => handleSearch(val)}
          defaultValue={filterParams?.q}
        >
          <div className="flex gap-x-5">
            <CExcelDownloader />
            <AddButton
              text="new_driver"
              onClick={() => navigateTo("/drivers/main/add")}
            />
          </div>
        </SectionHeader>

        <FilterComponent
          filterParams={filterParams}
          setFilterParams={setFilterParams}
        />

        <CTable
          headColumns={headColumns}
          bodyColumns={bodyColumns.list ?? []}
          count={bodyColumns?.meta?.pageCount}
          totalCount={bodyColumns?.meta?.totalCount}
          handleActions={handleActions}
          isLoading={driversLoading}
          clickable={true}
          filterParams={filterParams}
          handleFilterParams={(obj: any) => handleFilterParams(obj)}
        />
        <Form refetch={driversRefetch} />
        <NoteTableButtonActions refetchList={driversRefetch} />
      </div>
    </>
  );
};

export default Drivers;
