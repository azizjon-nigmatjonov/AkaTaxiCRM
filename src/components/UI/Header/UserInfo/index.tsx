import usePageRouter from "../../../../hooks/useObjectRouter";
import cls from "./style.module.scss";
import ImageFrame from "../../ImageFrame";
interface Props {
  userInfo: any
}

const UserInfo = ({ userInfo = [] } : Props) => {
  const { navigateTo } = usePageRouter();

  return (
    <div
      className={cls.wrapper}
      onClick={() => navigateTo("/settings/profile")}
    >
      <div className="flex items-center space-x-[10px]">
        <div className={cls.image}>
          <ImageFrame image={userInfo.image} />
        </div>
        <div className={cls.content}>
          <h2 className="font-[600] text-[14px] text-[var(--gray70)] capitalize">
            {userInfo.name}
          </h2>
          <p className="text-[14px] text-[var(--gray60)]">{userInfo.phone}</p>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
