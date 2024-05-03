import { CheckLine } from "../../../components/UI/IconGenerator/Svg"
import { useState } from "react"

interface Props {
  text: string
}

const CCheckbox = ({ text }: Props) => {
  const [checked, setChecked] = useState(false)
  return (
    <div onClick={()=> setChecked(!checked)} className='flex items-center gap-2 cursor-pointer p-[14px] rounded-lg border border-[#D0D5DD] w-full'>
      <div
        className={`w-[18px] h-[18px] rounded-[4px] border-2 ${checked ? "border-[var(--mainLight)] bg-[var(--mainLight)]"
          : "border-[var(--lineGray)]"
          }`}
      >
        {checked ? <CheckLine /> : ""}
      </div>
      <p>{text}</p>
    </div>
  )
}

export default CCheckbox