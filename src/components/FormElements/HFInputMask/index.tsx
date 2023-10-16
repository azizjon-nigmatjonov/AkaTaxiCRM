import { useEffect, useState } from "react";
import ReactInputMask from "react-input-mask";

interface Props {
    mask?: string;
    name?: string;
    setValue?: (val1?: string, val2?: any) => void | any
}

const HFInputMask = ({ name, mask = "", setValue = () => {} } : Props) => {
  const [curValue, setCurValue] = useState("")
  useEffect(() => {
    setValue(name, curValue)
  }, [curValue])

  return (
    <div id="hfInputMask">
      <ReactInputMask onChange={(e) => setCurValue(e.target.value)} mask={mask} maskChar=" " />
    </div>
  );
};

export default HFInputMask;
