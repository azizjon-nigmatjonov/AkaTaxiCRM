import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { useState } from "react";
import { ArrowLeft, ArrowUpward } from "@mui/icons-material";

function Tabledirvers({
  driverTripsDataFromCity,
}: {
  driverTripsDataFromCity: any;
}) {
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
  }

  return (
    <TableContainer
      component={Paper}
      sx={{ border: "1px solid #e0e0e0", backgroundColor: "#fff !important" }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow
            sx={{
              borderBottom: "1px solid #EAECF0",
            }}
          >
            <TableCell sx={{ padding: "16px !important" }}>DAN</TableCell>
            <TableCell sx={{ padding: "16px" }} align="left">
              Viloyatlarga
            </TableCell>

            <>
              {isOpen ? (
                <>
                  <TableCell sx={{ padding: "16px" }} align="right">
                    Topdi
                  </TableCell>
                  <TableCell sx={{ padding: "16px" }} align="right">
                    <span
                      className="inline-block cursor-pointer"
                      onClick={handleDriverReason}
                    >
                      Yo’lovchini bekor qilish{" "}
                      <ArrowRightIcon sx={{ fontSize: 24 }} />
                    </span>
                  </TableCell>
                  <TableCell
                    sx={{ padding: "16px !important", cursor: "pointer" }}
                    align="center"
                    onClick={handleReason}
                  >
                    Bekor qilindi <ArrowRightIcon sx={{ fontSize: 24 }} />
                  </TableCell>
                </>
              ) : (
                <>
                  {driverReason ? (
                    <>
                      <TableCell
                        sx={{ padding: "16px", cursor: "pointer" }}
                        align="right"
                      >
                        Yo’lovchini bekor qilish{" "}
                        <ArrowLeft
                          sx={{ fontSize: 24 }}
                          onClick={handleReasonClose}
                        />
                      </TableCell>
                      <TableCell sx={{ padding: "16px" }} align="right">
                        Azgina ichgandim{" "}
                        <ArrowUpward
                          sx={{ transform: "rotate(180deg)", fontSize: 16 }}
                        />
                      </TableCell>
                      <TableCell
                        sx={{ padding: "16px !important" }}
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
                      <TableCell sx={{ padding: "16px" }} align="right">
                        Bekor qilindi{" "}
                        <ArrowLeft
                          sx={{ fontSize: 24 }}
                          onClick={handleReasonClose}
                        />
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
        <TableBody>
          {driverTripsDataFromCity?.data.map((item: any, index: number) => (
            <TableRow
              key={index}
              sx={{
                border: "0px solid #EAECF0",
              }}
            >
              {index === 0 && (
                <TableCell
                  colSpan={1}
                  rowSpan={driverTripsDataFromCity?.data?.length + 1}
                  align="center"
                >
                  Toshkent shahar
                </TableCell>
              )}
              <TableCell
                component="th"
                scope="row"
                sx={{
                  borderLeft: "1px solid #EAECF0",
                  color: "#101828",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                {item?.region_name}
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  borderRight: "0px solid #EAECF0",
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
                  color: "#F79009",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                {item?.passenger_canceled}
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
                {item?.canceled}
              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell
              align="left"
              sx={{
                fontSize: "14px",
                borderLeft: "1px solid #EAECF0",
                color: "#101828",
                fontWeight: 500,
              }}
            >
              Umumiy
            </TableCell>
            <TableCell
              align="right"
              sx={{
                borderRight: "0px solid #EAECF0",
                color: "#039855",
                fontSize: "14px",
              }}
            >
              {driverTripsDataFromCity?.data?.reduce(
                (total: number, item: any) => total + (item?.done || 0),
                0
              )}
            </TableCell>
            <TableCell
              align="right"
              sx={{
                borderRight: "0px solid #EAECF0",
                color: "#F79009",
                fontSize: "14px",
              }}
            >
              {driverTripsDataFromCity?.data?.reduce(
                (total: number, item: any) =>
                  total + (item?.passenger_canceled || 0),
                0
              )}
            </TableCell>
            <TableCell
              align="center"
              sx={{
                borderRight: "0px solid #EAECF0",
                color: "#D92D20",
                fontSize: "14px",
              }}
            >
              {driverTripsDataFromCity?.data?.reduce(
                (total: number, item: any) => total + (item?.canceled || 0),
                0
              )}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Tabledirvers;
