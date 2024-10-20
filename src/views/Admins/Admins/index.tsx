import { useCallback, useState } from "react";
import CTable from "../../../components/CElements/CTable";
import AddButton from "../../../components/UI/Buttons/AddButton";
// import SectionHeader from "../../../components/UI/Sections/Header";
import usePageRouter from "../../../hooks/useObjectRouter";
import Form from "./Form";
import adminService from "../../../services/admins";
import { Header } from "../../../components/UI/Header";
import CBreadcrumbs from "../../../components/CElements/CBreadcrumbs";
import { FetchFunction, TableData, breadCrumbs } from "./Logic";
import { FilterFunctions } from "../../../components/UI/Filter/Logic";

const Admins = () => {
  const { navigateQuery } = usePageRouter();
  const { getQueries } = usePageRouter();
  const query = getQueries();
  const { headColumns } = TableData();

  const [filterParams, setFilterParams]: any = useState({});
  const { bodyColumns, isLoading, refetch } = FetchFunction();
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

  const handleActions = useCallback((element: any, status: string) => {
    if (status === "view") navigateQuery({ id: element.id });

    if (status === "edit") navigateQuery({ id: element.id });

    if (status === "delete") {
      if (element.email === "superrt@akataxi.uz") return;
      adminService.deleteAdmin(element.id).then(() => {
        refetch();
      });
    }
  }, []);

  return (
    <>
      <Header sticky={true}>
        <CBreadcrumbs
          items={breadCrumbs}
          progmatic={true}
          handleSearch={handleSearch}
          defaultValue={filterParams?.q}
        />
        <div className="ml-5">
          <AddButton
            text="new_admin"
            onClick={() => navigateQuery({ id: "create" })}
          />
        </div>
      </Header>
      <div className="container">
        <CTable
          headColumns={headColumns}
          bodyColumns={bodyColumns.list}
          meta={bodyColumns?.meta}
          isResizeble={true}
          isLoading={isLoading}
          handleActions={handleActions}
          filterParams={filterParams}
          handleFilterParams={handleFilterParams}
        />

        {query?.id && <Form refetch={refetch} id={query.id} />}
      </div>
    </>
  );
};
export default Admins;
