import usePageRouter from "../../../hooks/useObjectRouter";
import cls from "./style.module.scss";
const UserInfo = () => {
  const { navigateTo } = usePageRouter()
  return (
    <div className={cls.wrapper} onClick={() => navigateTo("/settings/profile")}>
      <div className="flex items-center space-x-[10px]">
        <div className={cls.image}>
          <img src="/images/website/avatar.png" alt="avatar" />
        </div>
        <div className={cls.content}>
          <h2 className="font-[600] text-black">Huzayfa Baxrom</h2>
          <p className="text-[12px] text-[var(--gray)]">Super admin</p>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
