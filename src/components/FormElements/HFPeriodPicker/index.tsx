import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import CLabel from "../../../components/CElements/CLabel";
import "./style.scss";
import { Controller } from "react-hook-form";

interface Props {
  label?: string;
  name: string;
  required?: boolean;
  control: any;
  placeholder?: string;
}

const DateUI = ({ field, error }: { field: any; error?: any }) => {
  console.log(field, error);
  
  const handleChange = () => {

  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DateTimePicker"]}>
        <DateTimePicker onChange={handleChange} label="Basic date time picker" />
      </DemoContainer>
    </LocalizationProvider>
  );
};

export const HFPeriodPicker = ({
  label,
  required,
  name,
  control,
  placeholder,
}: Props) => {
  console.log(name, control, placeholder);

  return (
    <div className="flex flex-col" id="HFDateTimePicker">
      {label && <CLabel title={label} required={required} />}

      <Controller
        control={control}
        name={name}
        rules={{
          required: required ? "required_field" : false,
        }}
        render={({ field, fieldState: { error } }) => (
          <DateUI field={field} error={error} />
        )}
      ></Controller>
    </div>
  );
};
