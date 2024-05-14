import cls from "./style.module.scss";
import SidebarSection from "./Section";
import UserInfo from "../Header/UserInfo";
import { getWebsiteData } from "./Logic";

export const Sidebar = () => {
  const { userInfo, routes } = getWebsiteData();
  return (
    <div className={cls.sidebar}>
      <div className="overflow-y-scroll">
        <div className="relative z-[2]">
          <div className="px-16px w-full h-[70px] border-b border-[var(--gray30)] flex items-center">
            <img src="/logo-full.svg" alt="logo" />
          </div>

          <div
            className="px-[14px] overflow-y-scroll"
            style={{ height: "calc(100vh - 140px)" }}
          >
            <SidebarSection list={routes} />
          </div>
        </div>
        <div className="absolute bottom-0 px-16px h-[70px] flex items-center w-full z-[2] bg-white">
          <UserInfo userInfo={userInfo} />
        </div>

        <img
          className="absolute w-full left-0 top-1/2 -translate-y-1/2 z-[1]"
          src="/svg/shadow.svg"
          alt="shdow"
        />
      </div>
    </div>
  );
};
