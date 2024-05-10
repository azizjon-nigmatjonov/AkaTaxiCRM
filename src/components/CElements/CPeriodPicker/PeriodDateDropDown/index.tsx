import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangeCalendar } from "@mui/x-date-pickers-pro/DateRangeCalendar";
import "../style.scss";
import { FormatCalendar } from "../../../../utils/formatTime";
import usePageRouter from "../../../../hooks/useObjectRouter";
import { PeriodDateMenu } from "./Menu";
// import AddButton from '../Buttons/AddButton';
// import { Closer } from "../../../../components/UI/Closer";

interface Props {
  open: boolean;
  handlerValue?: (e: any) => void;
  handleDropdown: () => void;
}

export const PeriodDateDropDown = ({
  open = false,
  handlerValue = () => {},
}: //   handleDropdown,
Props) => {
  if (!open) return <></>;
  const { navigateQuery } = usePageRouter();

  const clickhandler = (e?: any) => {
    navigateQuery({ start: FormatCalendar(e[0]?.$d) });
    navigateQuery({ end: FormatCalendar(e[1]?.$d) });
    handlerValue(e);
  };

  return (
    <div className="periodPicker flex">
      <PeriodDateMenu />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateRangeCalendar
          onChange={(e: any) => clickhandler(e)}
          calendars={2}
        />
      </LocalizationProvider>

      {/* <Closer handleClose={() => handleDropdown()} /> */}
    </div>
  );
};
