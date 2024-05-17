import { Button } from "@mui/material";
import "./style.scss";
import { PlusIcon } from "../IconGenerator/Svg";
import { useTranslation } from "react-i18next";
import { usePermissions } from "../../../hooks/usePermissions";

interface Props {
  text?: string;
  iconLeft?: any;
  style?: any;
  id?: string;
  children?: any;
  classes?: string;
  type?: any;
  btnType?: string;
  onClick?: (val?: any) => void;
}

const AddButton = ({
  text = "",
  iconLeft = true,
  id,
  children,
  classes,
  type = "button",
  btnType = "",
  ...props
}: Props) => {
  const { t } = useTranslation();
  const { checkPermission } = usePermissions();

  if (!checkPermission("add")) return "";

  if (btnType === "ordinary") {
    return (
      <button {...props} className="text-[var(--main)] font-[600] flex items-center">
        {iconLeft === true ? <PlusIcon fill="var(--main)" /> : iconLeft}
        {children ? children : <p>{text}</p>}
      </button>
    );
  }

  return (
    <div id={id ? id : "addBtn"} {...props}>
      <Button type={type} className={classes}>
        {iconLeft === true ? <PlusIcon /> : iconLeft}
        {children ? (
          children
        ) : (
          <span className="font-[600] ml-1">{t(text)}</span>
        )}
      </Button>
    </div>
  );
};

export default AddButton;
