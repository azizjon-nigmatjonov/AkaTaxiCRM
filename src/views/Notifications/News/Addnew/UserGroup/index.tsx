import { useEffect, useState } from "react";
import CRadio from "../../../../../components/CElements/Radio";

const options = [
  {
    label: "Hammasi",
    value: "all",
  },
  {
    label: "Haydovchi",
    value: "driver",
  },
  {
    label: "Yo'lovchi",
    value: "passenger",
  },
];

export const UserGroup = ({
  setValue,
  defaultValue,
}: {
  setValue: any;
  defaultValue?: any;
}) => {
  const [active, setActive] = useState("all");
  console.log("defaultValue", defaultValue);

  const handleChange = (evt: any) => {
    setActive(evt);
  };

  useEffect(() => {
    setValue("user_group", [active]);
  }, [active]);

  return (
    <div className="grid grid-cols-6 gap-x-5 mt-3">
      {options.map((item: any) => (
        <CRadio
          key={item.value}
          option={item}
          value={active}
          handleChange={handleChange}
        />
      ))}
    </div>
  );
};
