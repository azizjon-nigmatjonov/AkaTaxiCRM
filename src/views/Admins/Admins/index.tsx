import { useCallback } from "react";
import CTable from "../../../components/CElements/CTable";
import AddButton from "../../../components/UI/Buttons/AddButton";
import SectionHeader from "../../../components/UI/Sections/Header";
import usePageRouter from "../../../hooks/useObjectRouter";
import Form from "./Form";
import adminService from "../../../services/admins";
import { Header } from "../../../components/UI/Header";
import CBreadcrumbs from "../../../components/CElements/CBreadcrumbs";
import { FetchFunction, TableData, breadCrumbs } from "./Logic";

const Admins = () => {
  const { navigateQuery } = usePageRouter();
  const { getQueries } = usePageRouter();
  const query = getQueries();
  const { headColumns } = TableData();
  const { bodyColumns, isLoading, refetch } = FetchFunction();

  const handleSearch = () => {};

  const handleActions = useCallback((element: any, status: string) => {
    console.log(status, element);

    if (status === "view") navigateQuery({ id: element.id });

    if (status === "edit") navigateQuery({ id: element.id });

    if (status === "delete") {
      adminService.deleteAdmin(element.id);
      refetch();
    }
  }, []);

  return (
    <>
      <Header sticky={true}>
        <CBreadcrumbs items={breadCrumbs} progmatic={true} />
      </Header>
      <div className="px-5">
        <SectionHeader handleSearch={handleSearch}>
          <div className="flex items-center gap-3">
            <AddButton
              text="new_admin"
              onClick={() => navigateQuery({ id: "create" })}
            />
          </div>
        </SectionHeader>

        <CTable
          headColumns={headColumns}
          bodyColumns={bodyColumns.list}
          totalCount={bodyColumns?.meta?.totalCount ?? bodyColumns.list.length}
          isResizeble={true}
          isLoading={isLoading}
          handleActions={handleActions}
        />

        {query?.id && <Form refetch={refetch} id={query.id} />}
      </div>
    </>
  );
};
export default Admins;
