import Rolls from "../Rolls";
import { ListSkeleton } from "../../../../../components/CElements/CSkeleton/ListSkeleton";
import CCheckbox from "../../../../../components/CElements/CCheckbox";
import { useEffect, useState } from "react";

interface Props {
  isLoading: boolean;
  newRouteList: any;
  setValue: any;
  rollData: any;
  errors: any;
}

export const RollList = ({
  isLoading,
  newRouteList,
  setValue,
  rollData,
  errors = {},
}: Props) => {
  if (isLoading) {
    return (
      <div>
        <ListSkeleton direction="row" count={7} height={102} />
      </div>
    );
  }

  const [permissions, setPermissions]: any = useState([]);

  const handleCheck = (permission: any) => {
    const value = permission.value
    
    let data = permissions;
    if (permissions.find((item: string) => item === value)) {
      data = permissions.filter((item: string) => item !== value);
    } else {
      data = [...permissions, value];
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

  useEffect(() => {
    if (rollData?.permissions?.length) {
      setPermissions(rollData.permissions);
      setValue("permissions", rollData.permissions);
    }
  }, [rollData]);

  return (
    <>
      {newRouteList.map((route: any) => (
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
                {errors?.permissions?.message && !permissions?.length ? (
                  <p className="text-[var(--error)] text-sm absolute bottom-[-18px] left-2">
                    {errors.permissions.message}
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
