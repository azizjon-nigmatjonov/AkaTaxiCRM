import HFSelect from "../../../../../components/FormElements/HFSelect";
import { SelectData } from "../Logic";
import cls from "../style.module.scss";

export const FromDistance = ({ control }: { control: any }) => {
  const { regionList, villageList, districtList, setLocalIds } = SelectData();

  
  return (
    <div className={cls.flex}>
      <p className={cls.title}>Qayerdan</p>
      <div className={cls.parent}>
        <div className={cls.inputs}>
          <HFSelect
            name="from_region"
            // onChange={handlerDistrics}
            control={control}
            label="Viloyat"
            options={regionList}
            placeholder="Select"
            handleClick={(obj: any) => setLocalIds("region", obj.value)}
          />
          <HFSelect
            name="start_location_id"
            control={control}
            options={districtList?.slice(1)}
            label="Tuman 2"
            placeholder="Select"
            handleClick={(obj: any) => setLocalIds("district", obj.value)}
            disabled={districtList?.length ? false : true}
          />
        </div>
        <div className="mt-4">
          <HFSelect
            name="from_village_id"
            // onChange={handlerVillage}
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
