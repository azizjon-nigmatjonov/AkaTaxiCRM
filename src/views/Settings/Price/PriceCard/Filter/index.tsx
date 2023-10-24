import FilterButton from "../../../../../components/Filters";

const PriceFiler = () => {
  return (
    <div className="relative w-[240px]">
      <FilterButton
        left={
          <p className="text-[var(--gray)]">
            Qayerdan: <span className="text-[var(--main)]">Toshkentdan</span>
          </p>
        }
      />
    </div>
  );
};
export default PriceFiler;
