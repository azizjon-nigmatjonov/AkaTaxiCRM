import { useForm } from "react-hook-form";
import { Validation } from "./validate";
import { yupResolver } from "@hookform/resolvers/yup";
import HFTextField from "../../../../components/FormElements/HFTextField";
import usePageRouter from "../../../../hooks/useObjectRouter";
import CModal from "../../../../components/CElements/CModal";
import ImageUploadBtn from "../../../../components/UI/Buttons/ImageUpload";
import carService from "../../../../services/cars";
import Classes from "./Classes";
import { useQuery } from "react-query";
import { websiteActions } from "../../../../store/website";
import { useDispatch } from "react-redux";
import { useMemo } from "react";

interface Props {
  classes: any;
  tab?: any;
  getCarList: (val: any) => void;
  clas?: any;
  id?: any;
  inputValue?: any;
}

const Form = ({ inputValue, id, classes = [], getCarList, tab }: Props) => {
  const schema = Validation();
  const dispatch = useDispatch();
  const { navigateQuery, getQueries} = usePageRouter();
  const query = getQueries()

  const { control, setValue, getValues, reset } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });

  const { data: car } = useQuery(
    ["GET_CAR", id],
    () => {
      return carService.getElement(id);
    },
    {
      enabled: id !== "create" && id ? true : false,
    }
  );

  const HandleSuccess = (title: string) => {
    dispatch(
      websiteActions.setAlertData({
        title: title,
        translation: "common",
      })
    );

    navigateQuery({ id: "" });
    getCarList(tab);
    reset();
  };

  const SubmitForm = async () => {
    const data: any = getValues();
    const params: any = {};
    console.log(data);
  
    const parts = data.file_id

    const lastPart = parts

    const numberValue: number = parseInt(lastPart);

    const file_id = numberValue;

    params.car_class_ids = data.ids;
    params.name = data.name_uz;
    params.file_id = file_id;

    const updatedParams: any = {};

    const createParams: any = {};

    if (query.id === "create") {
      createParams.car_class_ids = params.car_class_ids;
      createParams.name = params.name;
      createParams.file_id = params.file_id;

      carService.createElement(createParams).then(() => {
        HandleSuccess("Ma'lumot yaratildi!");
      });
    } else {
      if (
        params.car_class_ids &&
        params.car_class_ids !== car?.data.class_ids
      ) {
        updatedParams.car_class_ids = params.car_class_ids;
      }
      if (params.name && params.name !== car?.data.name.uz) {
        updatedParams.name = params.name;
      }
      if (params.file_id && params.file_id !== car?.data.file_id) {
        updatedParams.file_id = params.file_id;
      }

      carService.updateElement(id, updatedParams).then((res) => {
        if (res?.data) {
          HandleSuccess("Ma'lumot yangilandi!");
        }
      });
    }
  };

  const classList = useMemo(() => {
    return classes?.map((i: any) => {
      return {
        ...i,
        checked: car?.data?.class_ids?.includes(+i.slug) || false,
      };
    });
  }, [car, classes]);

  const clas = car?.data?.class_names.join("");
  const classIds = car?.data?.class_ids;

  return (
    <CModal
      title={id === "create" ? "add_new_mark" : "Tahrirlash"}
      open={true}
      handleClose={() => {
        navigateQuery({ id: "" });
        reset();
      }}
      handleSave={() => SubmitForm()}
      textDeleteBtn="cancel"
    >
      <div className="grid space-y-3">
        <HFTextField
          name={`name_${query?.lang || "uz"}`}
          control={control}
          placeholder={`${inputValue}`}
          // label=""
          // label={undefined}
          setValue={setValue}
          required={true}
          defaultValue={car?.data?.name}
        />

        <ImageUploadBtn
          text="Mashina rasmi"
          name="file_id"
          setValue={setValue}
          defaultValue={car?.data?.image}
        />
        <Classes
          classes={classList}
          defaultValue={car?.data?.class_ids}
          setValue={setValue}
          clas={clas}
          classIds={classIds}
        />
      </div>
    </CModal>
  );
};

export default Form;
