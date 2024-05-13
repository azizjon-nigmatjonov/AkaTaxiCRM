import HFInputMask from "../../../../components/FormElements/HFInputMask";
import HFTextField from "../../../../components/FormElements/HFTextField";
import { useForm } from "react-hook-form";
import { UpdateValidation, Validation } from "./validate";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitFunction } from "./Logic";
import { CircularProgress } from "@mui/material";
import HFSelect from "../../../../components/FormElements/HFSelect";

export const AdminFormWrapper = ({
  refetch,
  id,
  defaultValues = {},
  rolls,
}: {
  refetch: () => void;
  id: string;
  defaultValues: any;
  rolls: any;
}) => {
  const schema = id === "create" ? Validation() : UpdateValidation();

  const { control, setValue, handleSubmit, reset } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });

  const { submitForm, updateForm, isLoading } = SubmitFunction({
    reset,
    refetch,
  });

  const onSubmit = (data: any) => {
    if (id === "create") {
      submitForm(data);
    } else {
      updateForm(data, id);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid space-y-3">
        <HFTextField
          name="name"
          control={control}
          placeholder="Ism familya"
          label="Ism familya"
          setValue={setValue}
          required={true}
          defaultValue={defaultValues?.name}
        />
        <HFInputMask
          name="phone"
          control={control}
          label={`Telefon raqam`}
          placeholder={`Telefon raqam`}
          mask={"+\\9\\9\\8 99 999 99 99"}
          required={true}
          defaultValue={defaultValues?.phone}
        />
        <HFTextField
          name="email"
          control={control}
          placeholder="Email"
          label="Email"
          setValue={setValue}
          type="email"
          required={true}
          defaultValue={defaultValues?.email}
        />
        <HFSelect
          name="roles"
          control={control}
          options={rolls}
          label="Rolni tanlang"
          placeholder="Rolni tanlang"
          required={true}
          defaultValue={defaultValues?.roles}
        />
        {id !== "create" && (
          <HFTextField
            name="old_password"
            control={control}
            placeholder="Avvalgi parolni kiriting"
            label="Avvalgi parol"
            setValue={setValue}
            type="password"
            activatePassword={true}
          />
        )}
        {id !== "create" && (
          <HFTextField
            name="new_password"
            control={control}
            placeholder="Yangi parolni kiriting"
            label="Yangi parol"
            setValue={setValue}
            type="password"
            activatePassword={true}
          />
        )}
        {id === "create" && (
          <HFTextField
            name="password"
            control={control}
            placeholder="Parol"
            label="Parol"
            setValue={setValue}
            type="password"
            activatePassword={true}
            required={true}
          />
        )}
      </div>
      <div className="mt-5">
        {isLoading ? (
          <div className="custom-btn disabled form">
            <CircularProgress size={30} />
            Jo'natilmoqda
          </div>
        ) : (
          <button type="submit" className="custom-btn form">
            Tasdiqlash
          </button>
        )}
      </div>
    </form>
  );
};
