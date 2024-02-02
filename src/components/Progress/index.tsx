import StartProgress from './CircularProgressWithLabel'
interface Props {
    name?: string,
    quantity?: number,
    percentage?: number;
    size?: number,
    data?: any;
    color?: string
    icon?: any
}

const Progress = ({ data, size, color, icon }: Props) => {
    return (
        <div className='grid grid-cols-4 2xl:grid-cols-5 gap-5'>
            {data?.map(({ name, quantity, percentage }: Props) => <StartProgress icon={icon} color={color} size={size} regionSize={quantity} regionName={name} value={percentage} />)}
        </div>
    )
}

export default Progress