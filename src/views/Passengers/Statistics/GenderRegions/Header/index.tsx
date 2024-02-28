import { useEffect, useMemo, useState, memo } from 'react'
import StatisticsCard from '../../Statistics'

const PStaticsHeader = memo(({ data }: { data: any }) => {
    const [allUsers, setAllUsers] = useState<any>(0)
    const [men, setMen] = useState<any>(0)
    const [women, setWomen] = useState<any>(0)

console.log(data);

    const generalData: any = useMemo(() => {
        return data?.map((val: any) => {
            setAllUsers((prev: any) => prev + val?.all)
            setMen((prev: any) => prev + val?.male_users)
            setWomen((prev: any) => prev + val?.female_users)
        })
    }, [data])

    useEffect(() => {
        generalData
    }, [data])



    return (
        <div className='flex items-center justify-between border-b pb-6 border-[var(--lineGray)]'>
            <div>
                <p className='text-[var(--darkerGray)] text-3xl font-semibold'>Umumiy {allUsers} ta</p>
                <div className='flex items-center gap-6 mt-1'>
                    <div className='flex items-center gap-2'>
                        <div className='h-2 w-2 rounded-full bg-[var(--ink)]' />
                        <p>{men} ta</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <div className='h-2 w-2 rounded-full bg-[#FF35BA]' />
                        <p>{women} ta</p>
                    </div>
                </div>
            </div>
            <StatisticsCard data={{ men: '100', women: '50' }} />
        </div>
    )
})

export default PStaticsHeader