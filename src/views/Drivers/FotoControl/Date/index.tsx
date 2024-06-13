import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
interface Props {
    clickHandler: (e: any) => void
}



const Date = ({ clickHandler }: Props) => {

    return (
        <div onClick={clickHandler} className="relative">
            <div className=" w-[240px]  h-[40px] border border-[#D0D5DD] rounded-lg px-[14px] flex items-center justify-between cursor-pointer">
                <p className="text-[rgb(102,112,133)] text-base font-normal">Muddatni tanlang</p>
                {true ? <IoIosArrowDown size={18} color="#667085" /> : <IoIosArrowUp size={18} color="#667085" />}
            </div>
            
        </div>
    )
}

export default Date