import { useForm } from "react-hook-form";
import { Validation } from "./validate";
import { yupResolver } from "@hookform/resolvers/yup";
import HFTextField from "../../../../components/FormElements/HFTextField";
import usePageRouter from "../../../../hooks/useObjectRouter";
import CModal from "../../../../components/CElements/CModal";
import { useMutation } from "react-query";
import roleService from "../../../../services/rolls";
import { useEffect } from "react";
import permissionService from "../../../../services/permissions";

const Form = () => {
  const schema = Validation();
  const { navigateQuery, getQueries } = usePageRouter();
  const query = getQueries();
  const { control, setValue, getValues } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    permissionService.getList().then((res: any) => {
      console.log('res', res);
    })
  }, [])


  const createElement = useMutation({
    mutationFn: (data?: any) => {
      return roleService.createElement(data);
    },
    onSuccess: (val) => {
      console.log("val", val);
    },
  });

  const handleSubmit = () => {
    const data = getValues();
    
    createElement.mutate(data)
  };

  return (
    <CModal
      title="add_new_roll"
      open={!!query?.id}
      handleClose={() => navigateQuery({ id: "" })}
      textDeleteBtn="cancel"
      handleSave={() => handleSubmit()}
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
