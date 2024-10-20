import usePageRouter from "../../../../../../hooks/useObjectRouter";
import { RxCross2 } from "react-icons/rx";
import { useForm } from "react-hook-form";
import { Validation } from "./validate";
import { yupResolver } from "@hookform/resolvers/yup";
import { ModalData } from "./Logic";
import {
  RejectReasonsOz,
  RejectReasonsRu,
  RejectReasonsUz,
} from "../../../../../../constants/driver";
import { HFMultipleSelect } from "../../../../../../components/FormElements/HFMultipleSelect";

const Ignored = () => {
  const { navigateQuery } = usePageRouter();
  const schema = Validation();
  const { control, handleSubmit } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });
  const { updateElement } = ModalData();

  const onSubmit = (data: any) => {
    const params: any = {
      langs: {
        en: "",
        uz: "",
        ru: "",
        oz: "",
      },
      incorrect_fields: [],
    };
    RejectReasonsUz.forEach((el: any, ind: number) => {
      if (data.langs.includes("" + el.value)) {
        params.langs.uz = `${params.langs.uz} ${ind > 0 ? " / " : ""}` + el.label;
        params.incorrect_fields.push(el.name);
      }
    });
    RejectReasonsOz.forEach((el: any, ind: number) => {
      if (data.langs.includes("" + el.value)) {
        params.langs.oz = `${params.langs.oz} ${ind > 0 ? " / " : ""}` + el.label;
      }
    });
    RejectReasonsRu.forEach((el: any, ind: number) => {
      if (data.langs.includes("" + el.value)) {
        params.langs.ru = `${params.langs.ru} ${ind > 0 ? " / " : ""}` + el.label;
      }
    });

    updateElement(params);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex items-start justify-between">
        <div>
          <span className="text-lg font-semibold ">Rad qilish</span>
          <p className="text-[var(--gray)] text-sm">
            Haydovchini so’rovini rad etish uchun unga sababni bildiring
          </p>
        </div>
        <div
          className="cursor-pointer"
          onClick={() => navigateQuery({ accept: "" })}
        >
          <RxCross2 />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-y-5 mt-5">
        <HFMultipleSelect
          placeholder="Sababni tanlang"
          name="langs"
          label="Sabab"
          options={RejectReasonsUz}
          control={control}
        />
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
        />
        <HFTextareaAutosize
          name="en"
          label="English"
          control={control}
          required={true}
          placeholder="Sababni yozing"
          minRows={1}
        /> */}
      </div>
      <div className="flex items-center justify-end gap-x-5 mt-5">
        <button
          className="cancel-btn form"
          type="button"
          onClick={() => navigateQuery({ accept: "" })}
        >
          Bekor qilish
        </button>
        <button className="custom-btn form" type="submit">
          Yuborish
        </button>
      </div>
    </form>
  );
};

export default Ignored;
