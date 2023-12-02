import ImageUploadBtn from "../../../../../components/Buttons/ImageUpload";
import HFTextField from "../../../../../components/FormElements/HFTextField";

interface Props {
  control?: any;
  driver?: any;
  setValue?: (val?: any, val2?: any) => void;
}
const CarInfo = ({ control, setValue, driver = {} }: Props) => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-4 gap-4 mt-5">
        <ImageUploadBtn
          label="Oldi qism rasmi"
          text="Oldi qism rasmi"
          name="file_id"
          setValue={setValue}
          // defaultValue={driver?.image}
        />
        <ImageUploadBtn
          label="Salon qism rasmi"
          text="Salon qism rasmi"
          name="file_id"
          setValue={setValue}
          // defaultValue={driver?.image}
        />
      </div>
      <div className="grid grid-cols-4 gap-4 mt-5">
        <HFTextField
          name="car_number"
          control={control}
          placeholder="Mashina rusumu"
          label="Mashina rusumu"
          setValue={setValue}
          defaultValue={driver?.car_name}
        />
        <ImageUploadBtn
          label="Oldi qism rasmi"
          text="Oldi qism rasmi"
          name="file_id"
          setValue={setValue}
          // defaultValue={driver?.image}
        />
        <HFTextField
          name="car_number"
          control={control}
          placeholder="Mashina raqami"
          label="Mashina raqami"
          setValue={setValue}
          defaultValue={driver?.car_number}
        />
      </div>
    </div>
  );
};

export default CarInfo;
