import { useForm } from "react-hook-form";
import { Validation } from "./validate";
import { yupResolver } from "@hookform/resolvers/yup";
import HFTextField from "../../../../components/FormElements/HFTextField";
import usePageRouter from "../../../../hooks/useObjectRouter";
import CModal from "../../../../components/CElements/CModal";
import { useMutation, useQuery } from "react-query";
import regionService from "../../../../services/regions";
import { useMemo } from "react";
import HFSelect from "../../../../components/FormElements/HFSelect";
import HFDatePicker from "../../../../components/FormElements/HFDatePicker";
import HFInputMask from "../../../../components/FormElements/HFInputMask";
import passengerService from "../../../../services/passengers";

const Form = () => {
  const schema = Validation();
  const { navigateQuery, getQueries } = usePageRouter();
  const query = getQueries();
  const { control, setValue, getValues } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });
  const { data: regions } = useQuery(["GET_REGIONS_LIST"], () => {
    return regionService.getList();
  });

  const SelecTList = useMemo(() => {
    if (!regions) return [];
    return (regions as any).map((item: any) => {
      return {
        ...item,
        label: item.name?.uz,
        value: item.id,
      };
    });
  }, [regions]);

  const createElement = useMutation({
    mutationFn: (data?: any) => {
      return passengerService.createElement(data);
    },
    onSuccess: (val) => {
      console.log("val", val);
    },
  });

  const handleSubmit = () => {
    const data = getValues();
    console.log("data", data);
    createElement.mutate(data)
  };

  return (
    <CModal
      title={query.id === 'create' ? 'add_new_passenger' : 'update_passenger'}
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

        <HFSelect name="region_id" control={control} options={SelecTList} />
        <HFDatePicker control={control} name="birthday" />
        <HFInputMask mask={"+\\9\\9\\8 99 999 99 99"} />

      </div>
    </CModal>
  );
};

export default Form;
