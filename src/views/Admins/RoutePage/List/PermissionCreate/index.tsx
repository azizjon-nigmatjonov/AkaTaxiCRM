import { useForm } from "react-hook-form";
import { CreateFunction, getPermissionList } from "../Logic";
import { yupResolver } from "@hookform/resolvers/yup";
import { Validation } from "./validate";
import { PlusIcon } from "../../../../../components/UI/IconGenerator/Svg";
import { CircularProgress } from "@mui/material";
import { HFMultipleSelect } from "../../../../../components/FormElements/HFMultipleSelect";

export const PermissionCreate = ({
  id,
  path = "",
  list = [],
  handleClose,
}: {
  id: number;
  route: any;
  path: string;
  list: any;
  handleClose: () => void;
}) => {
  const { permissionOptions } = getPermissionList({ list});

  const schema = Validation();
  const { control, setValue, handleSubmit, reset } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });
  const { createPermission, isLoading } = CreateFunction({
    handleClose,
    reset,
  });

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
    data.permissions.forEach((el: any) => {
      createPermission(el, id, path);
    });
  };

  return permissionOptions?.length ? (
    <form onSubmit={handleSubmit(onSubmit)} className="flex space-x-5">
      <div className="w-[140px]">
        <HFMultipleSelect
          name="permissions"
          control={control}
          options={permissionOptions}
          placeholder="Permission ni tanlang"
          setValue={setValue}
        />
      </div>

      <div className="w-[70px]">
        <button type="submit" className="custom-btn">
          <PlusIcon />
        </button>
      </div>
    </form>
  ) : (
    ""
  );
};
