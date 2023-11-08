import DatePicker from "react-multi-date-picker";
import "react-multi-date-picker/styles/layouts/mobile.css";
import "./style2.scss";

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

const CDatePicker = ({
  handleChange = () => {},
  placeholder,
}: Props) => {
  const handleDateChange = (dates: any) => {
    handleChange(dates ? new Date(dates) : "");
  };

  return (
    <DatePicker
      // format="dd.MM.YYYY"
      // value={selectedDate}
      placeholder={placeholder}
      // maxDate={maxDate}
      onChange={(val?: any) => handleDateChange(val)}
    />
  );
};

export default CDatePicker;
