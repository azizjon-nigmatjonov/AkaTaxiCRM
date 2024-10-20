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

function TablePessengersVilage({
  passengersDataVilage,
}: {
  passengersDataVilage: any;
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
    // console.log('salom');
  }

  return (
    <>
      <TableContainer
        component={Paper}
        sx={{
          marginTop: "20px",
          border: "1px solid #e0e0e0",
          backgroundColor: "#fff !important",
        }}
      >
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
    </>
  );
}

export default TablePessengersVilage;
