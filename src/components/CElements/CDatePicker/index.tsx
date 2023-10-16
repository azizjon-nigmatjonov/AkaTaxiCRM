import DatePicker from "react-multi-date-picker";
import "react-multi-date-picker/styles/layouts/mobile.css";
import "./style2.scss";

interface Props {
  value?: any;
  name?: any;
  width?: string;
  placeholder?: any;
  isBlackBg?: boolean;
  required?: boolean;
  handleChange?: (val: any) => void;
  defaultValue?: any;
  className?: string;
  mask?: any;
  tabIndex?: any;
  inputProps?: any;
  isFormEdit?: boolean;
  disabled?: boolean;
}

const CDatePicker = ({ handleChange = () => {} }: Props) => {

  return (
    <DatePicker onChange={(val?: any) => handleChange(val ? new Date(val) : "")} />
  );
};

export default CDatePicker;
