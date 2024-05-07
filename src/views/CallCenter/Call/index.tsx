import { Calling } from "./Calling";
import { CallList } from "./List";

export const CallCard = () => {
  return (
    <div className="grid grid-cols-3 grid-flow-row-dense gap-x-5 h-[200px]">
      <div className="h-full">
        <Calling />
      </div>
      <div className="col-span-2 h-full">
        <CallList />
      </div>
    </div>
  );
};
