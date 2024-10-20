import {
  LocalizationProvider,
  StaticDateRangePicker,
} from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import "../style.scss";
import dayjs from "dayjs";
dayjs.locale("uz-latn");
import { DateData, DateLabel } from "../Logic";

interface Props {
  open: boolean;
  label?: string;
  handlerValue?: (e: any) => void;
  handleDropdown: (val?: any) => void;
}

export const PeriodDateDropDown = ({
  label,
  open = false,
  handleDropdown = () => {},
}: Props) => {
  if (!open) return <></>;
  const { value, actionHandler, handleSubmit, getFormatedDate } =
    DateData({
      handleDropdown,
    });
  const { shortcutsItems } = DateLabel();

  const shouldDisableDate = (date: any) => {
    if (value[0] && !value[1]) {
      const startDate = dayjs(value[0]);
      const endDate = startDate.add(7, "day");
      return date.isAfter(endDate) || date.isBefore(startDate);
    }
    return false;
  };

  return (
    <div className={`periodPicker flex ${label ? "top-[67px]" : "top-[50px]"}`}>
      <div className="flex items-center topData">
        <div className="default-btn">{getFormatedDate?.[0]}</div>
        <div className="px-2">-</div>
        <div className="default-btn">{getFormatedDate?.[1]}</div>
      </div>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="uz-latn">
        {value?.length ? (
          <StaticDateRangePicker
            onChange={(e: any) => actionHandler(e)}
            value={value}
            shouldDisableDate={shouldDisableDate}
            slotProps={{
              shortcuts: {
                items: shortcutsItems,
              },
              actionBar: { actions: [] },
            }}
            calendars={1}
          />
        ) : (
          <StaticDateRangePicker
            onChange={(e: any) => actionHandler(e)}
            shouldDisableDate={shouldDisableDate}
            slotProps={{
              shortcuts: {
                items: shortcutsItems,
              },
              actionBar: { actions: [] },
            }}
            calendars={1}
          />
        )}
      </LocalizationProvider>
      <div className="periodPickerFooter">
        <div className="btns">
          <button className="cancel-btn" onClick={() => handleDropdown()}>
            Bekor qilish
          </button>
          <button className="custom-btn" onClick={() => handleSubmit()}>
            Tanlash
          </button>
        </div>
      </div>
    </div>
  );
};
