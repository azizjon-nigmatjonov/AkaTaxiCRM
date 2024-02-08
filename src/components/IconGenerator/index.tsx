import { FC, memo } from "react";
import { iconsList } from "./iconsList";

interface Props {
  icon: string;
  fill?: any
}
// console.log(iconsList);

const IconGenerator: FC<Props> = ({ icon, fill, ...props }) => {
  console.log(icon);
  
  const findedIcon = iconsList.find((el) => el.name === icon);  
  if (!findedIcon) return null;

  return <findedIcon.component fill={fill} {...props} />;
};

export default memo(IconGenerator);
