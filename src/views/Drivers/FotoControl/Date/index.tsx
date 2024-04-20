import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
const Date = () => {
    return (
        <div>
            <div className="w-[240px]  h-[40px] border border-[#D0D5DD] rounded-lg px-[14px] flex items-center justify-between cursor-pointer">
                <p className="text-[#667085] text-base font-normal">Muddatni tanlang</p>
                {true ? <IoIosArrowDown size={18} color="#667085" /> : <IoIosArrowUp size={18} color="#667085" />}
            </div>
        </div>
    )
}

export default Date