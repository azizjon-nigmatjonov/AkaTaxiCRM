import { useForm } from "react-hook-form";
import { Validation } from "./validate";
import { yupResolver } from "@hookform/resolvers/yup";
import HFTextField from "../../../../components/FormElements/HFTextField";
import usePageRouter from "../../../../hooks/useObjectRouter";
import CModal from "../../../../components/CElements/CModal";
// import HFInputMask from "../../../../components/FormElements/HFInputMask";
// import { useMutation } from "react-query";
// import passengerService from "../../../../services/passengers";

const Form = () => {
  const schema = Validation();
  const { navigateQuery, getQueries } = usePageRouter();
  const query = getQueries();
  const { control, setValue, getValues } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });

  // const createElement = useMutation({
  //   mutationFn: (data) => {
  //     return passengerService.createElement(data);
  //   },
  //   onSuccess: (val) => {
  //     console.log("val", val);
  //   },
  // });

  const handleSubmit = () => {
    const data = getValues()
    console.log("data", data)
  };

  return (
    <CModal
      title="add_new_passenger"
      open={!!query?.id}
      handleClose={() => navigateQuery({ id: "" })}
      textDeleteBtn="cancel"
      handleSave={() => handleSubmit()}
    >
      <div className="grid space-y-3">
        <HFTextField
          name="full_name"
          control={control}
          placeholder="Nomi"
          label="Nomi"
          setValue={setValue}
          required={true}
        />
        {/* <HFInputMask
          control={control}
          label="Telefon raqamn"
          required={true}
          name="phone"
          placeholder="Foydalanuvchi tel.raqami"
          mask={"+\\9\\9\\8 99 999 99 99"}
          maskChar=" "
          alwaysShowMask={false}
        /> */}
      </div>
    </CModal>
  );
};

export default Form;
