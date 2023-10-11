import { Closer } from "../../../../../Closer";
import { WarningIcon } from "../../../../../IconGenerator/Svg";

export const PopoverDelete = ({
  closePopover = () => {},
}: {
  closePopover: (val: string) => void;
}) => {
  return (
    <>
      <div className="absolute left-[-260px] top-0 bg-white p-2 border border-[var(--lightGray)] z-[91] rounded-[10px]">
        <p className="whitespace-nowrap flex space-x-2">
          <WarningIcon /> <span>Rostdanham o'chirmoqchimisiz?</span>
        </p>

        <div className="flex items-center justify-end space-x-2 mt-4">
          <button
            className="bg-[var(--lightestGray)] px-2 rounded-[4px]"
            onClick={() => closePopover("")}
          >
            Yo'q
          </button>
          <button
            className="bg-[var(--primary)] px-2 rounded-[4px] text-white"
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
