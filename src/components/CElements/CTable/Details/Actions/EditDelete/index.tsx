import {
  BorderColorRounded,
  DeleteRounded,
  Visibility,
} from "@mui/icons-material";
import cls from "./style.module.scss";

interface Props {
  permissions: string[];
  element: any;
  routePermissions: any;
  tableActions: (val: any, val2: any) => void;
}

export const TableDelete = ({
  element,
  tableActions = () => {},
  permissions = [],
  routePermissions = [],
}: Props) => {

  
  const handleActions = (status: string, element: any) => {
    if (routePermissions.includes(status)) {
      tableActions(status, element)
    }
  }

  return (
    <div className={cls.tableDelete}>
      {permissions.includes("delete") ? (
        <div
          className={`${cls.delete} ${
            routePermissions?.includes("delete") ? "" : cls.inactive
          }`}
          onClick={() => handleActions("delete", element)}
        >
          <DeleteRounded style={{ color: "var(--error)" }} />
        </div>
      ) : (
        ""
      )}

      {permissions.includes("edit") ? (
        <div
          className={`${cls.edit} ${
            routePermissions?.includes("edit") ? "" : cls.inactive
          }`}
          onClick={() => handleActions("edit", element)}
        >
          <BorderColorRounded style={{ color: "var(--primary)" }} />
        </div>
      ) : (
        ""
      )}

      {permissions.includes("view") ? (
        <div
          className={`${cls.view} ${
            routePermissions?.includes("view") ? "" : cls.inactive
          }`}
          onClick={() => handleActions("view", element)}
        >
          <Visibility style={{ color: "var(--gray90)" }} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
