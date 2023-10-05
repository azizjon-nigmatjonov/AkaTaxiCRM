import cls from "./style.module.scss";
import CSearchInput from "../CElements/CSearchInput";
import Notification from "./Notification";
import UserInfo from "./UserInfo";
export const Header = () => {
  return (
    <div className="pb-[70px]">
      <div className="fixed w-full left-0 pl-[229px] z-[99]">
        <div
          className={`${cls.header} border-b border-[var(--lineGray)] px-[24px]`}
        >
          <CSearchInput />
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
