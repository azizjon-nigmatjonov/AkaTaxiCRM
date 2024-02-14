import { Visibility } from "@mui/icons-material";
import cls from "./style.module.scss";

interface Props {
  permissions: string[];
  element: any;
  tableActions: (val: any, val2: any) => void;
}

export const TableDelete = ({
  element,
  tableActions = () => { },
  permissions = [],
}: Props) => {


  return (
    <div className={cls.tableDelete}>
      {/* <div
        className={cls.delete}
        onClick={() => tableActions("delete", element)}
      >
        <DeleteRounded style={{ color: "var(--error)" }} />
      </div>
      <div className={cls.edit} onClick={() => tableActions("edit", element)}>
        <BorderColorRounded style={{ color: "var(--main)" }} />
      </div> */}
      {permissions.includes("learn_more") && (
        <div className={cls.edit} onClick={() => tableActions("learn_more", element)}>
          <Visibility style={{ color: "var(--gray)" }} />
        </div>
      )}
    </div>
  );
};
