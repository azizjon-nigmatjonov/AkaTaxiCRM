import { useForm } from "react-hook-form";
import { Validation } from "./validate";
import { yupResolver } from "@hookform/resolvers/yup";
import HFTextField from "../../../../components/FormElements/HFTextField";
import usePageRouter from "../../../../hooks/useObjectRouter";
import CModal from "../../../../components/CElements/CModal";
import { useMutation, useQuery } from "react-query";
import driverService from "../../../../services/drivers";
import HFSelect from "../../../../components/FormElements/HFSelect";
import HFInputMask from "../../../../components/FormElements/HFInputMask";
import { useMemo } from "react";
import carService from "../../../../services/cars";
import { useDispatch } from "react-redux";
import { websiteActions } from "../../../../store/website";
import { HFDatePicker } from "../../../../components/FormElements/HFDatePicker";

interface Props {
  refetch: () => void;
}

const Form = ({ refetch }: Props) => {
  
  const schema = Validation();
  const { navigateQuery, getQueries } = usePageRouter();
  const query = getQueries();
  const dispatch = useDispatch();
  const { control, setValue, getValues, reset } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });

  const { data: cars } = useQuery(
    ["GET_CAR_LIST"],
    () => {
      return carService.getList();
    },
    {
      enabled: !!query?.id,
    }
  );

  const { data: driver } = useQuery(
    ["GET_DRIVER", query.id],
    () => {
      return driverService.getElement(query.id);
    },
    {
      enabled: query.id !== "create" && query.id ? true : false,
    }
  );

  const SelecTList = useMemo(() => {
    if (!cars) return [];
    const list: any = cars.data;
    return list?.map((item: any) => {
      return {
        ...item,
        label: item.name,
        value: item.id,
      };
    });
  }, [cars]);

  const createElement = useMutation({
    mutationFn: (data?: any) => {
      return driverService.createElement(data);
    },
    onSuccess: () => {
      dispatch(
        websiteActions.setAlertData({
          title: "Ma'lumot yaratildi!",
          translation: "common",
        })
      );

      navigateQuery({ id: "" });
      refetch();
      reset();
    },
  });

  const handleSubmit = () => {
    const data = getValues();
    data.phone = data.phone?.substring(1)?.replace(/\s+/g, "");

    if (query.id === "create") {
      createElement.mutate(data);
    } else {
      driverService.updateElement(query.id, data).then((res) => {
        if (res?.data) {
          dispatch(
            websiteActions.setAlertData({
              title: "Ma'lumot yangilandi!",
              translation: "common",
            })
          );

          navigateQuery({ id: "" });
          refetch();
          reset();
        }
      });
    }
  };
  

  return (

    <CModal
      title={query?.id === "create" ? "Yangi haydovchi qo'shish" : "Tahrirlash"}
      open={!!query?.id}
      handleClose={() => {
        navigateQuery({ id: "" });
        reset();
      }}
      textDeleteBtn="cancel"
      handleSave={() => handleSubmit()
      }
    >
      <div className="grid space-y-3">
        <HFTextField
          name="full_name"
          control={control}
          placeholder="Ism sharif"
          label="Ism sharif"
          setValue={setValue}
          required={true}
          defaultValue={driver?.data?.full_name}
        />
        <HFSelect
          name="car_id"
          label="Mashina rusumi"
          required={true}
          control={control}
          options={SelecTList}
          placeholder="Mashina rusumi"
          setValue={setValue}
          defaultValue={driver?.data?.car_id}
        />
        <HFTextField
          name="car_number"
          control={control}
          placeholder="Mashina raqami"
          label="Mashina raqami"
          setValue={setValue}
          required={true}
          defaultValue={driver?.data?.car_number}
        />
        <HFDatePicker
          name="birthday"
          control={control}
          label="Tug'ilgan kuni"
          required={true}
        />
        {/* <HFDatepicker
          label="Tug'ilgan sana"
          control={control}
          name="birthday"
          placeholder="Tug'ilgan kuni"
          required={true}
          setValue={setValue}
          defaultValue={driver?.data?.birthday}
        /> */}
        <HFInputMask
          name="phone"
          control={control}
          label={`Telefon raqam`}
          placeholder={`Telefon raqam`}
          required={true}
          mask={"+\\9\\9\\8 99 999 99 99"}
          setValue={setValue}
          defaultValue={driver?.data?.phone}
        />
        
      </div>
    </CModal>
  );
};

export default Form;
