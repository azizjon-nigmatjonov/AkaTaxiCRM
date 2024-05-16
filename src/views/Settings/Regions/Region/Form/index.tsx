import HFTextField from "../../../../../components/FormElements/HFTextField";
import { useForm } from "react-hook-form";
import { Validation } from "./validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { CreateFunction } from "../../Logic/CreateFunction";
import { FetchData, GetTitle } from "../../Logic";
import CModal from "../../../../../components/CElements/CModal";

export const PlaceForm = ({
  refetch,
  type,
  openModal,
  handleClickActions,
}: {
  refetch: (val: string) => void;
  handleClickActions: (val: string, val2?: any) => void;
  openModal: boolean;
  type: string;
}) => {
  const schema = Validation();
  const { control, handleSubmit, reset, setValue } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });

  const handleClose = () => {
    reset();
    refetch(type);
    handleClickActions(`remove_${type}`, "");
  };

  const { addPlace } = CreateFunction({ handleClose });
  const { defaultData } = FetchData();
  const title = GetTitle();

  const onSubmit = (data: any) => {
    addPlace(data);
  };

  return (
    <CModal
      open={openModal}
      title={title}
      footerActive={false}
      handleClose={() => {
        handleClickActions(`remove_${type}`, "");
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-y-5">
        <HFTextField
          name="uz"
          control={control}
          label="O'bekcha"
          placeholder="Joy nimi"
          required={true}
          setValue={setValue}
          defaultValue={defaultData?.name?.uz}
        />
        <HFTextField
          name="oz"
          control={control}
          label="Крилча"
          setValue={setValue}
          placeholder="Joy nimi"
          required={true}
          defaultValue={defaultData?.name?.oz}
        />
        <HFTextField
          name="ru"
          control={control}
          label="Русский"
          setValue={setValue}
          placeholder="Joy nimi"
          required={true}
          defaultValue={defaultData?.name?.ru}
        />
        <HFTextField
          name="en"
          control={control}
          label="English"
          setValue={setValue}
          placeholder="Joy nimi"
          required={true}
          defaultValue={defaultData?.name?.en}
        />

        <button type="submit" className="custom-btn form">
          Tasdiqlash
        </button>
      </form>
    </CModal>
  );
};
