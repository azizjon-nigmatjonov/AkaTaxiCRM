import FilterButton from "../../../../../components/Buttons/FilterButton";

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
