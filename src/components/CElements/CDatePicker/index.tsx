import DatePicker from "react-multi-date-picker";
import "react-multi-date-picker/styles/layouts/mobile.css";
import "./style2.scss";

interface Props {
  placeholder?: any;
  handleChange?: (val: any) => void;
  defaultValue?: any;
}

const CDatePicker = ({
  handleChange = () => {},
  placeholder,
  defaultValue,
}: Props) => {
  const handleDateChange = (dates: any) => {
    handleChange(dates ? new Date(dates) : "");
  };

  return (
    <DatePicker
      // format="dd.MM.YYYY"
      // value={selectedDate}
      value={defaultValue}
      placeholder={placeholder}
      // maxDate={maxDate}
      onChange={(val?: any) => handleDateChange(val)}
    />
  );
};

export default CDatePicker;
