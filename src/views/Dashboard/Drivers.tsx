import { AppleIcon } from "../../components/IconGenerator/Svg"
import { AndroidIcon } from "../../components/IconGenerator/Svg"
import { WomenGenderIcon } from "../../components/IconGenerator/Svg"
import { ManGenderIcon } from "../../components/IconGenerator/Svg"


function Drivers() {
    return (
        <div className={`max-w-[50%] p-6 w-full rounded-[12px] bg-white shadow-sm`
        }>
            <h3 className="text-[#101828] font-semibold">Haydovchilar</h3>
            <div className="flex gap-[49px]">
                <div className="mt-6 relative">
                    <p className="text-[#475467] font-medium">Umumiy soni</p>
                    <p className="text-3xl font-semibold mt-2">120 000</p>
                    <div className="flex gap-6 mt-[25px] before:w-[1px]  before:right-[-24px] before:h-[24px] before:absolute before:bg-[#EAECF0]">
                        <div className="flex gap-2 items-center">
                            <ManGenderIcon />
                            <span className="text-[#101828] font-semibold">110 000</span>
                        </div>
                        <div className="flex gap-2 items-center">
                            <WomenGenderIcon />
                            <span>110 000</span>
                        </div>
                    </div>

                </div>
                <div className="mt-6">
                    <p className="text-[#039855] font-medium">Aktiv</p>
                    <p className="text-3xl text-[#054F31] font-semibold mt-2">100</p>

                    <div className="flex gap-6 mt-[25px]">
                        <div className="flex gap-2 items-center">
                            <AppleIcon />
                            <span className="text-[#101828] font-semibold">110 000</span>
                        </div>
                        <div className="flex gap-2 items-center">
                            <AndroidIcon />
                            <span>110 000</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Drivers
