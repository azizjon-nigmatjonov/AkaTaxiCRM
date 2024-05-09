import useDebounce from "../../../../hooks/useDebounce";

export const BodyCell = ({
  edit = false,
  type = "",
  district,
  column,
  handleKmInput
}: {
  edit?: boolean;
  type: string;
  district: any;
  column: any;
  handleKmInput: (val: any) => void
}) => {
  if (type === "cell") {
    return (
      <div className="cell flex items-center">
        <p>{district?.[column.id]}</p>
      </div>
    );
  }

  const handleChange = useDebounce((value: any) => {
    handleKmInput(value);
  }, 1000);
  
  return (
    <div className="cell flex justify-between items-center">
      {edit ? (
        <input className="font-[600]" onChange={(e) => handleChange(e.target.value)} defaultValue={district.distance} />
      ) : (
        <p>
          {district.distance}
        </p>
      )}
      <p className="text-[var(--gray60)]">{district.distance * column.price}</p>
    </div>
  );
};
