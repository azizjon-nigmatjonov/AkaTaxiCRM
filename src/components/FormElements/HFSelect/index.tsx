import {
  FormControl,
  FormHelperText,
  MenuItem,
  Select,
} from "@mui/material";
import { Controller } from "react-hook-form";
import CLabel from "../../CElements/CLabel";
import { useEffect } from "react";
// import IconGenerator from "../IconPicker/IconGenerator";

interface Props {
  control?: any;
  name?: any;
  label?: string;
  width?: string;
  options?: object[];
  disabledHelperText?: any;
  placeholder?: string;
  required?: boolean;
  onChange?: (val?: any) => void;
  optionType?: any;
  defaultValue?: any;
  rules?: any;
  id?: string;
  setValue?: (val1?: any, val2?: any) => void;
}

const HFSelect = ({
  control,
  name,
  label,
  width = "100%",
  options = [],
  disabledHelperText,
  placeholder,
  required = false,
  onChange = () => {},
  optionType,
  defaultValue = "",
  rules = {},
  id = "cselect",
  setValue = () => {},
  ...props
}: Props) => {
    

  useEffect(() => {
    if (defaultValue) {
      setValue(name, defaultValue);
    }
  }, [defaultValue, name, setValue]);


  

  return (
    <div id={`cselect-${id}`}>
      <Controller
        control={control}
        name={name}
        defaultValue={defaultValue}
        rules={{
          required: required ? "This is required field" : false,
          ...rules,
        }}
        render={({
          field: { onChange: onFormChange, value },
          fieldState: { error },
        }) => (
          <FormControl style={{ width }}>
            <CLabel title={label} required={required} />
            <Select
              value={value || defaultValue || ""}
              size="small"
              // error={error}
              inputProps={{ placeholder }}
              fullWidth
              // just
              // following
              // attributes
              // into
              // select
              displayEmpty
              renderValue={
                value !== ""
                  ? undefined
                  : () => (
                      <span style={{ color: "#909EAB" }}>{placeholder}</span>
                    )
              }
              onChange={(e) => {
                onChange(e.target.value);
                onFormChange(e.target.value);
              }}
              {...props}
            >
              {optionType === "GROUP"
                ? options?.map((group?: any) => [
                    <MenuItem
                      style={{ fontWeight: 600, color: "#000", fontSize: 15 }}
                    >
                      {group.label}
                    </MenuItem>,
                    group.options?.map((option?: any) => (
                      <MenuItem
                        key={option.value}
                        value={option.value}
                        style={{ paddingLeft: 30 }}
                      >
                        <div className="flex align-center gap-2">
                          {/* <IconGenerator
                          icon={option.icon}
                          size={15}
                          style={{ color: "#6E8BB7" }}
                        /> */}
                          {option.label}
                        </div>
                      </MenuItem>
                    )),
                  ])
                : options?.map((option?: any) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
            </Select>
            {!disabledHelperText && error?.message && (
              <FormHelperText style={{ color: 'var(--error)', margin: '0 5px' }} error>{error?.message}</FormHelperText>
            )}
          </FormControl>
        )}
      ></Controller>
    </div>
  );
};

export default HFSelect;
