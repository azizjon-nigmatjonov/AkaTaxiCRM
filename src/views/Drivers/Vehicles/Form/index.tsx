import { useForm } from "react-hook-form";
import { Validation } from "./validate";
import { yupResolver } from "@hookform/resolvers/yup";
import HFTextField from "../../../../components/FormElements/HFTextField";
import usePageRouter from "../../../../hooks/useObjectRouter";
import CModal from "../../../../components/CElements/CModal";
import ImageUploadBtn from "../../../../components/Buttons/ImageUpload";
import carService from "../../../../services/cars";
import Classes from "./Classes";

interface Props {
  classes: any;
}

const Form = ({ classes = [] }: Props) => {
  const schema = Validation();
  const { navigateQuery, getQueries } = usePageRouter();
  const query = getQueries();
  const { control, setValue, getValues } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });

  const SubmitForm = () => {
    const data = {
      name: "maseratti",
      file_id: "8",
      class: 1,
    };

    carService.createElement(data);
  };

  const UpdateForm = () => {
    console.log('getValues', getValues());
    
    // const data = {
    //   name: "jkadwad",
    //   // file_id: "8",
    //   class: 1,
    // };

    // carService.updateElement(data, 9);
  };


  return (
    <CModal
      title={query.id === 'create' ? 'add_new_mark' : "Tahrirlash"}
      open={!!query?.id}
      handleClose={() => navigateQuery({ id: "" })}
      handleSave={() => UpdateForm()}
      textDeleteBtn="cancel"
    >
      <div className="grid space-y-3">
        <HFTextField
          name="name"
          control={control}
          placeholder="Marka nomi"
          label="Marka nomi"
          setValue={setValue}
          required={true}
        />
        <ImageUploadBtn />
        <Classes classes={classes} />
      </div>
    </CModal>
  );
};

export default Form;
