import cls from "./style.module.scss";
import UserInfo from "./UserInfo";

interface Props {
  title?: string;
  children?: any;
  sticky?: boolean;
  user?: boolean;
}

export const Header = ({
  title = "",
  sticky = false,
  children,
  user = true,
  ...props
}: Props) => {
  return (
    <div className={`${cls.header} ${sticky ? cls.sticky : ""}`} {...props}>
      {children ? (
        children
      ) : (
        <h3 className="text-2xl font-[600] text-[var(--black)]">{title}</h3> 
      )}

      {user && <UserInfo />}
    </div>
  );
};
