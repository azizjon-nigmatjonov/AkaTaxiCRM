import FilterButton from "../../Filters";
import { getStoredFilters } from "../Logic";
import { Items } from "./Item";

export const FilterHeader = ({
  filter,
  setOpen = () => {},
  clearFilter = () => {},
}: {
  filter: boolean;
  setOpen: (val: boolean) => void;
  clearFilter: (val: string, val2?: any) => void;
}) => {
  const { filters } = getStoredFilters({});

  return (
    <div className="mb-5 flex justify-between">
      <FilterButton text="filter" open={filter} setOpen={setOpen} />
      <div className="flex gap-4 w-full flex-wrap text-sm ml-5">
        {Object.entries(filters)?.map(([key, obj]: [string, any]) => (
          <Items key={key} title={key} obj={obj} clearFilter={clearFilter} />
        ))}
      </div>
    </div>
  );
};
