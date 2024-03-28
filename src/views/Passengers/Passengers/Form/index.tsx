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
import HFInputMask from "../../../../components/FormElements/HFInputMask";
import passengerService from "../../../../services/passengers";
import { useDispatch } from "react-redux";
import { websiteActions } from "../../../../store/website";
import { HFDatePicker } from "../../../../components/FormElements/HFDatePicker";
import ImageUploadBtn from "../../../../components/Buttons/ImageUpload";

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

  const gender = [
    { id: 1, value: 'm', label: 'Male' },
    { id: 2, value: 'f', label: 'Female' }
  ]

  const createElement = useMutation({
    mutationFn: (data?: any) => {
      return passengerService.createElement(data).then(() => {
        dispatch(
          websiteActions.setAlertData({
            title: "Ma'lumot yaratildi!",
            translation: "common",
          })
        );

        navigateQuery({ id: "" });
        refetch();
        reset();
      },);
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

        <ImageUploadBtn
          text="Mashina rasmi"
          name="image_id"
          setValue={setValue}
        // defaultValue={car?.data?.image}
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

        <HFSelect
          name="gender"
          control={control}
          options={gender}
          label="Jins"
          placeholder="Jinsingizni tanlang"
          required={true}
          setValue={setValue}
          defaultValue={passengerInfo?.region_id}
        />

        <HFDatePicker name="birthday" control={control} placeholder="Tug'ilgan sana" label="Tug'ilgan kuni" required={true} />

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
        <HFTextField
          name="telegram_link"
          control={control}
          placeholder="Telegram.link"
          label="Telegram Link"
          setValue={setValue}
          required={true}
        />
      </div>
    </CModal>
  );
};

export default Form;
