import CTable from "../../../components/CElements/CTable";
import AddButton from "../../../components/UI/Buttons/AddButton";
import Form from "./Form";
import usePageRouter from "../../../hooks/useObjectRouter";
import { Header } from "../../../components/UI/Header";
import CBreadcrumbs from "../../../components/CElements/CBreadcrumbs";
import { FetchFunction, TableData, breadCrumbItems } from "./Logic";
import { FilterPassenger } from "./Filter";
import { NoteTableButtonActions } from "../../../components/UI/CallModals/NoteModal/Logic";
import { FilterFunctions } from "../../../components/UI/Filter/Logic";
import { useState } from "react";
import { CExcelDownloader } from "../../../components/CElements/CExcelDownloader";
import FilterButton from "../../../components/UI/Filters";

const Passengers = () => {
  const { navigateQuery } = usePageRouter();
  const {
    passengers,
    passengerTableList,
    passengerLoading,
    passengerRefetch,
  }: any = FetchFunction();
  const { headColumns, handleActions } = TableData({ passengerRefetch });
  const [filterParams, setFilterParams]: any = useState({});
  const { collectFilter, storeFilters } = FilterFunctions({
    store: true,
    filterParams,
    setFilterParams,
  });

  const handleFilterParams = (obj: any) => {
    setFilterParams(obj);
    storeFilters(obj);
  };

  const handleSearch = (value: any) => {
    collectFilter({ type: "q", val: value });
    handleFilterParams({ ...filterParams, q: value, page: 1 });
  };

  return (
    <>
      <Header>
        <div className="flex justify-between w-full">
          <CBreadcrumbs
            items={breadCrumbItems}
            progmatic={true}
            type="link"
            handleSearch={handleSearch}
            defaultValue={filterParams?.q}
          />
          <div className="flex gap-x-5 ml-5">
            <FilterButton text="filter" />
            <CExcelDownloader
              filterParams={{ ...filterParams, type: "passenger" }}
            />
            <AddButton
              text="new_passenger"
              onClick={() => navigateQuery({ id: "create" })}
            />
          </div>
        </div>
      </Header>
      <div className="container">
        <FilterPassenger
          filterParams={filterParams}
          setFilterParams={setFilterParams}
        />

        <CTable
          headColumns={headColumns}
          bodyColumns={passengerTableList}
          meta={passengers?.meta}
          isLoading={passengerLoading}
          handleActions={handleActions}
          filterParams={filterParams}
          handleFilterParams={handleFilterParams}
          clickable={true}
        />

        <Form refetch={passengerRefetch} />
        <NoteTableButtonActions refetchList={passengerRefetch} />
      </div>
    </>
  );
};

export default Passengers;
