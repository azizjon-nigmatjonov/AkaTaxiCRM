import { useMemo } from "react";
import CTable from "../../../components/CElements/CTable";
import AddButton from "../../../components/UI/Buttons/AddButton";
import SectionHeader from "../../../components/UI/Sections/Header";
import usePageRouter from "../../../hooks/useObjectRouter";
import { Header } from "../../../components/UI/Header";
import CBreadcrumbs from "../../../components/CElements/CBreadcrumbs";
import { RolesList } from "./Logic";

const Rolls = () => {
  const { navigateTo } = usePageRouter();
  const roles = RolesList();

  const bodyColumns = useMemo(() => {
    return roles?.data ?? [];
  }, [roles]);

  const breadCrumbs = useMemo(() => {
    return [{ label: "Admin", link: "/admins/admin" }, { label: "Rollar" }];
  }, []);

  const headColumns = [
    {
      title: "Rol nomi",
      id: "name",
    },
    {
      title: "Funksiyalar soni",
      id: "functions",
    },
    {
      title: "Aktiv adminlar",
      id: "active_admins",
    },
    {
      title: "",
      id: "actions",
      width: 90,
      permission: ["edit", "delete"],
    },
  ];

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
                onClick={() => navigateTo("/admins/roll/create")}
              />
            </div>
          </SectionHeader>
          <CTable
            headColumns={headColumns}
            bodyColumns={bodyColumns}
            isResizeble={true}
          />
        </div>
      </div>
    </>
  );
};
export default Rolls;
