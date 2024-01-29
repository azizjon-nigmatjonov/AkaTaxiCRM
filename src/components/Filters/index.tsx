import { Button } from "@mui/material";
import { ArrowDownFilled } from "../IconGenerator/Svg";
import { t } from "i18next";
import { ReactNode, useState } from "react";
import Filters from "./Filter";

interface Props {
  text?: string;
  left?: ReactNode;
  open?: boolean;
  onClick?: () => void;
  children?: any;
}

const FilterButton = ({ text = "", left, children, ...props }: Props) => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((prev) => !prev);


  return (
    <div className="relative">
      <div id="filterButton" {...props}>
        <Button onClick={() => toggle()}>
          {left ? left : <span className="text-[var(--gray)]">{t(text)}</span>}
          <div className="icon">
            <div className={!open ? "rotate-0" : "rotate-[180deg]"}>
              <ArrowDownFilled />
            </div>
          </div>
        </Button>

        {children && open ? <Filters toggle={toggle}>{children}</Filters> : ""}
      </div>
    </div>
  );
};

export default FilterButton;
