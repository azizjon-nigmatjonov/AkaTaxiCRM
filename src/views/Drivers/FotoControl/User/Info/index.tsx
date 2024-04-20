import CCard from '../../../../../components/CElements/CCard'

const DriverInfo = ({ data }: { data?: any }) => {
    return (
        <CCard style={{ minHeight: 0 }}>
            <p className='text-lg font-semibold'>Ma’lumotlar</p>
            <div className='flex items-center justify-between mt-8'>
                <div className='space-y-2'>
                    <span className='text-sm text-[var(--gray)]'>Ism familiya</span>
                    <p className='text-base font-medium'>{data?.full_name}</p>
                </div>
                <div className='space-y-2'>
                    <span className='text-sm text-[var(--gray)]'>Telefon raqami</span>
                    <p className='text-base font-medium'>+{data?.phone}</p>
                </div>
                <div className='space-y-2'>
                    <span className='text-sm text-[var(--gray)]'>Mashina modeli</span>
                    <p className='text-base font-medium'>{data?.car_name}</p>
                </div>
                <div className='space-y-2'>
                    <span className='text-sm text-[var(--gray)]'>Mashina  raqami</span>
                    <p className='text-base font-medium'>{data?.car_number}</p>
                </div>
                <div className='space-y-2'>
                    <span className='text-sm text-[var(--gray)]'>Plastik raqami</span>
                    <p className='text-base font-medium'>{data?.card_number}</p>
                </div>
            </div>
        </CCard>
    )
}

export default DriverInfo