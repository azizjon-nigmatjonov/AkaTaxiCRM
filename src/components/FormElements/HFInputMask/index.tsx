import { useState } from "react";
import ReactInputMask from "react-input-mask";
import CLabel from "../../CElements/CLabel";

interface Props {
  mask?: string;
  label?: string;
  required?: boolean;
}

const HFInputMask = ({
  mask = "",
  required = false,
  label = "",
}: Props) => {
  const [curValue, setCurValue] = useState("");

  return (
    <div id="hfInputMask">
      <CLabel title={label} required={required} />
      {curValue}
      <ReactInputMask
        onChange={(e) => setCurValue(e.target.value)}
        mask={mask}
        maskChar=" "
      />
    </div>
  );
};

export default HFInputMask;
