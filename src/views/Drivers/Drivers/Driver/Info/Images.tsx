import { CDriverImageUpload } from "../../../../../components/CElements/CDriverImageUpload";
// import ImageUploadBtn from/ "../../../../../components/Buttons/ImageUpload";

interface Props {
  control?: any;
  driver?: any;
  setValue?: (val?: any, val2?: any) => void;
}

const DriverImages = ({ control, driver = {} }: Props) => {
  return (
    <div className="flex items-start flex-wrap gap-4 mt-5">
      {/* <ImageUploadBtn
        label="Profil avatari"
        text="Profil avatari"
        name="profile_image"
        readOnly={false}
        setValue={setValue}
        defaultValue={driver?.driver_license}
      />
      <ImageUploadBtn
        label="Tex.pasport rasmi"
        text="Tex.pasport rasmi"
        name="tex_passport"
        readOnly={false}
        setValue={setValue}
        defaultValue={driver?.tex_passport}
      />
      <ImageUploadBtn
        label="Prava rasmi"
        text="Prava rasmi"
        name="driver_license"
        readOnly={false}
        setValue={setValue}
        defaultValue={driver?.driver_license}
      />
      <ImageUploadBtn
        label="Prava bilan selfi"
        text="Prava bilan selfi"
        name="selfie_driver_license"
        setValue={setValue}
        readOnly={false}
        defaultValue={driver?.selfie_driver_license}
      /> */}

      <CDriverImageUpload
        zoomImg={true}
        control={control}
        required={true}
        style={{ height: 200 }}
        name="profile_image"
        label="Profil avatari"
        defaultValue={driver?.profile_image}
      />
      <CDriverImageUpload
        zoomImg={true}
        control={control}
        required={true}
        style={{ height: 200 }}
        name="tex_passport"
        label="Tex.pasport rasmi"
        defaultValue={driver?.tex_passport}
      />
      <CDriverImageUpload
        zoomImg={true}
        control={control}
        required={true}
        style={{ height: 200 }}
        name="driver_license"
        label="Prava rasmi"
        defaultValue={driver?.driver_license}
      />
      <CDriverImageUpload
        zoomImg={true}
        control={control}
        required={true}
        style={{ height: 200 }}
        name="selfie_driver_license"
        label="Prava bilan selfi"
        defaultValue={driver?.selfie_driver_license}
      />
    </div>
  );
};

export default DriverImages;
