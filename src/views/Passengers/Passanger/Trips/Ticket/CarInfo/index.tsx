import { FlashIcon, PassengerManIcon, PassangerFemaleIcon, } from '../../../../../../components/IconGenerator/Svg'
import CarPlates from './Carplates'
import cls from './style.module.scss'

interface Props {
  result?: boolean
}

const CarInfo = ({ result = false }: Props) => {
  return (
    <div className={cls.Car}>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <FlashIcon />
          <div>
            <span className='text-sm font-normal'>Komfort klass</span>
            <p className='text-lg font-semibold'>BYD Qin Plus</p>
          </div>
        </div>
        <div>
          <div className='flex flex-col items-end'>
            <div className='p-[5px] bg-[--main] inline-flex rounded-md '>
              <PassengerManIcon />
            </div>
            <div className='flex items-center gap-1 mt-1'>
              <div className='p-[5px] bg-[--black] inline-flex rounded-md'>
                <PassangerFemaleIcon />
              </div>
              <div className='p-[5px] bg-[--black] inline-flex rounded-md'>
                <PassengerManIcon />
              </div>
              <div className='p-[5px] bg-[--black] inline-flex rounded-md'>
                <PassengerManIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex items-center gap-4 justify-between mt-6 p-4 bg-[var(--softGray)] rounded-lg'>
        <p className='text-base font-medium'>Yo'ldoshev Mirjaxon</p>
        <div className='border border-[var(--black)] rounded text-xs font-medium'>
          <CarPlates />
        </div>
      </div>

      {result && <div><div className={cls.rightTop} /> <div className={cls.rightBottom} /></div>}
    </div>
  )
}

export default CarInfo