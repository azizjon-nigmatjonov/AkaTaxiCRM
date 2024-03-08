import { useMemo, memo } from 'react'
import StatisticsCard from '../../Statistics'
import { Skeleton } from '@mui/material';

const StaticsHeader = memo(({ data, loading }: { data: any, loading: boolean }) => {

    const gender: any = useMemo(() => {
        if (!data) return [];
        return {
            men: data?.map((val: any) => val.male_users).reduce((a: number, b: number) => { return a + b }, 0),
            female: data?.map((val: any) => val.female_users).reduce((a: number, b: number) => { return a + b }, 0),
        }
    }, [data])



    const percentage: any = useMemo(() => {
        let allUsers = gender.men + gender.female
        let men = Math.trunc(gender.men ? (gender.men / allUsers) * 100 : 0)
        let female = Math.trunc(gender.female ? (gender.female / allUsers) * 100 : 0)
        return { allUsers, men, female }
    }, [gender, data])



    return (
        <>
            {loading ?
                <div className='flex items-center justify-between '>
                    <div>
                        <Skeleton variant="rectangular" width={210} height={50} />
                        <Skeleton variant="rounded" width={150} height={20} sx={{ marginTop: 1 }} />
                    </div>
                    <Skeleton variant="circular" width={70} height={70} />
                </div>
                : <div className='flex items-center justify-between border-b pb-6 border-[var(--lineGray)]'>
                    <div>
                        <p className='text-[var(--darkerGray)] text-3xl font-semibold'>Umumiy {percentage.allUsers} ta</p>
                        <div className='flex items-center gap-6 mt-1'>
                            <div className='flex items-center gap-2'>
                                <div className='h-2 w-2 rounded-full bg-[var(--ink)]' />
                                <p>{gender.men} ta</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <div className='h-2 w-2 rounded-full bg-[#FF35BA]' />
                                <p>{gender.female} ta</p>
                            </div>
                        </div>
                    </div>
                    <StatisticsCard data={{ men: percentage.men, women: percentage.female }} />

                </div>
            }
        </>

    )
})

export default StaticsHeader