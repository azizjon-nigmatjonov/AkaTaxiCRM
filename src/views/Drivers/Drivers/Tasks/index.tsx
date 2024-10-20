import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Validation } from "./Validation";
import { UseOperators } from "../../../../hooks/useOperators";
import HFSelect from "../../../../components/FormElements/HFSelect";
import { HFDatePicker } from "../../../../components/FormElements/HFDatePicker";
import HFTextarea from "../../../../components/FormElements/HFTextarea";
import { useMutation } from "react-query";
import taskService from "../../../../services/tasks";

export const DriverTask = ({
  setTaskOpen,
  taskOpen,
  refetch = () => {}
}: {
  taskOpen: any;
  refetch: () => void
  setTaskOpen: (val: null) => void;
}) => {
  const { operatorOptions } = UseOperators({ type: "sip_id" });
  const schema = Validation();
  const { control, handleSubmit, reset } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });

  const { mutate: createTask } = useMutation({
    mutationFn: (data: any) => {
      return taskService.createTask(data).then(() => {
        reset;
      }).then(() => {
        reset()
        refetch()
        setTaskOpen(null)
      })
    },
  });

  const onSubmit = (data: any) => {
    const params = {
      ...data,
      model_id: taskOpen,
    };

    createTask(params);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <HFSelect
        options={operatorOptions}
        control={control}
        name="performer_id"
        label="Operator"
        placeholder="Tanlang"
      />
      <HFDatePicker
        name="deadline"
        control={control}
        label="Sana"
        placeholder="Tanlang"
        required={true}
      />
      <HFTextarea
        control={control}
        name="note"
        label="Eslatma"
        placeholder="Yozing"
        required={true}
      />

      <div className="flex space-x-3">
        <button
          className="cancel-btn"
          type="button"
          onClick={() => setTaskOpen(null)}
        >
          Bekor qilish
        </button>
        <button className="custom-btn" type="submit">
          Bekor qilish
        </button>
      </div>
    </form>
  );
};
