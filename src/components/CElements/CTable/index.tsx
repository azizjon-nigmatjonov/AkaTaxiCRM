import { TableRow } from "@mui/material";

import {
  CTableHeadCell,
  CTableCell,
  CTableWrapper,
  CTableHead,
  CTableRow,
  CTableBody,
} from "./Details";
import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import TabbleActions from "./Details/Actions";
import { DotsIcon } from "../../IconGenerator/Svg";
import { t } from "i18next";
import { useDispatch, useSelector } from "react-redux";
import { tableSizeAction } from "../../../store/tableSize/tableSizeSlice";
import { TableDelete } from "./Details/Actions/EditDelete";
import { PopoverDelete } from "./Details/Actions/EditDelete/PopOver";

interface Props {
  count?: number;
  headColumns: any[];
  bodyColumns?: object[] | any;
  currentPage?: number;
  clickable?: boolean;
  isLoading?: boolean;
  passRouter?: boolean;
  isResizeble?: boolean;
  disablePagination?: boolean;
  autoHeight?: boolean;
  limitCount?: number[];
  setCurrentPage?: (val: number) => void;
  handleRowClick?: (val: any) => void;
  handleActions?: (val: any, val2?: any) => void;
  idForTable?: string;
}

const CTable = ({
  count = 1,
  headColumns = [],
  bodyColumns = [],
  currentPage = 1,
  clickable = false,
  isLoading = false,
  passRouter = true,
  isResizeble = true,
  idForTable,
  disablePagination = false,
  autoHeight = false,
  limitCount = [10, 30, 50],
  //   actionList = [{ edit: {}, delete: {} }],
  setCurrentPage = () => { },
  handleRowClick = () => { },
  handleActions = () => { },
}: Props) => {
  const tableSize = useSelector((state: any) => state.tableSize.tableSize);
  const location = useLocation();
  const tableSettings: Record<string, any> = {};
  const [headColHeight, setHeadColHeight] = useState(45);
  const [tableHeight, setTableHeight] = useState(500);
  const [currentLimit, setCurrentLimit] = useState(10);
  //   const { currentSort } = useGetQueries();
  const [currentIndex, setCurrentIndex] = useState(null);
  const [currDelete, setCurrDelete] = useState<any>({});
  const dispatch = useDispatch();



  const bodySource = useMemo(() => {
    if (!bodyColumns?.length) return [];

    let list = [];

    if (bodyColumns.length < currentLimit) {
      for (let i = 0; i < currentLimit; i++) {
        const obj: Record<string, any> = {};
        headColumns.forEach((col) => {
          obj[col.title] = "";
          obj.empty = true;
        });
        list.push(bodyColumns[i] ?? obj);
      }
    } else list = bodyColumns;

    const checks = (status: any) => {
      if (status === undefined) return true;
      return status;
    };


    return (
      list.map((item: any, index?: any) => ({
        ...item,
        is_delete: checks(item?.is_delete),
        is_edit: checks(item?.is_edit),
        is_learn_more: checks(item?.learn_more),
        index:
          currentPage > 1
            ? currentPage * currentLimit - currentLimit + (index + 1)
            : index + 1,
      })) ?? []
    );
  }, [bodyColumns, currentLimit, currentPage, headColumns]);


  const pageName: any = useMemo(() => {
    const strLen =
      location.pathname.split("/")[2].length +
      location.pathname.split("/")[1].length;

    let result = location.pathname.substring(0, strLen + 2);

    if (idForTable) result = result + "/" + idForTable;
    return result;
  }, [location, idForTable]);

  useEffect(() => {
    if (!isResizeble) return;

    const createResizableTable = function (table: any) {
      if (!table) return;
      const cols = table.querySelectorAll("th");

      [].forEach.call(cols, function (col: any, idx: number) {
        // Add a resizer element to the column
        const resizer = document.createElement("span");
        resizer.classList.add("resizer");
        // Set the height
        resizer.style.height = `${table.offsetHeight}px`;

        col.appendChild(resizer);
        setHeadColHeight(col.offsetHeight);
        createResizableColumn(col, resizer, idx);
      });
    };

    const createResizableColumn = function (
      col: any,
      resizer: any,
      idx: number
    ) {
      let x = 0;
      let w = 0;

      const mouseDownHandler = function (e: any) {
        x = e.clientX;

        const styles = window.getComputedStyle(col);
        w = parseInt(styles.width, 10);

        document.addEventListener("mousemove", mouseMoveHandler);
        document.addEventListener("mouseup", mouseUpHandler);

        resizer.classList.add("resizing");
      };

      const mouseMoveHandler = function (e: any) {
        const dx = e.clientX - x;
        const colID = col.getAttribute("id");
        const colWidth = w + dx;
        dispatch(tableSizeAction.setTableSize({ pageName, colID, colWidth }));
        dispatch(
          tableSizeAction.setTableSettings({
            pageName,
            colID,
            colWidth,
            isStiky: "ineffective",
            colIdx: idx - 1,
          })
        );
        col.style.width = `${colWidth}px`;
      };

      const mouseUpHandler = function () {
        resizer.classList.remove("resizing");
        document.removeEventListener("mousemove", mouseMoveHandler);
        document.removeEventListener("mouseup", mouseUpHandler);
      };

      resizer.addEventListener("mousedown", mouseDownHandler);
    };

    createResizableTable(document.getElementById("resizeMe"));
  }, [bodySource]);

  const calculateWidth = (colId: any, index: number) => {


    const colIdx = tableSettings?.[pageName]
      ?.filter((item: any) => item?.isStiky === true)
      ?.findIndex((item: any) => item?.id === colId);

    if (index === 0) {
      return 0;
    } else if (colIdx === 0) {
      return 0;
    } else if (
      tableSettings?.[pageName]?.filter((item: any) => item?.isStiky === true)
        .length === 1
    ) {
      return 0;
    } else {
      return tableSettings?.[pageName]
        ?.filter((item: any) => item?.isStiky === true)
        ?.slice(0, colIdx)
        ?.reduce((acc: any, item: any) => acc + item?.colWidth, 0);
    }
  };

  // const handleAutoSize = (colID, colIdx) => {
  //   dispatch(
  //     tableSizeAction.setTableSize({ pageName, colID, colWidth: "auto" })
  //   );
  //   const element = document.getElementById(colID);
  //   element.style.width = "auto";
  //   element.style.minWidth = "auto";
  //   dispatch(
  //     tableSizeAction.setTableSettings({
  //       pageName,
  //       colID,
  //       colWidth: element.offsetWidth,
  //       isStiky: "ineffective",
  //       colIdx,
  //     })
  //   );
  // };

  const handleGetHeightFn = () => {
    if (autoHeight) {
      setTableHeight(0);
      return;
    }
    let res = 0;
    bodySource?.forEach((item: any) => {
      if (item?.ref) res = res + item.ref.offsetHeight;
    });

    const currentHeight = res + headColHeight + 2;
    if (currentHeight && currentHeight > 400) setTableHeight(currentHeight);
    else setTableHeight(500);
  };

  const handleBodycolRef = (item: any, e: any) => {
    if (!e) return;
    item.ref = e;

    if (item?.index === bodySource?.length) {
      handleGetHeightFn();
    }
  };

  const tableActions = (status: string, el: any) => {
    if (status === "delete") {
      setCurrDelete(el);
    } else {
      handleActions(status, el);
    }
  };


  return (
    <div id="table">
      <CTableWrapper
        count={count}
        currentLimit={currentLimit}
        loader={isLoading}
        height={tableHeight}
        limitCount={limitCount}
        passRouter={passRouter}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        setCurrentLimit={setCurrentLimit}
        disablePagination={disablePagination}
        dataLength={bodyColumns?.length}
      >
        <CTableHead>
          <CTableRow className="">
            {headColumns?.map((column, index) => (
              <CTableHeadCell
                id={column.id}
                key={column?.innerId ? column.innerId : column.id || index}
                style={{
                  padding: "10px 4px",
                  minWidth: tableSize?.[pageName]?.[column.id]
                    ? tableSize?.[pageName]?.[column.id]
                    : column?.width
                      ? column.width
                      : "auto",
                  width: tableSize?.[pageName]?.[column.id]
                    ? tableSize?.[pageName]?.[column.id]
                    : column?.width
                      ? column.width
                      : "auto",
                  position: tableSettings?.[pageName]?.find(
                    (item: any) => item?.id === column?.id
                  )?.isStiky
                    ? "sticky"
                    : "relative",
                  left: tableSettings?.[pageName]?.find(
                    (item: any) => item?.id === column?.id
                  )?.isStiky
                    ? calculateWidth(column?.id, index)
                    : "0",
                  backgroundColor: "#fff",
                  zIndex: tableSettings?.[pageName]?.find(
                    (item: any) => item?.id === column?.id
                  )?.isStiky
                    ? "1"
                    : "",
                }}
              >
                <div style={{ textAlign: column?.textAlign || "left" }}>
                  {column.renderHead
                    ? Array.isArray(column.renderHead) ? column.renderHead(column.renderHead.map((data: any) => column[data])) : column.renderHead() : column?.id === "index" ? "№" : t(column.title)
                  }
                  {/* {column?.filter && (
                    <div
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "50%",
                        transform: "translateY(-50%)",
                      }}
                    >
                      <CFilter
                        currentSort={currentSort}
                        up={`up_${column.id}`}
                        down={`down_${column.id}`}
                      />
                    </div>
                  )} */}
                </div>
              </CTableHeadCell>
            ))}
          </CTableRow>
        </CTableHead>

        <CTableBody
          loader={isLoading}
          columnscount={headColumns?.length}
          rowsCount={currentLimit}
          dataLength={bodySource?.length}
        >
          {bodySource?.length
            ? bodySource?.map((item: any, rowIndex: any) => (
              <TableRow
                key={rowIndex}
                ref={(e) => handleBodycolRef(item, e)}
                className={clickable ? "clickable" : ""}
              >
                {headColumns.map((column, colIndex) => (
                  <CTableCell
                    key={colIndex}
                    className={`overflow-ellipsis ${tableHeight}`}
                    onClick={() => {
                      if (clickable && column?.click !== "custom" && column?.id !== "actions")
                        handleRowClick(item);
                    }}
                    style={{
                      minWidth: "max-content",
                      padding: "0 4px",
                      position: tableSettings?.[pageName]?.find(
                        (item: any) => item?.id === column?.id
                      )?.isStiky
                        ? "sticky"
                        : "relative",
                      left: tableSettings?.[pageName]?.find(
                        (item: any) => item?.id === column?.id
                      )?.isStiky
                        ? calculateWidth(column?.id, colIndex)
                        : "0",
                      backgroundColor: "#fff",
                      zIndex: tableSettings?.[pageName]?.find(
                        (item: any) => item?.id === column?.id
                      )?.isStiky
                        ? "1"
                        : "",
                    }}
                  >
                    <div
                      style={{
                        textAlign: column?.textAlign || "left",
                      }}
                    >
                      {column.id !== "actions" && (
                        <span>

                          {column.render ? Array.isArray(column.id) ? column.render(column.id.map((data: any) => item[data])) : column.render(item[column.id], item) : item[column.id]}
                        </span>
                      )}

                      {column.id === "actions" && !item.empty && (
                        <div className="relative">
                          {column.permission.length <= 3 ? (
                            <div>
                              <TableDelete
                                element={item}
                                tableActions={tableActions}
                                permissions={column.permission}
                              />
                              {currDelete.index === item.index ? (
                                <PopoverDelete
                                  closePopover={(status) => {
                                    setCurrDelete({});
                                    handleActions(status, item);
                                  }}
                                />
                              ) : (
                                ""
                              )}
                            </div>
                          ) : (
                            <>
                              <button
                                className="p-2"
                                onClick={() => setCurrentIndex(rowIndex)}
                              >
                                <DotsIcon />

                              </button>
                              <TabbleActions
                                element={item}
                                rowIndex={rowIndex}
                                currentIndex={currentIndex}
                                setCurrentIndex={setCurrentIndex}
                                handleActions={handleActions}
                                permissions={column.permission}
                              />
                            </>
                          )}
                        </div>
                      )
                        // <TabbleActions
                        //   element={item}
                        //   rowIndex={rowIndex + 1}
                        //   col={item[column.id]}
                        //   handleActions={handleActions}
                        //   actionList={actionList}
                        //   anchorEl={anchorEl}
                        //   setAnchorEl={setAnchorEl}
                        // />
                      }
                    </div>
                  </CTableCell>
                ))}
              </TableRow>
            ))
            : ""}
        </CTableBody>
      </CTableWrapper>
    </div>
  );
};

export default CTable;
