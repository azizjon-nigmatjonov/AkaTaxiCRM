import { Outlet } from "react-router-dom";
import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";
import cls from "./style.module.scss";

const MainLayout = () => {

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
