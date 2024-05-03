import { useQuery } from "react-query";
import authService from "../../../../services/auth/authService";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { authActions } from "../../../../store/auth/auth.slice";

export const GetUserInfo = () => {
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

  return { userInfo };
};
