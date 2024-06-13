import Places from "../../../../../components/UI/Places";
import {
  HorizontalLineIcon,
  FlashIcon,
  AirCondition,
  LuggageCartIcon,
  ChartIcon,
  HeaterIcon,
  FuelIcon,
  GasIcon,
  RollIcon,
  ManIcon,
  WomenIcon,
} from "../../../../../components/UI/IconGenerator/Svg";
import { useTranslation } from "react-i18next";
import { FormatMoney } from "../../../../../utils/formatMoney";

interface Props {
  gender?: string;
  bookingData: any;
}

const TripInfo = ({ gender = "m", bookingData }: Props) => {
  const { t } = useTranslation();
  return (
    <div className="space-y-[32px]">
      <div className="flex items-center justify-between gap-6">
        <div className="space-y-1">
          <p className="text-2xl font-semibold text-[var(--black)]">
            {bookingData.from_region_name}
          </p>
          <p className="text-sm font-normal text-[var(--gray)]">
            {bookingData.from_district_name}
          </p>
        </div>
        <HorizontalLineIcon />
        <div className="space-y-1">
          <p className="text-2xl font-semibold text-[var(--black)]">
            {bookingData.to_region_name}
          </p>
          <p className="text-sm font-normal text-[var(--gray)] text-end">
            {bookingData.to_district_name}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FlashIcon />
          <div>
            <p className="text-[var(--gray)] text-sm font-normal">
              {t(bookingData?.driver?.car_class || "")}
            </p>
            <p className="text-[var(--main)] font-semibold">
              {FormatMoney(bookingData?.price ?? 0)}
              {" so'm"}
              {/* <span className="text-[var(--main80)] font-normal line-through pl-2">
                180,000 s‘om
              </span>{" "} */}
            </p>
          </div>
        </div>
        <Places
          data={
            bookingData.driver?.places?.map((item: any) => {
              return { gender: item, reserved: false };
            }) ?? []
          }
        />
      </div>

      <div className="flex items-center justify-between">
        <div className="px-4 py-[14px] rounded-lg bg-[var(--gray50)] inline-flex items-center gap-3 ">
          <AirCondition
            fill={
              bookingData.additional_info.air_conditioner
                ? "var(--main)"
                : "var(--gray)"
            }
          />
          <LuggageCartIcon
            fill={
              bookingData.additional_info.additional_trunk
                ? "var(--main)"
                : "var(--gray)"
            }
          />
          <ChartIcon
            fill={
              bookingData.additional_info.electric
                ? "var(--main)"
                : "var(--gray)"
            }
          />
          <HeaterIcon
            fill={
              bookingData.additional_info.heater ? "var(--main)" : "var(--gray)"
            }
          />
          <FuelIcon
            fill={
              bookingData.additional_info.petrol ? "var(--main)" : "var(--gray)"
            }
          />
          <GasIcon
            fill={
              bookingData.additional_info.can_stop
                ? "var(--main)"
                : "var(--gray)"
            }
          />
          <div className="relative">
            <RollIcon />
            <div className="absolute right-[-5px] bottom-[-2px]">
              {gender == "m" ? (
                <ManIcon width={12} />
              ) : (
                <WomenIcon width={12} />
              )}
            </div>
          </div>
        </div>

        <div className="text-sm">
          <span className="text-[var(--gray)] font-normal">ID</span>
          <p className="text-black font-semibold">
            {bookingData.driver.trip_id}
          </p>
        </div>
        <div className="text-sm">
          <span className="text-[var(--gray)] font-normal">Sana</span>
          <p className="text-black font-semibold">{bookingData.created_at}</p>
        </div>
      </div>
    </div>
  );
};

export default TripInfo;
