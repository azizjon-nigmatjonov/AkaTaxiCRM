import { useForm } from "react-hook-form";
import { Validation } from "./validate";
import { yupResolver } from "@hookform/resolvers/yup";
import HFTextField from "../../../../components/FormElements/HFTextField";
import usePageRouter from "../../../../hooks/useObjectRouter";
import CModal from "../../../../components/CElements/CModal";
import HFInputMask from "../../../../components/FormElements/HFInputMask";
import HFSelect from "../../../../components/FormElements/HFSelect";
import { FetchFunctions } from "./Function";
const Form = ({ refetch }: { refetch: () => void; id: string }) => {
  const schema = Validation();
  const { navigateQuery } = usePageRouter();
  
  const { control, setValue, handleSubmit, reset } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });
  const { rolls, submitForm } = FetchFunctions({ reset, refetch });

  const onSubmit = (data: any) => {
    submitForm(data);
  };

  return (
    <CModal
      title="add_new_admin"
      open={true}
      handleClose={() => navigateQuery({ id: "" })}
      footerActive={false}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid space-y-3">
          <HFTextField
            name="name"
            control={control}
            placeholder="Ism familya"
            label="Ism familya"
            setValue={setValue}
            required={true}
          />
          <HFInputMask
            name="phone"
            control={control}
            label={`Telefon raqam`}
            placeholder={`Telefon raqam`}
            mask={"+\\9\\9\\8 99 999 99 99"}
            required={true}
          />
          <HFTextField
            name="email"
            control={control}
            placeholder="Email"
            label="Email"
            setValue={setValue}
            type="email"
          />
          <HFSelect
            name="roles"
            control={control}
            options={rolls}
            label="Rolni tanlang"
            placeholder="Rolni tanlang"
            required={true}
            setValue={setValue}
            // defaultValue={partnerInfo?.region_id}
          />
          <HFTextField
            name="password"
            control={control}
            placeholder="Password"
            label="Password"
            setValue={setValue}
            type="password"
            activatePassword={true}
            required={true}
          />
        </div>
        <div className="mt-5">
          <button type="submit" className="custom-btn">
            Tasdiqlash
          </button>
        </div>
      </form>
    </CModal>
  );
};

export default Form;
