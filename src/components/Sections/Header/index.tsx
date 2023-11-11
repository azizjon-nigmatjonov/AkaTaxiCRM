import { FC, ReactNode } from "react";
import CSearchInput from "../../CElements/CSearchInput";

interface Props {
  handleSearch?: (val: any) => void
  btns?: string[];
  children?: ReactNode;
  extra?: any;
}

const SectionHeader: FC<Props> = ({ extra, children, handleSearch}) => {
  return (
    <div className="pb-6 flex items-center justify-between">
      {handleSearch ? <CSearchInput handleChange={handleSearch} /> : <div></div>}
      {extra && <div>{extra}</div>}
      <div className="min-h-[40px]">{children}</div>
    </div>
  );
};

export default SectionHeader;
