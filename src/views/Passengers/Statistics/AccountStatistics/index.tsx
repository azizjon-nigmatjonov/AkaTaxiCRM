import CCard from '../../../../components/CElements/CCard'
import { ArrowUp, ArrowDown, IncreaseIcon } from '../../../../components/IconGenerator/Svg'

const AccountStatistics = ({ data }: { data?: any }) => {
  return (
    <CCard style={{ minHeight: 0 }}>
      <p className='text-base font-medium text-[var(--black)]'>Umumiy Yo'lovchi</p>
      <div className='flex items-center justify-between'>
        <div>
          <p className='text-[var(--black)] text-3xl font-semibold'>120,000</p>
          <div className='flex items-center'>
            <ArrowUp fill={false} />
            <p className='text-[var(--darkerGray)] text-sm font-medium'><span className='text-[var(--darkerGreen)] mr-2'>40%</span>oxirgi oydan</p>
          </div>
        </div>
        <div>
          <IncreaseIcon />
        </div>
      </div>
    </CCard>
  )
}

export default AccountStatistics