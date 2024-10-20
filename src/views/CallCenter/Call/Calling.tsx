import { useForm } from "react-hook-form";
import HFInputMask from "../../../components/FormElements/HFInputMask";
import { PhoneIcon } from "../../../components/UI/IconGenerator/Svg";

export const Calling = () => {
  const { control } = useForm();
  return (
    <div className="p-[16px] border border-[var(--gray20)] rounded-[12px] bg-white card-shadow h-full">
      <h2 className="text-[18px] font-[600]">Qo’ng’iroq qilish</h2>
      <form className="space-y-4 mt-4">
        <HFInputMask
          name="phone"
          control={control}
          mask={"+\\9\\9\\8 99 999 99 99"}
          placeholder="Tel.raqam"
          required={true}
        />
        <button className="success-btn flex items-center justify-center">
          <PhoneIcon />
          <span>Qo'ng'iroq qilish</span>
        </button>
      </form>
    </div>
  );
};
