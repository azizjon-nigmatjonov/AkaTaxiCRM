import { useEffect, useRef, useState } from "react";
import { EditIcon, SaveIcon } from "../../IconGenerator/Svg";
import useDebounce from "../../../../hooks/useDebounce";

export const HeadCell = ({
  type = "cell",
  column = {},
  orderNumber,
  setValue,
  submitFn = () => {},
  handlePriceInput = () => {},
  handleCheckKm = () => {},
}: {
  type: string;
  column: any;
  region: any;
  orderNumber: number;
  setValue: (val: string, val2: any) => void;
  submitFn: (val: string, val2: number) => void;
  handlePriceInput: (val: string, val2: number) => void;
  handleCheckKm: (val: number, val2: boolean) => void;
}) => {
  const [editPrice, setEditPrice] = useState(false);
  const inputRef: any = useRef(null);
  useEffect(() => {
    if (editPrice) {
      inputRef?.current.focus();
    }
  }, [editPrice]);

  if (type === "cell") {
    return (
      <div className="cell">
        <p>{column.title}</p>
      </div>
    );
  }

  const handleChange = useDebounce((value: any) => {
    handlePriceInput(value, column.id);
  }, 100);

  const handlePriceAction = (active: boolean) => {
    submitFn(active ? "" : "submit", column.region_id);
    setEditPrice(active);
  };

  const handleDistanceAction = (active: boolean) => {
    handleCheckKm(orderNumber, active);
    submitFn(active ? "" : "submitDistance", column.region_id);
  };

  useEffect(() => {
    if ("price" in column) setValue(column.id + "", column.price);
  }, [column]);

  return (
    <div className="cell collapsed">
      <div className="cell__wrapper h-[60px] relative flex items-center">
        <p>{column.title}</p>
        <div
          className={`flex space-x-1 bg-[var(--gray50)] px-6px py-2px rounded-full group group-hover:text-[var(--gray90)] text-[var(--gray60)] ${
            editPrice ? "border border-[var(--gray20)]" : ""
          }`}
        >
          <input
            ref={inputRef}
            className={`w-[40px] bg-transparent ${
              editPrice ? "font-[600]" : ""
            }`}
            onChange={(e) => {
              handleChange(e.target.value);
              setValue(column.id + "", +e.target.value);
            }}
            type="number"
            defaultValue={column.price}
            disabled={!editPrice}
          />{" "}
          <button onClick={() => handlePriceAction(!editPrice)}>
            {editPrice ? (
              <SaveIcon fill="var(--primary)" width={20} />
            ) : (
              <EditIcon fill="var(--gray60)" />
            )}
          </button>
        </div>
      </div>
      <div className="cell__wrapper">
        <div className="flex space-x-1 bg-[var(--primary50)] px-6px py-2px rounded-full">
          <span className="text-[var(--primary)]">KM</span>{" "}
          {orderNumber === 2 && (
            <button onClick={() => handleDistanceAction(!column.edit_km)}>
              {column.edit_km ? (
                <SaveIcon fill="var(--primary)" width={20} />
              ) : (
                <EditIcon fill="var(--gray60)" />
              )}
            </button>
          )}
        </div>
        <p className="text-[var(--gray40)] font-[600]">Summa</p>
      </div>
    </div>
  );
};
