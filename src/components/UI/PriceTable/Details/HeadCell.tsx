import { useEffect, useRef, useState } from "react";
import { EditIcon, SaveIcon } from "../../IconGenerator/Svg";

export const HeadCell = ({
  type = "cell",
  element = {},
  handleCheckKm = () => {},
}: {
  type: string;
  element: any;
  handleCheckKm: (val: any) => void;
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
        <p>{element.title}</p>
      </div>
    );
  }

  return (
    <div className="cell collapsed">
      <div className="cell__wrapper">
        <p>{element.title}</p>
        <div
          className={`flex space-x-1 bg-[var(--gray50)] px-6px py-2px rounded-full group group-hover:text-[var(--gray90)] text-[var(--gray60)] ${
            editPrice ? "border border-[var(--gray20)]" : ""
          }`}
        >
          <input
            ref={inputRef}
            className="w-[25px] bg-transparent"
            defaultValue={element.price}
            disabled={!editPrice}
          />{" "}
          <button onClick={() => setEditPrice((prev) => !prev)}>
            {editPrice ? <SaveIcon fill="var(--main)" width={18} /> : <EditIcon fill="var(--gray60)" />}
          </button>
        </div>
      </div>
      <div className="cell__wrapper">
        <div className="flex space-x-1 bg-[var(--primary50)] px-6px py-2px rounded-full">
          <span className="text-[var(--primary)]">KM</span>{" "}
          <button onClick={() => handleCheckKm(element.id)}>
            <EditIcon fill="var(--primary)" />
          </button>
        </div>
        <p className="text-[var(--gray40)]">Summa</p>
      </div>
    </div>
  );
};
