import { ListItem } from "./Item";
import AddButton from "../Buttons/AddButton";
import { ListSkeleton } from "../../../components/CElements/CSkeleton/ListSkeleton";
import { PlaceForm } from "../../../views/Settings/Regions/Region/Form";

export const ListTable = ({
  id = "",
  title = "",
  textBtn = "",
  type = "",
  list = [],
  openModal = false,
  isLoading = false,
  refetch = () => {},
  oneStepId,
  handleClickActions = () => {},
}: {
  id?: string;
  title: string;
  textBtn: string;
  list: any;
  type: string;
  openModal: boolean;
  isLoading: boolean;
  oneStepId?: string
  refetch: (val: string) => void;
  handleClickActions: (val: string, val2?: any) => void;
}) => {
  if (isLoading) {
    return (
      <div className="border-r border-[var(--gray20)]">
        <div className="header border-b bg-[var(--gray25)] h-[44px] px-5 flex items-center">
          <p className="text-12px text-[var(--gray60)]">{title}</p>
        </div>
        <div className="px-5 mt-2">
          <ListSkeleton direction="row" height={40} count={10} />
        </div>
      </div>
    );
  }

  return (
    <div className="border-r border-[var(--gray20)]">
      <div className="header bg-[var(--gray25)] h-[44px] px-5 flex items-center">
        <p className="text-12px text-[var(--gray60)]">{title}</p>
      </div>
      {list?.length ? (
        <ul>
          {list.map((item: any) => (
            <ListItem
              key={item.id}
              id={id}
              element={item}
              type={type}
              handleClickActions={handleClickActions}
            />
          ))}
        </ul>
      ) : (
        ""
      )}
      {type === "region" ? (
        <div className="flex justify-center border-t border-[var(--gray20)] h-[50px]">
          <AddButton
            onClick={() => handleClickActions(`add_${type}`, 0)}
            btnType="ordinary"
            text={textBtn}
          />
        </div>
      ) : oneStepId ? (
        <div className="flex justify-center border-t border-[var(--gray20)] h-[50px]">
          <AddButton
            onClick={() => handleClickActions(`add_${type}`, 0)}
            btnType="ordinary"
            text={textBtn}
          />
        </div>
      ) : (
        ""
      )}

      <PlaceForm
        refetch={refetch}
        type={type}
        openModal={openModal}
        handleClickActions={handleClickActions}
      />
    </div>
  );
};
