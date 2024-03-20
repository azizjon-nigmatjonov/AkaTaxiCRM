import { FlagIcon, CircleIcon, ProgressCarIcon, CheckIcon, WomenIconP, MenIconP, Empty, PassangerFemaleIcon, CloseModalIcon, NoteAvatar } from '../../../components/IconGenerator/Svg'
import car from '../../../../public/images/car.png'

import './modal.css';
import { useEffect, useState } from 'react';

interface DriverData {
    car_name: string;
    car_number: string;
    start_location_name: string | null;
    end_location_name: string | null;
    trip_price: number;
    driver_full_name: string;
    driver_phone: string;
    trip_seats: any | null
    driver_image: any | null,
    end_location_coordinate: any | null,
    start_location_coordinate: any | null,
    driver_location: any,
}



function ModalMap({ totalDistance, selectedDriverData, modalOpen, setisModal }: { totalDistance: any, selectedDriverData: DriverData; modalOpen: boolean; setisModal: React.Dispatch<React.SetStateAction<boolean>> }) {


    console.log(totalDistance);
    console.log(selectedDriverData?.driver_location);

    console.log(selectedDriverData);



    const [driverProgressWidth, setDriverProgressWidth] = useState<number>(0);
    // const [progressIconPosition, setProgressIconPosition] = useState<number>(0);
    console.log(driverProgressWidth);
    
    const [driverDistance, setDriverDistance] = useState<number | null>(null);
    const earthRadiusKm = 6371; // радиус Земли в километрах

    useEffect(() => {
        const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
            const dLat = toRadians(lat2 - lat1);
            const dLon = toRadians(lon2 - lon1);

            const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2);

            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

            return earthRadiusKm * c;
        };

        if (selectedDriverData && selectedDriverData.driver_location && selectedDriverData.end_location_coordinate) {
            const driverLat = parseFloat(selectedDriverData.driver_location.lat);
            const driverLng = parseFloat(selectedDriverData.driver_location.long);
            const endLat = parseFloat(selectedDriverData.end_location_coordinate[1]);
            const endLng = parseFloat(selectedDriverData.end_location_coordinate[0]);

            const distanceDriverToEnd = calculateDistance(driverLat, driverLng, endLat, endLng);
            const distanceStartToEnd = totalDistance - distanceDriverToEnd;

            setDriverDistance(distanceDriverToEnd);

            const progressPercentage = (distanceStartToEnd / totalDistance) * 100;
            setDriverProgressWidth(progressPercentage);
        }
    }, [selectedDriverData, totalDistance]);

    // Преобразование градусов в радианы
    const toRadians = (degrees: number) => {
        return degrees * Math.PI / 180;
    };


    return (
        <>
            <div className={`${modalOpen ? 'visible absolute top-24 left-6 w-[312px]  bg-white rounded-[18px] px-[18px] py-[20px]' : 'isActive absolute top-28 left-6 w-[312px]  bg-white rounded-[18px] px-[18px] py-[20px]'} `}>

                <button className='absolute right-[-25px] top-[2px]' onClick={() => setisModal(false)}>
                    <CloseModalIcon />
                </button>

                <div className='flex items-center justify-between'>
                    <PassangerFemaleIcon />
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


                {selectedDriverData?.start_location_name ?
                    <div className='max-w-[276px] w-full bg-[#FAFAFB] rounded-lg mt-4 min-h-[60px] border-[#F1F1F5] pt-[18px] px-2 pb-[11]'>
                        <div className='max-w-[260px] w-full bg-[#E2E2EA] h-1 rounded'>
                            <div className='w-[0px] bg-[#0BD976] h-1 rounded flex justify-end items-center relative' style={{ width: `${driverDistance ? (driverDistance / totalDistance) * 100 : 0}%` }}>
                                <div className='absolute right-[-10px] top-[-5px]'>
                                    <ProgressCarIcon />
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-between mt-2'>
                            <span className='text-[#858592]'>{driverDistance ? `${driverDistance.toFixed(2)} km` : ''}</span>
                            <span className='text-[#858592]'>{selectedDriverData?.end_location_coordinate && driverDistance !== null ? `${(totalDistance - driverDistance).toFixed(2)} km` : ''}</span>
                        </div>

                    </div>
                    : null
                }



                <div className='border-t border-[#F1F1F5] mt-6 pt-6'>
                    <div className='flex items-center gap-2'>

                        {selectedDriverData?.driver_image ? (
                            <img className='w-12 h-12 object-cover rounded-[1000px]' src={selectedDriverData?.driver_image} alt="" />
                        ) : (

                            <NoteAvatar />
                        )}


                        <div>
                            <b>{selectedDriverData?.driver_full_name}</b>
                            <p>+{selectedDriverData?.driver_phone}</p>
                        </div>
                    </div>

                    <div className='flex gap-4 mt-6'>
                        <div className='icons gap-1  max-w-[88px] h-full'>

                            {selectedDriverData?.trip_seats?.map((item: any, index: number) => (
                                <div className='icon ' key={index}>
                                    {item?.passenger_gender == 'f' ? (
                                        <WomenIconP />
                                    ) : item?.passenger_gender == 'm' ? (
                                        <MenIconP />
                                    ) : (
                                        <Empty />
                                    )

                                    }
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
