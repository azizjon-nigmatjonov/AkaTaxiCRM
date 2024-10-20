import { useMemo, useState } from "react";
import CTable from "../../../components/CElements/CTable";
import AddButton from "../../../components/UI/Buttons/AddButton";
// import SectionHeader from "../../../components/UI/Sections/Header";
import usePageRouter from "../../../hooks/useObjectRouter";
import { Header } from "../../../components/UI/Header";
import CBreadcrumbs from "../../../components/CElements/CBreadcrumbs";
import { DeleteFunction, FetchFunction, TableData, breadCrumbs } from "./Logic";
import { FilterFunctions } from "../../../components/UI/Filter/Logic";

const Rolls = () => {
  const { navigateTo } = usePageRouter();
  const { roles, isLoading, refetch } = FetchFunction();
  const { deleteRoll } = DeleteFunction({ handleClose: refetch });
  const { headColumns, handleActions } = TableData({ deleteRoll });
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

  const bodyColumns = useMemo(() => {
    return roles?.data ?? [];
  }, [roles]);

  return (
    <>
      <Header sticky={true}>
        <CBreadcrumbs
          items={breadCrumbs}
          progmatic={true}
          type="link"
          handleSearch={handleSearch}
          defaultValue={filterParams?.q}
        />
        <div className="ml-5">
          <AddButton
            text="Yangi rol qo'shish"
            onClick={() => navigateTo("/admins/rolls/:create")}
          />
        </div>
      </Header>
      <div className="px-5">
        <CTable
          headColumns={headColumns}
          bodyColumns={bodyColumns}
          isResizeble={true}
          handleActions={handleActions}
          isLoading={isLoading}
          filterParams={filterParams}
          handleFilterParams={handleFilterParams}
        />
      </div>
    </>
  );
};
export default Rolls;
