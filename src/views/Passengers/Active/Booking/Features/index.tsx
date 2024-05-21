import { useState } from 'react';
import SwitchBtn from '../../../../../components/UI/Buttons/Switch';
import cls from '../style.module.scss';
import { StandarCarImgIcon, ConfortCarImgIcon, BusnissCarImgIcon, CheckLine, ByWayCarImage } from '../../../../../components/UI/IconGenerator/Svg/index';



const Features = ({ featureHandle = () => { }, price }: { featureHandle: (val: any) => void, price: any }) => {
    const [features, setFeatures] = useState<any>({
        air_conditioner: true,
        additional_trunk: true,
        chargers: true,
        heater: true,
        petrol: true,
        gas: true,
        electric: true,
        driver_gender: ['m', 'f'],
        can_stop: true,
        car_class_id: null,
    })

    const handleCheck = (name: string, check: any) => {
        let obj = features
        for (let i in features) {
            if (i == name) {
                if (Array.isArray(obj[i])) {
                    obj[i].length ? obj[i].map((val: any, idx: any) => val == check ? obj[i].splice(idx, 1) : obj[i].includes(check) ? obj[i].splice(obj[i].indexOf(check), 1) : obj[i].push(check)) : obj[i].push(check)
                    console.log(obj[i]);
                    setFeatures({ ...obj })
                }
                else {
                    obj[i] = check
                    setFeatures({ ...features, ...obj })
                }
            }
        }
        featureHandle(obj)
    }


    const CARCLASS = [
        { id: 0, name: 'Yo’l-yo’lakay', price: price.business ?? 0, Images: ByWayCarImage },
        { id: 1, name: 'Standart', price: price.standard ?? 0, Images: StandarCarImgIcon },
        { id: 2, name: 'Komfort', price: price.comfort ?? 0, Images: ConfortCarImgIcon },
        { id: 3, name: 'Business', price: price.business ?? 0, Images: BusnissCarImgIcon },
     
    ]


    return (
        <>
            <div className={cls.flex}>
                <p className={cls.title}>Qo‘shimcha funksiyalar</p>
                <div className={cls.parent}>
                    <div className='grid grid-cols-2 gap-4 w-full'>
                        <SwitchBtn
                            text='Konditsioner'
                            name='air_conditioner'
                            checked={features.air_conditioner}
                            handleCheck={handleCheck}
                            group="a"
                        />
                        <SwitchBtn
                            text='Qo‘shimcha yukxona'
                            name='additional_trunk'
                            checked={features.additional_trunk}
                            handleCheck={handleCheck}
                            group="a"
                        />
                        <SwitchBtn
                            text='Quvvatlagich'
                            name='chargers'
                            checked={features.chargers}
                            handleCheck={handleCheck}
                            group="a"
                        />
                        <SwitchBtn
                            text='Pechka'
                            name='heater'
                            checked={features.heater}
                            handleCheck={handleCheck}
                            group="a"
                        />
                    </div>
                </div>
            </div>

            <div className={cls.flex}>
                <p className={cls.title}>Yoqilg‘i turi</p>
                <div className={cls.parent}>
                    <div className='grid grid-cols-2 gap-4 w-full'>
                        <SwitchBtn
                            text='Benzin'
                            name='petrol'
                            checked={features.petrol}
                            handleCheck={handleCheck}
                            group="a"
                        />
                        <SwitchBtn
                            text='Gas'
                            name='gas'
                            checked={features.gas}
                            handleCheck={handleCheck}
                            group="a"
                        />
                        <SwitchBtn
                            text='Elektro'
                            name='electric'
                            checked={features.electric}
                            handleCheck={handleCheck}
                            group="a"
                        />
                    </div>
                </div>
            </div>

            <div className={cls.flex}>
                <p className={cls.title}>Haydovchi jinsi</p>
                <div className={`${cls.parent} grid grid-cols-2 gap-6`}>
                    <div onClick={() => handleCheck('driver_gender', 'm')} className={`cursor-pointer flex items-center gap-2 pl-[14px] font-medium border border-[var(--lineGray)] rounded-[10px] h-[48px]`}>
                        <div
                            className={`w-[18px] h-[18px] rounded-[4px] border-2 ${features.driver_gender.includes('m')
                                ? "border-[var(--main500)] bg-[var(--main500)]"
                                : "border-[var(--lineGray)]"
                                }`}
                        >
                            {features.driver_gender.includes('m') ? <CheckLine /> : ""}
                        </div>
                        Erkak
                    </div>

                    <div onClick={() => handleCheck('driver_gender', 'f')} className={`cursor-pointer flex items-center gap-2 pl-[14px] font-medium border border-[var(--lineGray)] rounded-[10px] h-[48px]`}>
                        <div
                            className={`w-[18px] h-[18px] rounded-[4px] border-2 ${features.driver_gender.includes('f') ? "border-[var(--main500)] bg-[var(--main500)]"
                                : "border-[var(--lineGray)]"
                                }`}
                        >
                            {features.driver_gender.includes('f') ? <CheckLine /> : ""}
                        </div>
                        Ayol
                    </div>
                    
                </div>
            </div>

            <div className={cls.flex}>
                <p className={cls.title}>Boshqalar</p>
                <div className={cls.parent}>
                    <SwitchBtn
                        text='Yo‘lda bir muddatga to‘xtash'
                        name='can_stop'
                        checked={features.can_stop}
                        handleCheck={handleCheck}
                        group="a"
                    />
                </div>
            </div>

            <div className={cls.flex}>
                <p className={cls.title}>Klas</p>
                <div className={cls.parent}>
                    <div className='flex items-center gap-4'>
                        {CARCLASS?.map(({ id, name, price, Images }) => (
                            <div onClick={() => handleCheck('car_class_id', id)} className={`p-3 ${features.car_class_id == id ? 'bg-[var(--lineGray)]' : ''} hover:bg-[var(--lineGray)] rounded-xl cursor-pointer`}>
                                <Images />
                                <div className='mt-4'>
                                    <p className='text-xs text-[var(--gray)] font-medium'>{name}</p>
                                    <p className='text-base font-semibold text-[var(--black)]'>{price} so'm</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>

    )
}

export default Features