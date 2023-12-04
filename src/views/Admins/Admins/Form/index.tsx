import { useForm } from "react-hook-form";
import { Validation } from "./validate";
import { yupResolver } from "@hookform/resolvers/yup";
import HFTextField from "../../../../components/FormElements/HFTextField";
import usePageRouter from "../../../../hooks/useObjectRouter";
import CModal from "../../../../components/CElements/CModal";
import HFInputMask from "../../../../components/FormElements/HFInputMask";
// import { useQuery } from "react-query";
// import roleService from "../../../../services/rolls";

const Form = () => {
  const schema = Validation();
  const { navigateQuery, getQueries } = usePageRouter();
  const query = getQueries();
  const { control, setValue } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });

  // const { data: rolls } = useQuery(['GET_ROLLS'], () => {
  //   return roleService.getList()
  // },
  // {
  //   enabled: true
  // })

  return (
    <CModal
      title="add_new_admin"
      open={!!query?.id}
      handleClose={() => navigateQuery({ id: "" })}
      textDeleteBtn="cancel"
    >
      <div className="grid space-y-3">
        <HFTextField
          name="name"
          control={control}
          placeholder="Nomi"
          label="Nomi"
          setValue={setValue}
          required={true}
        />
        <HFInputMask
          name="phone"
          label={`Telefon raqam`}
          placeholder={`Telefon raqam`}
          required={true}
          mask={"+\\9\\9\\8 99 999 99 99"}
        />
        <HFTextField
          name="email"
          control={control}
          placeholder="Email"
          label="Email"
          setValue={setValue}
          type="email"
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
    </CModal>
  );
};

export default Form;
