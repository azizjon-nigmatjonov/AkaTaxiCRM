import { FlagIcon } from '../../../../../../../components/IconGenerator/Svg'

const CarPlates = () => {
    return (
        <div><div className='flex items-center '>
            <p className='text-xs p-2 border-r border-black'>01</p>
            <div className='flex gap-[6px] items-center px-2'>
                <p className='text-xs'>A 478 BC</p>
                <div>
                    <FlagIcon />
                    <p className='text-[5px] text-center'>uz</p>
                </div>
            </div>
        </div></div>
    )
}

export default CarPlates