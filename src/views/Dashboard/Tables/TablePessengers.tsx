import { Box, Button, ButtonGroup, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useState } from "react";
import { ArrowLeft, ArrowUpward, } from "@mui/icons-material";
// import { ArrowDown } from "components/IconGenerator/Svg";

function TablePessengers({ setYear, year, setSelectMonth, dataList, setCountWeek }: { setYear: any, year: any, setSelectMonth: any, dataList: any, setCountWeek: any }) {

    const [activeButton, setActiveButton] = useState('year');
    const [disabledYear, setDisabledYear] = useState(false);
    const [disabledMonth, setDisabledMonth] = useState(true);
    const [disabledWeek, setDisabledWeek] = useState(true);
    const [months] = useState(['yanvar', 'fevral', 'mart', 'aprel', 'may', 'iyun', 'iyul', 'avgust', 'sentabr', 'oktabr', 'noyabr', 'dekabr']);
    const [monthName, setMonthName] = useState('yanvar')
    const [selectedWeek, setSelectedWeek] = useState('Haftani tanlash')
    const [showWeek, setShoWeek] = useState(true)
    const [localYear, setLocalYear] = useState(null);

    const [isOpen, setIsOpen] = useState(true);
    const [driverReason, setDriverReason] = useState(false);

    const reasonOne = [
        { canceled: 'salom', canceled_by_client: 0, canceled_by_driver: 11, done: 9, region_id: 1, region_name: 'Navoiy viloyati' }
    ]
    const reasonTwo = [
        { canceled: 'qalesan', canceled_by_client: 100, canceled_by_driver: 211, done: 2, region_id: 7, region_name: "Buxoro" }
    ]

    const handleReason = () => {
        setIsOpen(false)
        setDriverReason(false);
    }

    const handleReasonClose = () => {
        setIsOpen(true)
    }


    function handleDriverReason() {
        setIsOpen(false)
        setDriverReason(true);
    }



    showWeek

    const handleYearButtonClick = () => {
        setActiveButton('year');
        // setYear();
        setDisabledMonth(true);
        setDisabledWeek(true)
        setYear(localYear)
        setYear('2024')
        // navigateQuery({year: year })
        // console.log(localYear);
        // console.log('sa');
    }
    const handleMonthButtonClick = () => {
        setDisabledWeek(true)
        setDisabledYear(false)
        setDisabledMonth(false)
        setActiveButton('month');
        setSelectMonth(1)
    }

    const handleWeekButtonClick = () => {
        setDisabledWeek(false)
        setDisabledYear(false)
        setDisabledMonth(false)
        setActiveButton('week');
        setCountWeek(1)
        setSelectMonth(1)
    }

    const handleYearChange = (event: any) => {
        // console.log(event.target.value);
        setYear(event.target.value)
        setLocalYear(event.target.value)
    }

    const handleMonthChange = (event: any) => {

        const monthName = event.target.value;
        const monthIndex = months.indexOf(monthName);
        setSelectMonth(monthIndex + 1);
        setMonthName(monthName)
    }



    const getWeeks: any = () => {
        const today = new Date();
        const currentMonth = today.getMonth();
        const currentYear = today.getFullYear();
        const weeks: any[] = [];

        const currentDate: any = new Date(currentYear, currentMonth, 1);

        while (currentDate.getMonth() === currentMonth) {
            const start = currentDate.getDate();
            let end = start + 6;

            if (end > new Date(currentYear, currentMonth + 1, 0).getDate()) {
                end = new Date(currentYear, currentMonth + 1, 0).getDate();
            }

            weeks.push({ start, end });
            currentDate.setDate(end + 1);
        }
        // console.log(weeks);
        return weeks;

    }
    const weeks = getWeeks();
    const formatWeek = (week: any) => `${week.start} - ${week.end}`;
    const handleWeekChange = (event: any) => {
        const selectedWeekValue = event.target.value;
        setSelectedWeek(selectedWeekValue)
        setShoWeek(false)
        const selectedWeekIndex = weeks.findIndex((week: any) => formatWeek(week) === selectedWeekValue);
        const selectedWeekNumber = selectedWeekIndex + 1;
        setCountWeek(selectedWeekNumber);
    }

    return (
        <TableContainer component={Paper} sx={{ border: '1px solid #e0e0e0', backgroundColor: '#fff !important' }}>
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
                            onClick={handleYearButtonClick}
                        >Yillik</Button>
                        <Button onClick={handleMonthButtonClick} sx={{ background: activeButton === 'month' ? '#EAECF0' : '', textTransform: 'none', '&:hover': { border: '1px solid #D0D5DD', }, border: '1px solid #D0D5DD', color: '#344054', height: '40px', fontWeight: 600, fontSize: '14px', }}>Oylik</Button>
                        <Button onClick={handleWeekButtonClick} sx={{ background: activeButton === 'week' ? '#EAECF0' : '', textTransform: 'none', '&:hover': { border: '1px solid #D0D5DD', }, borderRadius: '8px', border: '1px solid #D0D5DD', color: '#344054', height: '40px', fontSize: '14px', fontWeight: 600 }}>Haftalik</Button>
                    </ButtonGroup>
                </Box>

                <div className='flex gap-3'>
                    <Select

                        onChange={handleYearChange}
                        disabled={disabledYear}
                        value={year}
                        className='w-[183px] p-0 border'
                        sx={{
                            border: '1px solid #D0D5DD',
                            boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
                            color: '#101828',
                            fontWeight: 500,
                            fontSize: '16px',
                            borderRadius: '8px',
                            padding: '0px 14px',
                            height: '40px',
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
                        onChange={handleMonthChange}
                        disabled={disabledMonth}
                        value={monthName}

                        className='w-[183px] p-0 border'
                        sx={{

                            border: '1px solid #D0D5DD',
                            boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
                            color: '#101828',
                            fontWeight: 500,
                            fontSize: '16px',
                            borderRadius: '8px',
                            padding: '9px 14px',
                            height: '40px',
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

                        {months.map((el, index) => (
                            <MenuItem value={el} key={index}>{el}</MenuItem>
                        ))}
                        {/* <MenuItem value={'may'}>may</MenuItem> */}

                    </Select>
                    <Select
                        onChange={handleWeekChange}
                        disabled={disabledWeek}
                        value={selectedWeek}
                        label={'salom'}
                        className='w-[183px] p-0 border'
                        sx={{
                            border: '1px solid #D0D5DD',
                            boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
                            color: '#101828',
                            fontWeight: 500,
                            fontSize: '16px',
                            borderRadius: '8px',
                            padding: '9px 12px',
                            height: '40px',
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

                        {weeks.map((week: any, index: number) => (
                            <MenuItem key={index} value={formatWeek(week)}>{formatWeek(week)}</MenuItem>
                        ))}


                        {/* <MenuItem value={'2024'}>May</MenuItem> */}

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

                        <>
                            {isOpen ? (
                                <>
                                    <TableCell sx={{ padding: '16px' }} align="right">Yakunlandi</TableCell>
                                    <TableCell sx={{ padding: '16px' }} align="right">Topilmadi</TableCell>
                                    <TableCell onClick={handleReason} sx={{ padding: '16px', alignItems: 'center', cursor: 'pointer' }} align="right">
                                        Yo’lovchi bekor qildi<ArrowRightIcon sx={{ fontSize: 24 }} />
                                    </TableCell>
                                    <TableCell onClick={handleDriverReason} sx={{ padding: '16px !important', cursor: 'pointer' }} align="center">Haydovchi bekor qildi <ArrowRightIcon sx={{ fontSize: 24 }} /></TableCell>
                                </>
                            ) : (
                                <>
                                    {driverReason ? (
                                        <>
                                            <TableCell onClick={handleReasonClose} sx={{ padding: '16px', cursor: 'pointer' }} align="right">Haydovchi bekor qildi <ArrowLeft sx={{ fontSize: 24 }} /></TableCell>
                                            <TableCell sx={{ padding: '16px', cursor: 'pointer' }} align="right">Mazam yog'ide <ArrowUpward sx={{ transform: 'rotate(180deg)', fontSize: 16 }} /> </TableCell>
                                            <TableCell sx={{ padding: '16px', cursor: 'pointer' }} align="right">Azgina ichgandim <ArrowUpward sx={{ transform: 'rotate(180deg)', fontSize: 16 }} /></TableCell>
                                            <TableCell sx={{ padding: '16px !important', cursor: 'pointer' }} align="center">Ko’p kutib qoldim <ArrowUpward sx={{ transform: 'rotate(180deg)', fontSize: 16 }} /></TableCell>
                                        </>
                                    ) : (
                                        <>
                                            <TableCell onClick={handleReasonClose} sx={{ padding: '16px', cursor: 'pointer' }} align="right">Yo’lovchi bekor qildi <ArrowLeft sx={{ fontSize: 24 }} /></TableCell>
                                            <TableCell sx={{ padding: '16px', cursor: 'pointer' }} align="right">Rejalarim o’zgarib qoldi <ArrowUpward sx={{ transform: 'rotate(180deg)', fontSize: 16 }} /> </TableCell>
                                            <TableCell sx={{ padding: '16px', cursor: 'pointer' }} align="right">Yo’nalish noto’g’ri <ArrowUpward sx={{ transform: 'rotate(180deg)', fontSize: 16 }} /></TableCell>
                                            <TableCell sx={{ padding: '16px !important', cursor: 'pointer' }} align="center">Ko’p kutib qoldim <ArrowUpward sx={{ transform: 'rotate(180deg)', fontSize: 16 }} /></TableCell>
                                        </>
                                    )}
                                </>
                            )}
                        </>

                    </TableRow>
                </TableHead>

                <TableBody>

                    <>


                        {isOpen ? (
                            <>
                                {dataList?.map((item: any, index: number) => (
                                    <TableRow key={index} sx={{
                                        border: '0px solid #EAECF0'
                                    }}>
                                        {index === 0 && (
                                            <TableCell colSpan={0.5} rowSpan={dataList.length + 1} align="center"><p className='text-[#101828] font-semibold text-sm'>Toshkent shahar</p></TableCell>
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

                                        }} >{item?.canceled_by_driver} </TableCell>
                                    </TableRow>
                                ))}

                                <TableRow>
                                    <TableCell align="left" sx={{ fontSize: '14px', borderLeft: '1px solid #EAECF0', color: '#101828', fontWeight: 500 }}>Umumiy</TableCell>
                                    <TableCell align="right" sx={{ borderRight: '0px solid #EAECF0', color: '#039855', fontSize: '14px' }}>
                                        {dataList?.reduce((total: number, item: any) => total + (item?.done || 0), 0)}
                                    </TableCell>
                                    <TableCell align="right" sx={{ borderRight: '0px solid #EAECF0', color: '#667085', fontSize: '14px' }}>
                                        {dataList?.reduce((total: number, item: any) => total + (item?.canceled || 0), 0)}
                                    </TableCell>
                                    <TableCell align="right" sx={{ borderRight: '0px solid #EAECF0', color: '#F79009' }}>
                                        {dataList?.reduce((total: number, item: any) => total + (item?.canceled_by_client || 0), 0)}
                                    </TableCell>
                                    <TableCell align="center" sx={{ borderRight: '0px solid #EAECF0', color: '#D92D20' }}>
                                        {dataList?.reduce((total: number, item: any) => total + (item?.canceled_by_driver || 0), 0)}
                                    </TableCell>

                                </TableRow>
                            </>

                        ) : (
                            <>
                                {driverReason ? (
                                    <>
                                        {
                                            reasonOne.map((item: any, index: number) => (
                                                <TableRow key={index}>
                                                    {index === 0 && (
                                                        <TableCell colSpan={0.5} rowSpan={item.length} align="center"><p className='text-[#101828] font-semibold text-sm'>Toshkent shahar</p></TableCell>
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
                                            ))
                                        }
                                    </>
                                ) : (
                                    <>
                                        {
                                            reasonTwo.map((item: any, index: number) => (
                                                <TableRow key={index}>
                                                    {index === 0 && (
                                                        <TableCell colSpan={0.5} rowSpan={item.length} align="center"><p className='text-[#101828] font-semibold text-sm'>Toshkent shahar</p></TableCell>
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
                                            ))
                                        }
                                    </>


                                )}

                            </>

                        )}

                    </>






                </TableBody>
            </Table>
        </TableContainer >
    )
}

export default TablePessengers
