import { useState } from 'react';
import SwitchBtn from '../../../../../components/Buttons/Switch';
import cls from '../style.module.scss';
import { StandarCarImgIcon, ConfortCarImgIcon, BusnissCarImgIcon, CheckLine } from '../../../../../components/IconGenerator/Svg/index';

const CARCLASS = [
    { id: 1, name: 'Standart', price: 160000, Images: StandarCarImgIcon },
    { id: 2, name: 'Komfort', price: 180000, Images: ConfortCarImgIcon },
    { id: 3, name: 'Biznes', price: 220000, Images: BusnissCarImgIcon },
]

const Features = ({ featureHandle = () => { } }: { featureHandle: (val: any) => void }) => {
    const [features, setFeatures] = useState<any>({
        air_conditioner: false,
        additional_trunk: false,
        chargers: false,
        heater: false,
        petrol: true,
        gas: false,
        electric: false,
        driver_gender: [],
        can_stop: false,
        car_class_id: 1,
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
                                ? "border-[var(--mainLight)] bg-[var(--mainLight)]"
                                : "border-[var(--lineGray)]"
                                }`}
                        >
                            {features.driver_gender.includes('m') ? <CheckLine /> : ""}
                        </div>
                        Erkak
                    </div>
                    <div onClick={() => handleCheck('driver_gender', 'f')} className={`cursor-pointer flex items-center gap-2 pl-[14px] font-medium border border-[var(--lineGray)] rounded-[10px] h-[48px]`}>
                        <div
                            className={`w-[18px] h-[18px] rounded-[4px] border-2 ${features.driver_gender.includes('f') ? "border-[var(--mainLight)] bg-[var(--mainLight)]"
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
                        {CARCLASS.map(({ id, name, price, Images }) => (
                            <div onClick={() => handleCheck('car_class_id', id)} className={`p-3 ${features.car_class_id == id ? 'bg-[var(--lineGray)]' : ''} hover:bg-[var(--lineGray)] rounded-xl cursor-pointer`}>
                                <Images />
                                <div className='mt-4'>
                                    <p className='text-xs text-[var(--gray)] font-medium'>{name}</p>
                                    <p className='text-base font-semibold text-[var(--black)]'>{price}</p>
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