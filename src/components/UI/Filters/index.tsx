import { Button } from "@mui/material";
import { LinearSortIcon } from "../IconGenerator/Svg";
import { BiX } from "react-icons/bi";
import { t } from "i18next";
import { ReactNode } from "react";
import Filters from "./Filter";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { filterActions } from "../../../store/filterParams";

interface Props {
  text?: string;
  left?: ReactNode;

  onClick?: () => void;

  children?: any;
}

const FilterButton = ({ text = "", left, children, ...props }: Props) => {
  const setSearchParams = useSearchParams()[1];
  const open = useSelector((state: any) => state.filter.open);
  const dispatch = useDispatch();
  const toggle = () => {
    dispatch(filterActions.setOpen(!open));
    const defaults: any = {};

    if (!open) {
    } else setSearchParams(defaults);
  };

  return (
    <div className="relative">
      <div id={open ? "activeFilterButton" : "filterButton"} {...props}>
        <Button onClick={() => toggle()}>
          {left ? left : <span>{t(text)}</span>}
          <div className="icon">
            <div>
              {open ? <BiX color="#993701" size={16} /> : <LinearSortIcon />}
            </div>
          </div>
        </Button>

        {children && open ? <Filters toggle={toggle}>{children || "a"}</Filters> : ""}
      </div>
    </div>
  );
};

export default FilterButton;
