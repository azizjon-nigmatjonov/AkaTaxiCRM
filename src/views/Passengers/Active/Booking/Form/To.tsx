import HFSelect from "../../../../../components/FormElements/HFSelect";
import { SelectData } from "../Logic";
import cls from "../style.module.scss";

export const ToDistance = ({ control }: { control: any }) => {
    const { regionList, villageList, districtList, setLocalIds } = SelectData();
        
  return (
    <div className={cls.flex}>
      <p className={cls.title}>Qayerga</p>
      <div className={cls.parent}>
        <div className={cls.inputs}>
          <HFSelect
            name="to_region"
            control={control}
            label="Viloyat"
            options={regionList}
            placeholder="Select"
            handleClick={(obj: any) => setLocalIds("region", obj.value)}
          />
          <HFSelect
            name="end_location_id"
            control={control}
            options={districtList?.slice(1)}
            label="Tuman"
            placeholder="Select"
            disabled={districtList?.length ? false : true}
            handleClick={(obj: any) => setLocalIds("district", obj.value)}
          />
        </div>
        <div className="mt-4">
          <HFSelect
            name="to_village_id"
            control={control}
            options={villageList}
            label="Qishloq (mahalla yoki ko'cha)"
            placeholder="Select"
            disabled={villageList?.length ? false : true}
          />
        </div>
      </div>
    </div>
  );
};
