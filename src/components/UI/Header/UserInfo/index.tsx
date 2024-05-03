import usePageRouter from "../../../../hooks/useObjectRouter";
import cls from "./style.module.scss";
import ImageFrame from "../../ImageFrame";
import { GetUserInfo } from "./Logic";
const UserInfo = () => {
  const { navigateTo } = usePageRouter();
  const { userInfo } = GetUserInfo();

  return (
    <div
      className={cls.wrapper}
      onClick={() => navigateTo("/settings/profile")}
    >
      <div className="flex items-center space-x-[10px]">
        <div className={cls.image}>
          <ImageFrame image={userInfo?.data?.image} />
        </div>
        <div className={cls.content}>
          <h2 className="font-[600] text-[14px] text-[var(--gray70)] capitalize">
            {userInfo?.data?.name}
          </h2>
          <p className="text-[14px] text-[var(--gray60)]">+998 90 000 00 00</p>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
