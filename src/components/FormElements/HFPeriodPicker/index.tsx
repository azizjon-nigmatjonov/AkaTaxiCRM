import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import CLabel from "../../../components/CElements/CLabel";
import './style.scss'

interface Props {
  label?: string
  name: string;
  required?: boolean
  control: any
  placeholder?: string
}

export const HFPeriodPicker = ({ label, required, name, control, placeholder }: Props) => {
  return (
    <div className="flex flex-col" id="HFDateTimePicker">
      {label && <CLabel title={label} required={required} />}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DateTimePicker"]}>
          <DateTimePicker label="Basic date time picker" />
        </DemoContainer>
      </LocalizationProvider>
    </div>
  );
};
