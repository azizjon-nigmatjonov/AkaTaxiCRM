import { SearchIcon } from "../../IconGenerator/Svg";
import { FC } from "react";
// import useDebounce from "../../../hooks/useDebounce";
// import CSearchInput from "../../CElements/CSearchInput";
import stl from "./style.module.scss";
import UserInfo from "../UserInfo";

interface Props {
  //   handleSearch?: (val: any) => void;
  btns?: string[];
//   children?: ReactNode;
  extra?: any;
  //   delay?: number;
}

const SearchHeader: FC<Props> = ({ extra }) => {
  return (
    <div className={stl.wrapper}>
      <div className="relative w-[100%] flex items-center">
        <div className="absolute top-1/2 -translate-y-1/2 left-3">
          <SearchIcon />
        </div>
        <input
          //   onChange={(e) => debounce(e.target.value)}
          type="text"
          placeholder="Izlash..."
          className={`w-[100%] bg-transparent h-[40px] outline-none pl-10 pr-5 text=[var(--black)] placeholder-gray focus:border-[var(--main)] rounded-[10px] `}
        />
      </div>

      {extra && <div>{extra}</div>}
      <div className={stl.profile}><UserInfo /></div>
    </div>
  );
};

export default SearchHeader;
