import { CheckLine } from "../../../components/UI/IconGenerator/Svg";
import { useState } from "react";

interface Props {
  element: any;
  defaulCheck?: boolean;
  handleCheck?: (val: any) => void;
}

const CCheckbox = ({
  element,
  handleCheck = () => {},
  defaulCheck = false,
}: Props) => {
  const [checked, setChecked] = useState(defaulCheck);

  const check = (obj: boolean) => {
    handleCheck(obj);
    setChecked(obj);
  };
  
  return (
    <div
      onClick={() => check(element)}
      className="flex items-center gap-2 cursor-pointer px-16px rounded-lg border border-[var(--gray20)] common-shadow h-[40px] w-full"
    >
      <div
        className={`w-[18px] h-[18px] rounded-[4px] border-2 ${
          checked
            ? "border-[var(--main)]"
            : "border-[var(--gray20)]"
        }`}
      >
        {checked ? <CheckLine fill="var(--main)" /> : ""}
      </div>
      <p>{element.label}</p>
    </div>
  );
};

export default CCheckbox;
