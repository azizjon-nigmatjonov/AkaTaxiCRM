import { Button } from "@mui/material";
import "./style.scss";
import { PlusIcon } from "../IconGenerator/Svg";
import { useTranslation } from "react-i18next";

interface Props {
  text?: string;
  iconLeft?: any;
  style?: any;
  id?: string;
  children?: any;
  classes?: string;
  type?: any;
  onClick?: (val?: any) => void;
}

const AddButton = ({
  text = "",
  iconLeft = true,
  id,
  children,
  classes,
  type = "button",
  ...props
}: Props) => {
  const { t } = useTranslation();


  return (
    <div id={id ? id : "addBtn"} {...props}>
      <Button type={type} className={classes} >
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
