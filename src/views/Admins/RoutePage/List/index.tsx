import { CloseIcon } from "../../../../components/UI/IconGenerator/Svg";
import { ListSkeleton } from "../../../../components/CElements/CSkeleton/ListSkeleton";
import { PermissionCreate } from "./PermissionCreate";

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

  return (
    <div className="mt-10">
      {newRouteList?.map((route: any) => (
        <div
          key={route.id}
          className="flex py-20px border-t border-[var(--gray20)]"
        >
          <div className="w-[300px]">
            <p className="w-[300px]">{route.name}</p>
          </div>
          <div className="w-full ml-5">
            {/* {route.permissions?.length > 1 && (
              <button className="text-[var(--main)] font-medium underline mb-5">
                Barchasini belgilash
              </button>
            )} */}

            <div className="flex gap-5 flex-wrap">
              {route.permissions?.map((permission: any) => (
                <div className="border border-[var(--gray20)] h-[40px] pl-16px pr-8px rounded-[8px] common-shadow min-w-[120px] flex items-center justify-between space-x-5">
                  {permission.name}

                  <div className="border border-[var(--gray30)] rounded-full w-[20px] h-[20px] flex items-center justify-center cursor-pointer">
                    <CloseIcon />
                  </div>
                </div>
              ))}
              <PermissionCreate handleClose={handleClose} id={route.id} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
