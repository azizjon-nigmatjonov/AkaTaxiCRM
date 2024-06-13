import { useMemo, useState } from "react";
import CTable from "../../../components/CElements/CTable";
import AddButton from "../../../components/UI/Buttons/AddButton";
import SectionHeader from "../../../components/UI/Sections/Header";
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
    setFilterParams
  });

  const handleSearch = (value: any) => {
    collectFilter({ type: "q", val: value });
  };

  const handleFilterParams = (obj: any) => {
    setFilterParams(obj);
    storeFilters(obj);
  };

  const bodyColumns = useMemo(() => {
    return roles?.data ?? [];
  }, [roles]);

  return (
    <>
      <Header sticky={true}>
        <CBreadcrumbs items={breadCrumbs} progmatic={true} type="link" />
      </Header>
      <div className="px-5">
        <div>
          <SectionHeader
            handleSearch={handleSearch}
            defaultValue={filterParams?.q}
          >
            <AddButton
              text="Yangi rol qo'shish"
              onClick={() => navigateTo("/admins/rolls/:create")}
            />
          </SectionHeader>
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
      </div>
    </>
  );
};
export default Rolls;
