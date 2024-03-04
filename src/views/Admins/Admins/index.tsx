import { useMemo } from "react";
import CTable from "../../../components/CElements/CTable";
import AddButton from "../../../components/Buttons/AddButton";
import SectionHeader from "../../../components/Sections/Header";
import usePageRouter from "../../../hooks/useObjectRouter";
import Form from "./Form";
import { useQuery } from "react-query";
import adminService from "../../../services/admins";
import { FormatTime } from "../../../utils/formatTime";
import { Header } from "../../../components/Header";
import CBreadcrumbs from "../../../components/CElements/CBreadcrumbs";

const Admins = () => {
  const { navigateQuery } = usePageRouter();

  const { data: admins, isLoading } = useQuery(
    ["GET_ADMINS"],
    () => {
      return adminService.getList();
    },
    {
      enabled: true,
    }
  );

  const bodyColumns = useMemo(() => {
    return admins?.data ?? [];
  }, [admins]);

  const headColumns = useMemo(() => {
    return [
      {
        title: "Ism familiya",
        id: "name",
      },
      {
        title: "Login",
        id: "email",
      },
      {
        title: "Tel.raqam",
        id: "phone_number",
      },
      {
        title: "Rol",
        id: "rol",
      },
      {
        title: "Yaratilgan sana",
        id: "created_at",
        render: (val: any) => {
          return <>{FormatTime(val)}</>;
        },
      },
      {
        title: "Status",
        id: "status",
        render: (val: any) => (
          <div
            className={
              val === "inactive"
                ? "text-[var(--error)]"
                : val === "active"
                  ? "text-[var(--green)]"
                  : ""
            }
          >
            {val === "inactive" ? "Noaktiv" : val === "active" ? "Aktiv" : ""}
          </div>
        ),
      },
      {
        title: "",
        id: "actions",
        width: 90,
        permission: ["edit", "delete", "freez"],
      },
    ];
  }, []);


  const breadCrumbs = useMemo(()=>{
    return [
      {label: 'Admin'},
      {label:"Adminlar", link:"/admins/admin"}
    ]
  }, [])

  return (
    <>
      <Header sticky={true}>
        <CBreadcrumbs items={breadCrumbs} progmatic={true} />
      </Header>
      <div className="px-5">
        <SectionHeader>
          <div className="flex items-center gap-3">
            <AddButton
              text="new_admin"
              onClick={() => navigateQuery({ id: "create" })}
            />
          </div>
        </SectionHeader>

        <CTable
          headColumns={headColumns}
          bodyColumns={bodyColumns}
          isResizeble={true}
          isLoading={isLoading}
        />

        <Form />
      </div>
    </>
  );
};
export default Admins;
