import HFSelect from "../../../../../components/FormElements/HFSelect"
// import CFilterTab from "../../../../../components/CElements/CFilterTab"
import { useForm } from "react-hook-form"
import { Months } from "../../../../../mixins/month"
import { getWeekDays, getYears, } from "../../../../../utils/getMonth"
import CFilterTab from "../../../../../components/CElements/CFilterTab"

const CTabList = [
  {
    label:'Oylik',
    value: 'month'
  },
  {
    label:'Haftalik',
    value: 'week'
  }
] 

const Filters = () => {

  const { control } = useForm()

  return (

    <div>
      <div className="flex items-center justify-between">
        <p className="text-base font-semibold">Narxlar o’zgarishi</p>
        <CFilterTab  />
      </div>
      <div className="p-4 rounded-xl bg-[#F9FAFB] flex items-center gap-3 my-4">
        <HFSelect control={control} name={'year'} label="Yil" options={getYears()} defaultValue={new Date().getFullYear()} />
        <HFSelect control={control} name={'month'} label="Oy" options={Months} defaultValue={new Date().getMonth()} />
        <HFSelect control={control} name={'week'} label="Hafta" options={getWeekDays()} placeholder={'Tanglang'} />
      </div>
    </div>

  )
}

export default Filters