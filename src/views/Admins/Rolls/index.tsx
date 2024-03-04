import { useMemo } from "react";
import CTable from "../../../components/CElements/CTable";
import AddButton from "../../../components/Buttons/AddButton";
import SectionHeader from "../../../components/Sections/Header";
import usePageRouter from "../../../hooks/useObjectRouter";
import Form from "./Form";
import { useQuery } from "react-query";
import roleService from "../../../services/rolls";
import { Header } from "../../../components/Header";
import CBreadcrumbs from "../../../components/CElements/CBreadcrumbs";

const Rolls = () => {
  const { navigateQuery } = usePageRouter();

  const { data: roles } = useQuery(
    ["GET_ADMINS"],
    () => {
      return roleService.getList();
    },
    {
      enabled: true,
    }
  );

  const bodyColumns = useMemo(() => {
    return roles?.data ?? [];
  }, [roles]);

  const headColumns = useMemo(() => {
    return [
      {
        title: "Rol nomi",
        id: "roll_name",
      },
      {
        title: "Funksiyalar",
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
  }, []);

  const breadCrumbs = useMemo(()=>{
    return [
      {label: 'Admin'},
      {label:'Rollar', link:'admins/rolls'}
    ]
  }, [])

  return (
    <>
      <Header sticky={true}>
        <CBreadcrumbs items={breadCrumbs}  progmatic={true} />
      </Header>
      <div className="px-5">
        <SectionHeader>
          <div className="flex items-center gap-3">
            <AddButton
              text="new_roll"
              onClick={() => navigateQuery({ id: "create" })}
            />
          </div>
        </SectionHeader>
        <CTable
          headColumns={headColumns}
          bodyColumns={bodyColumns}
          isResizeble={true}
        />

        <Form />
      </div>
    </>
  );
};
export default Rolls;
