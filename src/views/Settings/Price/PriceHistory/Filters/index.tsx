import HFSelect from "../../../../../components/FormElements/HFSelect"
// import CFilterTab from "../../../../../components/CElements/CFilterTab"
import { useForm } from "react-hook-form"
import { Months } from "../../../../../mixins/month"

const Filters = () => {

  const { control } = useForm()

  const yearOptions = [
    { label: '2024', value: 2024 },
    { label: '2023', value: 2023 },
  ]


  return (
    <div>
      <div>
        <p className="text-base font-semibold">Narxlar o’zgarishi</p>
      </div>
      <div className="p-4 rounded-xl bg-[#F9FAFB] flex items-center gap-3 my-4">
        <HFSelect control={control} name={'year'} label="Yil" options={yearOptions} defaultValue={new Date().getFullYear()} />
        <HFSelect control={control} name={'month'} label="Oy" options={Months} defaultValue={new Date().getMonth()} />
        <HFSelect control={control} name={'week'} label="Hafta" options={Months} placeholder={'Tanglang'} />
      </div>
    </div>
  )
}

export default Filters