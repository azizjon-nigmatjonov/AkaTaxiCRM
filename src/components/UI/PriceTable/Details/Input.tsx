import { useEffect, useRef } from "react";

export const NumberInput = ({
  district,
  handleChange,
}: {
  district: any;
  handleChange: (val: any, val2: any) => void;
}) => {
  const inputRef = useRef(null);

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
  
  return (
    <input
      ref={inputRef}
      className="font-[600]"
      onChange={(e) => {
        handleChange(+e.target.value, district.district_id);
      }}
      defaultValue={district.distance}
      type="number"
      onWheel={() => {
        return false;
      }}
    />
  );
};
