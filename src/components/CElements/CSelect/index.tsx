import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import CLabel from "../CLabel";
import { ArrowDownOutline } from "../../../components/UI/IconGenerator/Svg";
import { useState } from "react";

interface Props {
  id?: string;
  options: any;
  label?: string;
  handlerValue?: (val: any) => void;
  disabled?: boolean;
  placeholder?: string;
  value?: any;
  classes?: string;
}

const CSelect = ({
  value,
  options = [],
  label = "",
  handlerValue,
  disabled,
  classes = "bg-white",
}: Props) => {
  const [open, setOpen] = useState(false);
  const handleChange = (event: SelectChangeEvent) => {
    handlerValue!(event.target?.value);
  };

  return (
    <div className="flex flex-col w-full">
      {label && <CLabel title={label} />}
      <div id="cselect" className={`${classes} relative`}>
        <Select
          open={open}
          value={value}
          disabled={disabled}
          defaultValue={options?.[0]?.value}
          inputProps={{
            "aria-label": "Without label",
          }}
      
          onChange={handleChange}
          onClick={() => setOpen((prev) => !prev)}
        >
          {options.map(({ value, label }: { value: any; label: string }) => (
            <MenuItem key={value} value={value}>
              {label}
            </MenuItem>
          ))}
        </Select>

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
};

export default CSelect;
