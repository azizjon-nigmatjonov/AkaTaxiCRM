import { useQuery } from "react-query";
import usePageRouter from "../../../hooks/useObjectRouter";
import authService from "../../../services/auth/authService";
import cls from "./style.module.scss";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { authActions } from "../../../store/auth/auth.slice";
import ImageFrame from "../../ImageFrame";
const UserInfo = () => {
  const { navigateTo } = usePageRouter();
  const dispatch = useDispatch();

  const { data: userInfo } = useQuery(
    ["GET_USER"],
    () => {
      return authService.getUserInfo();
    },
    {
      enabled: true,
    }
  );

  useEffect(() => {
    if (!userInfo?.data) return;
    dispatch(authActions.setUser(userInfo?.data));
  }, [userInfo]);

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
          <h2 className="font-[600] text-black">{userInfo?.data?.name}</h2>
          {/* <p className="text-[12px] text-[var(--gray)]">Super admin</p> */}
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
