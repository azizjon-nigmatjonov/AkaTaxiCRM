import { useSelector } from "react-redux";
import HFSelect from "../../../../../components/FormElements/HFSelect";
import HFTextField from "../../../../../components/FormElements/HFTextField"
import cls from '../style.module.scss';
import { useMemo } from "react";

interface Props {
    control?: any
}

const Info = ({ control }: Props) => {
    const regions = useSelector((state: any) => state.regions.regions)


    const Regions = useMemo(() => {
        return regions?.map((i: any) => {
            return {
                value: i.id,
                label: i.name.uz,
            };
        });
    }, [regions])

    return (
        <div className="divide-y-[1px] divide-[#EAECF0]">
            <div className={cls.flex}>
                <p className={cls.title}>Yo’lovchi ma’lumotlari</p>
                <div className="flex items-center gap-4  w-full">
                    <HFTextField name="passenger_phone" control={control} label="Tel raqami" placeholder="+9989 (--) --- -- --" />
                    <HFTextField name="passenger_name" control={control} label="Ism" placeholder="Ismni kiriting" />
                </div>
            </div>
            <div className={cls.flex}>
                <p className={cls.title}>Qayerdan</p>
                <div className="flex items-center gap-4  w-full">
                    <HFSelect name="start_location_id" control={control} label="Viloyat" options={Regions} placeholder="Select"/>
                    <HFTextField name="passenger_name" control={control} label="Tuman" />
                </div>
            </div>
        </div>
    )
}

export default Info