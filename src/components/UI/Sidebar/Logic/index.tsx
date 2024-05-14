import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

export const getWebsiteData = () => {
  const userInfo = useSelector((state: any) => state.auth.user);
  const routes = useSelector((state: any) => state.website.routes);
  console.log('userInfo', userInfo);
  console.log('routes', routes);
  

  // const newRoutes = useMemo(() => {
  //   if (userInfo?.roles?.length) {

  //   }
  // }, [userInfo])
  
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
