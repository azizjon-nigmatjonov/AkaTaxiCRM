import Detail from './Detail'


const YEARS = [
    { label: '2023', value: '2023' },
    { label: '2024', value: '2024' },
]

const MONTH = [
    { label: 'Yanvar', value: 'Yanvar' },
    { label: 'Fevral', value: 'Fevral' },
    { label: 'Mart', value: 'Mart' },
    { label: 'Aprel', value: 'Aprel' },
    { label: 'May', value: 'May' },
    { label: 'Iyun', value: 'Iyun' },
    { label: 'Iyul', value: 'Iyul' },
    { label: 'Avgust', value: 'Avgust' },
    { label: 'Sentabr', value: 'Sentabr' },
    { label: 'Oktabr', value: 'Oktabr' },
    { label: 'Nayabr', value: 'Noyabr' },
    { label: 'Dekabr', value: 'Dekabr' },
]

const WEEK = [
    { label: '1-7', value: '1-7' },
    { label: '8-14', value: '8-14' },
    { label: '15-22', value: '15-22' },
    { label: '23-30', value: '23-30' },
]



const Form = ({ value }: { value: string }) => {

    return (
        <div className='bg-[var(--softGray)] mt-4 p-4 rounded-lg flex gap-3'>
            <Detail disabled={value} label='Yil' options={YEARS} />
            <Detail  disabled={value} label='Oy' options={MONTH} />
            <Detail  disabled={value} label='Hafta (Da-Ya)' options={WEEK} />
        </div>
    )
}

export default Form