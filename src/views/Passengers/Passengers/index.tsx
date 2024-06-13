import CTable from "../../../components/CElements/CTable";
import SectionHeader from "../../../components/UI/Sections/Header";
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

  const handleSearch = (value: any) => {
    collectFilter({ type: "q", val: value });
  };

  const handleFilterParams = (obj: any) => {
    setFilterParams(obj);
    storeFilters(obj);
  };

  return (
    <>
      <Header>
        <CBreadcrumbs items={breadCrumbItems} progmatic={true} type="link" />
      </Header>
      <div className="container">
        <SectionHeader
          handleSearch={handleSearch}
          defaultValue={filterParams?.q}
        >
          <div className="flex gap-x-5">
            <CExcelDownloader />
            <AddButton
              text="new_passenger"
              onClick={() => navigateQuery({ id: "create" })}
            />
          </div>
        </SectionHeader>

        <FilterPassenger
          filterParams={filterParams}
          setFilterParams={setFilterParams}
        />

        <CTable
          headColumns={headColumns}
          bodyColumns={passengerTableList}
          totalCount={passengers?.meta?.totalCount}
          count={passengers?.meta?.pageCount ?? 5}
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
