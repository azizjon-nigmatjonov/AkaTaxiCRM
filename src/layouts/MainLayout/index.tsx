import { Outlet } from "react-router-dom";
import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";
import cls from "./style.module.scss";
import { useEffect } from "react";
import { ColorConstants } from "../../constants/website";

const MainLayout = () => {
  useEffect(() => {
    (Object.keys(ColorConstants) as (keyof typeof ColorConstants)[]).forEach(
      (key) => {
        document.documentElement.style.setProperty(
          "--" + key,
          ColorConstants[key]
        );
      }
    );
  }, []);
  return (
    <div className={cls.layout}>
      <Sidebar />
      <div className={cls.content}>
        <Header />
        <div className="p-6">
          <Outlet />
        </div>
        {/* <MainSkeleton /> */}
      </div>
    </div>
  );
};

export default MainLayout;
