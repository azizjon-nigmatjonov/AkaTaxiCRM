import { Button } from "@mui/material";
import { ArrowDownFilled } from "../IconGenerator/Svg";
import { t } from "i18next";
import { ReactNode } from "react";

interface Props {
  text?: string;
  left?: ReactNode;
  open?: boolean;
  onClick?: () => void;
  children?: any;
}

const FilterButton = ({
  text = "",
  left,
  open = false,
  children,
  ...props
}: Props) => {
  return (
    <div id="filterButton" {...props}>
      <Button>
        {left ? left : <span className="text-[var(--gray)]">{t(text)}</span>}

        <div className={`icon ${open ? "rotate-0" : "rotate-[180deg]"}`}>
          <ArrowDownFilled />
        </div>
      </Button>

      {children && <div>{children}</div>}
    </div>
  );
};

export default FilterButton;
