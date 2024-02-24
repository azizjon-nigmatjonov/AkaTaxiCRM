// import ImageUploadBtn from "../../../../../components/Buttons/ImageUpload";
import HFTextField from "../../../../../components/FormElements/HFTextField";
import DImageUpload from "../../../../../components/CElements/CDivider/DImageUpload";

interface Props {
  control?: any;
  driver?: any;
  setValue?: (val?: any, val2?: any) => void;
}

const CarInfo = ({ control, setValue, driver = {} }: Props) => {
  return (
    <div className="space-y-8">
      <div className="flex items-start gap-5">
        {/* <ImageUploadBtn
          label="Oldi qism rasmi"
          text="Oldi qism rasmi"
          name="first_image"
          setValue={setValue}
          defaultValue={driver?.images?.[0]}
          readOnly={false}
        /> */}

        {/* <ImageUploadBtn
          label="Salon qism rasmi"
          text="Salon qism rasmi"
          name="second_image"
          setValue={setValue}
          readOnly={false}
          defaultValue={driver?.images?.[1]}
        /> */}
        <DImageUpload control={control} style={{ height: 200 }} name='first_image' label='Oldi qismi rasmi' defaultValue={driver?.images?.[1]} />
        <DImageUpload control={control} style={{ height: 200 }} name='second_image' label='Salon qismi rasmi' defaultValue={driver?.images?.[1]} />
      </div>
      <div className="grid grid-cols-4 gap-4 mt-5">
        <HFTextField
          name="car_number"
          control={control}
          placeholder="Mashina rusumu"
          label="Mashina rusumu"
          setValue={setValue}
          readOnly={false}
          defaultValue={driver?.car_name}
        />
        <HFTextField
          name="car_number"
          control={control}
          placeholder="Mashina raqami"
          label="Mashina raqami"
          setValue={setValue}
          readOnly={false}
          defaultValue={driver?.car_number}
        />
        <HFTextField
          name="region_name"
          control={control}
          placeholder="Mashina voloyati"
          label="Mashina viloyati"
          setValue={setValue}
          readOnly={false}
          defaultValue={driver?.region_name}
        />
      </div>
    </div>
  );
};

export default CarInfo;
