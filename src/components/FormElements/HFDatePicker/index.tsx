// import { makeStyles } from "@mui/styles";
import { Controller } from "react-hook-form";
import CLabel from "../../CElements/CLabel";
import { useEffect, useRef } from "react";
import { InputAdornment, TextField } from "@mui/material";
import DatePicker from "react-multi-date-picker";
import { Today } from "@mui/icons-material";
import weekends from "react-multi-date-picker/plugins/highlight_weekends";
import CustomNavButton from "../FormDatePicker/Plugins/CustomNavButton";
import { locale } from "../FormDatePicker/Plugins/locale";
import { ColorConstants } from "../../../constants/website";

interface Props {
  control: any;
  isBlackBg?: any;
  className?: string;
  name: string;
  label?: string;
  inputProps?: any;
  disabledHelperText?: any;
  placeholder?: string;
  isFormEdit?: boolean;
  defaultValue?: string;
  disabled?: boolean;
  required?: boolean;
  setValue?: (val1?: any, val2?: any) => void;
}

const HFDatepicker = ({
  control,
  className,
  name,
  label = "",
  defaultValue = "",
  required = false,
  setValue = () => {},
  disabled = false,
  placeholder = ""
}: Props) => {
  const datePickerRef: any = useRef();
  useEffect(() => {
    if (defaultValue) {
      setValue(name, defaultValue);
    }
  }, [defaultValue, name, setValue]);

  return (
    <div className="flex flex-col">
      {label ? <CLabel required={required} title={label} /> : ""}
      <Controller
        control={control}
        name={name}
        disabled
        defaultValue={defaultValue}
        render={({ field: { onChange, value } }) => (
          <div className={className}>
            <div id="cDatepicker">
              <DatePicker
                disabled={disabled}
                ref={datePickerRef}
                render={(value, openCalendar) => {
                  document.addEventListener("keydown", (e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      datePickerRef.current.closeCalendar();
                    }
                  });
                  return (
                    <TextField
                      value={value}
                      size="small"
                      name={name}
                      placeholder={placeholder}
                      onClick={openCalendar}
                      fullWidth
                      autoComplete="off"
                      InputProps={{
                        readOnly: disabled,
          
                        style: disabled
                          ? {
                              background: "#fff",
                            }
                          : {
                              background: "#fff",
                              color: ColorConstants.black,
                            },
                        endAdornment: (
                          <InputAdornment position="end">
                            <Today />
                          </InputAdornment>
                        ),
                      }}
                      className={"custom_textfield"}
                    />
                  );
                }}
                renderButton={<CustomNavButton />}
                plugins={[weekends()]}
                weekStartDayIndex={1}
                portal
                locale={locale}
                className="datePicker"
                format="DD.MM.YYYY"
                value={new Date(value) || ""}
                onChange={(val: any) => onChange(val ? new Date(val) : "")}
              />
            </div>
          </div>
        )}
      ></Controller>
    </div>
  );
};

export default HFDatepicker;
