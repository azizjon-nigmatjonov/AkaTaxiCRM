import CCard from "../../../../components/CElements/CCard"
import { ListSkeleton } from "../../../../components/CElements/CSkeleton/ListSkeleton"
import { ArrowUp, ArrowDown } from '../../../../components/UI/IconGenerator/Svg'

export const StatisticsCard = ({ data, loading }: { data?: any, loading?: boolean }) => {
  console.log(loading);
  
  if (loading) {
    return <div>
      <ListSkeleton count={6} height={120} />
    </div>
  }

  return <div className="flex items-center gap-x-5 w-full overflow-scroll ">
    {data?.map(({ id, name, quantity, change }: { id?: number, name?: string, quantity?: number, change?: any }) => {
      return <CCard key={id} style={{ minHeight: 0, minWidth: '25%' }}>
        <div className="flex items-center gap-[18px]">
          {change > 0 ? <ArrowUp fill={true} /> : <ArrowDown fill={true} />}
          <div>
            <p className="text-[28px] font-semibold flex items-center gap-4">{quantity}<span className={`text-base ${change > 0 ? 'text-[var(--green)]' : 'text-[var(--danger)]'}`}>{change > 0 ? '+' + change : change}%</span></p>
            <p className="text-[var-(--gray)] text-sm ">{name}</p>
          </div>
        </div>
      </CCard>
    })}
  </div>
}