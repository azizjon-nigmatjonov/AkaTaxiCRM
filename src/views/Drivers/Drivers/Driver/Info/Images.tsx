import ImageUploadBtn from "../../../../../components/Buttons/ImageUpload";

interface Props {
  control?: any;
  driver?: any;
  setValue?: (val?: any, val2?: any) => void;
}

const DriverImages = ({ setValue, driver = {} }: Props) => {
  return (
    <div className="grid grid-cols-4 gap-4 mt-5">
      <ImageUploadBtn
        label="Profil avatari"
        text="Profil avatari"
        name="file_id"
        setValue={setValue}
        // defaultValue={driver?.driver_license}
      />
      <ImageUploadBtn
        label="Tex.pasport rasmi"
        text="Tex.pasport rasmi"
        name="file_id"
        setValue={setValue}
        defaultValue={driver?.tex_passport}
      />
      <ImageUploadBtn
        label="Prava rasmi"
        text="Prava rasmi"
        name="file_id"
        setValue={setValue}
        defaultValue={driver?.driver_license}
      />
      <ImageUploadBtn
        label="Prava bilan selfi"
        text="Prava bilan selfi"
        name="file_id"
        setValue={setValue}
        defaultValue={driver?.selfie_driver_license}
      />
    </div>
  );
};

export default DriverImages;
