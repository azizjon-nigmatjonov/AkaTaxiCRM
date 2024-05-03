import { CheckLine } from "../../../components/UI/IconGenerator/Svg"
import { useState } from "react"

interface Props {
  element: any;
  handleCheck?: (val: any) => void
}

const CCheckbox = ({ element, handleCheck = () =>{} }: Props) => {
  const [checked, setChecked] = useState(false)

  console.log(element);
  
  const check = (obj: boolean) => {
    handleCheck(obj )
    setChecked(obj)
  }

  return (
    <div onClick={()=> check(element)} className='flex items-center gap-2 cursor-pointer p-[14px] rounded-lg border border-[#D0D5DD] w-full'>
      <div
        className={`w-[18px] h-[18px] rounded-[4px] border-2 ${checked ? "border-[var(--mainLight)] bg-[var(--mainLight)]"
          : "border-[var(--lineGray)]"
          }`}
      >
        {checked ? <CheckLine /> : ""}
      </div>
      <p>{element.label}</p>
    </div>
  )
}

export default CCheckbox