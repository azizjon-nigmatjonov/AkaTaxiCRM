import { useForm } from "react-hook-form";
import { CreateFunction } from "../Logic";
import { yupResolver } from "@hookform/resolvers/yup";
import { Validation } from "./validate";
import { PlusIcon } from "../../../../../components/UI/IconGenerator/Svg";
import HFTextField from "../../../../../components/FormElements/HFTextField";

export const PermissionCreate = ({
  id,
  handleClose,
}: {
  id: number;
  handleClose: () => void;
}) => {
  const { createPermission, isLoading } = CreateFunction({ handleClose });
  const schema = Validation();

  const { control, handleSubmit, reset } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    createPermission(data, id);
    reset();
  };

  if (isLoading) {
    return <>Yuklanmoqda...</>
  }
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex space-x-5">
     <div className="w-[160px]">
     <HFTextField
        name="name"
        control={control}
        placeholder="Permission nomi"
        required={true}
      />
     </div>

      <div className="w-[70px]">
        <button type="submit" className="custom-btn">
          <PlusIcon />
        </button>
      </div>
    </form>
  );
};
