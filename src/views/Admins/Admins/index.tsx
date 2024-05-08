import { useCallback, useMemo } from "react";
import CTable from "../../../components/CElements/CTable";
import AddButton from "../../../components/UI/Buttons/AddButton";
import SectionHeader from "../../../components/UI/Sections/Header";
import usePageRouter from "../../../hooks/useObjectRouter";
import Form from "./Form";
import { useQuery } from "react-query";
import adminService from "../../../services/admins";
import { FormatTime } from "../../../utils/formatTime";
import { Header } from "../../../components/UI/Header";
import CBreadcrumbs from "../../../components/CElements/CBreadcrumbs";


const Admins = () => {
  const { navigateQuery } = usePageRouter();
  const { getQueries } = usePageRouter()
  const query = getQueries();
  
  const { data: admins, isLoading, refetch } = useQuery(
    ["GET_ADMINS"],
    () => {
      return adminService.getList();
    },
    {
      enabled: true,
    }
  );

  const handleSearch = () => {};

  const bodyColumns:any = useMemo(() => {
    const list =  admins?.data ?? []
    return {
     list, 
     ...admins
    };
  }, [admins]);

  console.log(bodyColumns);
  

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
        permission: ["edit", "delete", "freez"],
      },
    ];
  }, []);

  const breadCrumbs = useMemo(() => {
    return [{ label: "Admin", link: "/admins/admin" }, { label: "Adminlar" }];
  }, []);

  const handleActions = useCallback((status: string, element: any) => {
    console.log(status, element);
    
    if (status === "freeze") {
      // navigateTo(`/partners/partner?id=${element.id}`);
    }

    if (status === "edit") navigateQuery({ id: element.id });

    if (status === "delete") {
      adminService.deleteAdmin(element.id)
      refetch()
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
