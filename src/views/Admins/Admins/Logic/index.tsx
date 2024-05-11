import { useMemo } from "react";
import { FormatTime } from "../../../../utils/formatTime";
import { useQuery } from "react-query";
import adminService from "../../../../services/admins";

export const FetchFunction = () => {
  const {
    data: admins,
    isLoading,
    refetch,
  } = useQuery(
    ["GET_ADMINS"],
    () => {
      return adminService.getList();
    },
    {
      enabled: true,
    }
  );

  const bodyColumns: any = useMemo(() => {
    const list = admins?.data ?? [];
    return {
      list,
      ...admins,
    };
  }, [admins]);

  return { isLoading, refetch, bodyColumns };
};

export const breadCrumbs = [
  { label: "Admin", link: "/admins/admin" },
  { label: "Adminlar" },
];

export const TableData = () => {
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
        id: "phone",
      },
      {
        title: "Rol",
        id: "roles",
        render: (roles: any) => {
          return (
            <div>
              {roles?.map((item: any, index: number, row: any) => (
                <p key={index}>
                  {item.name}
                  {index > 0 && row.length - 1 !== index ? "," : ""}
                </p>
              ))}
            </div>
          );
        },
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
        permission: ["edit", "delete"],
      },
    ];
  }, []);

  return { headColumns };
};
