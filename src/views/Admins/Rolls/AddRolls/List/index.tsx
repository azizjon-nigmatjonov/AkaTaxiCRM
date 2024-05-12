import Rolls from "../Rolls";
import { ListSkeleton } from "../../../../../components/CElements/CSkeleton/ListSkeleton";
import CCheckbox from "../../../../../components/CElements/CCheckbox";
import { useState } from "react";

interface Props {
  isLoading: boolean;
  newRouteList: any;
  setValue: any
}

export const RollList = ({ isLoading, newRouteList, setValue }: Props) => {
  if (isLoading) {
    return (
      <div>
        <ListSkeleton direction="row" count={7} height={102} />
      </div>
    );
  }

  const [permissions, setPermissions]: any = useState([]);

  const handleCheck = (permission: any) => {
    let data = permissions;
    if (permissions.find((item: string) => item === permission.value)) {
      data = permissions.filter((item: string) => item !== permission.value);
    } else {
      data = [...permissions, permission.value];
    }

    setValue("permissions", data);
    setPermissions(data);
  };

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
      {newRouteList.map((route: any, index: number) => (
        <Rolls key={route.path} text={route.name}>
          <div className="grid grid-cols-3 gap-5">
            {route.permissions.map((permission: any) => (
              <div key={permission.id} className="relative">
                <CCheckbox
                  checked={permissions?.includes(permission.value)}
                  handleCheck={(obj: any) => handleCheck(obj)}
                  element={{
                    label: permission.label,
                    value: permission.id,
                  }}
                />
                {!permissions?.length && index === 0 ? (
                  <p className="text-[var(--error)] text-sm absolute bottom-[-18px] left-2">
                    Permission tanlang
                  </p>
                ) : (
                  ""
                )}
              </div>
            ))}
          </div>
        </Rolls>
      ))}
    </>
  );
};
