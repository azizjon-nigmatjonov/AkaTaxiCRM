import {
  Box,
  Button,
  ButtonGroup,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, ArrowUpward } from "@mui/icons-material";
// import { getWeekDays } from "../../../utils/getMonth";
import { GetMonth, getMonthWeeks } from "../../../utils/getWeekDays";
import { getYears } from "../../../utils/getMonth";
import { Months } from "../../../constants/month";

function TablePessengersVilage({
  setCountWeekPessengerVilage,
  setSelectMonthPessengerVilage,
  setYearPessengerVilage,
  passengersDataVilage,
}: {
  setCountWeekPessengerVilage: any;
  setSelectMonthPessengerVilage: any;
  setYearPessengerVilage: any;
  yearPessengerVilage: any;
  passengersDataVilage: any;
}) {
  const { currentMonth: month, year: currentYeear } = GetMonth();
  const [activeButton, setActiveButton] = useState("year");
  const [disabledYear, setDisabledYear] = useState(false);
  const [disabledMonth, setDisabledMonth] = useState(true);
  const [disabledWeek, setDisabledWeek] = useState(true);
  const [monthWeeks, setMonthWeeks]: any = useState([]);

  const [selectedWeek, setSelectedWeek] = useState("Haftani tanlash");
  const [currentMonth, setCurrentMonth] = useState(month);
  const [currentYear, setCurrentYear] = useState(currentYeear);

  const [isOpen, setIsOpen] = useState(true);
  const [driverReason, setDriverReason] = useState(false);

  const handleReason = () => {
    setIsOpen(false);
    setDriverReason(false);
  };

  const handleReasonClose = () => {
    setIsOpen(true);
  };

  function handleDriverReason() {
    setIsOpen(false);
    setDriverReason(true);
    // console.log('salom');
  }

  function handleYearButtonClick() {
    setActiveButton("year");
    setDisabledMonth(true);
    setDisabledWeek(true);

    // setSelectMonthPessengerVilage(null);
    setCountWeekPessengerVilage(null);
  }

  function handleMonthButtonClick() {
    setActiveButton("month");
    setDisabledWeek(true);
    setDisabledYear(false);
    setDisabledMonth(false);

    // setSelectMonthPessengerVilage(1);
    setCountWeekPessengerVilage(null);
  }

  function handleWeekButtonClick() {
    setActiveButton("week");
    setDisabledWeek(false);
    setDisabledYear(false);
    setDisabledMonth(false);
    setCountWeekPessengerVilage(1);
    // setSelectMonthPessengerVilage(1);
  }

  const handleYearChange = (event: any) => {
    setCurrentYear(event.target.value);
  };

  const handleMonthChange = (event: any) => {
    setCurrentMonth(event.target.value);
  };
  const handleWeekChange = (event: any) => {
    const selectedWeekValue = event.target.value;
    setSelectedWeek(selectedWeekValue);

    setCountWeekPessengerVilage(selectedWeekValue);
  };

  const yearsOption = useMemo(() => {
    return getYears();
  }, []);

  useEffect(() => {
    setYearPessengerVilage(currentYear);
  }, [currentYear]);

  useEffect(() => {
    setSelectMonthPessengerVilage(currentMonth);
  }, [currentMonth]);

  useEffect(() => {
    setMonthWeeks([]);
    const list = getMonthWeeks(currentYear, currentMonth);

    setTimeout(() => {
      setMonthWeeks(list);
    }, 0);
  }, [currentYear, currentMonth]);

  return (
    <TableContainer
      component={Paper}
      sx={{
        marginTop: "24px",
        border: "1px solid #e0e0e0",
        backgroundColor: "#fff !important",
      }}
    >
      <div className="pl-[5px] mt-[10px] pr-[16px] flex items-center justify-between">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            margin: 0,
            "& > *": {
              m: 1,
            },
          }}
        >
          <ButtonGroup variant="outlined" aria-label="Basic button group">
            <Button
              onClick={handleYearButtonClick}
              sx={{
                background: activeButton === "year" ? "#EAECF0" : "",
                textTransform: "none",
                "&:hover": { border: "1px solid #D0D5DD" },
                borderRadius: "8px",
                border: "1px solid #D0D5DD",
                color: "#344054",
                height: "40px",
                fontSize: "14px",
                fontWeight: 600,
              }}
            >
              Yillik
            </Button>
            <Button
              onClick={handleMonthButtonClick}
              sx={{
                background: activeButton === "month" ? "#EAECF0" : "",
                textTransform: "none",
                "&:hover": { border: "1px solid #D0D5DD" },
                border: "1px solid #D0D5DD",
                color: "#344054",
                height: "40px",
                fontWeight: 600,
                fontSize: "14px",
              }}
            >
              Oylik
            </Button>
            <Button
              onClick={handleWeekButtonClick}
              sx={{
                background: activeButton === "week" ? "#EAECF0" : "",
                textTransform: "none",
                "&:hover": { border: "1px solid #D0D5DD" },
                borderRadius: "8px",
                border: "1px solid #D0D5DD",
                color: "#344054",
                height: "40px",
                fontSize: "14px",
                fontWeight: 600,
              }}
            >
              Haftalik
            </Button>
          </ButtonGroup>
        </Box>

        <div className="flex space-x-5">
          <Select
            onChange={handleYearChange}
            disabled={disabledYear}
            value={currentYear}
            className="w-[183px] p-0 border"
            sx={{
              border: "1px solid #D0D5DD",
              boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
              color: "#101828",
              fontWeight: 500,
              fontSize: "16px",
              borderRadius: "8px",
              padding: "9px 12px",
              height: "40px",
              "& .MuiInputBase-input": {
                padding: 0,
              },
              "& .MuiOutlinedInput-root": {
                padding: 0,
                "& fieldset": {
                  borderWidth: "none",
                },
              },
              "&:focus": {
                borderBottom: "none",
                boxShadow: "0 12px 14px rgba(0, 0, 0, 0.2)",
              },
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
              "& .Mui-selected": {
                backgroundColor: "transparent",
              },
            }}
          >
            {yearsOption?.map((item: any) => (
              <MenuItem value={item.value}>{item.label}</MenuItem>
            ))}
          </Select>
          <Select
            onChange={handleMonthChange}
            disabled={disabledMonth}
            value={currentMonth}
            className="w-[183px] p-0 border"
            sx={{
              border: "1px solid #D0D5DD",
              boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
              color: "#101828",
              fontWeight: 500,
              fontSize: "16px",
              borderRadius: "8px",
              padding: "9px 12px",
              height: "40px",
              "& .MuiInputBase-input": {
                padding: 0,
              },
              "& .MuiOutlinedInput-root": {
                padding: 0,
                "& fieldset": {
                  borderWidth: "none",
                },
              },
              "&:focus": {
                borderBottom: "none",
                boxShadow: "0 12px 14px rgba(0, 0, 0, 0.2)",
              },
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
              "& .Mui-selected": {
                backgroundColor: "transparent",
              },
            }}
          >
            {Months.map((el) => (
              <MenuItem value={el.value} key={el.value}>
                {el.label}
              </MenuItem>
            ))}
          </Select>
          <Select
            onChange={handleWeekChange}
            disabled={disabledWeek}
            value={selectedWeek}
            className="w-[183px] p-0 border"
            sx={{
              border: "1px solid #D0D5DD",
              boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
              color: "#101828",
              fontWeight: 500,
              fontSize: "16px",
              borderRadius: "8px",
              padding: "9px 12px",
              height: "40px",
              "& .MuiInputBase-input": {
                padding: 0,
              },
              "& .MuiOutlinedInput-root": {
                padding: 0,
                "& fieldset": {
                  borderWidth: "none",
                },
              },
              "&:focus": {
                borderBottom: "none",
                boxShadow: "0 12px 14px rgba(0, 0, 0, 0.2)",
              },
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
              "& .Mui-selected": {
                backgroundColor: "transparent",
              },
            }}
          >
            <MenuItem value={"Haftani tanlash"}>Haftani tanlash</MenuItem>

            {monthWeeks.map((week: any) => (
              <MenuItem key={week.value} value={week.value}>
                {week.label}
              </MenuItem>
            ))}
          </Select>
        </div>
      </div>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow
            sx={{
              borderBottom: "1px solid #EAECF0",
            }}
          >
            <TableCell sx={{ padding: "16px !important" }}>
              Viloyatlardan
            </TableCell>
            <TableCell sx={{ padding: "16px" }} align="left">
              Ga
            </TableCell>

            <>
              {isOpen ? (
                <>
                  <TableCell sx={{ padding: "16px" }} align="right">
                    Yakunlandi
                  </TableCell>
                  <TableCell sx={{ padding: "16px" }} align="right">
                    Topilmadi
                  </TableCell>
                  <TableCell
                    onClick={handleReason}
                    sx={{
                      padding: "16px",
                      alignItems: "center",
                      cursor: "pointer",
                    }}
                    align="right"
                  >
                    Yo’lovchi bekor qildi
                    <ArrowRightIcon sx={{ fontSize: 24 }} />
                  </TableCell>
                  <TableCell
                    onClick={handleDriverReason}
                    sx={{ padding: "16px !important", cursor: "pointer" }}
                    align="center"
                  >
                    Haydovchi bekor qildi{" "}
                    <ArrowRightIcon sx={{ fontSize: 24 }} />
                  </TableCell>
                </>
              ) : (
                <>
                  {driverReason ? (
                    <>
                      <TableCell
                        onClick={handleReasonClose}
                        sx={{ padding: "16px", cursor: "pointer" }}
                        align="right"
                      >
                        Haydovchi bekor qildi{" "}
                        <ArrowLeft sx={{ fontSize: 24 }} />
                      </TableCell>
                      <TableCell
                        sx={{ padding: "16px", cursor: "pointer" }}
                        align="right"
                      >
                        Mazam yog'ide{" "}
                        <ArrowUpward
                          sx={{ transform: "rotate(180deg)", fontSize: 16 }}
                        />{" "}
                      </TableCell>
                      <TableCell
                        sx={{ padding: "16px", cursor: "pointer" }}
                        align="right"
                      >
                        Azgina ichgandim{" "}
                        <ArrowUpward
                          sx={{ transform: "rotate(180deg)", fontSize: 16 }}
                        />
                      </TableCell>
                      <TableCell
                        sx={{ padding: "16px !important", cursor: "pointer" }}
                        align="center"
                      >
                        Ko’p kutib qoldim{" "}
                        <ArrowUpward
                          sx={{ transform: "rotate(180deg)", fontSize: 16 }}
                        />
                      </TableCell>
                    </>
                  ) : (
                    <>
                      <TableCell
                        onClick={handleReasonClose}
                        sx={{ padding: "16px", cursor: "pointer" }}
                        align="right"
                      >
                        Yo’lovchi bekor qildi{" "}
                        <ArrowLeft sx={{ fontSize: 24 }} />
                      </TableCell>
                      <TableCell
                        sx={{ padding: "16px", cursor: "pointer" }}
                        align="right"
                      >
                        Rejalarim o’zgarib qoldi{" "}
                        <ArrowUpward
                          sx={{ transform: "rotate(180deg)", fontSize: 16 }}
                        />{" "}
                      </TableCell>
                      <TableCell
                        sx={{ padding: "16px", cursor: "pointer" }}
                        align="right"
                      >
                        Yo’nalish noto’g’ri{" "}
                        <ArrowUpward
                          sx={{ transform: "rotate(180deg)", fontSize: 16 }}
                        />
                      </TableCell>
                      <TableCell
                        sx={{ padding: "16px !important", cursor: "pointer" }}
                        align="center"
                      >
                        Ko’p kutib qoldim{" "}
                        <ArrowUpward
                          sx={{ transform: "rotate(180deg)", fontSize: 16 }}
                        />
                      </TableCell>
                    </>
                  )}
                </>
              )}
            </>
          </TableRow>
        </TableHead>

        {/* { passengersDataVilage } */}

        <TableBody>
          {passengersDataVilage?.data?.map((item: any, index: number) => (
            <TableRow
              key={item.region_id}
              sx={{
                border: "0px solid #EAECF0",
              }}
            >
              <TableCell
                component="th"
                scope="row"
                sx={{
                  borderLeft: "1px solid #EAECF0",
                  borderRight: "1px solid #EAECF0",
                  color: "#101828",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                {item.region_name}
              </TableCell>

              {index === 0 && (
                <TableCell
                  colSpan={0.5}
                  rowSpan={passengersDataVilage?.data?.length + 1}
                  align="center"
                >
                  Toshkent shahar
                </TableCell>
              )}

              <TableCell
                align="right"
                sx={{
                  borderRight: "0px solid #EAECF0",
                  borderLeft: "1px solid #EAECF0",
                  color: "#039855",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                {item?.done}
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  borderRight: "0px solid #EAECF0",
                  color: "#667085",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                {item?.canceled}
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  borderRight: "0px solid #EAECF0",
                  color: "#F79009",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                {item?.canceled_by_client}
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  borderRight: "0px solid #EAECF0",
                  color: "#D92D20",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                {item?.canceled_by_driver}
              </TableCell>
            </TableRow>
          ))}

          <TableRow>
            <TableCell
              align="left"
              sx={{
                fontSize: "14px",
                borderRight: "1px solid #EAECF0",
                color: "#101828",
                fontWeight: 500,
              }}
            >
              Umumiy
            </TableCell>
            <TableCell
              align="right"
              sx={{
                fontSize: "14px",
                borderLeft: "1px solid #EAECF0",
                color: "#039855",
                fontWeight: 500,
              }}
            >
              {passengersDataVilage?.data?.reduce(
                (total: number, item: any) => total + (item?.done || 0),
                0
              )}
            </TableCell>
            <TableCell
              align="right"
              sx={{ fontSize: "14px", color: "#667085", fontWeight: 500 }}
            >
              {passengersDataVilage?.data?.reduce(
                (total: number, item: any) => total + (item?.canceled || 0),
                0
              )}
            </TableCell>
            <TableCell
              align="right"
              sx={{
                fontSize: "14px",
                borderRight: "0px solid #EAECF0",
                color: "#F79009",
              }}
            >
              {passengersDataVilage?.data?.reduce(
                (total: number, item: any) =>
                  total + (item?.canceled_by_client || 0),
                0
              )}
            </TableCell>
            <TableCell
              align="center"
              sx={{
                fontSize: "14px",
                borderRight: "0px solid #EAECF0",
                color: "#D92D20",
              }}
            >
              {passengersDataVilage?.data?.reduce(
                (total: number, item: any) =>
                  total + (item?.canceled_by_driver || 0),
                0
              )}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TablePessengersVilage;
