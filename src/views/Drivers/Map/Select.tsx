import { Select, MenuItem, OutlinedInput, } from '@mui/material';
import './modal.css'
import { useState } from 'react';


const optionsStatus = [{
    value: 'pending', label: 'Aktiv'
},
{
    value: 'on-way', label: 'Safardagilar'
},

]

interface MapOptionProps {
    setSelectData: (data: any) => void;
    setSelectedStatus: (status: any) => void;
    lang: any;
    lat: any;
    setCarClass: (carClass: number) => void;
    selectedStatus: any

}


function MapOption({ selectedStatus, setSelectedStatus, setCarClass }: MapOptionProps) {




    const [typeCar, setTypeCar] = useState<any>('Hammasi');


    const handleStatusChange = async (event: any) => {

        setSelectedStatus(event.target.value);

    }

    const handleCarTypeStatus = async (event: any) => {

        if (event.target.value === 'Standart') {
            setTypeCar('Standart')

            setCarClass(1)

        } else if (event.target.value === 'Komfort') {

            setCarClass(2)

        } else if (event.target.value === 'Biznes') {

            setTypeCar('Biznes')
            setCarClass(3)


        } else {
            setTypeCar('Hammasi')
        }



    }





    return (
        <div className='flex gap-3 absolute  left-6'>
            <div>
                <h3 className='text-[#151515] font-medium'>Holat</h3>
                <Select
                    value={selectedStatus}
                    onChange={handleStatusChange}

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

                    {optionsStatus.map((item) => (
                        <MenuItem value={item.value} className='flex gap-1 lien' sx={{ paddingY: '8px' }}>
                            <span className='text-[#151515]'>{item.label} </span> <span className='text-[#858592]'> (100)</span>
                        </MenuItem>

                    ))}


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
