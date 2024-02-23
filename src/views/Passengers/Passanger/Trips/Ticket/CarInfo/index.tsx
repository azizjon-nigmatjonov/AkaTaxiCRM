import { FlashIcon, PassengerManIcon, PassangerFemaleIcon, } from '../../../../../../components/IconGenerator/Svg'
import Result from '../Result'
import CarPlates from './Carplates'
import cls from './style.module.scss'

interface Props {
  result?: boolean,
  data: any,
}

const CarInfo = ({ data: { car_class, car_name, driver_name, car_number_region, car_number, place_order, status } }: Props) => {

  let front = place_order ? place_order?.slice(0, 1) : []
  let back = place_order ? place_order?.slice(1, 6) : []

  return (
    <>
      {status != 'canceled' && <div className={cls.Car}>
        <div>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <FlashIcon />
              <div>
                <span className='text-sm font-normal'>{car_class}</span>
                <p className='text-lg font-semibold'>{car_name}</p>
              </div>
            </div>
            <div>
              <div className='flex flex-col items-end'>
                {front.map((val: any) => (
                  <div className={`p-[5px] ${val.is_mine ? 'bg-[--main]' : 'bg-[var(--black)]'} inline-flex rounded-md `}>
                    {val?.gender == 'm' ? <PassengerManIcon /> : <PassangerFemaleIcon />}
                  </div>
                ))}

                <div className='flex items-center gap-1 mt-1'>
                  {back?.map((val: any) => (
                    <div className={`p-[5px] ${val.is_mine ? 'bg-[--main]' : 'bg-[var(--black)]'} inline-flex rounded-md`}>
                      {val?.gender == 'm' ? <PassengerManIcon /> : <PassangerFemaleIcon />}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className='flex items-center gap-4 justify-between mt-6 p-4 bg-[var(--softGray)] rounded-lg'>
            <p className='text-base font-medium'>{driver_name}</p>
            <div className='border border-[var(--black)] rounded text-xs font-medium'>
              <CarPlates regionNum={car_number_region} carNum={car_number} />
            </div>
          </div>
        </div>
        {status != 'created' && <div><div className={cls.rightTop} /> <div className={cls.rightBottom} /></div>}
      </div>}
      {status != 'created' && <Result status={status} />}
    </>

  )
}

export default CarInfo


{/* <div className={`p-[5px] bg-[--main] inline-flex rounded-md `}>
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
</div> */}



