import {
  LocalizationProvider,
  StaticDateRangePicker,
} from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import "../style.scss";

import { DateData, DateLabel } from "../Logic";

interface Props {
  open: boolean;
  handlerValue?: (e: any) => void;
  handleDropdown: (val?: any) => void;
}

export const PeriodDateDropDown = ({
  open = false,
  handleDropdown = () => {},
}: Props) => {
  if (!open) return <></>;
  const { value, actionHandler, handleSubmit, getFormatedDate } = DateData({ handleDropdown });
  const { shortcutsItems } = DateLabel();

  return (
    <div className="periodPicker flex">
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="uz">
        <StaticDateRangePicker
          onChange={(e: any) => actionHandler(e)}
          value={value}
          slotProps={{
            shortcuts: {
              items: shortcutsItems,
            },
            actionBar: { actions: [] },
          }}
          calendars={2}
        />
      </LocalizationProvider>
      <div className="periodPickerFooter">
        <div className="flex items-center">
          <div className="default-btn">{getFormatedDate[0]}</div>
          <div className="px-2">-</div>
          <div className="default-btn">{getFormatedDate[1]}</div>
        </div>
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
