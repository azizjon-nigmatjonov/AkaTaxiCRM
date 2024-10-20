import { useMemo } from "react";
import { useQuery } from "react-query";
import adminService from "../../services/admins";

export const UseAdmins = () => {
  const { data: adminData } = useQuery(["GET_ADMINS_FOR_OPTIONS"], () => {
    return adminService.getAdminList();
  });

  const adminOptions = useMemo(() => {
    return (
      adminData?.data?.map(
        (item: { name: string; id: number }) => {
          return {
            label: item.name,
            value: item.id 
          };
        }
      ) ?? []
    );
  }, [adminData]);

  return { adminOptions };
};
