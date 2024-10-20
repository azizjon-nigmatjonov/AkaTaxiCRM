import { RxCross2 } from "react-icons/rx";
import CancelButton from "../../../../../../components/UI/Buttons/Cancel";
import { useForm } from "react-hook-form";
import driverService from "../../../../../../services/drivers";
import { websiteActions } from "../../../../../../store/website";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { Validation } from "./validate";
import HFSelect from "../../../../../../components/FormElements/HFSelect";
import {
  PhotoReject,
  PhotoRejectOz,
  PhotoRejectRu,
} from "../../../../../../constants/photoControl";

const Ignored = ({
  refetch,
  setAction,
}: {
  refetch: () => void;
  setAction: (val: string) => void;
}) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const schema = Validation();

  const { control, handleSubmit } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });

  const ignoreHandler = (data: any) => {
    const langs = {
      uz: data.uz,
      ru: data.ru,
      oz: data.oz,
      en: "",
    };

    PhotoReject.forEach((el: any) => {
      if (data.ignore == el.value) langs.uz = el.label;
    });

    PhotoRejectOz.forEach((el: any) => {
      if (data.ignore == el.value) langs.oz = el.label;
    });

    PhotoRejectRu.forEach((el: any) => {
      if (data.ignore == el.value) langs.ru = el.label;
    });

    driverService
      .updateFotoControl(id, {
        status_reason: { ...langs },
        status: "canceled",
      })
      .then(() => {
        setAction("");
        refetch();
        dispatch(
          websiteActions.setAlertData({
            mainTitle: "Yuborildi!",
            title: "Sizning rad etish xabaringiz yuborildi!",
            translation: "common",
          })
        );
      });
  };

  return (
    <form onSubmit={handleSubmit(ignoreHandler)}>
      <div className="flex items-start justify-between">
        <div>
          <span className="text-lg font-semibold ">Rad qilish</span>
          <p className="text-[var(--gray)] text-sm">
            Haydovchini so’rovini rad etish uchun unga sababni bildiring
          </p>
        </div>
        <div className="cursor-pointer" onClick={() => setAction("")}>
          <RxCross2 />
        </div>
      </div>
      <div className="w-full my-9">
        <HFSelect
          control={control}
          name="ignore"
          options={PhotoReject}
          placeholder="Tanlang"
        />
        {/* <HFTextareaAutosize
          name="ignore"
          control={control}
          placeholder="Sababni yozing"
        /> */}
        {/* <HFTextareaAutosize
          name="uz"
          label="O'zbekcha"
          control={control}
          required={true}
          placeholder="Sababni yozing"
          minRows={1}
        />
        <HFTextareaAutosize
          name="oz"
          label="Крилча"
          control={control}
          required={true}
          placeholder="Sababni yozing"
          minRows={1}
        />
        <HFTextareaAutosize
          name="ru"
          label="Русский"
          control={control}
          required={true}
          placeholder="Sababni yozing"
          minRows={1}
        /> */}
        {/* <HFTextareaAutosize
          name="en"
          label="English"
          control={control}
          required={true}
          placeholder="Sababni yozing"
          minRows={1}
        /> */}
      </div>
      <div className="flex items-center justify-end gap-3">
        <CancelButton text="Orqaga" onClick={() => setAction("")} />
        <button className="custom-btn" type="submit">
          Yuborildi
        </button>
      </div>
    </form>
  );
};

export default Ignored;
