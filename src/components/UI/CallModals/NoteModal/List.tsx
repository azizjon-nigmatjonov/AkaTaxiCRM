import { useState } from "react";
import {
  DeleteIcon,
  DotsIcon,
  EditIcon,
} from "../../../../components/UI/IconGenerator/Svg";

interface Props {
  list: any;
  handleActions: (val: any, val2: string) => void;
}

export const NoteList = ({ list = [], handleActions = () => {} }: Props) => {
  const [active, setActive]: any = useState();
  const handleClick = (element: any, status: string) => {
    handleActions(element, status);
    setActive(null)
  };
  return (
    <div className="mb-5">
      {list?.map((item: any) => (
        <div className="flex justify-between relative">
          <div className="flex justify-between py-2.5 w-full">
            <h4 className="font-[600]">{item.note}</h4>
            <p className="text-[var(--gray60)]">{item.updated_at}</p>
          </div>
          <button
            className="rotate-[90deg] pb-5"
            onClick={() => setActive(item.id)}
          >
            <DotsIcon fill="var(--black)" />
          </button>
          {active === item.id && (
            <div className="absolute top-5 right-5 bg-[var(--black)] z-[99] rounded-[10px] border border-[var(--darkerGray)]">
              <div
                className={`flex items-center space-x-[8px] px-4 cursor-pointer text-white py-2.5`}
                onClick={() => handleClick(item, "edit")}
              >
                <EditIcon />
                <p>Tahrirlash</p>
              </div>
              <div
                className={`flex items-center space-x-[8px] px-4 cursor-pointer text-white py-2.5`}
                onClick={() => handleClick(item, "delete")}
              >
                <DeleteIcon />
                <p>O'chirib yuborish</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
