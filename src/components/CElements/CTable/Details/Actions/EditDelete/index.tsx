import {
  BorderColorRounded,
  DeleteRounded,
  Visibility,
} from "@mui/icons-material";
import cls from "./style.module.scss";

interface Props {
  permissions: string[];
  element: any;
  tableActions: (val: any, val2: any) => void;
}

export const TableDelete = ({
  element,
  tableActions = () => {},
  permissions = [],
}: Props) => {
  return (
    <div className={cls.tableDelete}>
      {permissions.includes("delete") && (
        <div
          className={cls.delete}
          onClick={() => tableActions("delete", element)}
        >
          <DeleteRounded style={{ color: "var(--error)" }} />
        </div>
      )}

      {permissions.includes("edit") && (
        <div className={cls.edit} onClick={() => tableActions("edit", element)}>
          <BorderColorRounded style={{ color: "var(--gray90)" }} />
        </div>
      )}
      {permissions.includes("view") && (
        <div className={cls.edit} onClick={() => tableActions("view", element)}>
          <Visibility style={{ color: "var(--gray)" }} />
        </div>
      )}
    </div>
  );
};
