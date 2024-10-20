import CTable from "../../../components/CElements/CTable";
import CBreadcrumbs from "../../../components/CElements/CBreadcrumbs";
import { Header } from "../../../components/UI/Header";
import { FetchFunction, TableData, breadCrumbsItems } from "./Logic";
import { FilterFunctions } from "../../../components/UI/Filter/Logic";
import { useState } from "react";

const PhoneCode = () => {
  const [filterParams, setFilterParams]: any = useState({});
  const { headColumns } = TableData()
  const { bodyColumns, isLoading } = FetchFunction()
  const { collectFilter } = FilterFunctions({
    store: true,
    filterParams,
    setFilterParams,
  });
  const handleSearch = (value: any) => {
    collectFilter({ type: "q", val: value });
  };

  return (
    <>
      <Header>
        <CBreadcrumbs
          items={breadCrumbsItems}
          type="link"
          progmatic={true}
          handleSearch={handleSearch}
          defaultValue={filterParams?.q}
        />
      </Header>

      {/* <FilterComponent
        filterParams={filterParams}
        setFilterParams={setFilterParams}
      /> */}

      <div className="container">
        <CTable
          headColumns={headColumns}
          bodyColumns={bodyColumns?.list}
          isResizeble={true}
          isLoading={isLoading}
          filterParams={filterParams}
          handleFilterParams={() => {}}
        />
      </div>
    </>
  );
};

export default PhoneCode;
