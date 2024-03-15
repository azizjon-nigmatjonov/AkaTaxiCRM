import { useMemo } from "react";
// import ImageUploadBtn from "../../../../../components/Buttons/ImageUpload";
import HFTextField from "../../../../../components/FormElements/HFTextField";
import DImageUpload from "../../../../../components/CElements/CDivider/DImageUpload";
import HFSelect from "../../../../../components/FormElements/HFSelect";
import { useQuery } from "react-query";
import carService from "../../../../../services/cars";
import { useSelector } from "react-redux";
interface Props {
  control?: any;
  driver?: any;
  setValue?: (val?: any, val2?: any) => void;
}

const CarInfo = ({ control, setValue, driver = {} }: Props) => {
  const regions = useSelector((state: any) => state.regions.regions);

  
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
    return regions?.map((i: any) => {
      return {
        value: i.id,
        label: i.name.uz,
      };
    });
  }, [regions]);
  

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
        <DImageUpload control={control} style={{ height: 200 }} name='first_image' label='Oldi qismi rasmi' defaultValue={driver?.images?.[0]} />
        <DImageUpload control={control} style={{ height: 200 }} name='second_image' label='Salon qismi rasmi' defaultValue={driver?.images?.[1]} />
      </div>
      <div className="grid grid-cols-4 gap-4 mt-5">
        <HFSelect
          options={CarLists.list}
          name="car_id"
          control={control}
          placeholder="Mashina rusumu"
          label="Mashina rusumu"
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
          placeholder="Mashina voloyati"
          label="Mashina viloyati"
          setValue={setValue}
          defaultValue={driver?.region_id}
        />
      </div>
    </div>
  );
};

export default CarInfo;
