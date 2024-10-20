import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import sidebarService from "../../../../services/sidebar";
import { useQuery } from "react-query";

export const getWebsiteData = () => {
  const userInfo = useSelector((state: any) => state.auth.user);
  const routes = useSelector((state: any) => state.website.routes);

  return { userInfo: userInfo ?? {}, routes: routes ?? [] };
};

export const SectionData = () => {
  const location = useLocation();
  const getParentName = () => {
    const locationName = location.pathname.substring(
      1,
      location.pathname.substring(1).indexOf("/") + 1
    );

    return locationName;
  };

  return { getParentName };
};

export const FetchFunction = () => {
  const { data: sibdarData } = useQuery(["GET_SIDEBAR_DATA_"], () => {
    return sidebarService.getSidebarData();
  });

  return { sidebarCounts: sibdarData?.data ?? {} };
};
