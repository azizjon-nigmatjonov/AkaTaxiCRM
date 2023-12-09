import { useForm } from "react-hook-form";
import CCard from "../../../../components/CElements/CCard";
import priceService from "../../../../services/price";
import PriceField from "../PriceCard/PriceField";
import { useQuery } from "react-query";
import { useMemo } from "react";
import { Skeleton } from "@mui/material";

const StaticPrice = () => {
  const { control, handleSubmit, setValue } = useForm({
    mode: "onSubmit",
  });

  const {
    data: priceData,
    isLoading,
    refetch,
  } = useQuery(["GET_STATIC_PRICES"], () => {
    return priceService.getStaticPrices();
  });

  const onSubmit = (data: any) => {
    priceService
      .updateStaticPrice({ prices: { ...priceData?.data, ...data } })
      .then(() => {
        refetch();
      });
  };

  const Data = useMemo(() => {
    return priceData?.data;
  }, [priceData]);

  return !isLoading ? (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <CCard
        classes="rounded-[18px] border-[var(--lightGray)]"
        style={{
          background: "white",
          padding: "24px",
          minHeight: "100%",
        }}
      >
        <div className="grid grid-cols-4 gap-4">
          <PriceField
            title="Uygacha olib borish"
            name="from_home"
            control={control}
            setValue={setValue}
            price={Data?.from_home}
          />
          <PriceField
            title="Uygacha olib ketish"
            name="to_home"
            control={control}
            setValue={setValue}
            price={Data?.to_home}
          />
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
          <PriceField
            title="Oldi o'rindiq"
            name="place_1"
            control={control}
            setValue={setValue}
            price={Data?.place_1}
          />
          <PriceField
            title="O'rta o'rindiq"
            name="place_3"
            control={control}
            setValue={setValue}
            price={Data?.place_3}
          />
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
          <PriceField
            title="Standart klas"
            name="passenger_standart"
            control={control}
            setValue={setValue}
            price={Data?.passenger_standart}
          />
          <PriceField
            title="Kamfort klas"
            name="passenger_comfort"
            control={control}
            setValue={setValue}
            price={Data?.passenger_comfort}
          />
          <PriceField
            title="Biznes klas"
            name="passenger_bussiness"
            control={control}
            setValue={setValue}
            price={Data?.passenger_bussiness}
          />
          <PriceField
            title="Standart yuk tashuvchi klas"
            name="deliver_standart"
            control={control}
            setValue={setValue}
            price={Data?.deliver_standart}
          />
          <PriceField
            title="Yengil yuk tashuvchi klas"
            name="deliver_light_truck"
            control={control}
            setValue={setValue}
            price={Data?.deliver_light_truck}
          />
          <PriceField
            title="Og'ir yuk tashuvchi klas"
            name="deliver_lorry"
            control={control}
            setValue={setValue}
            price={Data?.deliver_lorry}
          />
          <PriceField
            title="Fura klas"
            name="deliver_truck"
            control={control}
            setValue={setValue}
            price={Data?.deliver_truck}
          />
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
          <PriceField
            title="Hamkorlar min. foiz"
            name="partner_min_price"
            control={control}
            setValue={setValue}
            price={Data?.partner_min_price}
          />
          <PriceField
            title="Hamkorlar max. foiz"
            name="partner_max_price"
            control={control}
            setValue={setValue}
            price={Data?.partner_max_price}
          />
        </div>
      </CCard>
    </form>
  ) : (
    <Skeleton
      style={{ height: "500px", marginTop: "-110px", borderRadius: "18px" }}
    />
  );
};

export default StaticPrice;
