import cls from "./style.module.scss";
import { ArrowDownFilled } from "../../IconGenerator/Svg";
const UserInfo = () => {
  return (
    <div className={cls.wrapper}>
      <div className="flex items-center space-x-[10px]">
        <div className={cls.image}>
          <img src="/images/website/avatar.png" alt="avatar" />
        </div>
        <div className={cls.content}>
          <h2 className="font-[600] text-black">Huzayfa Baxrom</h2>
          <p className="text-[12px] text-[var(--gray)]">Super admin</p>
        </div>
      </div>
      <div className="cursor-pointer pl-4 py-3">
        <ArrowDownFilled />
      </div>
    </div>
  );
};

export default UserInfo;
