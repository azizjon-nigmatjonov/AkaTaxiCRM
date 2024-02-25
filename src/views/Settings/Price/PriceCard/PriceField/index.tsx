import { useEffect, useRef, useState } from "react";
import {
  EditIcon,
  SaveIcon,
} from "../../../../../components/IconGenerator/Svg";
import { ColorConstants } from "../../../../../constants/website";
import { Controller } from "react-hook-form";

interface Props {
  title: string;
  price: number;
  name: string;
  control: any;
  defaultValue?: any;
  setValue: (val: string, val2: any) => void
}

const PriceField = ({
  title = "",
  price,
  control,
  name,
  setValue,
}: Props) => {
  const currentRef: any = useRef(null);
  const [edit, setEdit] = useState(false);

  const handleToggle = (status: boolean) => {
    setEdit(status);
    if (status) currentRef.current.focus();
  };

  useEffect(() => {
    setValue(name, price)
  }, [price])

  return (
    <Controller
      control={control}
      name={name}
      disabled
      defaultValue={price}
      render={({ field: { onChange, value } }) => (
        <div className=" relative border border-[var(--lightGray)] h-[45px] flex items-center rounded-[12px] bg-white">
          <p className="px-1 text-[var(--gray)] whitespace-nowrap absolute top-[-10px] bg-white left-[16px]">
            {title}
          </p>
          <div className="px-[18px] h-full w-full font-medium flex items-center">
            %
            <input
              type="number"
              className="bg-transparent focus:outline-none"
              placeholder="Kiriting"
              readOnly={!edit}
              ref={currentRef}
              value={value}
              onChange={(e) => onChange(e.target.value)}
            />
          </div>
          <button
            type={edit ? "button" : "submit"}
            className="pr-[18px] cursor-pointer"
            onClick={() => handleToggle(!edit)}
          >
            {edit ? <SaveIcon /> : <EditIcon fill={ColorConstants.main} />}
          </button>
        </div>
      )}
    ></Controller>
  );
};

export default PriceField;
