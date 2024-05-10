import { useCallback, useState } from "react";
import CLabel from "../CLabel";
import { PeriodTextField } from "./PeriodTextField";
import { PeriodDateDropDown } from "./PeriodDateDropDown";

interface Props {
  label?: string;
  placeholder?: string;
}

export const CPeriodPicker = ({ label = "", placeholder= "" }: Props) => {
  const [open, setOpen] = useState(false);

  const handleDropdown = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  return (
    <div className="flex flex-col relative">
      {label && <CLabel title={label} />}
      <PeriodTextField name="time" open={open} placeholder={placeholder} handleDropdown={handleDropdown} />
      <PeriodDateDropDown open={open} handleDropdown={handleDropdown} />
    </div>
  );
};
