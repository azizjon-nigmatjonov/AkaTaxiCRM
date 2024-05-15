import Rolls from "../../Rolls";
import CCheckbox from "../../../../../../components/CElements/CCheckbox";

interface Props {
  route: any;
  errors: any;
  permissions: any,
  handleCheck: (val: any, val2?: string) => void
}

export const PermissionItem = ({
  route,
  errors,
  permissions = [],
  handleCheck 
}: Props) => {
 

  return (
    <Rolls key={route.path} text={route.name}>
      {route.permissions.length ? (
        <>
          {/* {route.permissions.length === permissions.length ? (
            <button
              onClick={() => handleCheck([], "all")}
              className="text-[var(--gray40)] underline mb-5 font-medium"
            >
              Bekor qilish
            </button>
          ) : ( */}
            <button
              onClick={() => handleCheck(route.permissions, "all")}
              className="text-[var(--main)] underline mb-5 font-medium"
            >
              Barchasini belgilash
            </button>
          {/* )} */}
        </>
      ) : (
        ""
      )}
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
  );
};
