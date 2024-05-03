import { useQuery } from "react-query";
import roleService from "../../../services/rolls";

export const RolesList = () => {
  const { data } = useQuery(
    ["GET_ADMINS"],
    () => {
      return roleService.getList();
    },
    {
      enabled: true,
    }
  );

  return data;
};
