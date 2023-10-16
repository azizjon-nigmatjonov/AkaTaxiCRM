import { useEffect, useState } from "react";
import ReactInputMask from "react-input-mask";
import CLabel from "../../CElements/CLabel";

interface Props {
  mask?: string;
  name?: string;
  setValue?: (val1?: string, val2?: any) => void | any;
  label?: string;
  required?: boolean;
}

const HFInputMask = ({
  name,
  mask = "",
  setValue = () => {},
  required = false,
  label = "",
}: Props) => {
  const [curValue, setCurValue] = useState("");
  useEffect(() => {
    setValue(name, curValue);
  }, [curValue]);

  return (
    <div id="hfInputMask">
      <CLabel title={label} required={required} />
      <ReactInputMask
        onChange={(e) => setCurValue(e.target.value)}
        mask={mask}
        maskChar=" "
      />
    </div>
  );
};

export default HFInputMask;
