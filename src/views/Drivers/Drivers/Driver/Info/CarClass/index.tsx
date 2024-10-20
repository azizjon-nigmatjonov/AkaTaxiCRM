import { useState } from "react";
import SwitchBtn from "../../../../../../components/UI/Buttons/Switch";
import { useClass } from "../../../../../../hooks/useClass";

export const CarClass = () => {
  const [current, setCurrent]: any = useState([]);
  const { classList } = useClass();

  const handleCheck = (name: string) => {
    if (current.includes(name)) {
      setCurrent(current.filter((i: string) => i !== name));
    } else {
      setCurrent([...current, name]);
    }
  };

  return (
    <div className="mt-5 grid grid-cols-4 gap-x-5">
      {classList?.map(
        (item: { id: string; name: string }) =>
          item.name && (
            <SwitchBtn
              key={item.id}
              text={item.name}
              name={item.name}
              checked={current.includes(item.name)}
              handleCheck={handleCheck}
              group="a"
            />
          )
      )}
    </div>
  );
};
