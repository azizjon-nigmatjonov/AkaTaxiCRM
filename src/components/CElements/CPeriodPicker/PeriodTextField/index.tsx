import { memo } from "react";
import { TextField } from "@mui/material";
import "../style.scss";
// import { IoMdArrowDropdown } from "react-icons/io";
import { ArrowDownOutline, CloseIcon } from "../../../UI/IconGenerator/Svg";

interface Props {
  open: boolean;
  name: string;
  placeholder?: string;
  value: any;
  setOpen: (val: boolean) => void;
  handleDropdown: () => void;
}

export const PeriodTextField = memo(
  ({
    name,
    placeholder,
    handleDropdown,
    open = false,
    value,
    setOpen = () => {},
  }: Props) => {
    return (
      <div className="PeriodTextField z-20 relative">
        <div className="relative">
          <TextField
            size="small"
            name={name}
            value={value || ""}
            placeholder={placeholder}
            InputProps={{
              readOnly: true,
              endAdornment: <div></div>
            }}
            onClick={() => setOpen(true)}
            style={{
              background: "white",
              border: open ? "2px solid var(--main)" : "",
            }}
          />
          {value ? (
            <button
              onClick={() => handleDropdown()}
              className={`z-[50] absolute right-[34px] top-1/2 -translate-y-1/2 ${
                open ? "rotate-[180deg]" : ""
              }`}
            >
              <CloseIcon />
            </button>
          ) : (
            ""
          )}
          <div
            className={`absolute right-12px top-1/2 -translate-y-1/2 ${
              open ? "rotate-[180deg]" : ""
            }`}
          >
            <ArrowDownOutline />
          </div>
        </div>
      </div>
    );
  }
);
