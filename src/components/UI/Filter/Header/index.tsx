import { getStoredFilters } from "../Logic";
import { Items } from "./Item";

export const FilterHeader = ({
  clearFilter = () => {},
}: {
  filter: boolean;
  openFilter: () => void;
  clearFilter: (val: string, val2?: any) => void;
}) => {
  const { filters } = getStoredFilters({});

  return (
    <div className="flex w-full flex-wrap text-sm">
      {Object.entries(filters)?.map(([key, obj]: [string, any]) => (
        <Items key={key} title={key} obj={obj} clearFilter={clearFilter} />
      ))}
    </div>
  );
};
