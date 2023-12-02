import { useQuery } from "react-query";
import usePageRouter from "../../../hooks/useObjectRouter";
import authService from "../../../services/auth/authService";
import { UserIcon } from "../../IconGenerator/Svg";
import cls from "./style.module.scss";
const UserInfo = () => {
  const { navigateTo } = usePageRouter();

  const { data: user } = useQuery(
    ["GET_USER"],
    () => {
      return authService.getUserInfo();
    },
    {
      enabled: true,
    }
  );

  console.log('user', user);
  

  return (
    <div
      className={cls.wrapper}
      onClick={() => navigateTo("/settings/profile")}
    >
      <div className="flex items-center space-x-[10px]">
        <div className={cls.image}>
          <UserIcon />
        </div>
        <div className={cls.content}>
          <h2 className="font-[600] text-black">Hakimzoda</h2>
          <p className="text-[12px] text-[var(--gray)]">Super admin</p>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
