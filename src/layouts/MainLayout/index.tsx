import { Outlet } from "react-router-dom";
import { Sidebar } from "../../components/UI/Sidebar";
import cls from "./style.module.scss";
import { useSelector } from "react-redux";
import CAlert from "../../components/CElements/CAlert";
import { BackButtonRoute, ColorData, GetUserInfo } from "./Logic";
import { RegionData } from "./Logic/Regions";

const MainLayout = () => {
  const { userInfo } = GetUserInfo()
  console.log('userInfo', userInfo);
  const regions = useSelector((state: any) => state.regions.regions);
  const alertData = useSelector((state: any) => state.website.alert);
  if (!userInfo?.data) return ""
  return (
    <div className={cls.layout}>
      <Sidebar />
      <div className={cls.content}>
        <Outlet />
      </div>

      <BackButtonRoute />
      {alertData?.title && <CAlert data={alertData} />}

      <RegionData regions={regions} />
      <ColorData />
    </div>
  );
};

export default MainLayout;
