import CBreadcrumbs from "../../../../components/CElements/CBreadcrumbs";
import { Header } from "../../../../components/UI/Header";
import CCard from "../../../../components/CElements/CCard";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Validation } from "./Validation";
import { UserGroup } from "./UserGroup";
import { CreateFunction, FetchFunction } from "./Logic";
import HFTextField from "../../../../components/FormElements/HFTextField";
import HFTextarea from "../../../../components/FormElements/HFTextarea";
import { HFImageUpload } from "../../../../components/FormElements/HFImageUpload";
import { useParams } from "react-router-dom";

const AddNews = () => {
  const schema = Validation();
  const { id } = useParams();
  const { control, handleSubmit, setValue } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });
  const { createNew, updateNew, isLoading } = CreateFunction();
  const { defaultData, breadCrumbsItems } = FetchFunction();

  const onSubmit = (data: any) => {
    if (id) {
      updateNew(data);
    } else {
      createNew(data);
    }
  };
  
  return (
    <>
      <Header sticky={true}>
        <CBreadcrumbs items={breadCrumbsItems} type="link" progmatic={true} />
      </Header>
      <div className="px-6">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <CCard style={{ minHeight: 0 }}>
            <span className="text-base font-medium">Kimga yuborish kerak?</span>
            <UserGroup
              setValue={setValue}
              defaultValue={defaultData?.user_group}
            />

            <div className="mt-5 grid grid-cols-5">
              <HFImageUpload
                label="Rasm"
                name="image_id_uz"
                control={control}
                required={true}
                classes="rounded-[8%]"
                defaultUrl={defaultData?.image?.uz}
                defaultValue={defaultData?.image_id?.uz}
              />
              <HFImageUpload
                label="Расм"
                name="image_id_oz"
                control={control}
                required={true}
                classes="rounded-[8%]"
                defaultUrl={defaultData?.image?.oz}
                defaultValue={defaultData?.image_id?.oz}
              />
              <HFImageUpload
                label="Картина"
                name="image_id_ru"
                control={control}
                required={true}
                classes="rounded-[8%]"
                defaultUrl={defaultData?.image?.ru}
                defaultValue={defaultData?.image_id?.ru}
              />
            </div>
          </CCard>
          <h4 className="text-lg font-[600]">Matn o'zbek tilida</h4>
          <CCard style={{ minHeight: 0 }}>
            <div className="grid grid-cols-3 my-5">
              <HFTextField
                control={control}
                name="title_uz"
                label="Sarlovha"
                placeholder="Yozing..."
                required={true}
                defaultValue={defaultData?.title?.uz}
              />
            </div>
            <HFTextarea
              control={control}
              name="description_uz"
              placeholder="Yozing..."
              label="Ma'lumot"
              required={true}
              defaultValue={defaultData?.description?.uz}
            />
          </CCard>
          <h4 className="text-lg font-[600]">Матн крилчада</h4>
          <CCard style={{ minHeight: 0 }}>
            <div className="grid grid-cols-3 my-5">
              <HFTextField
                control={control}
                name="title_oz"
                label="Сарловҳа"
                placeholder="Ёзинг..."
                required={true}
                defaultValue={defaultData?.title?.oz}
              />
            </div>
            <HFTextarea
              control={control}
              name="description_oz"
              placeholder="Ёзинг..."
              label="Маълумот"
              required={true}
              defaultValue={defaultData?.description?.oz}
            />
          </CCard>

          <h4 className="text-lg font-[600]">Текст на русском языке</h4>
          <CCard style={{ minHeight: 0 }}>
            <div className="grid grid-cols-3 my-5">
              <HFTextField
                control={control}
                name="title_ru"
                label="Заголовок"
                placeholder="Писать..."
                required={true}
                defaultValue={defaultData?.title?.ru}
              />
            </div>
            <HFTextarea
              control={control}
              name="description_ru"
              placeholder="Yozing..."
              label="Информация"
              required={true}
              defaultValue={defaultData?.description?.ru}
            />
          </CCard>

          <div className="flex justify-end">
            <div>
              <button
                className={`custom-btn ${isLoading ? "disabled" : ""}`}
                type="submit"
                disabled={isLoading}
              >
                {id ? "Tahrirlash" : "Yangilikni yuborish"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddNews;
