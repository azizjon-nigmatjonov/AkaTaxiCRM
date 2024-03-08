import { Select, MenuItem, OutlinedInput, } from '@mui/material';
import './modal.css'

function MapOption() {


    return (
        <div className='flex gap-3 absolute top-6 left-6'>
            <div>
                <h3 className='text-[#151515] font-medium'>Holat</h3>
                <Select
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
                    <MenuItem value={10} className='flex gap-1 lien' sx={{ paddingY: '8px' }}>

                        <span className='text-[#151515]'>Aktiv </span> <span className='text-[#858592]'> (100)</span>
                    </MenuItem>
                    <MenuItem value={20} className='flex gap-1' sx={{ paddingY: '8px' }}>

                        <span className='text-[#151515]'>Safardagilar </span> <span className='text-[#858592]'> (30)</span>

                    </MenuItem>

                </Select>
            </div>
            <div>
                <h3 className='text-[#151515] font-medium'>Viloyat</h3>
                <Select
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
                    <MenuItem value={10} className='flex gap-1 lien'>

                        <span className='text-[#151515]'>Aktiv </span> <span className='text-[#858592]'> (100)</span>
                    </MenuItem>
                    <MenuItem value={20} className='flex gap-1 '>

                        <span className='text-[#151515]'>Safardagilar </span> <span className='text-[#858592]'> (30)</span>
                    </MenuItem>

                </Select>
            </div>
            <div>
                <h3 className='text-[#151515] font-medium'>Klass</h3>
                <Select
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
                            backgroundColor: 'transparent', // убираем фон для выбранного элемента
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
                    <MenuItem value={10} className='flex gap-1 lien' sx={{ paddingY: '8px' }}>

                        <span className='text-[#151515]'>Standart (45) </span>
                    </MenuItem>
                    <MenuItem value={20} className='flex gap-1 lien' sx={{ paddingY: '8px' }}>

                        <span className='text-[#151515]'>Hammasi </span>
                    </MenuItem>
                    <MenuItem value={30} className='flex gap-1 lien' sx={{ paddingY: '8px' }}>

                        <span className='text-[#151515]'>Komfort </span>
                    </MenuItem>
                    <MenuItem value={40} className='flex gap-1' sx={{ paddingY: '8px' }}>

                        <span className='text-[#151515]'>Biznes </span>
                    </MenuItem>

                </Select>
            </div>
        </div>
    )
}

export default MapOption;
