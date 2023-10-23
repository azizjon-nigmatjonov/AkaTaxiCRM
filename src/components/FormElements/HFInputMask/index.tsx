import { useEffect, useState } from "react";
import ReactInputMask from "react-input-mask";
import CLabel from "../../CElements/CLabel";

interface Props {
  mask?: string;
  label?: string;
  required?: boolean;
  placeholder?: string
  name: string;
  setValue?: (val1?: any, val2?: any) => void;
  defaultValue?: any
}

const HFInputMask = ({
  mask = "",
  required = false,
  label = "",
  placeholder = "",
  name = "",
  setValue = () => {},
  defaultValue = ""
}: Props) => {
  const [curValue, setCurValue] = useState("");

  useEffect(() => {
    if (curValue) {
      setValue(name, curValue);
    }
  }, [curValue, name, setValue]);

  useEffect(() => {
    console.log('defaultValue', defaultValue);
    
    if (defaultValue && !curValue) setCurValue(defaultValue)
  }, [defaultValue])

  return (
    <div id="hfInputMask">
      <CLabel title={label} required={required} />
      {curValue}
      <ReactInputMask
        onChange={(e) => setCurValue(e.target.value)}
        mask={mask}
        maskChar=" "
        placeholder={placeholder}
      />
    </div>
  );
};

export default HFInputMask;
