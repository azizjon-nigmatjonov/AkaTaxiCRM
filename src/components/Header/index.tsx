import cls from "./style.module.scss";

interface Props {
  title?: string;
  titleIn?: string;
  children?: any;
  sticky?: boolean;
  user?: boolean;
}

export const Header = ({
  title = "",
  titleIn = '',
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
        <h3 className="text-2xl font-[600] text-[var(--black)]"><span className={`${titleIn && 'text-[var(--gray)]'}`}>{title}</span>{'/' + titleIn}</h3>
      )}


    </div>
  );
};
