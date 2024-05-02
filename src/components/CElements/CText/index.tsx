import HFTextarea from '../../../components/FormElements/HFTextarea'
import HFTextField from '../../../components/FormElements/HFTextField'
import CCard from '../CCard'

interface Props {
    control: any
}

const CText = ({ control }: Props) => {
    return (
        <CCard style={{ minHeight: 0 }}>
            <p className='text-base text-[var(--gray)] font-medium mb-4'>Text</p>
            <div className='space-y-3'>
                <HFTextField control={control} name='Text' placeholder='Input' required={true} />
                <HFTextarea control={control} name='description' placeholder='Input'/>
            </div>
        </CCard>
    )
}

export default CText