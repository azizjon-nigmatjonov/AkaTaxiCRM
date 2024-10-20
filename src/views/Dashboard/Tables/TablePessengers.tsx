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
// import { ArrowDown } from "components/IconGenerator/Svg";

function TablePessengers({ dataList }: { dataList: any }) {
  const [isOpen, setIsOpen] = useState(true);
  const [driverReason, setDriverReason] = useState(false);

  const reasonOne = [
    {
      canceled: "salom",
      canceled_by_client: 0,
      canceled_by_driver: 11,
      done: 9,
      region_id: 1,
      region_name: "Navoiy viloyati",
    },
  ];
  const reasonTwo = [
    {
      canceled: "qalesan",
      canceled_by_client: 100,
      canceled_by_driver: 211,
      done: 2,
      region_id: 7,
      region_name: "Buxoro",
    },
  ];

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
    <>
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

          <TableBody>
            <>
              {isOpen ? (
                <>
                  {dataList?.map((item: any, index: number) => (
                    <TableRow
                      key={index}
                      sx={{
                        border: "0px solid #EAECF0",
                      }}
                    >
                      {index === 0 && (
                        <TableCell
                          colSpan={0.5}
                          rowSpan={dataList.length + 1}
                          align="center"
                        >
                          <p className="text-[#101828] font-semibold text-sm">
                            Toshkent shahar
                          </p>
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
                        }}
                      >
                        {item?.canceled}
                      </TableCell>
                      <TableCell
                        align="right"
                        sx={{
                          borderRight: "0px solid #EAECF0",
                          color: "#F79009",
                        }}
                      >
                        {item?.canceled_by_client}
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{
                          borderRight: "0px solid #EAECF0",
                          color: "#D92D20",
                        }}
                      >
                        {item?.canceled_by_driver}{" "}
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
                      {dataList?.reduce(
                        (total: number, item: any) => total + (item?.done || 0),
                        0
                      )}
                    </TableCell>
                    <TableCell
                      align="right"
                      sx={{
                        borderRight: "0px solid #EAECF0",
                        color: "#667085",
                        fontSize: "14px",
                      }}
                    >
                      {dataList?.reduce(
                        (total: number, item: any) =>
                          total + (item?.canceled || 0),
                        0
                      )}
                    </TableCell>
                    <TableCell
                      align="right"
                      sx={{
                        borderRight: "0px solid #EAECF0",
                        color: "#F79009",
                      }}
                    >
                      {dataList?.reduce(
                        (total: number, item: any) =>
                          total + (item?.canceled_by_client || 0),
                        0
                      )}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        borderRight: "0px solid #EAECF0",
                        color: "#D92D20",
                      }}
                    >
                      {dataList?.reduce(
                        (total: number, item: any) =>
                          total + (item?.canceled_by_driver || 0),
                        0
                      )}
                    </TableCell>
                  </TableRow>
                </>
              ) : (
                <>
                  {driverReason ? (
                    <>
                      {reasonOne.map((item: any, index: number) => (
                        <TableRow key={index}>
                          {index === 0 && (
                            <TableCell
                              colSpan={0.5}
                              rowSpan={item.length}
                              align="center"
                            >
                              <p className="text-[#101828] font-semibold text-sm">
                                Toshkent shahar
                              </p>
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
                            }}
                          >
                            {item?.canceled}
                          </TableCell>
                          <TableCell
                            align="right"
                            sx={{
                              borderRight: "0px solid #EAECF0",
                              color: "#F79009",
                            }}
                          >
                            {item?.canceled_by_client}
                          </TableCell>
                          <TableCell
                            align="center"
                            sx={{
                              borderRight: "0px solid #EAECF0",
                              color: "#D92D20",
                            }}
                          >
                            {item?.canceled_by_driver}
                          </TableCell>
                        </TableRow>
                      ))}
                    </>
                  ) : (
                    <>
                      {reasonTwo.map((item: any, index: number) => (
                        <TableRow key={index}>
                          {index === 0 && (
                            <TableCell
                              colSpan={0.5}
                              rowSpan={item.length}
                              align="center"
                            >
                              <p className="text-[#101828] font-semibold text-sm">
                                Toshkent shahar
                              </p>
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
                            }}
                          >
                            {item?.canceled}
                          </TableCell>
                          <TableCell
                            align="right"
                            sx={{
                              borderRight: "0px solid #EAECF0",
                              color: "#F79009",
                            }}
                          >
                            {item?.canceled_by_client}
                          </TableCell>
                          <TableCell
                            align="center"
                            sx={{
                              borderRight: "0px solid #EAECF0",
                              color: "#D92D20",
                            }}
                          >
                            {item?.canceled_by_driver}
                          </TableCell>
                        </TableRow>
                      ))}
                    </>
                  )}
                </>
              )}
            </>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default TablePessengers;
