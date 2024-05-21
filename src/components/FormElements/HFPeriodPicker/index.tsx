import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import CLabel from "../../../components/CElements/CLabel";
import "./style.scss";
import { Controller } from "react-hook-form";
import { useEffect, useState } from "react";
import { DateData } from "./Logic";

interface Props {
  label?: string;
  name: string;
  required?: boolean;
  control: any;
  placeholder?: string;
}

const DateUI = ({
  field,
  error,
  placeholder,
}: {
  field: any;
  error?: any;
  placeholder: string;
}) => {
  const [open, setOpen] = useState(false);
  const { changeAction, formatedDate } = DateData();
  const handleChange = (date: any) => {
    changeAction(date);
  };

  useEffect(() => {
    field.onChange(formatedDate);
  }, [formatedDate])
  
  const acceptChange = () => {
    console.log("accept");
  };

  return (
    <div className="relative">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DateTimePicker"]}>
          <DateTimePicker
            open={open}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
            onAccept={acceptChange}
            onChange={handleChange}
            ampm={false}
            format="DD.MM.YYYY HH:mm"
            slotProps={{
              textField: { placeholder },
              actionBar: {
                actions: ["cancel", "accept"],
              },
            }}
          />
        </DemoContainer>
      </LocalizationProvider>
      {error?.message && (
        <p className="text-sm text-[var(--error)] absolute left-1 -bottom-5 whitespace-nowrap">
          {error.message}
        </p>
      )}
    </div>
  );
};

export const HFPeriodPicker = ({
  label,
  required,
  name,
  control,
  placeholder = "",
}: Props) => {
  return (
    <div className="flex flex-col relative" id="HFDateTimePicker">
      {label && <CLabel title={label} required={required} />}

      <Controller
        control={control}
        name={name}
        rules={{
          required: required ? "required_field" : false,
        }}
        render={({ field, fieldState: { error } }) => (
          <DateUI field={field} error={error} placeholder={placeholder} />
        )}
      ></Controller>
    </div>
  );
};
