import { CircularProgress } from "@mui/material";
import usePageRouter from "../../../../hooks/useObjectRouter";
import CModal from "../../../CElements/CModal";
import HFTextareaAutosize from "../../../FormElements/HFTextareaAutosize";
import { NoteList } from "./List";

export const NoteModal = ({
  control,
  handleSubmit,
  onSubmit,
  name = "",
  list = [],
  handleActions = () => {},
  defaultValue = "",
  setValue = () => {},
  isLoading = false,
}: {
  control: any;
  handleSubmit?: any;
  onSubmit?: (val: any) => void;
  name?: string;
  list?: any;
  handleActions?: (val: any, val2: string) => void;
  setValue?: any;
  defaultValue?: any;
  isLoading?: boolean;
}) => {
  const { navigateQuery } = usePageRouter();

  return (
    <CModal
      title="Eslatma"
      open={true}
      handleClose={() => navigateQuery({ modal: "", user_id: "" })}
      footerActive={false}
    >
      <NoteList list={list} handleActions={handleActions} />
      <form onSubmit={handleSubmit(onSubmit)}>
        {defaultValue ? (
          <HFTextareaAutosize
            name={name}
            control={control}
            placeholder="Eslatma yozing..."
            minRows={list.length ? 1 : 4}
            setValue={setValue}
            defaultValue={defaultValue}
          />
        ) : (
          <HFTextareaAutosize
            name={name}
            control={control}
            placeholder="Eslatma yozing..."
            minRows={list.length ? 1 : 4}
          />
        )}

        <div className="flex space-x-3 mt-4  flex-end">
          <button
            onClick={() => navigateQuery({ modal: "", user_id: "" })}
            className="cancel-btn"
          >
            Bekor qilish
          </button>
          {isLoading ? (
            <button className="custom-btn disabled" type="button">
              <CircularProgress size={20} />
              <span>Saqlash</span>
            </button>
          ) : (
            <button className="custom-btn" type="submit">
              Saqlash
            </button>
          )}
        </div>
      </form>
    </CModal>
  );
};
