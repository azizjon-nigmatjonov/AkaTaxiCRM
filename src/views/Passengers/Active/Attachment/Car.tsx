import HFTextField from "../../../../components/FormElements/HFTextField";
import HFSelect from "../../../../components/FormElements/HFSelect";
import { GetRegions } from "./Logic";

interface Props {
  control: any;
}

export const CarInfo = ({ control }: Props) => {
    const { regionOptions } = GetRegions()
  return (
    <div className="grid grid-flow-row-dense grid-cols-4">
      <div>
        <h4>Mashina ma’lumotlari</h4>
      </div>
      <div className="space-y-5 col-span-2">
        <div className="grid grid-cols-2 gap-x-5">
          <HFSelect
            control={control}
            name="model"
            label="Modeli"
            placeholder="Modeli"
          />
          <HFTextField control={control} name="number" label="Raqami" placeholder="Raqami" />
        </div>

        <HFSelect control={control} name="region_optional" label="Viloyat (ixtiyoriy)" placeholder="Viloyat (ixtiyoriy)" options={regionOptions} />
      </div>
    </div>
  );
};
