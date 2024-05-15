import { ListSkeleton } from "../../../../../components/CElements/CSkeleton/ListSkeleton";
import { PermissionItem } from "./Item";

interface Props {
  isLoading: boolean;
  newRouteList: any;
  errors: any;
  permissions: any
  handleCheck: (val: any, val2?: string) => void
}

export const RollList = ({
  isLoading,
  newRouteList,
  errors = {},
  permissions = [],
  handleCheck
}: Props) => {
  if (isLoading) {
    return (
      <div>
        <ListSkeleton direction="row" count={7} height={102} />
      </div>
    );
  }

  if (!newRouteList?.length) {
    return (
      <div className="w-full flex justify-center mt-10">
        <img
          className="w-[200px]"
          src="/public/images/no-data.png"
          alt="no data"
        />
      </div>
    );
  }

  return (
    <>
      {newRouteList.map((route: any) => (
        <PermissionItem handleCheck={handleCheck} permissions={permissions} route={route} errors={errors} />
      ))}
    </>
  );
};
