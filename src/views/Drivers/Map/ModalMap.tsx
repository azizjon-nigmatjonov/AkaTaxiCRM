import { FlagIcon, CircleIcon, CheckIcon, Empty, PessenerIcon, CloseModalIcon } from '../../../components/IconGenerator/Svg'
import car from '../../../../public/images/car.png'
import avatar from '../../../../public/images/website/avatar.png';
import './modal.css';


function ModalMap({ selectedDriverData, modalOpen, setisModal }) {


    // console.log(selectedDriverData?.trip_seats);

    // passenger_gender


    return (
        <>
            <div className={`${modalOpen ? 'visible absolute top-28 left-6 w-[312px]  bg-white rounded-[18px] px-[18px] py-[20px]' : 'isActive absolute top-28 left-6 w-[312px]  bg-white rounded-[18px] px-[18px] py-[20px]'} `}>

                <button className='absolute right-[-25px] top-[2px]' onClick={() => setisModal(false)}>
                    <CloseModalIcon />
                </button>

                <div className='flex items-center justify-between'>
                    <div>
                        <h3 className='font-medium text-[#151515]'>{selectedDriverData?.car_name}</h3>
                        <div className='flex shadow-sm mt-1 justify-between  pr-1 min-h-[24px] items-center border-[1px] border-[#151515] rounded-[3px] w-[106px]'>
                            <p className='flex before:w-[1px] before:absolute before:top-[-5px] before:left-[17px] relative before:h-[24px] before:bg-black  text-xs font-medium ml-2'>{selectedDriverData?.car_number.substring(0, 2)}</p>
                            <p className='text-xs font-medium ml-1'> {selectedDriverData?.car_number.substring(2)} </p>
                            <div className='flex flex-col items-center justify-center mr-1 mt-[2px]'>
                                <FlagIcon />
                                <span className='text-[5px] mt-[1px]'>UZ</span>
                            </div>
                        </div>
                    </div>
                    <img src={car} alt="car" className='w-[132px]' />

                </div>
                <div className='flex gap-3 border-t border-[#F1F1F5] mt-8'>
                    <div className='flex flex-col items-center justify-center gap-1 mt-8'>
                        <CircleIcon />
                        <div className='border border-dashed w-[1px] h-9'></div>
                        <CheckIcon />
                    </div>
                    <div className='flex flex-col flex-grow gap-3 mt-8'>
                        <div className='max-w-[240px] w-full bg-[#FAFAFB] py-[14px] px-3'>{selectedDriverData?.start_location_name}.</div>
                        <div className='max-w-[240px] w-full bg-[#FAFAFB] py-[14px] px-3'>{selectedDriverData?.end_location_name}.</div>
                    </div>
                </div>
                <div className='flex justify-between border-t border-[#F1F1F5] mt-8 pt-6'>
                    <span>Narx</span>
                    <b>{selectedDriverData?.trip_price} so’m</b>
                </div>

                <div className='border-t border-[#F1F1F5] mt-6 pt-6'>
                    <div className='flex items-center gap-2'>
                        <img className='max-w-[48px] w-full object-cover' src={avatar} alt="" />
                        <div>
                            <b>{selectedDriverData?.driver_full_name}</b>
                            <p>+{selectedDriverData?.driver_phone}</p>
                        </div>
                    </div>

                    <div className='flex gap-4 mt-6'>
                        <div className='icons gap-1  max-w-[88px] h-full'>

                            {selectedDriverData?.trip_seats?.map((item: any, index: number) => (
                                <div className='icon' key={index}>
                                    {item?.passenger_gender ? <Empty /> : <PessenerIcon />}
                                </div>
                            ))}

                        </div>
                        <div>
                            <b>Ism Familiya</b>
                            <p>Tel.raqam</p>
                        </div>
                    </div>

                </div>



            </div>
        </>
    )
}

export default ModalMap
