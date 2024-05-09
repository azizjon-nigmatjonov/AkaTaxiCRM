import usePageRouter from "../../../../hooks/useObjectRouter";
import CModal from "../../../CElements/CModal";
import HFTextareaAutosize from "../../../FormElements/HFTextareaAutosize";
import { useForm } from "react-hook-form";

export const NoteModal = () => {
  const { navigateQuery } = usePageRouter();
  const { control } = useForm();

  return (
    <CModal
      title="Eslatma"
      open={true}
      handleClose={() => navigateQuery({ modal: "", user_id: "" })}
      footerActive={false}
    >
      <HFTextareaAutosize
        name="ignore"
        control={control}
        placeholder="Eslatma yozing..."
      />

      <div className="flex space-x-3 mt-4 flex flex-end">
        <button
          onClick={() => navigateQuery({ modal: "", user_id: "" })}
          className="cancel-btn"
        >
          Bekor qilish
        </button>
        <button className="custom-btn">Saqlash</button>
      </div>
    </CModal>
  );
};
