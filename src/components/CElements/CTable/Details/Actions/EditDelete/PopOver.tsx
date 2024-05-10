import { Closer } from "../../../../../UI/Closer";
import { WarningIcon } from "../../../../../UI/IconGenerator/Svg";

export const PopoverDelete = ({
  closePopover = () => {},
}: {
  closePopover: (val: string) => void;
}) => {
  return (
    <>
      <div className="absolute left-[-400px] top-[-40px] bg-white p-16px border border-[var(--gray20)] z-[91] rounded-[8px] common-shadow">
        <p className="whitespace-nowrap flex space-x-2">
          <WarningIcon /> <span className="font-[600] text-lg">Ma'lumotni aniq o'chirib tashlamoqchimisiz?</span>
        </p>

        <div className="flex items-center justify-end space-x-2 mt-4">
          <button
            className="bg-[var(--lightestGray)] px-4 py-2 rounded-[8px]"
            onClick={() => closePopover("no")}
          >
            Yo'q
          </button>
          <button
            className="bg-[var(--main)] px-4 py-2 rounded-[8px] text-white"
            onClick={() => closePopover("delete")}
          >
            Ha
          </button>
        </div>
      </div>
      <Closer handleClose={() => closePopover("")} />
    </>
  );
};
