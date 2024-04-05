import { Button } from "@mui/material";
import { LinearSortIcon } from "../IconGenerator/Svg";
import { BiX } from "react-icons/bi";
import { t } from "i18next";
import { ReactNode, useState } from "react";
import Filters from "./Filter";
// import usePageRouter from "../../hooks/useObjectRouter";

interface Props {
  text?: string;
  left?: ReactNode;
  open?: boolean;
  onClick?: () => void;
  children?: any;
}

const FilterButton = ({ text = "", left, children, ...props }: Props) => {
  // const { navigateQuery, getQueries } = usePageRouter()
  // const query = getQueries();

  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen((prev) => !prev)
  };



  return (
    <div className="relative">
      <div id={open ? 'activeFilterButton': 'filterButton'} {...props}>
        <Button onClick={() => toggle()}>
          {left ? left : <span>{t(text)}</span>}
          <div className="icon">
            <div>
              {open ? <BiX color="#993701" size={16} /> : <LinearSortIcon />}
            </div>
          </div>
        </Button>

        {children && open ? <Filters toggle={toggle}>{children}</Filters> : ""}
      </div>
    </div>
  );
};

export default FilterButton;
