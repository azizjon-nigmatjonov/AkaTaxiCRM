import { Paper } from "@mui/material";
// import { forwardRef } from "react";
import Pagination from "./Pagination";
import EmptyDataComponent from "../../../EmptyDataComponent";
// import TableLoader from "../../../TableLoader/index";
// import { DeleteRounded, BorderColorRounded } from "@mui/icons-material";
import "./style.scss";
import { ReactNode, } from "react";
import TableLoader from "./TableLoader";

interface Props {
  loader: boolean;
  height: any;
  count: number;
  currentLimit: number;
  passRouter: boolean;
  limitCount: number[];
  currentPage: number;
  tableStyle?: object;
  wrapperStyle?: object;
  setCurrentPage: (newPage: any) => void;
  setCurrentLimit: (newLimit: any) => void;
  children: ReactNode;
  disablePagination?: any;
  dataLength: number;
}

export const CTableWrapper = ({
  loader,
  height,
  count,
  currentLimit,
  passRouter,
  limitCount,
  currentPage,
  tableStyle = {},
  wrapperStyle = {},
  setCurrentLimit,
  setCurrentPage,
  dataLength,
  children,
  disablePagination,
}: Props) => {
  return (
    <Paper className="CTableContainer" style={wrapperStyle}>
      <div
        className="table"
        style={{
          height: height ? height : "auto",
          overflow: loader ? "hidden" : "auto",
          ...tableStyle,
        }}
      >
        <table id="resizeMe">{children}</table>

        {dataLength && !loader && !disablePagination ? (
          <Pagination
            currentPage={currentPage}
            count={count}
            limit={currentLimit}
            limitCount={limitCount}
            passRouter={passRouter}
            setCurrentPage={setCurrentPage}
            setCurrentLimit={setCurrentLimit}
            dataLength={dataLength}
          />
        ) : (
          ""
        )}
      </div>

      {/* {!disablePagination && (
        <CPagination
          currentPage={currentPage}
          count={count}
          limit={currentLimit}
          limitCount={limitCount}
          passRouter={passRouter}
          setCurrentPage={setCurrentPage}
          setCurrentLimit={setCurrentLimit}
        />
      )} */}
    </Paper>
  );
};

export const CTableHead = ({ children }: { children: ReactNode }) => {
  return <thead className="CTableHead">{children}</thead>;
};

export const CTableHeadRow = ({ children }: { children: ReactNode }) => {
  return <tr className="CTableHeadRow">{children}</tr>;
};

export const CTableHeadCell = ({
  children,
  className = "",
  buttonsCell = false,
  ...props
}: {
  children: ReactNode;
  className?: string;
  buttonsCell?: any;
  id: any;
  style: any;
}) => {
  return <th {...props}>{children}</th>;
};

export const CTableBody = ({
  children,
  rowsCount,
  loader,
  ref,
  dataLength,
  ...props
}: {
  children: ReactNode;
  rowsCount: number;
  loader: boolean;
  ref?: any;
  dataLength: any;
  columnsCount?: any;
}) => {
  return (
    <>
      <TableLoader isVisible={loader} rowsCount={rowsCount} />

      <tbody className="CTableBody" {...props} ref={ref}>
        {!loader && children}
        <EmptyDataComponent isVisible={dataLength < 1 && !loader} />
      </tbody>
    </>
  );
};

export const CTableRow = ({
  children,
  className,
  ...props
}: {
  children: ReactNode;
  className: string;
}) => {
  return (
    <tr className={`CTableRow ${className}`} {...props}>
      {children}
    </tr>
  );
};

export const CTableCell = ({
  children,
  className = "",
  buttonsCell = false,
  ...props
}: {
  children: ReactNode;
  className: string;
  buttonsCell?: boolean;
  onClick?: (val: any) => void;
  style?: any;
}) => {
  return (
    <td
      className={`CTableCell ${className} ${buttonsCell ? "buttonsCell" : ""}`}
      {...props}
    >
      {children}
    </td>
  );
};
