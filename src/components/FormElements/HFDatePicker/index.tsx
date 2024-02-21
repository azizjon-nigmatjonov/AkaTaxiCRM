import { Controller } from "react-hook-form";
import BasicDatepicker from "../../CElements/CDatePicker/BasicDatepicker";

interface Props {
  name: string;
  control: any;
  label?: string | undefined;
  rules?: any,
  defaultValue?: any
  required?: boolean
  placeholder?: string
}

export const HFDatePicker = ({
  name,
  control,
  label,
  rules = {},
  defaultValue,
  required,
  placeholder,
}: Props) => {
  
  
  return (
    <Controller
      control={control}
      name={name}
      rules={{
        required: required ? "required_field" : false,
        ...rules,
      }}
      render={({ field, fieldState: { error } }) => (
        <BasicDatepicker
          field={field}
          error={error}
          label={label}
          required={required}
          defaultValue={defaultValue}
          placeholder={placeholder}
        />
      )}
    ></Controller>
  );
};
