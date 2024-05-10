import { useCallback, useState } from "react";
import CLabel from "../CLabel";
import { PeriodTextField } from "./PeriodTextField";
import { PeriodDateDropDown } from "./PeriodDateDropDown";

interface Props {
  label?: string;
}

export const CPeriodPicker = ({ label = "" }: Props) => {
  const [open, setOpen] = useState(false);

  const handleDropdown = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  return (
    <>
      {label && <CLabel title={label} />}
      <PeriodTextField name="time" handleDropdown={handleDropdown} />
      <PeriodDateDropDown open={open} handleDropdown={handleDropdown} />
    </>
  );
};
