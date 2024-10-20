import { OneSkeleton } from "../../../components/CElements/CSkeleton/OneSkeleton";
import { Calling } from "./Calling";
import { CallList } from "./List";

interface Props {
  list: any;
  isLoading: boolean;
}

export const CallCard = ({ list, isLoading = false }: Props) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-3 grid-flow-row-dense gap-x-5 h-[200px]">
        <div className="h-full">
          <OneSkeleton height={200} />
        </div>
        <div className="col-span-2 h-full">
          <OneSkeleton height={200} />
        </div>
      </div>
    );
  }

  return (
    <div className="flex space-x-5 h-[200px]">
      <div className="w-[340px] h-full">
        <Calling />
      </div>
      <div className="w-full">
        <CallList list={list} />
      </div>
    </div>
  );
};
