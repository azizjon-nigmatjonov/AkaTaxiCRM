import { Controller } from "react-hook-form";
import CDatePicker from "../../CElements/CDatePicker";
import CLabel from "../../CElements/CLabel";
import { useEffect } from "react";

interface Props {
  control?: any;
  name?: any;
  width?: string;
  placeholder?: string;
  required?: boolean;
  onChange?: (val?: any) => void;
  defaultValue?: any;
  className?: string;
  mask?: string;
  tabIndex?: any;
  inputProps?: any;
  isFormEdit?: boolean;
  disabled?: boolean;
  label?: string;
  setValue?: (val1?: any, val2?: any) => void;
}

const HFDatePicker = ({
  control,
  className,
  name,
  mask,
  tabIndex,
  placeholder = "",
  isFormEdit = false,
  defaultValue = "",
  disabled,
  required = false,
  label = "",
  setValue = () => {},
}: Props) => {
  useEffect(() => {
    if (defaultValue) {
      setValue(name, defaultValue);
    }
  }, [defaultValue, name, setValue]);

  return (
    <div>
      <CLabel title={label} required={required} />
      <Controller
        control={control}
        name={name}
        disabled
        defaultValue={defaultValue}
        render={({ field: { onChange, value } }) => (
          <div className={className}>
            <CDatePicker
              placeholder={placeholder}
              handleChange={onChange}
              defaultValue={value}
            />
          </div>
        )}
      />
    </div>
  );
};

export default HFDatePicker;
