import cls from "./style.module.scss";
import SidebarSection from "./Section";

export const Sidebar = () => {
  return (
    <div className={cls.sidebar}>
      <div className="px-[20px] h-[76px] border border-[var(--lineGray)] flex items-center">
        <img src="/logo-full.svg" alt="logo" />
      </div>
      <SidebarSection />
    </div>
  );
};
