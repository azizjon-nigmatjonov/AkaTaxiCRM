import { useSelector } from "react-redux";
import HFSelect from "../../../../../components/FormElements/HFSelect";
import HFTextField from "../../../../../components/FormElements/HFTextField"
import cls from '../style.module.scss';
import { useMemo, useState } from "react";
import HFInputMask from "../../../../../components/FormElements/HFInputMask";
interface Props {
    control?: any
}

const Info = ({ control }: Props) => {
    const regions = useSelector((state: any) => state.regions.regions);
    const [fromDistrics, setFromDistrics] = useState([])
    const [fromVillages, setFromVillages] = useState([])

    const [toDistrics, setToDistrics] = useState([])
    const [toVillages, setToVillages] = useState([])

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
                setFromDistrics(regions[i].list?.map((i: any) => {
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
        fromDistrics.map((val: any) => {
            if (e == val.value) {
                if (!fromVillages.length) {
                    setFromVillages(val.villages?.map((val: any) => {
                        return {
                            value: val.id,
                            label: val.name.uz
                        }
                    }))
                } else {
                    setToVillages(val.villages?.map((val: any) => {
                        return {
                            value: val.id,
                            label: val.name.uz
                        }
                    }))
                }
            }
        })

    }

    const ToHandlerDistrics = (e: any) => {
        for (let i = 0; i < regions.length; i++) {
            if (regions[i].id == e) {
                setToDistrics(regions[i].list?.map((i: any) => {
                    return {
                        value: i.id,
                        label: i.name.uz,
                        villages: i.village
                    }
                }))
            }
        }
    }

    const toHandlerVillage = (e: any) => {
        fromDistrics.map((val: any) => {
            if (e == val.value) {
                setToVillages(val.villages?.map((val: any) => {
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
                    <HFInputMask
                        name="passenger_phone"
                        control={control}
                        label="Tel raqami"
                        placeholder={`+998 -- --- -- --`}
                        mask={"+\\9\\9\\8 99 999 99 99"}
                    />
                    <HFTextField name="passenger_name" control={control} label="Ism" placeholder="Ismni kiriting" />
                </div>
            </div>

            {/* From distance */}
            <div className={cls.flex}>
                <p className={cls.title}>Qayerdan</p>
                <div className={cls.parent}>
                    <div className={cls.inputs}>
                        <HFSelect name="from_region" onChange={handlerDistrics} control={control} label="Viloyat" options={Regions} placeholder="Select" />
                        <HFSelect name="start_location_id" onChange={handlerVillage} control={control} options={fromDistrics} label="Tuman" placeholder="Select" />
                    </div>
                    <div className="mt-4">
                        <HFSelect name='from_village_id' onChange={handlerVillage} control={control} options={fromVillages} label="Qishloq (mahalla yoki ko'cha)" placeholder="Select" />
                    </div>
                </div>
            </div>

            {/* To distance */}
            <div className={cls.flex}>
                <p className={cls.title}>Qayerga</p>
                <div className={cls.parent}>
                    <div className={cls.inputs}>
                        <HFSelect name="to_region" onChange={ToHandlerDistrics} control={control} label="Viloyat" options={Regions} placeholder="Select" />
                        <HFSelect name="end_location_id" onChange={toHandlerVillage} control={control} options={toDistrics} label="Tuman" placeholder="Select" />
                    </div>
                    <div className="mt-4">
                        <HFSelect name='to_village_id' onChange={toHandlerVillage} control={control} options={toVillages} label="Qishloq (mahalla yoki ko'cha)" placeholder="Select" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info