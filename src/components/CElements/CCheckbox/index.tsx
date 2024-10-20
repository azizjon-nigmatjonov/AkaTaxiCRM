import { useTranslation } from "react-i18next";
import { CheckLine } from "../../../components/UI/IconGenerator/Svg";

interface Props {
  element?: any;
  checked?: boolean;
  handleCheck?: (val: any) => void;
}

const CCheckbox = ({
  element = {},
  handleCheck = () => {},
  checked = false,
}: Props) => {
  const { t } = useTranslation();
  return (
    <div
      onClick={() => handleCheck(element)}
      className={`flex items-center cursor-pointer whitespace-nowrap ${
        element.label
          ? "border border-[var(--gray20)] w-full h-[40px] px-16px rounded-lg common-shadow gap-2"
          : ""
      }`}
    >
      <div
        className={element.label ? "w-[18px] h-[18px]" : "w-[24px] h-[24px]"}
      >
        <div
          className={`rounded-[4px] border-2 ${
            checked ? "border-[var(--main)]" : "border-[var(--gray20)]"
          } ${element.label ? "w-[18px] h-[18px]" : "w-[24px] h-[24px] border-[var(--gray30)]"}`}
        >
          {checked ? <CheckLine fill="var(--main)" /> : ""}
        </div>
      </div>
      {element.label ? <p>{t(element.label)}</p> : ""}
    </div>
  );
};

export default CCheckbox;
