import { FC, ReactNode } from "react";
import CSearchInput from "../../CElements/CSearchInput";

interface Props {
  handleSearch?: (val: any) => void
  btns?: string[];
  children?: ReactNode;
  extra?: any;
  delay?: number
}

const SectionHeader: FC<Props> = ({ extra, children, handleSearch, delay = 500 }) => {
  return (
    <div className="pb-6 flex items-center justify-between">
      {extra && <div className="ml-2">{extra}</div>}
      {handleSearch ? <CSearchInput handleChange={handleSearch} classes="bg-white" delay={delay} /> : ""}
      <div className="min-h-[40px] ml-auto">{children}</div>
    </div>
  );
};

export default SectionHeader;
