import { useRef, useState } from "react";
import {
  EditIcon,
  SaveIcon,
} from "../../../../../components/IconGenerator/Svg";
import { ColorConstants } from "../../../../../constants/website";

interface Props {
  title: string;
  price: number;
}

const PriceField = ({ title = "", price }: Props) => {
  const currentRef: any = useRef(null);
  const [edit, setEdit] = useState(false);
  
  const handleToggle = (status: boolean) => {
    setEdit(status)
    if (status) currentRef.current.focus()
  }

  return (
    <div className="inline-flex border border-[var(--lightGray)] h-[45px] flex items-center rounded-[12px] bg-white">
      <p className="px-[18px] text-[var(--gray)] whitespace-nowrap">{title}</p>
      <input
        type="number"
        className="bg-transparent px-[18px] focus:outline-none border-l border-[var(--lightGray)] h-full w-full"
        placeholder="Kiriting"
        defaultValue={price}
        readOnly={!edit}
        ref={currentRef}
      />
      <div
        className="pr-[18px] cursor-pointer"
        onClick={() => handleToggle(!edit)}
      >
        {edit ? <SaveIcon /> : <EditIcon fill={ColorConstants.main} />}
      </div>
    </div>
  );
};

export default PriceField;
