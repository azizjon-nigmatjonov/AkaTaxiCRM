import { useForm } from "react-hook-form";
import { CreateFunction } from "../Logic";
import { yupResolver } from "@hookform/resolvers/yup";
import { Validation } from "./validate";
import { PlusIcon } from "../../../../../components/UI/IconGenerator/Svg";
import HFTextField from "../../../../../components/FormElements/HFTextField";
import { CircularProgress } from "@mui/material";
import { useState } from "react";

export const PermissionCreate = ({
  id,
  path = '',
  list = [],
  handleClose,
}: {
  id: number;
  path: string;
  list: any;
  handleClose: () => void;
}) => {
  const schema = Validation();
  const { control, handleSubmit, reset } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });
  const { createPermission, isLoading } = CreateFunction({
    handleClose,
    reset,
  });
  const [errors, setErrors] = useState({});

  if (isLoading) {
    return (
      <div>
        <button className="custom-btn">
          <CircularProgress size={24} />
          <PlusIcon />
        </button>
      </div>
    );
  }

  const onSubmit = (data: any) => {
    const responsee = createPermission(data, id, path, list);
    if (responsee) setErrors({ name: { message: responsee } });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex space-x-5">
      <div className="w-[160px]">
        <HFTextField
          name="name"
          control={control}
          errors={errors}
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
