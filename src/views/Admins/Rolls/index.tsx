import { useMemo } from "react";
import CTable from "../../../components/CElements/CTable";
import AddButton from "../../../components/UI/Buttons/AddButton";
import SectionHeader from "../../../components/UI/Sections/Header";
import usePageRouter from "../../../hooks/useObjectRouter";
import { Header } from "../../../components/UI/Header";
import CBreadcrumbs from "../../../components/CElements/CBreadcrumbs";
import { RolesList, TableData, breadCrumbs } from "./Logic";

const Rolls = () => {
  const { navigateTo } = usePageRouter();
  const { roles, isLoading } = RolesList();
  const { headColumns } = TableData();
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
          <SectionHeader handleSearch={() => {}}>
            <div className="flex items-center gap-3">
              <AddButton
                text="Yangi rol qo'shish"
                onClick={() => navigateTo("/admins/rolls/create")}
              />
            </div>
          </SectionHeader>
          <CTable
            headColumns={headColumns}
            bodyColumns={bodyColumns}
            isResizeble={true}
            isLoading={isLoading}
          />
        </div>
      </div>
    </>
  );
};
export default Rolls;
