import { useEffect } from "react";
import ReactInputMask from "react-input-mask";
import CLabel from "../../CElements/CLabel";
import { Controller } from "react-hook-form";

interface Props {
  mask?: string;
  label?: string;
  required?: boolean;
  placeholder?: string;
  name: string;
  control?: any;
  setValue?: (val1?: any, val2?: any) => void;
  defaultValue?: any;
}

const HFInputMask = ({
  mask = "",
  required = false,
  label = "",
  placeholder = "",
  name = "",
  control,
  setValue = () => {},
  defaultValue = "",
}: Props) => {
  useEffect(() => {
    if (defaultValue) {
      setValue(name, defaultValue);
    }
  }, [name, setValue, defaultValue]);

  return (
    <div id="hfInputMask">
      <CLabel title={label} required={required} />
      <Controller
        control={control}
        name={name}
        defaultValue=""
        rules={{
          required: required ? "This is required field" : false,
        }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <ReactInputMask
            onChange={(e) => onChange(e.target.value)}
            mask={mask}
            maskChar=" "
            value={value}
            placeholder={placeholder}
            required={required}
          />
        )}
      ></Controller>
    </div>
  );
};

export default HFInputMask;
