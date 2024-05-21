import { useState } from "react";
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
}: {
  setValue: any
}) => {
  const [active, setActive] = useState("all");

  const handleChange = (evt: any) => {
    setActive(evt);
    setValue("user_group", [evt]);
  };

  return (
    <div className="grid grid-cols-6 gap-x-5 mb-4 mt-3">
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
