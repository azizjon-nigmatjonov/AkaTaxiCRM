import usePageRouter from '../../../../../hooks/useObjectRouter'
import Detail from './Detail'


const YEARS = [
    { label: '2024', value: '2024' },
    { label: '2023', value: '2023' },
]

const MONTH = [
    { label: 'Yanvar', value: '1' },
    { label: 'Fevral', value: '2' },
    { label: 'Mart', value: '3' },
    { label: 'Aprel', value: '4' },
    { label: 'May', value: '5' },
    { label: 'Iyun', value: '6' },
    { label: 'Iyul', value: '7' },
    { label: 'Avgust', value: '8' },
    { label: 'Sentabr', value: '9' },
    { label: 'Oktabr', value: '10' },
    { label: 'Noyabr', value: '11' },
    { label: 'Dekabr', value: '12' },
]

const WEEK = [
    { label: '1-7', value: '1' },
    { label: '8-14', value: '2' },
    { label: '15-22', value: '5' },
    { label: '23-30', value: '4' },
]



const Form = ({ value }: { value: string }) => {
    const { navigateQuery } = usePageRouter();

    const handlerYear = (evt: string) => {
        navigateQuery({ year: evt })
    }

    const handlerMonth = (evt: string) => {
        navigateQuery({ month: evt })
    }

    const handleWeek = (evt: string) => {
        navigateQuery({ week: evt })
    }

    return (
        <div className='bg-[var(--softGray)] mt-4 p-4 rounded-lg flex gap-3'>
            <Detail handlerValue={handlerYear} disabled={value} label='Yil' options={YEARS} />
            <Detail handlerValue={handlerMonth} disabled={value} label='Oy' options={MONTH} />
            <Detail handlerValue={handleWeek} disabled={value} label='Hafta (Du-Ya)' options={WEEK} />
        </div>
    )
}

export default Form