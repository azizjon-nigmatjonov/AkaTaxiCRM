import { useMemo } from 'react'
import CarInfo from './CarInfo';
import Location from './Location';
import { InfoErrorIcon } from '../../../../../components/IconGenerator/Svg';


const Ticket = ({ data }: { data: any }) => {

  const ticketData = useMemo(() => {
    return (
      data?.map((data: any) => {
        return {
          ...data,
          location: {
            from_region: data?.from_region_name,
            from_district: data?.from_district_name,
            to_region: data?.to_region_name,
            to_district: data?.to_district_name,
            date: data?.created_at,
            price: data?.price,
            id: data?.id
          },
          carInfo: {
            car_class: data?.car_class,
            car_name: data?.car_name,
            driver_name: data?.driver_name,
            car_number_region: '01',
            car_number: data?.car_number,
            place_order: data?.place_order,
            status: data?.status
          },

        }
      })
    )
  }, [data])


  return (
    <div >
      {ticketData?.map(({ location, carInfo }: { location?: any, carInfo?: any }) => (
        <div className='my-6'>
          <div className='flex items-center w-full '>
            <Location data={location} />
            <CarInfo data={carInfo} />
          </div>
          <div className='flex items-center gap-2 mt-3'>
            <InfoErrorIcon />
            <p className='text-sm font-normal'><span className='text-red-500'>Sabab:</span> - Lorem ipsum</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Ticket


