import HFSelect from "../../../../components/FormElements/HFSelect";
import { GetRegions } from "./Logic";

interface Props {
  control: any;
}

export const ToInfo = ({ control }: Props) => {
    const { regionOptions } = GetRegions();
  return (
    <div className="grid grid-flow-row-dense grid-cols-4">
      <div>
        <h4>Qayerga</h4>
      </div>
      <div className="col-span-2">
        <HFSelect
          control={control}
          name="region_optional"
          label="Viloyat"
          placeholder="Tanlang"
          options={regionOptions}
        />
      </div>
    </div>
  );
};
