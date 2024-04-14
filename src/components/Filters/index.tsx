import { Button } from "@mui/material";
import { LinearSortIcon } from "../IconGenerator/Svg";
import { BiX } from "react-icons/bi";
import { t } from "i18next";
import { ReactNode, useState } from "react";
import Filters from "./Filter";
import usePageRouter from "../../hooks/useObjectRouter";
import { useSearchParams } from "react-router-dom";

interface Props {
  text?: string;
  left?: ReactNode;
  open?: boolean;
  onClick?: () => void;
  children?: any;
}

const FilterButton = ({ text = "", left, children, ...props }: Props) => {
  const { navigateQuery, getQueries } = usePageRouter()
  const query = getQueries();
  const setSearchParams = useSearchParams()[1];
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen((prev) => !prev)

    if (!open) {
      navigateQuery({ filter: 'filter' })
    } else setSearchParams({})
  };


  return (
    <div className="relative">
      <div id={open || !!query.filter ? 'activeFilterButton' : 'filterButton'} {...props}>
        <Button onClick={() => toggle()}>
          {left ? left : <span>{t(text)}</span>}
          <div className="icon">
            <div>
              {open || !!query.filter ? <BiX color="#993701" size={16} /> : <LinearSortIcon />}
            </div>
          </div>
        </Button>

        {children && open ? <Filters toggle={toggle}>{children}</Filters> : ""}
      </div>
    </div>
  );
};

export default FilterButton;
