// import MenuItem from "@mui/material/MenuItem";
// import Select, { SelectChangeEvent } from "@mui/material/Select";
// import CLabel from "../CLabel";
import { ArrowDownOutline } from "../../../components/UI/IconGenerator/Svg";
import { useState } from "react";
import './style.scss';

interface Props {
    id?: string;
    options: any;
    label?: string;
    handlerValue?: (val: any) => void;
    disabled?: boolean;
    placeholder?: string;
    value?: any;
    classes?: string;
}

const CSelectColor = ({ options }: Props) => {
    options = [
        {
            value: 'drop',
            label: "Ko'tarmadi",
        },
        {
            value: 'driver_check',
            label: 'Haydovchi tekshirdi',
        },
        {
            value: 'passenger_check',
            label: "Yo'lovchi tekshirdi",
        },
        {
            value: 'regions',
            label: "Tumanlar aro",
        },
        {
            value: 'go',
            label: "Ketti",
        },
        {
            value: 'not_found',
            label: "Taksi topilmadi",
        },
        {
            value: 'expensive',
            label: 'Qimmat',
        },
    ]

    const [value, setValue] = useState(options[0].label)
    const [drop, setDrop] = useState(false)


    
    return (
        <div className="w-full relative h-full  cursor-pointer">
            <div className="flex items-center gap-2">
                <div onClick={()=>setDrop(prev => !prev)} className={`${drop && 'rotate-180'}`}>
                    <ArrowDownOutline height={16} width={16} />
                </div>
                <div>
                    <div onClick={() => setDrop(prev => !prev)} className={`rounded-2xl border-2 border-red-500 px-6px py-2px flex items-center gap-1`}>
                        <div className={`h-2 w-2 rounded-full bg-red-500`}/>
                        <p className={ `text-red-500 text-xs  font-medium`}>{value}</p>
                    </div>
                    {drop && <div className="menu absolute z-10 top-full left-0 h-[210px] bg-white mt-1 card-shadow border-gray-20 space-y-20px p-6 w-full rounded-lg">
                        {options.map((item: any) => (
                            <div className="flex" onClick={() => { setValue(item.label), setDrop(prev => !prev) }}>
                                <div className={`rounded-2xl border-2  border-[#027A48] px-6px py-2px flex items-center gap-1`}>
                                    <div className={`bg-[#027A48] h-2 w-2 rounded-full `} />
                                    <p className={`text-[#027A48] text-xs  font-medium`}>{item.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default CSelectColor