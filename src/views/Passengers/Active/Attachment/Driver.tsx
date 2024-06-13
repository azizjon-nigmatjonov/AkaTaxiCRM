import HFInputMask from "../../../../components/FormElements/HFInputMask";
import HFTextField from "../../../../components/FormElements/HFTextField";

interface Props {
  control: any;
}

export const DriverInfo = ({ control }: Props) => {
  return (
    <div className="grid grid-flow-row-dense grid-cols-4">
      <div>
        <h4>Haydovchi ma’lumotlari</h4>
      </div>
      <div className="col-span-2 grid grid-cols-2 gap-5">
        <HFInputMask
          control={control}
          name="phone"
          //   setValue={setValue}
          mask={"+\\9\\9\\8 99 999 99 99"}
          label="Tel raqam"
          placeholder="Tel.raqam"
          required={true}
          //   defaultValue={passengerInfo?.phone}
        />
        <HFTextField
          label="Ismi"
          name="full_name"
          control={control}
          placeholder="Ism sharif"
          //   setValue={setValue}
          required={true}
          //   defaultValue={passengerInfo?.full_name}
        />
         <HFTextField
          label="Ismi"
          name="full_name"
          control={control}
          placeholder="Ism sharif"
          //   setValue={setValue}
          required={true}
          //   defaultValue={passengerInfo?.full_name}
        />
         <HFTextField
          label="Ismi"
          name="full_name"
          control={control}
          placeholder="Ism sharif"
          //   setValue={setValue}
          required={true}
          //   defaultValue={passengerInfo?.full_name}
        />
      </div>
    </div>
  );
};
