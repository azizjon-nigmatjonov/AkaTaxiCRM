import { useState } from "react";
import useDebounce from "../../../../hooks/useDebounce";
import { NumberInput } from "./Input";
import {
  SaveIcon,
  EditIcon,
} from "../../../../components/UI/IconGenerator/Svg";

export const BodyCell = ({
  edit = false,
  district,
  column,
  submitFn = () => {},
  handleKmInput,
}: {
  edit?: boolean;
  district: any;
  column: any;
  submitFn: (val: string, val2: number, val3?: string) => void;
  handleKmInput: (
    val: number,
    val2: number,
    val3?: string,
    val4?: string
  ) => void;
}) => {
  if (column.type === "cell") {
    return (
      <div className="cell flex items-center">
        <p>{district?.[column.id]}</p>
      </div>
    );
  }
  const handleChange = useDebounce((value: any, id: any) => {
    handleKmInput(value, id);
  }, 100);

  const handleDelivery = useDebounce((value: any, id: any) => {
    handleKmInput(value, id, column.type, column.id);
  }, 100);

  if (column.type === "delivery") {
    const [editDelivery, setEditDelivery] = useState(false);
    const handlePriceAction = (active: boolean) => {
      submitFn(active ? "" : column.type, column.region_id, column.id);
      setEditDelivery(active);
    };

    return (
      <div className="cell flex justify-between w-full">
        {editDelivery ? (
          <NumberInput district={district} handleChange={handleDelivery} />
        ) : (
          <p>{district.delivery[column.id]}</p>
        )}
        <button
          onClick={() => {
            handlePriceAction(!editDelivery);
          }}
        >
          {editDelivery ? (
            <SaveIcon fill="var(--primary)" width={20} />
          ) : (
            <EditIcon fill="var(--gray60)" />
          )}
        </button>
      </div>
    );
  }

  return (
    <div className="cell flex justify-between items-center">
      {edit ? (
        <NumberInput district={district} handleChange={handleChange} />
      ) : (
        <p>{district.distance}</p>
      )}
      <p className="text-[var(--gray60)]">{district.distance * column.price}</p>
    </div>
  );
};
