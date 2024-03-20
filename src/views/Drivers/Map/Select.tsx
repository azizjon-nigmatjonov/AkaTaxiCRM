import { Select, MenuItem, OutlinedInput, } from '@mui/material';
import mapService from "../../../services/map";
import './modal.css'
import { useState } from 'react';



interface MapOptionProps {
    setSelectData: (data: any) => void;
    setSelectedStatus: (status: any) => void;
    lang: any;
    lat: any;
    setCarClass: (carClass: number) => void;
}


function MapOption({ setSelectData, setSelectedStatus, lang, lat, setCarClass }: MapOptionProps) {


    const [selectedStatus, setSelectedStatusLocal] = useState<any>('Aktiv');
    const [typeCar, setTypeCar] = useState<any>('Hammasi');


    const handleStatusChange = async (event: any) => {
        setSelectedStatusLocal(event.target.value);
        setSelectedStatus(event.target.value);
        if (event.target.value === 'Aktiv') {
            await mapService.getActive(lang, lat, 100);
        } else if (event.target.value === 'Safardagilar') {
            await mapService.getTravellers(lang, lat, 100);
        }
    }

    const handleCarTypeStatus = async (event: any) => {

        if (event.target.value === 'Standart') {
            setTypeCar('Standart')
            const typesCars = await mapService.getCarClass(lang, lat, 100, 1);
            console.log(typesCars);
            setSelectData(typesCars)
            setCarClass(1)

        } else if (event.target.value === 'Komfort') {
            const typesCars = await mapService.getCarClass(lang, lat, 100, 2);
            setTypeCar('Komfort')
            setCarClass(2)
            setSelectData(typesCars)

        } else if (event.target.value === 'Biznes') {
            const typesCars = await mapService.getCarClass(lang, lat, 100, 3);
            setTypeCar('Biznes')
            setCarClass(3)
            setSelectData(typesCars)

        } else {
            setTypeCar('Hammasi')
        }

        // console.log(event.target.value);

    }




    return (
        <div className='flex gap-3 absolute  left-6'>
            <div>
                <h3 className='text-[#151515] font-medium'>Holat</h3>
                <Select
                    value={selectedStatus}
                    onChange={handleStatusChange}
                    defaultValue={10}
                    className='w-[250px] bg-white'
                    input={<OutlinedInput sx={{ border: 'none' }} />}
                    sx={{
                        height: 44,
                        '&:hover': {
                            borderBottom: 'none',

                        },
                        '&:focus': {
                            borderBottom: 'none',
                            boxShadow: '0 12px 14px rgba(0, 0, 0, 0.2)',
                        },
                        '& .MuiOutlinedInput-notchedOutline': {
                            border: 'none',
                        },
                    }}
                    MenuProps={{
                        PaperProps: {
                            style: {
                                marginTop: '8px',
                            },
                        },
                    }}
                >
                    <MenuItem value={'Aktiv'} className='flex gap-1 lien' sx={{ paddingY: '8px' }}>
                        <span className='text-[#151515]'>Aktiv </span> <span className='text-[#858592]'> (100)</span>
                    </MenuItem>
                    <MenuItem value={'Safardagilar'} className='flex gap-1' sx={{ paddingY: '8px' }}>
                        <span className='text-[#151515]'>Safardagilar </span> <span className='text-[#858592]'> (30)</span>
                    </MenuItem>

                </Select>
            </div>

            <div>
                <h3 className='text-[#151515] font-medium'>Klass</h3>
                <Select
                    value={typeCar}
                    onChange={handleCarTypeStatus}
                    defaultValue={10}
                    className='w-[250px] bg-white'
                    input={<OutlinedInput sx={{ border: 'none' }} />}
                    sx={{
                        height: 44,
                        '&:hover': {
                            borderBottom: 'none',
                        },
                        '&:focus': {
                            borderBottom: 'none',
                            boxShadow: '0 12px 14px rgba(0, 0, 0, 0.2)',
                        },
                        '& .MuiOutlinedInput-notchedOutline': {
                            border: 'none',
                        },
                        '& .Mui-selected': {
                            backgroundColor: 'transparent',
                        },

                    }}
                    MenuProps={{
                        PaperProps: {
                            style: {
                                marginTop: '8px',
                            },
                        },
                    }}
                >
                    <MenuItem value={'Standart'} className='flex gap-1 lien' sx={{ paddingY: '8px' }}>
                        <span className='text-[#151515]'>Standart (45) </span>
                    </MenuItem>
                    <MenuItem value={'Hammasi'} className='flex gap-1 lien' sx={{ paddingY: '8px' }}>
                        <span className='text-[#151515]'>Hammasi </span>
                    </MenuItem>
                    <MenuItem value={'Komfort'} className='flex gap-1 lien' sx={{ paddingY: '8px' }}>
                        <span className='text-[#151515]'>Komfort </span>
                    </MenuItem>
                    <MenuItem value={'Biznes'} className='flex gap-1' sx={{ paddingY: '8px' }}>
                        <span className='text-[#151515]'>Biznes </span>
                    </MenuItem>

                </Select>
            </div>
        </div>
    )
}

export default MapOption;
