import { useMemo, useState } from "react"
import CRadio from "../../../components/CElements/Radio"
import CCard from "../../../components/CElements/CCard"
import DropDown from "../../../components/FormElements/DropDown"
import HFSelect from "../../../components/FormElements/HFSelect"
import { useSelector } from "react-redux"
import CText from "../../../components/CElements/CText"
import AddButton from "../../../components/Buttons/AddButton"

interface Props {
    control?: any,
    submitHandler: (evt: any) => void,
}

const Divice = [
    { value: 'ios', label: 'IOS' },
    { value: 'android', label: 'Android' }
]

const Version = [
    { value: 'v 1.1.04', label: 'v 1.1.04' },
    { value: 'v 1.1.03', label: 'v 1.1.03' },
    { value: 'v 1.1.02', label: 'v 1.1.02' },
    { value: 'v 1.1.01', label: 'v 1.1.01' },
]


const Setting = ({ control, submitHandler, }: Props) => {
    const [value, setValue] = useState('Hammasi')

    const handleChange = (e: any) => {
        setValue(e)
        submitHandler(e)
    }

    const regions = useSelector((state: any) => state.regions.regions);

    const Regions = useMemo(() => {
        return regions?.map((i: any) => {
            return {
                value: i.id,
                label: i.name.uz,
            };
        });
    }, [regions]);


    return (
        <div className="space-y-6">

            <CCard style={{ minHeight: 0 }}>
                <span className="text-base text-[#858592] font-medium">Kimga yuborish kerak?</span>
                <div className="flex items-center gap-3 max-w-[633px] my-4">
                    <CRadio label={'Hammasi'} value={value} handleChange={handleChange} />
                    <CRadio label={'Haydovchi'} value={value} handleChange={handleChange} />
                    <CRadio label={"Yo'lovchi"} value={value} handleChange={handleChange} />
                </div>

                <div className="flex items-center justify-between gap-2">
                    <DropDown label="Vaqt" name="Vaqt" placeholder="Tanlang" defaultValue={'01.01-.01.01'} />
                    <HFSelect control={control} options={Divice} name={'system'} label="Operatsion sistema" placeholder="Tanglang" />
                    <HFSelect control={control} options={Version} name={'version'} label="Versiyalar" placeholder="Tanglang" />
                    <HFSelect control={control} options={[{ label: 'Erkak', value: 'm' }, { label: 'Ayol', value: 'f' }]} name={'gender'} label="Jinsi  " placeholder="Tanglang" />
                    <HFSelect control={control} options={Regions} name={'place'} label="Yashash joyi " placeholder="Tanglang" />
                </div>
            </CCard>

            <CText control={control} />

            <div className="flex justify-end">
                <div>
                    <AddButton iconLeft={false} text='Bildirishnomani yuborish' onClick={submitHandler} />
                </div>
            </div>
        </div>

    )
}

export default Setting