import cls from "./style.module.scss";
import SidebarSection from "./Section";
import UserInfo from "../Header/UserInfo";

export const Sidebar = () => {
  return (
    <div className={cls.sidebar}>
      <div className="relative z-[2]">
        <div className="px-16px w-full h-[70px] border-b border-[var(--gray30)] flex items-center">
          <img src="/logo-full.svg" alt="logo" />
        </div>

        <div className="px-[16px]">
          <SidebarSection />
        </div>
      </div>
      <div className="absolute bottom-0 px-16px w-full">
        <UserInfo />
      </div>

      <img
        className="absolute w-full left-0 bottom-[-400px] z-[1]"
        src="/svg/shadow.svg"
        alt="shdow"
      />
    </div>
  );
};
