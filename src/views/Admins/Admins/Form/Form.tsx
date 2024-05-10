import HFInputMask from "../../../../components/FormElements/HFInputMask";
import HFSelect from "../../../../components/FormElements/HFSelect";
import HFTextField from "../../../../components/FormElements/HFTextField";
import { useForm } from "react-hook-form";
import { UpdateValidation, Validation } from "./validate";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitFunction } from "./Logic";

export const AdminFormWrapper = ({
  refetch,
  id,
  adminData = {},
  rolls,
}: {
  refetch: () => void;
  id: string;
  adminData: any;
  rolls: any;
}) => {
  const schema = id ? UpdateValidation() : Validation();

  const { control, setValue, handleSubmit, reset } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
    defaultValues: adminData,
  });

  const { submitForm, updateForm } = SubmitFunction({ reset, refetch });

  const onSubmit = (data: any) => {
    if (id) {
      updateForm(data, id);
    } else {
      submitForm(data);
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
          defaultValue={adminData?.name}
        />
        <HFInputMask
          name="phone"
          control={control}
          label={`Telefon raqam`}
          placeholder={`Telefon raqam`}
          mask={"+\\9\\9\\8 99 999 99 99"}
          required={true}
          defaultValue={adminData?.phone}
        />
        <HFTextField
          name="email"
          control={control}
          placeholder="Email"
          label="Email"
          setValue={setValue}
          type="email"
          required={true}
          defaultValue={adminData?.email}
        />
        <HFSelect
          name="roles"
          control={control}
          options={rolls}
          label="Rolni tanlang"
          placeholder="Rolni tanlang"
          required={true}
          setValue={setValue}
          defaultValue={adminData?.roles}
        />
        {id && (
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
        {id && (
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
        {!id && (
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
        <button type="submit" className="custom-btn">
          Tasdiqlash
        </button>
      </div>
    </form>
  );
};
