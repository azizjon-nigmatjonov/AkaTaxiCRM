import { useEffect, useRef, useState } from "react";
import { EditIcon, SaveIcon } from "../../IconGenerator/Svg";
import useDebounce from "../../../../hooks/useDebounce";
import { usePermissions } from "../../../../hooks/usePermissions";
import CSelect from "../../../../components/CElements/CSelect";
import { DeliveryOptions } from "../../../../constants/delivery";

export const HeadCell = ({
  type = "cell",
  column = {},
  orderNumber,
  setValue,
  submitFn = () => {},
  handlePriceInput = () => {},
  handleCheckKm = () => {},
  handleSelectDelivery = () => {},
}: {
  type: string;
  column: any;
  region: any;
  orderNumber: number;
  setValue: (val: string, val2: any) => void;
  submitFn: (val: string, val2: number) => void;
  handlePriceInput: (val: string, val2: number) => void;
  handleCheckKm: (val: number, val2: boolean) => void;
  handleSelectDelivery: (val: string) => void;
}) => {
  const [editPrice, setEditPrice] = useState(false);
  const inputRef: any = useRef(null);
  const { checkPermission } = usePermissions();

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

  if (type === "delivery") {
    return (
      <div className="cell flex flex-col space-y-3">
        <p className="w-full">Pochta</p>
        <CSelect
          options={DeliveryOptions}
          handlerValue={(obj: any) => handleSelectDelivery(obj.value)}
          placeholder="Dokument"
          closeIcon={false}
        />
      </div>
    );
  }

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
          className={`flex space-x-1 px-6px py-2px rounded-[8px] group group-hover:text-[var(--gray90)] text-[var(--gray60)] ${
            editPrice
              ? "border border-[var(--gray20)] common-shadow"
              : "bg-[var(--gray50)]"
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
          {checkPermission("edit_price") ? (
            <button onClick={() => handlePriceAction(!editPrice)}>
              {editPrice ? (
                <SaveIcon fill="var(--primary)" width={20} />
              ) : (
                <EditIcon fill="var(--gray60)" />
              )}
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="cell__wrapper">
        <div
          className={`flex w-[70px] justify-between px-6px py-2px rounded-full ${
            orderNumber === 2 ? "bg-[var(--primary50)]" : ""
          }`}
        >
          <p
            className={
              orderNumber === 2
                ? "text-[var(--primary)]"
                : "text-[var(--gray40)]"
            }
          >
            KM
          </p>{" "}
          {orderNumber === 2 && checkPermission("edit_km") ? (
            <button onClick={() => handleDistanceAction(!column.edit_km)}>
              {column.edit_km ? (
                <SaveIcon fill="var(--primary)" width={20} />
              ) : (
                <EditIcon fill="var(--gray60)" />
              )}
            </button>
          ) : (
            ""
          )}
        </div>
        <p className="text-[var(--gray40)] font-[600]">Summa</p>
      </div>
    </div>
  );
};
