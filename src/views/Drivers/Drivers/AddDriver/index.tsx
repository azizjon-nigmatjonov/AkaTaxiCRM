import { Header } from '../../../../components/Header'
import CCard from '../../../../components/CElements/CCard'

const AddDriver = () => {

    return (
        <div>
            <Header title="Haydovchilar ro'yhati" titleIn="Yangi yo'lovchi" />
            <div className='px-6'>
                <CCard style={{ minHeight: 0 }}>
                    <div className='bg-[var(--softGray)] p-[10px] rounded-lg text-xs font-semibold'>Asosiy ma’lumotlar</div>
                </CCard>
            </div>
        </div>
    )
}

export default AddDriver