import { useForm } from "react-hook-form";
import { Validation } from "./validate";
import { yupResolver } from "@hookform/resolvers/yup";
import HFTextField from "../../../../components/FormElements/HFTextField";
import usePageRouter from "../../../../hooks/useObjectRouter";
import CModal from "../../../../components/CElements/CModal";
import { useMutation, useQuery } from "react-query";
import driverService from "../../../../services/drivers";
import HFSelect from "../../../../components/FormElements/HFSelect";
import HFDatePicker from "../../../../components/FormElements/HFDatePicker";
import HFInputMask from "../../../../components/FormElements/HFInputMask";
import { useMemo } from "react";
import carService from "../../../../services/cars";

const Form = () => {
  const schema = Validation();
  const { navigateQuery, getQueries } = usePageRouter();
  const query = getQueries();
  const { control, setValue, getValues } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });

  const { data: cars } = useQuery(["GET_CAR_LIST"], () => {
    return carService.getList();
  });

  const SelecTList = useMemo(() => {
    if (!cars) return [];
    return (cars as any).map((item: any) => {
      return {
        ...item,
        label: item.name,
        value: item.id,
      };
    });
  }, [cars]);

  console.log('cars', cars);
  

  const createElement = useMutation({
    mutationFn: (data) => {
      return driverService.createElement(data);
    },
    onSuccess: (val) => {
      console.log("val", val);
    },
  });

  const handleSubmit = () => {
    const data = getValues();
    console.log("data", data);
    createElement.mutate(data);
  };

  return (
    <CModal
      title="Yangi haydovchi qo'shish"
      open={!!query?.id}
      handleClose={() => navigateQuery({ id: "" })}
      textDeleteBtn="cancel"
      handleSave={() => handleSubmit()}
    >
      <div className="grid space-y-3">
        <HFTextField
          name="full_name"
          control={control}
          placeholder="Ism sharifi"
          label="Nomi"
          setValue={setValue}
          required={true}
        />
        <HFSelect name="car_id" control={control} options={SelecTList} />
        <HFTextField
          name="car_number"
          control={control}
          placeholder="Mashina raqami"
          label="Nomi"
          setValue={setValue}
          required={true}
        />
        <HFDatePicker control={control} name="birthday" />
        <HFInputMask
          setValue={setValue}
          name="phone"
          mask={"+\\9\\9\\8 99 999 99 99"}
        />
      </div>
    </CModal>
  );
};

export default Form;
