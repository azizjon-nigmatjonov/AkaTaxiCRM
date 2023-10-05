import { useForm } from "react-hook-form";
import { Validation } from "./validate";
import { yupResolver } from "@hookform/resolvers/yup";
import HFTextField from "../../../../components/FormElements/HFTextField";
import usePageRouter from "../../../../hooks/useObjectRouter";
import CModal from "../../../../components/CElements/CModal";

const Form = () => {
  const schema = Validation();
  const { navigateQuery, getQueries } = usePageRouter();
  const query = getQueries();
  const { control, setValue } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });

  return (
    <CModal
      title="Yangi haydovchi qo'shish"
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
      </div>
    </CModal>
  );
};

export default Form;
