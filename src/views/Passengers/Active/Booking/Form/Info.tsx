import { useSelector } from "react-redux";
import HFSelect from "../../../../../components/FormElements/HFSelect";
import HFTextField from "../../../../../components/FormElements/HFTextField"
import cls from '../style.module.scss';
import { useMemo, useState } from "react";

interface Props {
    control?: any
}

const Info = ({ control }: Props) => {
    const regions = useSelector((state: any) => state.regions.regions);
    const [districs, setDistrics] = useState([])
    const [villages, setVillages] = useState([])

    const Regions = useMemo(() => {
        return regions?.map((i: any) => {
            return {
                value: i.id,
                label: i.name.uz,
            };
        });
    }, [regions])

    const handlerDistrics = (e: any) => {
        for (let i = 0; i < regions.length; i++) {
            if (regions[i].id == e) {
                setDistrics(regions[i].list?.map((i: any) => {
                    return {
                        value: i.id,
                        label: i.name.uz,
                        villages: i.village
                    }
                }))
            }
        }
    }

    const handlerVillage = (e: any) => {        
        districs.map((val: any) => {
           if(e == val.value){
            console.log(val.villages);
            
            setVillages(val.villages?.map((val:any)=>{
               return {
                value: val.id,
                label: val.name.uz
               }
            }))            
           }
        })

    }

    






    return (
        <div className="divide-y-[1px] divide-[#EAECF0]">

            {/* USER info */}
            <div className={cls.flex}>
                <p className={cls.title}>Yo’lovchi ma’lumotlari</p>
                <div className={`${cls.inputs} flex w-full max-w-[800px] gap-4`}>
                    <HFTextField name="passenger_phone" control={control} label="Tel raqami" placeholder="+9989 (--) --- -- --" />
                    <HFTextField name="passenger_name" control={control} label="Ism" placeholder="Ismni kiriting" />
                </div>
            </div>

            {/* From distance */}
            <div className={cls.flex}>
                <p className={cls.title}>Qayerdan</p>
                <div className={cls.parent}>
                    <div className={cls.inputs}>
                        <HFSelect name="start_location_id" onChange={handlerDistrics} control={control} label="Viloyat" options={Regions} placeholder="Select" />
                        <HFSelect name="from_village_id" onChange={handlerVillage} control={control} options={districs} label="Tuman" placeholder="Select" />
                    </div>
                    <div className="mt-4">
                        <HFSelect name='village' onChange={handlerVillage} control={control} options={villages} label="Qishloq (mahalla yoki ko'cha)" placeholder="Select" />
                    </div>
                </div>
            </div>

            {/* To distance */}
            <div className={cls.flex}>
                <p className={cls.title}>Qayerga</p>
                <div className={cls.parent}>
                    <div className={cls.inputs}>
                        <HFSelect name="start_location_id" onChange={handlerDistrics} control={control} label="Viloyat" options={Regions} placeholder="Select" />
                        <HFSelect name="from_village_id" onChange={handlerVillage} control={control} options={districs} label="Tuman" placeholder="Select" />
                    </div>
                    <div className="mt-4">
                        <HFSelect name='village' onChange={handlerVillage} control={control} options={districs} label="Qishloq (mahalla yoki ko'cha)" placeholder="Select" />
                    </div>
                </div>
            </div>

            {/* SEAT  */}
            <div className={cls.flex}>
                <p className={cls.title}>O’rindiq</p>
            </div>
        </div>
    )
}

export default Info