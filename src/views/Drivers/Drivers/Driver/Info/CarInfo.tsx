import { useMemo } from "react";
import HFTextField from "../../../../../components/FormElements/HFTextField";
import { CDriverImageUpload } from "../../../../../components/CElements/CDriverImageUpload";
import HFSelect from "../../../../../components/FormElements/HFSelect";
import { useQuery } from "react-query";
import carService from "../../../../../services/cars";
import { usePlaces } from "../../../../../hooks/usePlaces";
interface Props {
  control?: any;
  driver?: any;
  setValue?: (val?: any, val2?: any) => void;
}

const CarInfo = ({ control, setValue, driver = {} }: Props) => {
  const { regionList } = usePlaces()


  const { data } = useQuery(['GET_CARS_LISTS'], () => {
    return carService.getList()
  })


  const CarLists: any = useMemo(() => {
    if (!data) return []
    const list = data?.data
    return {
      list: list.map((val: any) => {
        return {
          value: val.id,
          label: val.name
        }
      })
    }
  }, [data])


  const Regions = useMemo(() => {
    return regionList?.map((i: any) => {
      return {
        value: i.id,
        label: i.name.uz,
      };
    });
  }, [regionList]);


  return (
    <div className="space-y-8">
      <div className="flex items-start gap-5">
        <CDriverImageUpload control={control} style={{ height: 200 }} name='first_image' zoomImg={true} label='Oldi qismi rasmi' defaultValue={driver?.images?.[0]} />
        <CDriverImageUpload control={control} style={{ height: 200 }} name='second_image' zoomImg={true} label='Salon qismi rasmi' defaultValue={driver?.images?.[1]} />
      </div>
      <div className="grid grid-cols-4 gap-4 mt-5">
        <HFSelect
          options={CarLists.list}
          name="car_id"
          control={control}
          placeholder="Mashina rusumu"
          label="Mashina rusumi"
          setValue={setValue}
          defaultValue={driver?.car_id}
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
        <HFSelect
          name="region_id"
          options={Regions}
          control={control}
          placeholder="Mashina viloyati"
          label="Mashina viloyati"
          setValue={setValue}
          defaultValue={driver?.region_id}
        />
      </div>
    </div>
  );
};

export default CarInfo;
