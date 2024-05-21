import HFTextarea from "../../../components/FormElements/HFTextarea";
import HFTextField from "../../../components/FormElements/HFTextField";
import CCard from "../CCard";

interface Props {
  control: any;
}

const CText = ({ control }: Props) => {
  return (
    <CCard style={{ minHeight: 0 }}>
      <div className="grid gap-y-5">
        <HFTextField
          control={control}
          name="title"
          label="Sarlovha"
          placeholder="Yozing..."
          required={true}
        />
        <HFTextarea
          control={control}
          name="body"
          placeholder="Yozing..."
          label="Tavsif"
          required={true}
        />
      </div>
    </CCard>
  );
};

export default CText;
