import cls from "./style.module.scss";
import UserInfo from "./UserInfo";
export const Header = ({ title = "", sticky = false, ...props }) => {
  return (
    <div className={`${cls.header} ${sticky ? cls.sticky : ""}`} {...props}>
      <h3 className="text-2xl font-[600] text-[var(--black)]">{title}</h3>
      <div className="flex items-center">
        {/* <Notification />
            <div className={`${cls.line} mx-[30px] bg-[var(--lineGray)]`}></div> */}
        <UserInfo />
      </div>
    </div>
  );
};
