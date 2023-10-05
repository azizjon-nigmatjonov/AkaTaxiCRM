import { SearchIcon } from "../../IconGenerator/Svg";

const CSearchInput = () => {
  return (
    <div className="relative">
      <div className="absolute top-1/2 -translate-y-1/2 left-3">
        <SearchIcon />
      </div>
      <input
        type="text"
        placeholder="Izlash..."
        className="w-[250px] bg-transparent h-[40px] outline-none pl-10 pr-5 text=[var(--black)] placeholder-gray border border-[var(--lineGray)] focus:border-[var(--main)] rounded-[10px]"
      />
    </div>
  );
};

export default CSearchInput;
