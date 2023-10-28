import DatePicker from "react-multi-date-picker";
import "react-multi-date-picker/styles/layouts/mobile.css";
import "./style2.scss";
import { startOfYear } from "date-fns";

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
  const maxYear = 2023
  const date = new Date()
  
  const maxDate = startOfYear(new Date(maxYear, date.getDate(), date.getMonth()));

  // const [selectedDate, setSelectedDate] = useState<string>(
  //   defaultValue ? defaultValue : ""
  // );
    
  const handleDateChange = (dates: any) => {
    // setSelectedDate(dates ? new Date(dates) : "");
    handleChange(dates ? new Date(dates) : "");
  };

  return (
    <DatePicker
      format="dd.MM.YYYY"
      // value={selectedDate}
      placeholder={placeholder}
      maxDate={maxDate}
      onChange={(val?: any) => handleDateChange(val)}
    />
  );
};

export default CDatePicker;
