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
import HFDatePicker from "../../../../components/FormElements/HFDatepicker";
import HFInputMask from "../../../../components/FormElements/HFInputMask";
import passengerService from "../../../../services/passengers";
import { useDispatch } from "react-redux";
import { websiteActions } from "../../../../store/website";

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
  const { data: regions } = useQuery(["GET_REGIONS_LIST"], () => {
    return regionService.getList();
  });

  const SelecTList = useMemo(() => {
    if (!regions?.data) return [];
    return (regions.data as any).map((item: any) => {
      return {
        ...item,
        label: item.name?.uz,
        value: item.id,
      };
    });
  }, [regions]);

  const { data: passenger } = useQuery(
    ["GET_PASSENGER", query.id],
    () => {
      return passengerService.getElement(query.id);
    },
    {
      enabled: query.id !== "create" && query.id ? true : false,
    }
  );

  const createElement = useMutation({
    mutationFn: (data?: any) => {
      return passengerService.createElement(data);
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
      passengerService.updateElement(query.id, data).then(() => {
        dispatch(
          websiteActions.setAlertData({
            title: "Ma'lumotlar yangilandi!",
            translation: "common",
          })
        );

        navigateQuery({ id: "" });
        refetch();
        reset();
      });
    }
  };

  const passengerInfo: any = useMemo(() => {
    return passenger?.data;
  }, [passenger]);

  return (
    <CModal
      title={query.id === "create" ? "add_new_passenger" : "Tahrirlash"}
      open={!!query?.id}
      handleClose={() => {
        navigateQuery({ id: "" });
        reset();
      }}
      textDeleteBtn="cancel"
      handleSave={() => handleSubmit()}
    >
      <div className="grid space-y-3">
        <HFTextField
          name="full_name"
          control={control}
          placeholder="Ism sharif"
          label="Ism sharif"
          setValue={setValue}
          required={true}
          defaultValue={passengerInfo?.full_name}
        />

        <HFSelect
          name="region_id"
          control={control}
          options={SelecTList}
          label="Viloyatni tanlang"
          placeholder="Viloyatni tanlang"
          required={true}
          setValue={setValue}
          defaultValue={passengerInfo?.region_id}
        />

        <HFDatePicker
          label="Tug'ilgan sana"
          control={control}
          defaultValue={passengerInfo?.birthday}
          name="birthday"
          placeholder="Tug'ilgan kuni"
          required={true}
          setValue={setValue}
        />

        <HFInputMask
          control={control}
          name="phone"
          setValue={setValue}
          mask={"+\\9\\9\\8 99 999 99 99"}
          label="Tel.raqam"
          placeholder="Tel.raqam"
          required={true}
          defaultValue={passengerInfo?.phone}
        />
      </div>
    </CModal>
  );
};

export default Form;
