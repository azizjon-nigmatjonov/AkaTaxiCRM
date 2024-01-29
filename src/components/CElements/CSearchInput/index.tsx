import useDebounce from "../../../hooks/useDebounce";
import { SearchIcon } from "../../IconGenerator/Svg";

interface Props {
  handleChange: (val: any) => void;
  delay?: number;
  classes?: string
}

const CSearchInput = ({ handleChange = () => {}, delay = 500, classes = "" }: Props) => {
  const debounce = useDebounce((search: any) => {    
    handleChange(search);
  }, delay);


  return (
    <div className="relative">
      <div className="absolute top-1/2 -translate-y-1/2 left-3">
        <SearchIcon />
      </div>
      <input
        onChange={(e) => debounce(e.target.value)}
        type="text"
        placeholder="Izlash..."
        className={`w-[250px] bg-transparent h-[40px] outline-none pl-10 pr-5 text=[var(--black)] placeholder-gray border border-[var(--lineGray)] focus:border-[var(--main)] rounded-[10px] ${classes}`}
      />
    </div>
  );
};

export default CSearchInput;
