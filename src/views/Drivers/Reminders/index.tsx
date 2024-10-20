import CTable from "../../../components/CElements/CTable";
import CBreadcrumbs from "../../../components/CElements/CBreadcrumbs";
import { Header } from "../../../components/UI/Header";
import { FetchFunction, TableData, breadCrumbs } from "./Logic";
import { useState } from "react";
import { FilterFunctions } from "../../../components/UI/Filter/Logic";
import FilterButton from "../../../components/UI/Filters";
import { ReminderFilter } from "./Filters";

const DriverReminder = () => {
  const [filterParams, setFilterParams]: any = useState({});
  const { headColumns } = TableData();
  const { tableData } = FetchFunction();
  const { storeFilters } = FilterFunctions({
    store: true,
    filterParams,
    setFilterParams,
  });

  const handleFilterParams = (obj: any) => {
    setFilterParams(obj);
    storeFilters(obj);
  };

  return (
    <>
      <Header>
        <CBreadcrumbs items={breadCrumbs} progmatic={true} type="link" />
        <FilterButton text="Filter" />
      </Header>

      <ReminderFilter
        filterParams={filterParams}
        setFilterParams={setFilterParams}
      />

      <div className="container">
        <CTable
          headColumns={headColumns}
          bodyColumns={tableData?.data}
          meta={tableData?.meta}
          filterParams={filterParams}
          handleFilterParams={handleFilterParams}
        />
      </div>
    </>
  );
};

export default DriverReminder;
