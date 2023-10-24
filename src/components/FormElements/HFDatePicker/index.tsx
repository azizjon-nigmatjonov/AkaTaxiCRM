import { Controller } from "react-hook-form";
import CDatePicker from "../../CElements/CDatePicker";
import CLabel from "../../CElements/CLabel";

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
}: Props) => {
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
              isFormEdit={isFormEdit}
              name={name}
              placeholder={placeholder}
              mask={mask}
              tabIndex={tabIndex}
              value={value}
              handleChange={onChange}
              disabled={disabled}
              defaultValue={defaultValue}
            />
          </div>
        )}
      />
    </div>
  );
};

export default HFDatePicker;
