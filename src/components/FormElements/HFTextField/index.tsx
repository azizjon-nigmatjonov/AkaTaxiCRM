import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import CLabel from "../../CElements/CLabel";
import "../style.scss";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import { useEffect, useState } from "react";
// import { useTranslation } from "react-i18next";

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
  errors?: any;
  readOnly?: boolean;
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
  errors = {},
  readOnly = false,
  ...props
}: Props) => {
  const [password, setPassword] = useState(true);

  

  // const { t } = useTranslation();
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
          ...rules,
        }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <>
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
              InputProps={{
                readOnly: readOnly,
              }}
              className={error ? "error" : ""}
              disabled={disabled}
            />
            {activatePassword && (
              <span
                className="visibility"
                onClick={() => setPassword((prev) => !prev)}
              >
                {!password ? <VisibilityOff /> : <Visibility />}
              </span>
            )}

            {/* {errors[name]?.message && (
              <p className="text-sm text-[var(--error)] absolute -bottom-5">
                {t(errors[name].message || "")}
              </p>
            )} */}
          </>
        )}
      ></Controller>
    </div>
  );
};

export default HFTextField;
