import { Outlet } from "react-router-dom";
import { Sidebar } from "../../components/UI/Sidebar";
import cls from "./style.module.scss";
import { useSelector } from "react-redux";
import CAlert from "../../components/CElements/CAlert";
import { BackButtonRoute, ColorData, GetUserInfo } from "./Logic";
import { RegionData } from "./Logic/Regions";

const MainLayout = () => {
  const { userInfo } = GetUserInfo()
  const alertData = useSelector((state: any) => state.website.alert);
  
  if (!userInfo?.id) return ""
  return (
    <div className={cls.layout}>
      <Sidebar />
      <div className={cls.content}>
        <Outlet />
      </div>

      <BackButtonRoute />
      {alertData?.title && <CAlert data={alertData} />}

      <RegionData  />
      <ColorData />
    </div>
  );
};

export default MainLayout;
