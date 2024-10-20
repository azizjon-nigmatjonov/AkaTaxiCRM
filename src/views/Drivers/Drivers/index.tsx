import { useMemo, useState } from "react";
import AddButton from "../../../components/UI/Buttons/AddButton";
import CTable from "../../../components/CElements/CTable";
import Form from "./Form";
import usePageRouter from "../../../hooks/useObjectRouter";
import { Header } from "../../../components/UI/Header";
import CBreadcrumbs from "../../../components/CElements/CBreadcrumbs";
import { breadCrubmsItems, FetchFunctions, TableData } from "./Logic";
import { NoteTableButtonActions } from "../../../components/UI/CallModals/NoteModal/Logic";
import { FilterComponent } from "./Filter";
import { FilterFunctions } from "../../../components/UI/Filter/Logic";
import { CExcelDownloader } from "../../../components/CElements/CExcelDownloader";
import CModal from "../../../components/CElements/CModal";
import FilterButton from "../../../components/UI/Filters";
import { DriverTask } from "./Tasks";
import { DriverTeg } from "./Tegs";

const Drivers = () => {
  const { navigateTo } = usePageRouter();
  const { drivers, driversLoading, driversRefetch } = FetchFunctions();
  const [filterParams, setFilterParams]: any = useState({});
  const [mailDriverId, setMailDriverId] = useState<any>(null);
  const [taskOpen, setTaskOpen]: any = useState(null);
  const [tegOpen, setTegOpen]: any = useState(null);
  const { headColumns, handleActions } = TableData({
    driversRefetch,
    filterParams,
    handleFilterParams,
    setMailDriverId,
    setTaskOpen,
    setTegOpen,
  });
  const { collectFilter, storeFilters } = FilterFunctions({
    store: true,
    filterParams,
    setFilterParams,
  });

  const bodyColumns: any = useMemo(() => {
    const list: any =
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
    handleFilterParams({ ...filterParams, q: value, page: 1 });
  };

  function handleFilterParams(obj: any) {
    setFilterParams(obj);
    storeFilters(obj);
  }

  return (
    <>
      <Header>
        <div className="flex justify-between w-full">
          <CBreadcrumbs
            items={breadCrubmsItems}
            progmatic={true}
            handleSearch={handleSearch}
            defaultValue={filterParams?.q}
          />
          <div className="flex gap-x-5 ml-5">
            <CExcelDownloader
              filterParams={{ ...filterParams, type: "driver" }}
            />
            <AddButton
              text="new_driver"
              onClick={() => navigateTo("/drivers/main/add")}
            />

            <FilterButton text="filter" />
          </div>
        </div>
      </Header>
      <div className="container">
        <FilterComponent
          filterParams={filterParams}
          setFilterParams={setFilterParams}
        />

        <CTable
          headColumns={headColumns}
          bodyColumns={bodyColumns.list ?? []}
          meta={bodyColumns?.meta}
          handleActions={handleActions}
          isLoading={driversLoading}
          clickable={true}
          filterParams={filterParams}
          handleFilterParams={(obj: any) => handleFilterParams(obj)}
        />
        <Form refetch={driversRefetch} />
        <NoteTableButtonActions refetchList={driversRefetch} />
      </div>

      <CModal
        open={!!mailDriverId}
        footerActive={false}
        minWidth={1000}
        handleClose={() => setMailDriverId(null)}
      >
        <div className="flex space-x-2 mb-5">
          <h3 className="font-[600] text-lg">Javohir Zokirov</h3>
          <p className="font-[500] text-[var(--gray)] text-lg">(Pochta 8ta)</p>
        </div>
        <CTable
          headColumns={[]}
          bodyColumns={[]}
          tableSetting={false}
          filterParams={filterParams}
          handleFilterParams={() => {}}
        />
      </CModal>

      <CModal
        open={!!taskOpen || !!tegOpen}
        footerActive={false}
        handleClose={() => {
          setTaskOpen(null);
          setTegOpen(null);
        }}
      >
        {tegOpen ? (
          <DriverTeg tegOpen={tegOpen} setTegOpen={setTegOpen} refetch={driversRefetch} />
        ) : (
          <DriverTask setTaskOpen={setTaskOpen} taskOpen={taskOpen} refetch={driversRefetch} />
        )}
      </CModal>
    </>
  );
};

export default Drivers;
