import { makeStyles } from "@mui/styles";
import { Controller } from "react-hook-form";
import CDatePicker from "../../CElements/CDatePicker";
import CLabel from "../../CElements/CLabel";

const useStyles = makeStyles(() => ({
  input: {
    "&::placeholder": {
      color: "#fff",
    },
  },
}));

interface Props {
  control?: any;
  name?: any;
  width?: string;
  placeholder?: any;
  isBlackBg?: boolean;
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
  isBlackBg = false,
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
  const classes = useStyles();
  return (
    <div>
      <CLabel title={label} required={required} />
      <Controller
        control={control}
        name={name}
        disabled
        defaultValue={defaultValue}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <div className={className}>
            <CDatePicker
              isFormEdit={isFormEdit}
              name={name}
              placeholder={placeholder}
              isBlackBg={isBlackBg}
              mask={mask}
              tabIndex={tabIndex}
              value={value}
              handleChange={onChange}
              disabled={disabled}
            />
          </div>
        )}
      />
    </div>
  );
};

export default HFDatePicker;
