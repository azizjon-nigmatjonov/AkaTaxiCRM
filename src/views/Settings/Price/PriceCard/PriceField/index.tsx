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
    setEdit(status);
    if (status) currentRef.current.focus();
  };

  return (
    <div className="flex relative border border-[var(--lightGray)] h-[45px] flex items-center rounded-[12px] bg-white">
      <p className="px-1 text-[var(--gray)] whitespace-nowrap absolute top-[-10px] bg-white left-[16px]">
        {title}
      </p>
      <div className="px-[18px] h-full w-full font-medium flex items-center">
        %
        <input
          type="number"
          className="bg-transparent focus:outline-none"
          placeholder="Kiriting"
          defaultValue={price}
          readOnly={!edit}
          ref={currentRef}
        />
      </div>
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
