import HFTextField from "../../../../../components/FormElements/HFTextField";
import cls from "../style.module.scss";
import HFInputMask from "../../../../../components/FormElements/HFInputMask";
import { FromDistance } from "./From";
import { ToDistance } from "./To";
interface Props {
  control?: any;
  getHandler?: () => void;
}

const Info = ({ control }: Props) => {
  return (
    <div className="divide-y-[1px] divide-[#EAECF0]">
      {/* USER info */}
      <div className={cls.flex}>
        <p className={cls.title}>Yo’lovchi ma’lumotlari</p>
        <div className={`${cls.inputs} flex w-full max-w-[800px] gap-4`}>
          <HFInputMask
            name="passenger_phone"
            control={control}
            label="Tel raqami"
            placeholder={`+998 -- --- -- --`}
            mask={"+\\9\\9\\8 99 999 99 99"}
          />
          <HFTextField
            name="passenger_name"
            control={control}
            label="Ism"
            placeholder="Ismni kiriting"
          />
        </div>
      </div>

      {/* From distance */}
      <FromDistance control={control} />

      {/* To distance */}
      <ToDistance control={control} />
    </div>
  );
};

export default Info;
