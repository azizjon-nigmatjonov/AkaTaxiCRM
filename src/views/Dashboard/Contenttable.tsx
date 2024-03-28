import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { MenuItem, Select } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState } from 'react';



// function createData(name, calories, fat, carbs, protein) {
//     return { name, calories, fat, carbs, protein };
// }


const rows = [
    { name: 'Buxoro viloyati', calories: 159, fat: 6.0, carbs: 24, protein: 4.0 },
    { name: 'ff', calories: 1200, fat: 1200, carbs: 12007, protein: 4.3 },
    { name: 'ff', calories: 262, fat: 16.0, carbs: 24, protein: 6.0 },
    { name: 'f', calories: 305, fat: 3.7, carbs: 67, protein: 4.3 },
    { name: 'Buxoro viloyati', calories: 159, fat: 6.0, carbs: 24, protein: 4.0 },
    { name: 'ff', calories: 237, fat: 9.0, carbs: 37, protein: 4.3 },
    { name: 'ff', calories: 262, fat: 16.0, carbs: 24, protein: 6.0 },
    { name: 'f', calories: 305, fat: 3.7, carbs: 67, protein: 4.3 },

];


interface DataListType {
    canceled: number,
    canceled_by_client: number,
    canceled_by_driver: number,
    done: number,
    region_id: number,
    region_name: string
}

function ContentTable({ dataList }: { dataList: DataListType[] }) {

    const [activeButton, setActiveButton] = useState('');

    console.log(dataList);



    return (
        <>


            <div className="px-6 w-full mb-6">
                <h2 className=" text-[30px] mt-6 text-[#101828] font-semibold mb-6">Yo’lovchilar</h2>
                <div className="rounded-[10px] shadow-sm  pt-3">
                    <TableContainer component={Paper} sx={{ border: '1px solid #e0e0e0' }}>
                        <div className='pl-[5px] mt-[10px] pr-[16px] flex items-center justify-between'>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'start',
                                    margin: 0,
                                    '& > *': {
                                        m: 1,
                                    },

                                }}
                            >
                                <ButtonGroup variant="outlined" aria-label="Basic button group">
                                    <Button
                                        sx={{
                                            background: activeButton === 'year' ? '#EAECF0' : '', textTransform: 'none', '&:hover': { border: '1px solid #D0D5DD', }, borderRadius: '8px', border: '1px solid #D0D5DD', color: '#344054', height: '40px', fontSize: '14px', fontWeight: 600
                                        }}
                                        onClick={() => setActiveButton('year')}
                                    >Yillik</Button>
                                    <Button onClick={() => setActiveButton('month')} sx={{ background: activeButton === 'month' ? '#EAECF0' : '', textTransform: 'none', '&:hover': { border: '1px solid #D0D5DD', }, border: '1px solid #D0D5DD', color: '#344054', height: '40px', fontWeight: 600, fontSize: '14px', }}>Oylik</Button>
                                    <Button onClick={() => setActiveButton('week')} sx={{ background: activeButton === 'week' ? '#EAECF0' : '', textTransform: 'none', '&:hover': { border: '1px solid #D0D5DD', }, borderRadius: '8px', border: '1px solid #D0D5DD', color: '#344054', height: '40px', fontSize: '14px', fontWeight: 600 }}>Haftalik</Button>
                                </ButtonGroup>
                            </Box>

                            <div className='flex gap-3'>
                                <Select
                                    value={'2023'}
                                    className='w-[183px] p-0 border'
                                    sx={{
                                        borderRadius: '5px',
                                        padding: '9px 14px',
                                        '& .MuiInputBase-input': {
                                            padding: 0,
                                        },
                                        '& .MuiOutlinedInput-root': {
                                            padding: 0,
                                            '& fieldset': {
                                                borderWidth: 'none',
                                            },
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
                                    }}>
                                    <MenuItem value={'2023'}>2023</MenuItem>
                                    <MenuItem value={'2024'}>2024</MenuItem>

                                </Select>
                                <Select
                                    value={'Sentabr'}
                                    className='w-[183px] p-0 border'
                                    sx={{
                                        borderRadius: '5px',
                                        padding: '9px 14px',
                                        '& .MuiInputBase-input': {
                                            padding: 0,
                                        },
                                        '& .MuiOutlinedInput-root': {
                                            padding: 0,
                                            '& fieldset': {
                                                borderWidth: 'none',
                                            },
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
                                    }}>
                                    <MenuItem value={'Sentabr'}>Dekabr</MenuItem>
                                    <MenuItem value={'2024'}>May</MenuItem>

                                </Select>
                                <Select
                                    value={'Haftani tanlash'}
                                    className='w-[183px] p-0 border'
                                    sx={{
                                        borderRadius: '5px',
                                        padding: '9px 14px',
                                        '& .MuiInputBase-input': {
                                            padding: 0,
                                        },
                                        '& .MuiOutlinedInput-root': {
                                            padding: 0,
                                            '& fieldset': {
                                                borderWidth: 'none',
                                            },
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
                                    }}>
                                    <MenuItem value={'Haftani tanlash'}>Haftani tanlash</MenuItem>
                                    <MenuItem value={'2024'}>May</MenuItem>

                                </Select>
                            </div>

                        </div>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow sx={{
                                    borderBottom: '1px solid #EAECF0'
                                }}>
                                    <TableCell sx={{ padding: '16px !important' }}>DAN</TableCell>
                                    <TableCell sx={{ padding: '16px' }} align="left">Viloyatlarga</TableCell>
                                    <TableCell sx={{ padding: '16px' }} align="right">Yakunlandi</TableCell>
                                    <TableCell sx={{ padding: '16px' }} align="right">Topilmadi</TableCell>
                                    <TableCell sx={{ padding: '16px', }} align="right" > Yo’lovchi bekor qildi </TableCell>
                                    <TableCell sx={{ padding: '16px !important' }} align="center">Haydovchi bekor qildi</TableCell>
                                </TableRow>
                            </TableHead>


                            <TableBody>
                                {dataList?.map((item: any, index: number) => (
                                    <TableRow key={index} sx={{
                                        border: '0px solid #EAECF0'
                                    }}>
                                        {index === 0 && (
                                            <TableCell colSpan={0.5} rowSpan={dataList.length} align="center"><p className='text-[#101828] font-semibold text-sm'>Toshkent shahar</p></TableCell>
                                        )}
                                        <TableCell component="th" scope="row" sx={{
                                            borderLeft: '1px solid #EAECF0',
                                            color: '#101828',
                                            fontSize: '14px',
                                            fontWeight: '500',
                                        }}>
                                            {item?.region_name}
                                        </TableCell>
                                        <TableCell align="right" sx={{
                                            borderRight: '0px solid #EAECF0',
                                            color: '#039855',
                                            fontSize: '14px',
                                        }}>{item?.done}</TableCell>
                                        <TableCell align="right" sx={{
                                            borderRight: '0px solid #EAECF0',
                                            color: '#667085',
                                            fontSize: '14px',
                                        }}>{item?.canceled}</TableCell>
                                        <TableCell align="right" sx={{
                                            borderRight: '0px solid #EAECF0',
                                            color: '#F79009'
                                        }}>{item?.canceled_by_client}</TableCell>
                                        <TableCell align="center" sx={{
                                            borderRight: '0px solid #EAECF0',
                                            color: '#D92D20',

                                        }} >{item?.canceled_by_driver}</TableCell>

                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TableContainer component={Paper} sx={{ marginTop: '24px', border: '1px solid #e0e0e0' }}>
                        <div className='pl-[5px] mt-[10px] pr-[16px] flex items-center justify-between'>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'start',
                                    margin: 0,
                                    '& > *': {
                                        m: 1,
                                    },

                                }}
                            >
                                <ButtonGroup variant="outlined" aria-label="Basic button group">
                                    <Button sx={{ textTransform: 'none', '&:hover': { border: '1px solid #D0D5DD', }, borderRadius: '8px', border: '1px solid #D0D5DD', color: '#344054', height: '40px', fontSize: '14px', fontWeight: 600 }}>Yillik</Button>
                                    <Button sx={{ textTransform: 'none', '&:hover': { border: '1px solid #D0D5DD', }, border: '1px solid #D0D5DD', color: '#344054', height: '40px', fontWeight: 600, fontSize: '14px', }}>Oylik</Button>
                                    <Button sx={{ textTransform: 'none', '&:hover': { border: '1px solid #D0D5DD', }, borderRadius: '8px', border: '1px solid #D0D5DD', color: '#344054', height: '40px', fontSize: '14px', fontWeight: 600 }}>Haftalik</Button>
                                </ButtonGroup>
                            </Box>

                            <div className='flex gap-3'>
                                <Select
                                    value={'2023'}
                                    className='w-[183px] p-0 border'
                                    sx={{
                                        borderRadius: '5px',
                                        padding: '9px 14px',
                                        '& .MuiInputBase-input': {
                                            padding: 0,
                                        },
                                        '& .MuiOutlinedInput-root': {
                                            padding: 0,
                                            '& fieldset': {
                                                borderWidth: 'none',
                                            },
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
                                    }}>
                                    <MenuItem value={'2023'}>2023</MenuItem>
                                    <MenuItem value={'2024'}>2024</MenuItem>

                                </Select>
                                <Select
                                    value={'Sentabr'}
                                    className='w-[183px] p-0 border'
                                    sx={{
                                        borderRadius: '5px',
                                        padding: '9px 14px',
                                        '& .MuiInputBase-input': {
                                            padding: 0,
                                        },
                                        '& .MuiOutlinedInput-root': {
                                            padding: 0,
                                            '& fieldset': {
                                                borderWidth: 'none',
                                            },
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
                                    }}>
                                    <MenuItem value={'Sentabr'}>Dekabr</MenuItem>
                                    <MenuItem value={'2024'}>May</MenuItem>

                                </Select>
                                <Select
                                    value={'Haftani tanlash'}
                                    className='w-[183px] p-0 border'
                                    sx={{
                                        borderRadius: '5px',
                                        padding: '9px 14px',
                                        '& .MuiInputBase-input': {
                                            padding: 0,
                                        },
                                        '& .MuiOutlinedInput-root': {
                                            padding: 0,
                                            '& fieldset': {
                                                borderWidth: 'none',
                                            },
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
                                    }}>
                                    <MenuItem value={'Haftani tanlash'}>Haftani tanlash</MenuItem>
                                    <MenuItem value={'2024'}>May</MenuItem>

                                </Select>
                            </div>

                        </div>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow sx={{
                                    borderBottom: '1px solid #EAECF0'
                                }}>
                                    <TableCell sx={{ padding: '16px !important' }}>DAN</TableCell>
                                    <TableCell sx={{ padding: '16px' }} align="left">Calories</TableCell>
                                    <TableCell sx={{ padding: '16px' }} align="right">Fat&nbsp;(g)</TableCell>
                                    <TableCell sx={{ padding: '16px' }} align="right">Carbs&nbsp;(g)</TableCell>
                                    <TableCell sx={{ padding: '16px' }} align="right">Protein&nbsp;(g)</TableCell>
                                    <TableCell sx={{ padding: '16px !important' }} align="center">Protein&nbsp;(g)</TableCell>
                                </TableRow>
                            </TableHead>


                            <TableBody>
                                {rows.map((row, index) => (
                                    <TableRow key={index} sx={{
                                        border: '0px solid #EAECF0'
                                    }}>

                                        <TableCell component="th" scope="row" sx={{
                                            borderLeft: '1px solid #EAECF0',
                                            borderRight: '1px solid #EAECF0',
                                            color: '#101828',
                                            fontSize: '14px',
                                            fontWeight: '500',
                                        }}>
                                            {row.name}
                                        </TableCell>

                                        {index === 0 && (
                                            <TableCell colSpan={0.5} rowSpan={rows.length} align="center">Toshkent shahar</TableCell>
                                        )}

                                        <TableCell align="right" sx={{
                                            borderRight: '0px solid #EAECF0',
                                            borderLeft: '1px solid #EAECF0',
                                            color: '#039855',
                                            fontSize: '14px',
                                            fontWeight: '500',
                                        }}>{row.calories}</TableCell>
                                        <TableCell align="right" sx={{
                                            borderRight: '0px solid #EAECF0',
                                            color: '#667085',
                                            fontSize: '14px',
                                            fontWeight: '500',
                                        }}>{row.fat}</TableCell>
                                        <TableCell align="right" sx={{
                                            borderRight: '0px solid #EAECF0',
                                            color: '#F79009',
                                            fontSize: '14px',
                                            fontWeight: '500',
                                        }}>{row.carbs}</TableCell>
                                        <TableCell align="center" sx={{
                                            borderRight: '0px solid #EAECF0',
                                            color: '#D92D20',
                                            fontSize: '14px',
                                            fontWeight: '500',
                                        }}>{row.carbs}</TableCell>

                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                </div>

                <h2 className=" text-[30px] mt-6 text-[#101828] font-semibold mb-6">Haydovchilar</h2>

                <div className="rounded-[10px] shadow-sm  pt-3">
                    <TableContainer component={Paper} sx={{ border: '1px solid #e0e0e0' }}>
                        <div className='pl-[5px] mt-[10px] pr-[16px] flex items-center justify-between'>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'start',
                                    margin: 0,
                                    '& > *': {
                                        m: 1,
                                    },

                                }}
                            >
                                <ButtonGroup variant="outlined" aria-label="Basic button group">
                                    <Button sx={{ textTransform: 'none', '&:hover': { border: '1px solid #D0D5DD', }, borderRadius: '8px', border: '1px solid #D0D5DD', color: '#344054', height: '40px', fontSize: '14px', fontWeight: 600 }}>Yillik</Button>
                                    <Button sx={{ textTransform: 'none', '&:hover': { border: '1px solid #D0D5DD', }, border: '1px solid #D0D5DD', color: '#344054', height: '40px', fontWeight: 600, fontSize: '14px', }}>Oylik</Button>
                                    <Button sx={{ textTransform: 'none', '&:hover': { border: '1px solid #D0D5DD', }, borderRadius: '8px', border: '1px solid #D0D5DD', color: '#344054', height: '40px', fontSize: '14px', fontWeight: 600 }}>Haftalik</Button>
                                </ButtonGroup>
                            </Box>

                            <div className='flex gap-3'>
                                <Select
                                    value={'2023'}
                                    className='w-[183px] p-0 border'
                                    sx={{
                                        borderRadius: '5px',
                                        padding: '9px 14px',
                                        '& .MuiInputBase-input': {
                                            padding: 0,
                                        },
                                        '& .MuiOutlinedInput-root': {
                                            padding: 0,
                                            '& fieldset': {
                                                borderWidth: 'none',
                                            },
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
                                    }}>
                                    <MenuItem value={'2023'}>2023</MenuItem>
                                    <MenuItem value={'2024'}>2024</MenuItem>

                                </Select>
                                <Select
                                    value={'Sentabr'}
                                    className='w-[183px] p-0 border'
                                    sx={{
                                        borderRadius: '5px',
                                        padding: '9px 14px',
                                        '& .MuiInputBase-input': {
                                            padding: 0,
                                        },
                                        '& .MuiOutlinedInput-root': {
                                            padding: 0,
                                            '& fieldset': {
                                                borderWidth: 'none',
                                            },
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
                                    }}>
                                    <MenuItem value={'Sentabr'}>Dekabr</MenuItem>
                                    <MenuItem value={'2024'}>May</MenuItem>

                                </Select>
                                <Select
                                    value={'Haftani tanlash'}
                                    className='w-[183px] p-0 border'
                                    sx={{
                                        borderRadius: '5px',
                                        padding: '9px 14px',
                                        '& .MuiInputBase-input': {
                                            padding: 0,
                                        },
                                        '& .MuiOutlinedInput-root': {
                                            padding: 0,
                                            '& fieldset': {
                                                borderWidth: 'none',
                                            },
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
                                    }}>
                                    <MenuItem value={'Haftani tanlash'}>Haftani tanlash</MenuItem>
                                    <MenuItem value={'2024'}>May</MenuItem>

                                </Select>
                            </div>

                        </div>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow sx={{
                                    borderBottom: '1px solid #EAECF0'
                                }}>
                                    <TableCell sx={{ padding: '16px !important' }}>DAN</TableCell>
                                    <TableCell sx={{ padding: '16px' }} align="left">Calories</TableCell>
                                    <TableCell sx={{ padding: '16px' }} align="right">Fat&nbsp;(g)</TableCell>
                                    <TableCell sx={{ padding: '16px' }} align="right">Carbs&nbsp;(g)</TableCell>
                                    <TableCell sx={{ padding: '16px' }} align="right">Protein&nbsp;(g)</TableCell>
                                    <TableCell sx={{ padding: '16px !important' }} align="center">Protein&nbsp;(g)</TableCell>
                                </TableRow>
                            </TableHead>


                            <TableBody>
                                {rows.map((row, index) => (
                                    <TableRow key={index} sx={{
                                        border: '0px solid #EAECF0'
                                    }}>
                                        {index === 0 && (
                                            <TableCell colSpan={0.5} rowSpan={rows.length} align="center">Toshkent shahar</TableCell>
                                        )}
                                        <TableCell component="th" scope="row" sx={{
                                            borderLeft: '1px solid #EAECF0',
                                            color: '#101828',
                                            fontSize: '14px',
                                            fontWeight: '500',
                                        }}>
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right" sx={{
                                            borderRight: '0px solid #EAECF0',
                                            color: '#039855',
                                            fontSize: '14px',
                                            fontWeight: '500',
                                        }}>{row.calories}</TableCell>
                                        <TableCell align="right" sx={{
                                            borderRight: '0px solid #EAECF0',
                                            color: '#667085',
                                            fontSize: '14px',
                                            fontWeight: '500',
                                        }}>{row.fat}</TableCell>
                                        <TableCell align="right" sx={{
                                            borderRight: '0px solid #EAECF0',
                                            color: '#F79009',
                                            fontSize: '14px',
                                            fontWeight: '500',
                                        }}>{row.carbs}</TableCell>
                                        <TableCell align="center" sx={{
                                            borderRight: '0px solid #EAECF0',
                                            color: '#D92D20',
                                            fontSize: '14px',
                                            fontWeight: '500',
                                        }}>{row.carbs}</TableCell>

                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TableContainer component={Paper} sx={{ marginTop: '24px', border: '1px solid #e0e0e0' }}>
                        <div className='pl-[5px] mt-[10px] pr-[16px] flex items-center justify-between'>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'start',
                                    margin: 0,
                                    '& > *': {
                                        m: 1,
                                    },

                                }}
                            >
                                <ButtonGroup variant="outlined" aria-label="Basic button group">
                                    <Button sx={{ textTransform: 'none', '&:hover': { border: '1px solid #D0D5DD', }, borderRadius: '8px', border: '1px solid #D0D5DD', color: '#344054', height: '40px', fontSize: '14px', fontWeight: 600 }}>Yillik</Button>
                                    <Button sx={{ textTransform: 'none', '&:hover': { border: '1px solid #D0D5DD', }, border: '1px solid #D0D5DD', color: '#344054', height: '40px', fontWeight: 600, fontSize: '14px', }}>Oylik</Button>
                                    <Button sx={{ textTransform: 'none', '&:hover': { border: '1px solid #D0D5DD', }, borderRadius: '8px', border: '1px solid #D0D5DD', color: '#344054', height: '40px', fontSize: '14px', fontWeight: 600 }}>Haftalik</Button>
                                </ButtonGroup>
                            </Box>

                            <div className='flex gap-3'>
                                <Select
                                    value={'2023'}
                                    className='w-[183px] p-0 border'
                                    sx={{
                                        borderRadius: '5px',
                                        padding: '9px 14px',
                                        '& .MuiInputBase-input': {
                                            padding: 0,
                                        },
                                        '& .MuiOutlinedInput-root': {
                                            padding: 0,
                                            '& fieldset': {
                                                borderWidth: 'none',
                                            },
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
                                    }}>
                                    <MenuItem value={'2023'}>2023</MenuItem>
                                    <MenuItem value={'2024'}>2024</MenuItem>

                                </Select>
                                <Select
                                    value={'Sentabr'}
                                    className='w-[183px] p-0 border'
                                    sx={{
                                        borderRadius: '5px',
                                        padding: '9px 14px',
                                        '& .MuiInputBase-input': {
                                            padding: 0,
                                        },
                                        '& .MuiOutlinedInput-root': {
                                            padding: 0,
                                            '& fieldset': {
                                                borderWidth: 'none',
                                            },
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
                                    }}>
                                    <MenuItem value={'Sentabr'}>Dekabr</MenuItem>
                                    <MenuItem value={'2024'}>May</MenuItem>

                                </Select>
                                <Select
                                    value={'Haftani tanlash'}
                                    className='w-[183px] p-0 border'
                                    sx={{
                                        borderRadius: '5px',
                                        padding: '9px 14px',
                                        '& .MuiInputBase-input': {
                                            padding: 0,
                                        },
                                        '& .MuiOutlinedInput-root': {
                                            padding: 0,
                                            '& fieldset': {
                                                borderWidth: 'none',
                                            },
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
                                    }}>
                                    <MenuItem value={'Haftani tanlash'}>Haftani tanlash</MenuItem>
                                    <MenuItem value={'2024'}>May</MenuItem>

                                </Select>
                            </div>

                        </div>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow sx={{
                                    borderBottom: '1px solid #EAECF0'
                                }}>
                                    <TableCell sx={{ padding: '16px !important' }}>DAN</TableCell>
                                    <TableCell sx={{ padding: '16px' }} align="left">Calories</TableCell>
                                    <TableCell sx={{ padding: '16px' }} align="right">Fat&nbsp;(g)</TableCell>
                                    <TableCell sx={{ padding: '16px' }} align="right">Carbs&nbsp;(g)</TableCell>
                                    <TableCell sx={{ padding: '16px' }} align="right">Carbs&nbsp;(g)</TableCell>
                                    <TableCell sx={{ padding: '16px !important' }} align="center">Protein&nbsp;(g)</TableCell>
                                </TableRow>
                            </TableHead>


                            <TableBody>
                                {rows.map((row, index) => (
                                    <TableRow key={index} sx={{
                                        border: '0px solid #EAECF0'
                                    }}>

                                        <TableCell component="th" scope="row" sx={{
                                            borderLeft: '1px solid #EAECF0',
                                            color: '#101828',
                                            fontSize: '14px',
                                            fontWeight: '500',
                                        }}>
                                            {row.name}
                                        </TableCell>
                                        {index === 0 && (
                                            <TableCell sx={{
                                                borderRight: '1px solid #EAECF0',
                                                borderLeft: '1px solid #EAECF0',
                                            }} colSpan={0.5} rowSpan={rows.length} align="center">Toshkent shahar</TableCell>
                                        )}
                                        <TableCell align="right" sx={{
                                            borderRight: '0px solid #EAECF0',
                                            color: '#039855',
                                            fontSize: '14px',
                                            fontWeight: '500',
                                        }}>{row.calories}</TableCell>
                                        <TableCell align="right" sx={{
                                            borderRight: '0px solid #EAECF0',
                                            color: '#F79009',
                                            fontSize: '14px',
                                            fontWeight: '500',
                                        }}>{row.fat}</TableCell>
                                        <TableCell align="right" sx={{
                                            borderRight: '0px solid #EAECF0',
                                            color: '#F79009',
                                            fontSize: '14px',
                                            fontWeight: '500',
                                        }}>{row.carbs}</TableCell>
                                        <TableCell align="center" sx={{
                                            borderRight: '0px solid #EAECF0',
                                            color: '#F79009',
                                            fontSize: '14px',
                                            fontWeight: '500',
                                        }}>{row.carbs}</TableCell>

                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                </div>



            </div>

        </>
    )
}

export default ContentTable;