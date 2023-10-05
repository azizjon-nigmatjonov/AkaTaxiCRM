import SectionHeader from "../../../components/Sections/Header";
import PriceCard from "./PriceCard";
import PriceFiler from "./PriceCard/Filter";

const AllPrice = [
  {
    min_price: 10000,
    max_price: 999000,
  },
];

const Regions = [
  {
    title: "Andijonga",
    commission: 3000,
    min_price: 100000,
    max_price: 200000,
  },
  {
    title: "Namanganga",
    commission: 2000,
    min_price: 80000,
    max_price: 200000,
  },
  {
    title: 'Farg‘onaga',
    commission: 2000,
    min_price: 100000,
    max_price: 200000,
  },
  {
    title: 'Sirdaryoga',
    commission: 1000,
    min_price: 10000,
    max_price: 999000,
  }
];

const Price = () => {
  return (
    <>
      <SectionHeader title="Narxlar nazorati" />

      {AllPrice?.map((element, index) => (
        <PriceCard key={index} title="Umumiy narxlar" element={element} />
      ))}

      <div>
        <div className="mt-[30px] mb-[20px] flex items-center justify-between">
          <h2 className="text-lg text-[var(--black)] font-[600]">
            Qatnov narxlari nazorati
          </h2>

          <PriceFiler />
        </div>
        <div className="space-y-[18px]">
          {Regions?.map((element, index) => (
            <PriceCard key={index} title={element.title} element={element} />
          ))}
        </div>
      </div>
    </>
  );
};
export default Price;
