import { BorderColorRounded, DeleteRounded } from "@mui/icons-material";
import cls from './style.module.scss'

export const TableDelete = ({ element, handleActions = () => {} }: { element: any; handleActions:(val: any, val2: any) => void }) => {
    return (
      <div className={cls.tableDelete}>
        <div className={cls.delete}>
          <DeleteRounded style={{ color: 'var(--error)' }} onClick={() => handleActions("delete", element)} />
        </div>
        <div className={cls.edit}>
          <BorderColorRounded style={{ color: 'var(--main)' }} onClick={() => handleActions("edit", element)} />
        </div>
      </div>
    );
  };