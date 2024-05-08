import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import CLabel from "../CLabel";

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
  id = "cselect",
  value,
  options = [],
  label = "",
  handlerValue,
  disabled,
  classes = "bg-white",
}: Props) => {
  const handleChange = (event: SelectChangeEvent) => {
    handlerValue!(event.target?.value);
  };

  return (
    <div className="flex flex-col">
      {label && <CLabel title={label} />}
      <div
        id={`cselect-${id}`}
        className={`${classes} rounded-[8px] overflow-hidden`}
      >
        <Select
          value={value}
          disabled={disabled}
          defaultValue={options?.[0]?.value}
          inputProps={{
            "aria-label": "Without label",
          }}
          onChange={handleChange}
        >
          {options.map(({ value, label }: { value: any; label: string }) => (
            <MenuItem key={value} value={value}>
              {" "}
              {label}
            </MenuItem>
          ))}
        </Select>
      </div>
    </div>
  );
};

export default CSelect;
