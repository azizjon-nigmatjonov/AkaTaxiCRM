import { useState } from 'react';
import Places from '../../../../../components/Places';
import cls from '../style.module.scss';
import { PassangerFemaleIcon, PassengerManIcon } from '../../../../../components/IconGenerator/Svg/index';
import { IoMdArrowDropright } from "react-icons/io";
interface Props {
    id: number,
    title: string,
    data: any,
    fee: number
}

const DATA = [
    {
        id: 1,
        title: 'Oldi',
        fee: 10,
        data: [{ gender: 'm', reserved: true }, { gender: 'false', reserved: false }, { gender: 'false', reserved: false }, { gender: 'false', reserved: false }]
    },
    {
        id: 2,
        title: 'Orqa o’ng',
        fee: 0,
        data: [{ gender: 'false', reserved: false }, { gender: 'false', reserved: false }, { gender: 'false', reserved: false }, { gender: 'm', reserved: true }]
    },
    {
        id: 3,
        title: 'O’rta',
        fee: -10,
        data: [{ gender: 'false', reserved: false }, { gender: 'false', reserved: false }, { gender: 'm', reserved: true }, { gender: 'false', reserved: false }]
    },
    {
        id: 4,
        title: 'Orqa chap',
        fee: 0,
        data: [{ gender: 'false', reserved: false }, { gender: 'm', reserved: true }, { gender: 'false', reserved: false }, { gender: 'false', reserved: false }]
    },
]

const SelectedSeating = ({ style, clickHandle }: { style?: any, clickHandle: any }) => {
    return <div className={` ${style}`} >
        <div className='bg-white relative z-10 shadow-md border border-[var(--lineGray)] p-4 rounded-2xl divide-x-2 divide-[var(--lineGray)] flex items-center'>
            <div className='pr-4' onClick={() => clickHandle('f')}>
                <PassangerFemaleIcon width={37} height={41} color='#FF5B01' />
            </div>
            <div onClick={() => clickHandle('m')} className='pl-4'>
                <PassengerManIcon width={37} height={41} color='#FF5B01' />
            </div>
        </div>
        <div className='absolute top-[50%] -translate-y-[50%]  -right-[27px]' >
            <IoMdArrowDropright color='white' size={40} />
        </div>
    </div>

}

const Seating = ({ seatingHandle = () => { } }: { seatingHandle: (val: any) => void }) => {
    const [seat, setSeating] = useState<any>(null);
    const [show, setShow] = useState(false);
    const result = useState([
        { place_number: 0, gender: 'false' },
        { place_number: 3, gender: 'false' },
        { place_number: 2, gender: 'false' },
        { place_number: 1, gender: 'false' }
    ])[0];

    let front = result.slice(0, 1);
    let back = result.slice(1)

    const clickHandler = (e: string) => {
        result?.forEach((val, idx) => {
            if (val.place_number == seat) {
                result[idx].gender = e
            }
        })
        seatingHandle(result);
        setShow(false)
    }


    return (
        <div className={cls.flex}>
            <p className={cls.title}>O'rindiq</p>
            <div className='flex items-center gap-6'>
                <div>
                    <p className={cls.title}>Tanlash</p>
                    <div className='bg-white border border-[var(--lineGray)] grid place-items-center p-6 h-[244px] w-[248px] rounded-xl'>
                        <div className='relative'>

                            {/* SEAT FRONT */}
                            {front.map((val: any) => (
                                <div className='px-1 border-r-2'>
                                    <div onClick={() => { setSeating(val.place_number), setShow(true) }} className={`relative ${val.gender != 'false' ? 'bg-[#FF5B01]' : 'bg-[#EAEAEB]'} h-9 w-9 grid place-items-center rounded-lg  ml-auto cursor-pointer`} >
                                        {val.gender == 'false' ? null : val.gender == 'm' ? <PassengerManIcon width={20} height={23} /> : <PassangerFemaleIcon width={20} height={23} />}
                                    </div>
                                    {seat == 0 && show && <SelectedSeating clickHandle={clickHandler} style={'absolute top-[-20px] right-[40px]'} />}
                                </div>
                            ))}

                            {/* SEAT BACKSIDE */}
                            <div className='flex items-center gap-1 p-1 border-b-2 border-r-2 border-l-2 rounded-b-lg '>
                                {back?.map((val: any) => (
                                    <div className='relative'>
                                        <div onClick={() => { setSeating(val.place_number), setShow(true) }} className={`relative ${val.gender != 'false' ? 'bg-[#FF5B01]' : 'bg-[#EAEAEB]'} h-9 w-9 grid place-items-center rounded-lg  ml-auto cursor-pointer`} >
                                            {val.gender == 'false' ? null : val.gender == 'm' ? <PassengerManIcon width={20} height={23} /> : <PassangerFemaleIcon width={20} height={23} />}
                                        </div>
                                        {seat == val.place_number && show && <SelectedSeating clickHandle={clickHandler} style={'absolute top-[-20px] right-[120%]'} />}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col justify-between gap-4'>
                    {DATA?.map(({ id, data, title, fee }: Props) => (
                        <div className='flex items-start gap-4' key={id}>
                            <Places data={data} />
                            <div>
                                <p className={` font-semibold text-lg`}>{title}</p>
                                <span className={`${fee == 0 ? 'text-[var(--gray)]' : fee > 0 ? 'text-[var(--main)]' : 'text-[var(--green)]'} text-base font-normal`}>{fee > 0 ? '+' + fee : fee}%</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    )
}

export default Seating