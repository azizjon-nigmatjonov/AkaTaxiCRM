import useDebounce from "../../../../hooks/useDebounce";
import { NumberInput } from "./Input";

export const BodyCell = ({
  edit = false,
  type = "",
  district,
  column,
  handleKmInput,
}: {
  edit?: boolean;
  type: string;
  district: any;
  column: any;
  handleKmInput: (val: number, val2: number) => void;
}) => {
  if (type === "cell") {
    return (
      <div className="cell flex items-center">
        <p>{district?.[column.id]}</p>
      </div>
    );
  }

  const handleChange = useDebounce((value: any, id: any) => {
    handleKmInput(value, id);
  }, 100);
  

  return (
    <div className="cell flex justify-between items-center">
      {edit ? (
        <NumberInput district={district} handleChange={handleChange}  />
      ) : (
        <p>{district.distance}</p>
      )}
      <p className="text-[var(--gray60)]">{district.distance * column.price}</p>
    </div>
  );
};
