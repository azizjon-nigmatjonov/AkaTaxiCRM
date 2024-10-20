import { useMemo } from "react";
import { FormatTime } from "../../../../utils/formatTime";
import { useQuery } from "react-query";
import adminService from "../../../../services/admins";
import usePageRouter from "../../../../hooks/useObjectRouter";
import { getStoredFilters } from "../../../../components/UI/Filter/Logic";

export const FetchFunction = () => {
  const { filters } = getStoredFilters({});
  const { q, page } = filters;

  const {
    data: admins,
    isLoading,
    refetch,
  } = useQuery(["GET_ADMINS", q, page], () => {
    return adminService.getList({ q: q ?? "", page: page || 1 });
  });

  const bodyColumns: any = useMemo(() => {
    const list = admins?.data ?? [];
    return {
      list,
      ...admins,
    };
  }, [admins]);

  return { isLoading, refetch, bodyColumns, q };
};

export const breadCrumbs = [
  { label: "Admin", link: "/admins/admin" },
  { label: "Adminlar" },
];

export const TableData = () => {
  const { navigateQuery } = usePageRouter();
  const handleSearch = (val: string) => {
    navigateQuery({ q: val });
  };

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
        title: "Rollar",
        id: "roles",
        render: (roles: any) => {
          return (
            <div>
              {roles?.map((item: any, index: number, row: any) => (
                <p key={index}>
                  {item.name}
                  {row.length > 1 && index !== row.length - 1 ? "," : ""}
                </p>
              ))}
            </div>
          );
        },
      },
      {
        title: "Qo'shilgan sana",
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
        actions: ["edit", "delete", "view"],
      },
    ];
  }, []);

  return { headColumns, handleSearch };
};
