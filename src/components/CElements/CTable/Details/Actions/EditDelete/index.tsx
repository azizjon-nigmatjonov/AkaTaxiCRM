import { BorderColorRounded, DeleteRounded } from "@mui/icons-material";
import cls from "./style.module.scss";

export const TableDelete = ({
  element,
  tableActions = () => {},
}: {
  element: any;
  tableActions: (val: any, val2: any) => void;
}) => {
  return (
    <div className={cls.tableDelete}>
      <div
        className={cls.delete}
        onClick={() => tableActions("delete", element)}
      >
        <DeleteRounded style={{ color: "var(--error)" }} />
      </div>
      <div className={cls.edit} onClick={() => tableActions("edit", element)}>
        <BorderColorRounded style={{ color: "var(--main)" }} />
      </div>
    </div>
  );
};
