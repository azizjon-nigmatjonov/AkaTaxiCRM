import cls from "./style.module.scss";
import SidebarSection from "./Section";

export const Sidebar = () => {
  return (
    <div className={cls.sidebar}>
      <div className="relative z-[2]">
        <div className="px-[20px] w-[312px] h-[70px] border border-[var(--lineGray)] flex items-center">
          <img src="/logo-full.svg" alt="logo" />
        </div>
        <SidebarSection />
      </div>

      <img
        className="absolute left-0 bottom-[-200px] z-[1]"
        width={300}
        src="/svg/shadow.svg"
        alt="shdow"
      />
    </div>
  );
};
