import { useQuery } from "react-query";
import roleService from "../../../services/rolls";

export const breadCrumbs = [
  { label: "Admin", link: "/admins/admin" },
  { label: "Rollar" },
];

export const RolesList = () => {
  const { data, isLoading } = useQuery(
    ["GET_ADMINS"],
    () => {
      return roleService.getList();
    },
    {
      enabled: true,
    }
  );

  return { roles: data, isLoading };
};

export const TableData = () => {
  const headColumns = [
    {
      title: "Rol nomi",
      id: "name",
    },
    {
      title: "Funksiyalar soni",
      id: "permissions_count",
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

  return { headColumns };
};
