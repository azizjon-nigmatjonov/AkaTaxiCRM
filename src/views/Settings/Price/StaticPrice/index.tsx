import { useEffect } from "react";
import CCard from "../../../../components/CElements/CCard";
import priceService from "../../../../services/price";
import PriceField from "../PriceCard/PriceField";

const StaticPrice = () => {
  const getPrices = () => {
    priceService.getStaticPrices().then((res) => {
      console.log('reee', res);
      
    })
  }

  useEffect(() => {
    getPrices()
  }, [getPrices])
  return (
    <div className="space-y-5">
      <CCard
        classes="rounded-[18px] border-[var(--lightGray)]"
        style={{
          background: "white",
          padding: "24px",
          minHeight: "100%",
        }}
      >
        <div className="grid grid-cols-4 gap-4">
          <PriceField title="Uygacha olib borish" price={5} />
          <PriceField title="Uygacha olib ketish" price={5} />
        </div>
      </CCard>
      <CCard
        classes="rounded-[18px] border-[var(--lightGray)]"
        style={{
          background: "white",
          padding: "24px",
          minHeight: "100%",
        }}
      >
        <div className="grid grid-cols-4 gap-4">
          <PriceField title="Oldi o'rindiq" price={5} />
          <PriceField title="O'rta o'rindiq" price={5} />
        </div>
      </CCard>
      <CCard
        classes="rounded-[18px] border-[var(--lightGray)]"
        style={{
          background: "white",
          padding: "24px",
          minHeight: "100%",
        }}
      >
        <div className="grid grid-cols-4 gap-x-4 gap-y-8">
          <PriceField title="Standart klass" price={0} />
          <PriceField title="Kamfort klass" price={5} />
          <PriceField title="Biznes klass" price={5} />
          <PriceField title="Yengil yuk tashuvchi" price={5} />
          <PriceField title="Og'ir yuk tashuvchi" price={5} />
          <PriceField title="Fura" price={5} />
        </div>
      </CCard>
      <CCard
        classes="rounded-[18px] border-[var(--lightGray)]"
        style={{
          background: "white",
          padding: "24px",
          minHeight: "100%",
        }}
      >
        <div className="grid grid-cols-4 gap-4">
          <PriceField title="Hamkorlar min. foiz" price={0} />
          <PriceField title="Hamkorlar max. foiz" price={20} />
        </div>
      </CCard>
    </div>
  );
};

export default StaticPrice;
