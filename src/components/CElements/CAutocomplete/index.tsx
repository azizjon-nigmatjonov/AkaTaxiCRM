import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";
import "./style.scss";
import useDebounce from "../../../hooks/useDebounce";
import CLabel from "../CLabel";
// import { CloseIcon } from "../../UI/IconGenerator/Svg";

interface Props {
  error?: any;
  options: any;
  label?: string;
  delay?: number;
  disabled?: boolean;
  cancel?: boolean;
  handleSelect?: (val: string) => void;
  handleChange?: (val: string) => void;
}

export const CAutocomplete = ({
  options,
  label,
  delay = 0,
  error,
  disabled = false,
  // cancel = false,
  handleSelect = () => {},
  handleChange = () => {},
}: Props) => {
  const [value, setValue] = useState("");

  const debounce = useDebounce((val: string) => {
    setValue(val);
    handleChange(val);
  }, delay);

  const onSelect = (event: any, newValue: any) => {
    console.log(event);
    
    handleSelect(newValue?.value || "");
  };

  return (
    <div id="autocomplete">
      {label && <CLabel title={label} />}
      <div className="relative">
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={options}
          sx={{ width: 300 }}
          onChange={onSelect}
          renderInput={(params) => (
            <TextField
              {...params}
              disabled={disabled}
              value={value}
              label="Movie"
              onChange={(e: any) => {
                debounce(e.target.value);
              }}
            />
          )}
        />
        {/* {cancel ? (
          <div onClick={() => debounce("")} className="absolute top-[15px] right-[30px]">
            <CloseIcon />
          </div>
        ) : (
          ""
        )} */}
      </div>
      {error?.message && (
        <p className="text-sm text-[var(--error)] absolute left-1 -bottom-5 whitespace-nowrap">
          {error.message}
        </p>
      )}
    </div>
  );
};
