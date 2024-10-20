import { useEffect, useState } from "react";
import CLabel from "../CLabel";
import { PeriodTextField } from "./PeriodTextField";
import { PeriodDateDropDown } from "./PeriodDateDropDown";
import { Closer } from "../../../components/UI/Closer";

interface Props {
  label?: string;
  placeholder?: string;
  defaultValue?: any;
  handleValue: (val: any) => void;
}

export const CPeriodPicker = ({
  label = "",
  placeholder = "",
  defaultValue,
  handleValue = () => {},
}: Props) => {
  const [open, setOpen] = useState(false);
  const [value, setValue]: any = useState();

  useEffect(() => {
    if (defaultValue?.length) {
      setValue(defaultValue[0] + " - " + defaultValue[1]);
    }
  }, [defaultValue]);

  const handleDropdown = (val?: any) => {
    handleValue(val);
    setValue(val);
    setOpen(false);
  };

  return (
    <div className="flex flex-col relative w-full">
      {label && <CLabel title={label} />}
      <PeriodTextField
        name="time"
        value={value || defaultValue}
        open={open}
        placeholder={placeholder}
        setOpen={setOpen}
        handleDropdown={handleDropdown}
      />
      <PeriodDateDropDown
        open={open}
        handleDropdown={handleDropdown}
        label={label}
      />
      {open && <Closer handleClose={() => setOpen(false)} />}
    </div>
  );
};
