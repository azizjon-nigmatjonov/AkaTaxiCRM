import { useForm } from "react-hook-form";
import { Validation } from "./validate";
import { yupResolver } from "@hookform/resolvers/yup";
import HFTextField from "../../../../components/FormElements/HFTextField";
// import { useMutation } from "react-query";
// import roleService from "../../../../services/rolls";
import { useEffect } from "react";
import permissionService from "../../../../services/permissions";

export const RollForm = () => {
  const schema = Validation();
  const { control, setValue } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    permissionService.getList().then((res: any) => {
      console.log("res", res);
    });
  }, []);

  // const createElement = useMutation({
  //   mutationFn: (data?: any) => {
  //     return roleService.createElement(data);
  //   },
  //   onSuccess: (val) => {
  //     console.log("val", val);
  //   },
  // });

  // const handleSubmit = () => {
  //   const data = getValues();

  //   createElement.mutate(data);
  // };

  return (
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
  );
};
