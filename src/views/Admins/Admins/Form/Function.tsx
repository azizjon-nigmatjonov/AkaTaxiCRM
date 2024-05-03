import { useQuery } from "react-query";
import adminService from "../../../../services/admins";

export const AdminData = (id: string) => {
  const { data } = useQuery(
    ["GET_ADMINS"],
    () => {
      return adminService.getAdmin(id);
    },
    {
      enabled: id !== "create",
    }
  );

  return data;
};
