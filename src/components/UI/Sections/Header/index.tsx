import { FC, ReactNode } from "react";
import CSearchInput from "../../../CElements/CSearchInput";

interface Props {
  handleSearch?: (val: any) => void;
  btns?: string[];
  children?: ReactNode;
  extra?: any;
  delay?: number;
  defaultValue?: string | number;
}

const SectionHeader: FC<Props> = ({
  extra,
  children,
  handleSearch,
  delay = 500,
  defaultValue = "",
}) => {
  return (
    <div className="pb-5 flex justify-between">
      {extra && <div className="mr-5">{extra}</div>}
      {handleSearch ? (
        <CSearchInput
          handleChange={handleSearch}
          classes="bg-white"
          delay={delay}
          defaultValue={defaultValue}
        />
      ) : (
        ""
      )}
      <div className="min-h-[40px] ml-auto">{children}</div>
    </div>
  );
};

export default SectionHeader;
