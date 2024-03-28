import { useEffect, useState } from "react";
import { AndroidIcon, AppleIcon, ManGenderIcon, WomenGenderIcon } from "../../components/IconGenerator/Svg"


interface PassengerProps {

    data: {
        name: string;
        male: number;
        female: number;
        active: number;
        ios: number;
        android: number;
    }
}



function Passenger({ data }: PassengerProps) {

    const [totalCount, setTotalCount] = useState<number>(0)

    useEffect(() => {

        if (data) {
            const total = data?.male + data?.female;
            setTotalCount(total)
        }

    }, [data])


    return (

        <div className={`max-w-[50%] p-6 w-full rounded-[12px] bg-white shadow-sm`
        }>
            <h3 className="text-[#101828] font-semibold">{data?.name}</h3>
            <div className="flex gap-[49px]">
                <div className="mt-6 relative">
                    <p className="text-[#475467] font-medium">Umumiy soni</p>
                    <p className="text-3xl font-semibold mt-2">{totalCount}</p>
                    <div className="flex gap-6 mt-[25px] before:w-[1px]  before:right-[-24px] before:h-[24px] before:absolute before:bg-[#EAECF0]">
                        <div className="flex gap-2 items-center">
                            <ManGenderIcon />
                            <span className="text-[#101828] font-semibold">{data?.male}</span>
                        </div>
                        <div className="flex gap-2 items-center">
                            <WomenGenderIcon />
                            <span>{data?.female}</span>
                        </div>
                    </div>

                </div>
                <div className="mt-6">
                    <p className="text-[#039855] font-medium">Aktiv</p>
                    <p className="text-3xl text-[#054F31] font-semibold mt-2">{data?.active}</p>

                    <div className="flex gap-6 mt-[25px]">
                        <div className="flex gap-2 items-center">
                            <AppleIcon />
                            <span className="text-[#101828] font-semibold">{data?.ios}</span>
                        </div>
                        <div className="flex gap-2 items-center">
                            <AndroidIcon />
                            <span>{data?.android}</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>


    )
}

export default Passenger
