import { Box, Button, ButtonGroup, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useState } from "react";


function TableDriversVilage({ setCountWeekDriversVilage, setSelectMonthDriversVilage, setYearDriversVilage, yearDriversVilage, driverTripsDataFromVilage }: { setCountWeekDriversVilage: any, setSelectMonthDriversVilage: any, setYearDriversVilage: any, yearDriversVilage: string, driverTripsDataFromVilage: any }) {

    const [activeButton, setActiveButton] = useState<string>('year');
    const [disabledYear, setDisabledYear] = useState<boolean>(false);
    const [disabledMonth, setDisabledMonth] = useState<boolean>(true);
    const [disabledWeek, setDisabledWeek] = useState<boolean>(true);
    const [months] = useState(['yanvar', 'fevral', 'mart', 'aprel', 'may', 'iyun', 'iyul', 'avgust', 'sentabr', 'oktabr', 'noyabr', 'dekabr']);
    const [monthName, setMonthName] = useState('yanvar')
    const [selectedWeek, setSelectedWeek] = useState('Haftani tanlash')


    const handleYearButtonClick = () => {
        setActiveButton('year');
        setDisabledMonth(true);
        setDisabledWeek(true)
        setYearDriversVilage('2024')
    }

    const handleMonthButtonClick = () => {
        setActiveButton('month');
        setDisabledWeek(true)
        setDisabledYear(false)
        setDisabledMonth(false)
        setSelectMonthDriversVilage(2)
    }

    const handleWeekButtonClick = () => {
        setActiveButton('week');
        setDisabledWeek(false)
        setDisabledYear(false)
        setDisabledMonth(false)
        setSelectMonthDriversVilage(4)
        setCountWeekDriversVilage(3)
    }

    const handleYearChange = (event: any) => {
        setYearDriversVilage(event.target.value)
    }

    const handleMonthChange = (event: any) => {
        const monthName = event.target.value;
        const monthIndex = months.indexOf(monthName);
        setSelectMonthDriversVilage(monthIndex + 1);
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
        setSelectedWeek(selectedWeekValue);
        const selectedWeekIndex = weeks.findIndex((week: any) => formatWeek(week) === selectedWeekValue);
        const selectedWeekNumber = selectedWeekIndex + 1;
        setCountWeekDriversVilage(selectedWeekNumber)
    }



    return (
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
                        <Button onClick={handleYearButtonClick} sx={{
                            background: activeButton === 'year' ? '#EAECF0' : '', textTransform: 'none', '&:hover': { border: '1px solid #D0D5DD', }, borderRadius: '8px', border: '1px solid #D0D5DD', color: '#344054', height: '40px', fontSize: '14px', fontWeight: 600
                        }}>Yillik</Button>
                        <Button onClick={handleMonthButtonClick} sx={{ background: activeButton === 'month' ? '#EAECF0' : '', textTransform: 'none', '&:hover': { border: '1px solid #D0D5DD', }, border: '1px solid #D0D5DD', color: '#344054', height: '40px', fontWeight: 600, fontSize: '14px', }}>Oylik</Button>
                        <Button onClick={handleWeekButtonClick} sx={{ background: activeButton === 'week' ? '#EAECF0' : '', textTransform: 'none', '&:hover': { border: '1px solid #D0D5DD', }, borderRadius: '8px', border: '1px solid #D0D5DD', color: '#344054', height: '40px', fontSize: '14px', fontWeight: 600 }}>Haftalik</Button>
                    </ButtonGroup>
                </Box>

                <div className='flex gap-3'>
                    <Select
                        onChange={handleYearChange}
                        disabled={disabledYear}
                        value={yearDriversVilage}
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
                        onChange={handleMonthChange}
                        disabled={disabledMonth}
                        value={monthName}
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

                        {months.map((el, index) => (
                            <MenuItem value={el} key={index}>{el}</MenuItem>
                        ))}


                    </Select>
                    <Select
                        onChange={handleWeekChange}
                        disabled={disabledWeek}
                        value={selectedWeek}
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
                        {weeks.map((week: any, index: number) => (
                            <MenuItem key={index} value={formatWeek(week)}>{formatWeek(week)}</MenuItem>
                        ))}

                    </Select>
                </div>

            </div>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow sx={{
                        borderBottom: '1px solid #EAECF0'
                    }}>
                        <TableCell sx={{ padding: '16px !important' }}>Viloyatlardan</TableCell>
                        <TableCell sx={{ padding: '16px' }} align="left">GA</TableCell>
                        <TableCell sx={{ padding: '16px' }} align="right">Topdi</TableCell>
                        <TableCell sx={{ padding: '16px', cursor: 'pointer' }} align="right">Yo’lovchini bekor qilish<ArrowRightIcon sx={{ fontSize: 24 }} /></TableCell>
                        <TableCell sx={{ padding: '16px !important', cursor: 'pointer' }} align="center">Bekor qilindi<ArrowRightIcon sx={{ fontSize: 24 }} /></TableCell>

                    </TableRow>
                </TableHead>


                <TableBody>
                    {driverTripsDataFromVilage?.data?.map((item: any, index: number) => {

                        // console.log(item);


                        return (
                            <TableRow key={index} sx={{
                                border: '0px solid #EAECF0'
                            }}>

                                <TableCell component="th" scope="row" sx={{
                                    borderLeft: '1px solid #EAECF0',
                                    color: '#101828',
                                    fontSize: '14px',
                                    fontWeight: '500',
                                }}>
                                    {item?.region_name}
                                </TableCell>
                                {index === 0 && (
                                    <TableCell sx={{
                                        borderRight: '1px solid #EAECF0',
                                        borderLeft: '1px solid #EAECF0',
                                    }} colSpan={1} rowSpan={driverTripsDataFromVilage?.data?.length} align="center">Toshkent shahar</TableCell>
                                )}
                                <TableCell align="right" sx={{
                                    borderRight: '0px solid #EAECF0',
                                    color: '#039855',
                                    fontSize: '14px',
                                    fontWeight: '500',
                                }}>{item?.done}</TableCell>
                                <TableCell align="right" sx={{
                                    borderRight: '0px solid #EAECF0',
                                    color: '#F79009',
                                    fontSize: '14px',
                                    fontWeight: '500',
                                }}>{item?.passenger_canceled}</TableCell>

                                <TableCell align="center" sx={{
                                    borderRight: '0px solid #EAECF0',
                                    color: '#D92D20',
                                    fontSize: '14px',
                                    fontWeight: '500',
                                }}>{item?.canceled}</TableCell>

                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default TableDriversVilage
