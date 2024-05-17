import {
  BorderColorRounded,
  DeleteRounded,
  Visibility,
} from "@mui/icons-material";
import cls from "./style.module.scss";

interface Props {
  permissions: string[];
  element: any;
  checkPermission: any;
  tableActions: (val: any, val2: any) => void;
}

export const TableDelete = ({
  element,
  tableActions = () => {},
  permissions = [],
  checkPermission = [],
}: Props) => {

  
  const handleActions = (status: string, element: any) => {
    if (checkPermission(status)) {
      tableActions(status, element)
    }
  }

  return (
    <div className={cls.tableDelete}>
      {permissions.includes("delete") ? (
        <div
          className={`${cls.delete} ${
            checkPermission("delete") ? "" : cls.inactive
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
            checkPermission("edit") ? "" : cls.inactive
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
            checkPermission("view") ? "" : cls.inactive
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
