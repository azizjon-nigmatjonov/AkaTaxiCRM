import { ListSkeleton } from "../../../../components/CElements/CSkeleton/ListSkeleton";
import { ListIem } from "./ListItem";
import { DeleteFunction } from "./Logic";

interface Props {
  newRouteList: any;
  isLoading: boolean;
  handleClose: () => void;
}

export const RouteList = ({
  newRouteList,
  isLoading = true,
  handleClose,
}: Props) => {
  if (isLoading) {
    return (
      <div className="mt-10">
        <ListSkeleton direction="row" count={7} height={102} />
      </div>
    );
  }

  if (!newRouteList?.length) {
    return (
      <div className="w-full flex justify-center mt-10">
        <img className="w-[200px]" src="/public/images/no-data.png" alt="no data" />
      </div>
    );
  }

  const { deletePermission, deleteRoute } = DeleteFunction({ handleClose });
  
  return (
    <div className="mt-10">
      {newRouteList.map((route: any, index: number) => (
        <ListIem
          key={index}
          handleClose={handleClose}
          deleteRoute={deleteRoute}
          deletePermission={deletePermission}
          route={route}
        />
      ))}
    </div>
  );
};
