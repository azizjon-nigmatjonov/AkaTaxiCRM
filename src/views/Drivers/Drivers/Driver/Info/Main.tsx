// import HFDatepicker from "../../../../../components/FormElements/HFDatepicker";
import { HFDatePicker } from "../../../../../components/FormElements/HFDatePicker";
import HFInputMask from "../../../../../components/FormElements/HFInputMask";
import HFSelect from "../../../../../components/FormElements/HFSelect";
import HFTextField from "../../../../../components/FormElements/HFTextField";

interface Props {
  control?: any;
  driver?: any;
  setValue?: (val?: any, val2?: any) => void;
}

const genderList = [
  {
    label: "Erkak",
    value: "m",
  },
  {
    label: "Ayol",
    value: "f",
  },
];

const MainInfo = ({ control, setValue, driver = {} }: Props) => {

  
  return (
    <div className="grid grid-cols-4 gap-4 mt-5">
      <HFTextField
        name="full_name"
        control={control}
        placeholder="e.g Abror Shukurov"
        label="Ism sharif"
        setValue={setValue}
        defaultValue={driver?.full_name}
      />
      <HFInputMask
        name="phone"
        control={control}
        label={`Telefon raqam`}
        placeholder={`+998 -- --- -- --`}
        mask={"+\\9\\9\\8 99 999 99 99"}
        setValue={setValue}
        defaultValue={driver?.phone}
      />
      <HFDatePicker
        name="birthday"
        control={control}
        label="Tug'ulgan sana"
        placeholder="16-yanvar, 1996-yil"
        // defaultValue={driver?.birthday}
      />
      {/* <HFDatepicker
        label="Tug'ilgan sana"
        control={control}
        name="birthday"
        placeholder="Tug'ilgan kuni"
        setValue={setValue}
        defaultValue={driver?.birthday}
      /> */}
      <HFSelect
        name="gender"
        control={control}
        options={genderList}
        label="Jins"
        placeholder="Tanglang"
        setValue={setValue}
        defaultValue={driver?.gender}
      />
    </div>
  );
};

export default MainInfo;
