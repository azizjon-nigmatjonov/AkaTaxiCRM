import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Validation } from "./Validation";
import HFTextField from "../../../../components/FormElements/HFTextField";
import { useMutation } from "react-query";
import driverService from "../../../../services/drivers";

export const DriverTeg = ({
  tegOpen,
  setTegOpen,
  refetch,
}: {
  tegOpen: any;
  refetch: () => void;
  setTegOpen: (val: null) => void;
}) => {
  const schema = Validation();
  const { control, handleSubmit, reset } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });

  const { mutate: createTask } = useMutation({
    mutationFn: (data: any) => {
      return driverService
        .updateElement(tegOpen, data)
        .then(() => {
          reset;
        })
        .then(() => {
          reset();
          refetch();
          setTegOpen(null);
        });
    },
  });

  const onSubmit = (data: any) => {
    const params = {
      ...data,
    };

    createTask(params);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <HFTextField
          control={control}
          name="tegs"
          label="Teg nomi"
          placeholder="Yozing"
          required={true}
        />
      </div>

      <div className="flex space-x-3">
        <button
          className="cancel-btn"
          type="button"
          onClick={() => setTegOpen(null)}
        >
          Bekor qilish
        </button>
        <button className="custom-btn" type="submit">
          Tasdiqlash
        </button>
      </div>
    </form>
  );
};
