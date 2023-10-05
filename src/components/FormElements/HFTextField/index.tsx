import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import CLabel from "../../CElements/CLabel";
import "../style.scss";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import { useEffect } from "react";

interface Props {
  control: any;
  name: string;
  required?: boolean;
  rules?: object;
  label?: string;
  disabled?: boolean;
  password?: boolean;
  defaultValue?: any;
  setPassword?: (val?: any) => void;
  setValue?: (val1?: any, val2?: any) => void;
  type?: string;
  placeholder?: string
  style?: any;
}

const HFTextField = ({
  control,
  name = "",
  required = false,
  rules = {},
  label,
  disabled = false,
  password = false,
  defaultValue = "",
  setPassword = () => {},
  setValue = () => {},
  ...props
}: Props) => {
  useEffect(() => {
    if (defaultValue) {
      setValue(name, defaultValue);
    }
  }, [defaultValue, name, setValue]);

  return (
    <div className="HFInput">
      {label && <CLabel title={label} required={required} />}
      <Controller
        control={control}
        name={name}
        defaultValue=""
        rules={{
          required: required ? "This is required field" : false,
          ...rules,
        }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            size="small"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            name={name}
            error={Boolean(error)}
            helperText={error?.message}
            {...props}
            type={props.type || "text"}
            disabled={disabled}
          />
        )}
      ></Controller>
      {password && (
        <span
          className="visibility"
          onClick={() => setPassword((prev: boolean) => !prev)}
        >
          {props.type === "password" ? <VisibilityOff /> : <Visibility />}
        </span>
      )}
    </div>
  );
};

export default HFTextField;
