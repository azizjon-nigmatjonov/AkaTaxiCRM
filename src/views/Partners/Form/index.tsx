import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import HFTextField from "../../../components/FormElements/HFTextField";
import usePageRouter from "../../../hooks/useObjectRouter";
import CModal from "../../../components/CElements/CModal";
import { useMutation, useQuery } from "react-query";
import { useMemo } from "react";
import HFSelect from "../../../components/FormElements/HFSelect";
import HFInputMask from "../../../components/FormElements/HFInputMask";
import { useDispatch, useSelector } from "react-redux";
import { websiteActions } from "../../../store/website";
import partnerService from "../../../services/partners";
import ImageUploadBtn from "../../../components/Buttons/ImageUpload";
import CancelButton from "../../../components/Buttons/Cancel";
import * as yup from "yup";

interface Props {
  refetch: () => void;
}

const Form = ({ refetch }: Props) => {
  const schema = yup.object().shape({
    name: yup.string().trim().required("Majbiriy maydon"),
    company_name: yup.string().trim().required("Majbiriy maydon"),
    region_id: yup.string().trim().required("Majbiriy maydon"),
    phone: yup.string().trim().required("enter_phone_number"),
    // email: yup.string().required("enter_email").email("enter_valid_email"),
  });
  const { navigateQuery, getQueries } = usePageRouter();
  const query = getQueries();
  const dispatch = useDispatch();

  const {
    control,
    setValue,
    reset,
    handleSubmit,
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });
  const regions = useSelector((state: any) => state.regions.regions);

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

  const { data: partner } = useQuery(
    ["GET_PARTNER", query.id],
    () => {
      return partnerService.getElement(query.id);
    },
    {
      enabled: query.id !== "create" && query.id ? true : false,
    }
  );

  const createElement = useMutation({
    mutationFn: (data?: any) => {
      return partnerService.createElement(data);
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

  const onSubmit = (data: any) => {
    if (query.id === "create") {
      data.phone = data.phone?.substring(1)?.replace(/\s+/g, "");
      createElement.mutate(data);
    } else {
      data.image_id = partnerInfo?.image_id || +data.image_id
      partnerService.updateElement(query.id, data).then(() => {
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

  const partnerInfo: any = useMemo(() => {
    return partner?.data;
  }, [partner]);

  return (
    <CModal
      title={query.id === "create" ? "Yangi hamkor qo'shish" : "Tahrirlash"}
      open={!!query?.id}
      handleClose={() => {
        navigateQuery({ id: "" });
        reset();
      }}
      footerActive={false}
      // textDeleteBtn="cancel"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="grid space-y-4">
        <HFTextField
          name="name"
          control={control}
          placeholder="Ism sharif"
          label="Ism sharif"
          setValue={setValue}
          required={true}
          defaultValue={partnerInfo?.name}
        />

        <HFTextField
          name="company_name"
          control={control}
          placeholder="Kampaniya nomi"
          label="Kampaniya nomi"
          setValue={setValue}
          required={true}
          defaultValue={partnerInfo?.company_name}
        />

        <HFSelect
          name="region_id"
          control={control}
          options={SelecTList}
          label="Viloyat"
          placeholder="Viloyatni tanlang"
          required={true}
          setValue={setValue}
          defaultValue={partnerInfo?.region_id}
        />

        <ImageUploadBtn
          text="Rasm yuklang"
          name="image_id"
          setValue={setValue}
          label="Rasm"
          defaultValue={partnerInfo?.image}
        />

        <HFInputMask
          control={control}
          name="phone"
          setValue={setValue}
          mask={"+\\9\\9\\8 99 999 99 99"}
          label="Tel.raqam"
          placeholder="Tel.raqam kiriting"
          required={true}
          defaultValue={partnerInfo?.phone}
        />
        <div className="flex gap-x-2 pt-4">
          <div className="btn">
            <button type="submit">Tasdiqlash</button>
          </div>

          <CancelButton
            text="Bekor qilish"
            onClick={() => {
              navigateQuery({ id: "" });
              reset();
            }}
          />
        </div>
      </form>
    </CModal>
  );
};

export default Form;
