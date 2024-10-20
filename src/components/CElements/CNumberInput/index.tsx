import { useEffect, useRef, useState } from "react";
import { formatNumberWithSpaces } from "../../../utils/formatMoney";

export const CNumberInput = ({
  value,
  handleChange = () => {},
}: {
  value: any;
  handleChange: (val: any) => void;
}) => {
  const inputRef = useRef(null);
  const [displayValue, setDisplayValue] = useState("");

  useEffect(() => {
    const handleWheel = (event: any) => {
      if (document.activeElement === inputRef.current) {
        event.preventDefault();
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  useEffect(() => {
    setDisplayValue(formatNumberWithSpaces(value));
  }, [value]);

  const handleInputChange = (e: any) => {
    const rawValue = e.target.value.replace(/\s+/g, "");

    if (!isNaN(rawValue)) {
      handleChange(+rawValue);
    }
  };

  return (
    <input
      ref={inputRef}
      className="bg-transparent w-full"
      value={displayValue}
      onChange={handleInputChange}
      type="text"
      onWheel={() => false}
    />
  );
};
