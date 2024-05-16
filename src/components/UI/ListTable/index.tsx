import { ListItem } from "./Item";
import AddButton from "../Buttons/AddButton";

export const ListTable = ({ title = "" }: { title: string }) => {


  const addRow = () => {}

  return (
    <div className="border-r border-[var(--gray20)]">
      <div className="header bg-[var(--gray25)] h-[44px] px-5 flex items-center">
        <p className="text-12px text-[var(--gray60)]">{title}</p>
      </div>
      <ul>
        <ListItem />
      </ul>
      <div className="flex justify-center border-t border-[var(--gray20)] h-[50px]">
        <AddButton onClick={() => addRow()} btnType="ordinary" text="Viloyat qo'shish" />
      </div>
    </div>
  );
};
