import { useForm } from "react-hook-form";
import { Validation } from "./validate";
import { yupResolver } from "@hookform/resolvers/yup";
import HFTextField from "../../../../components/FormElements/HFTextField";
import usePageRouter from "../../../../hooks/useObjectRouter";
import CModal from "../../../../components/CElements/CModal";
import ImageUploadBtn from "../../../../components/Buttons/ImageUpload";
import carService from "../../../../services/cars";
import Classes from "./Classes";
import { useQuery } from "react-query";
import { websiteActions } from "../../../../store/website";
import { useDispatch } from "react-redux";
import { useEffect, useMemo } from "react";

interface Props {
  classes: any;
  tab?: any;
  getCarList: (val: any) => void;
}

const Form = ({ classes = [], getCarList, tab }: Props) => {
  const schema = Validation();
  const dispatch = useDispatch();
  const { navigateQuery, getQueries } = usePageRouter();
  const query = getQueries();
  const { control, setValue, getValues, reset } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });

  const { data: car } = useQuery(
    ["GET_CAR", query.id],
    () => {
      return carService.getElement(query.id);
    },
    {
      enabled: query.id !== "create" && query.id ? true : false,
    }
  );

  const SubmitForm = () => {
    const data: any = getValues();
    const params: any = {};
    params.car_class_ids = data.ids;
    params.name = data.name;
    
    params.file_id = data?.file_id

    if (query.id === "create") {
      carService.createElement(params).then(() => {
        dispatch(
          websiteActions.setAlertData({
            title: "Ma'lumot yaratildi!",
            translation: "common",
          })
        );

        navigateQuery({ id: "" });
        getCarList(tab);
        reset();
      });
    } else {
      carService.updateElement(query.id, params).then((res) => {
        if (res?.data) {
          dispatch(
            websiteActions.setAlertData({
              title: "Ma'lumot yangilandi!",
              translation: "common",
            })
          );

          navigateQuery({ id: "" });
          getCarList(tab);
          reset();
        }
      });
    }
  };

  const classList = useMemo(() => {
    return classes?.map((i: any) => {
      return {
        ...i,
        checked: car?.data?.class_ids?.includes(+i.slug) || false
      }
    })
  }, [car, classes])  
    
  return (
    <CModal
      title={query.id === "create" ? "add_new_mark" : "Tahrirlash"}
      open={!!query?.id}
      handleClose={() => {
        navigateQuery({ id: "" });
        reset();
      }}
      handleSave={() => SubmitForm()}
      textDeleteBtn="cancel"
    >
      <div className="grid space-y-3">
        <HFTextField
          name="name"
          control={control}
          placeholder="Marka nomi"
          label="Marka nomi"
          setValue={setValue}
          required={true}
          defaultValue={car?.data?.name}
        />
        <ImageUploadBtn
          name="file_id"
          setValue={setValue}
          defaultValue={car?.data?.image}
        />
        <Classes
          classes={classList}
          defaultValue={car?.data?.class_ids}
          setValue={setValue}
        />
      </div>
    </CModal>
  );
};

export default Form;
