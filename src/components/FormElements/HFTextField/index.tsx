import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import CLabel from "../../CElements/CLabel";
import "../style.scss";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import { useEffect, useState } from "react";

interface Props {
  control: any;
  name: string;
  required?: boolean;
  rules?: object;
  label?: string;
  disabled?: boolean;
  defaultValue?: any;
  setValue?: (val1?: any, val2?: any) => void;
  type?: string;
  placeholder?: string;
  style?: any;
  activatePassword?: boolean;
}

const HFTextField = ({
  control,
  name = "",
  required = false,
  rules = {},
  label,
  disabled = false,
  defaultValue = "",
  setValue = () => {},
  activatePassword = false,
  type = "text",
  ...props
}: Props) => {
  const [password, setPassword] = useState(true);
  useEffect(() => {
    if (defaultValue) {
      setValue(name, defaultValue);
    }
  }, [defaultValue, name, setValue]);

  return (
    <div className="HFInput relative">
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
            type={
              activatePassword && password
                ? "password"
                : activatePassword && !password
                ? "text"
                : type
            }
            disabled={disabled}
          />
        )}
      ></Controller>
      {activatePassword && (
        <span
          className="visibility"
          onClick={() => setPassword((prev) => !prev)}
        >
          {!password ? <VisibilityOff /> : <Visibility />}
        </span>
      )}
    </div>
  );
};

export default HFTextField;
