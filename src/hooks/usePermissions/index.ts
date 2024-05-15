import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

export const PermissionsData = () => {
  const userInfo = useSelector((state: any) => state.auth.user);
  const permissions = userInfo?.permissions ?? []
  const location = useLocation();
  const found = permissions?.find(
    (item: any) => item.value === location.pathname.substring(1)
  );

  return { routePermissions: found?.permissions ?? [] };
};
