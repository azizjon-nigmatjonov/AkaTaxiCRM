import cls from "./style.module.scss";
import Notification from "./Notification";
import UserInfo from "./UserInfo";
import useLocationLang from "../../hooks/useLocationLang";
import { useTranslation } from "react-i18next";
export const Header = () => {
  const { GetTitle } = useLocationLang();
  const { t } = useTranslation();
  return (
    <div className="pb-[70px]">
      <div className="fixed w-full left-0 pl-[229px] z-[99]">
        <div
          className={`${cls.header} border-b border-[var(--lineGray)] px-[24px]`}
        >
          <h3 className="text-2xl font-[600] text-[var(--black)]">
            {t(GetTitle("header"))}
          </h3>
          <div className="flex items-center">
            <Notification />
            <div className={`${cls.line} mx-[30px] bg-[var(--lineGray)]`}></div>
            <UserInfo />
          </div>
        </div>
      </div>
    </div>
  );
};
