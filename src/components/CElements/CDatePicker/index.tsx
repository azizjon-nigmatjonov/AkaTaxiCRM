import DatePicker from "react-multi-date-picker";
import "react-multi-date-picker/styles/layouts/mobile.css";
import "./style2.scss";
import { startOfYear } from "date-fns";
import { useState } from "react";

interface Props {
  value?: any;
  name?: any;
  width?: string;
  placeholder?: any;
  handleChange?: (val: any) => void;
  defaultValue?: any;
  className?: string;
  mask?: any;
  tabIndex?: any;
  inputProps?: any;
  isFormEdit?: boolean;
  disabled?: boolean;
}

const CDatePicker = ({ handleChange = () => {}, placeholder }: Props) => {
  const maxYear = 2023 - 10;
  const maxDate = startOfYear(new Date(maxYear, 0, 1));
  const initialDate = new Date(2000, 0, 1); // January 1, 2020
  const [selectedDate, setSelectedDate] = useState<string>(initialDate);

  const handleDateChange = (dates: any) => {
    setSelectedDate(dates ? new Date(dates) : "");
    handleChange(dates ? new Date(dates) : "");
  };

  return (
    <DatePicker
      format="dd.MM.YYYY"
      value={selectedDate}
      placeholder={placeholder}
      maxDate={maxDate}
      onChange={(val?: any) => handleDateChange(val)}
    />
  );
};

export default CDatePicker;
