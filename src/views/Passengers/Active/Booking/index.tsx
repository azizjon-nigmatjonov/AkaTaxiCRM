import { useEffect, useState } from "react";
import CBreadcrumbs from "../../../../components/CElements/CBreadcrumbs";
import { Header } from "../../../../components/UI/Header";
import CancelButton from "../../../../components/UI/Buttons/Cancel";
import { useForm } from "react-hook-form";
import Info from "./Form/Info";
import Seating from "./Seating";
import Features from "./Features";
import passengerService from "../../../../services/passengers";
import { useDispatch } from "react-redux";
import { websiteActions } from "../../../../store/website";
import usePageRouter from "../../../../hooks/useObjectRouter";
import priceService from "../../../../services/price";
import { breadcrumbs } from "./Logic";

const Booking = () => {
  const [seating, setSeating]: any = useState({});
  const [features, setFeatures] = useState({});
  const [priceData, setPricedata] = useState<any>({});
  const dispatch = useDispatch();
  const { progmatic, navigateTo } = usePageRouter();
  const [loading, setLoading] = useState(false);

  const { control, getValues, watch } = useForm({
    defaultValues: {
      passenger_name: "Yo'lovchi",
      start_location_id: "",
      end_location_id: "",
    },
    mode: "onSubmit",
  });

  const locationIds: any = {
    start: watch("start_location_id"),
    end: watch("end_location_id"),
  };

  const startId = watch("end_location_id");

  const handleSeatActions = (e?: any) => {
    setSeating({ place_order: e });
  };

  const FeatureHandle = (e?: any) => {
    setFeatures(e);
    GetPrice(e);
  };

  const formsubmit = () => {
    const value = getValues();
    const obj: any = { ...value, ...seating, ...features };

    for (const i in obj) {
      if (i == "from_region" || i == "to_region") delete obj[i];
    }
    obj.passenger_phone = obj.passenger_phone.substring(1).replace(/\s+/g, "");

    setLoading(true);
    passengerService
      .bookingTrip(obj)
      .then(() => {
        dispatch(
          websiteActions.setAlertData({
            title: "Qidiruv boshlandi!",
            translation: "common",
          })
        );
        progmatic();
      })
      .catch((err) => {
        dispatch(
          websiteActions.setAlertData({
            mainTitle: "Xatoliklarni tuzating",
            title: err?.data?.error.message,
            translation: "common",
            type: "error",
          })
        );
      })
      .finally(() => setLoading(false));
  };

  const GetPrice = (e?: any) => {
    const info: any = {};
    const value = getValues();
    Object.entries(value).map(([key, value]) => {
      if (key == "start_location_id" || key == "end_location_id") {
        info[key] = value;
      }
    });
    !!info?.end_location_id &&
      priceService
        .getBookingPrice({ ...info, ...seating, ...e })
        .then((data) => setPricedata(data?.data));
  };

  useEffect(() => {
    GetPrice();
  }, [seating?.place_order, startId]);

  return (
    <>
      <Header sticky={true}>
        <CBreadcrumbs items={breadcrumbs} progmatic={true} type="link" />
      </Header>
      <section className="px-6 divide-y-[1px] divide-[#EAECF0]">
        <div className="flex items-center justify-between pb-5">
          <div>
            <p className="text-[var(--black)] text-lg font-semibold">
              Haydovchi buyurtma berish
            </p>
            <p className="text-[varr(--gray)] text-sm font-normal">
              Yo’lovchiga admin tomondan haydovchi topib berish
            </p>
          </div>
          <div>
            <button
              className={`custom-btn ${loading ? "disabled" : ""}`}
              onClick={formsubmit}
              disabled={loading}
            >
              Haydovchi qidirish
            </button>
          </div>
        </div>
        <div>
          <form className="divide-y-[1px] divide-[#EAECF0]">
            <Info control={control} />
            <Seating handleSeatActions={handleSeatActions} />
            <Features
              price={priceData}
              featureHandle={FeatureHandle}
              locationIds={locationIds}
            />

            <div className={`flex  justify-end py-4`}>
              <div className="flex gap-4 ">
                <CancelButton
                  text="Bekor qilish"
                  onClick={() => navigateTo("/passengers/active-passengers")}
                />
                <button
                  className={`custom-btn ${loading ? "disabled" : ""}`}
                  onClick={formsubmit}
                  type="button"
                  disabled={loading}
                >
                  Haydovchi qidirish
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Booking;
