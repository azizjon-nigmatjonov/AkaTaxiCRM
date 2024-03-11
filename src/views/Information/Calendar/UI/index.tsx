import { Skeleton } from "@mui/material";
import Body from "./Body";
import Header from "./Header";

interface Props {
  month: any;
  list?: any,
  loading: boolean
}

const CalendarUI = ({ list = [], month, loading }: Props) => {

  return (
    <div className="rounded-[18px]  bg-white border border-[var(--lineGray)]">
      <Header />

      {loading ? <div className="h-[1000px] mt-[-220px]">
        <Skeleton style={{ height: "100%", borderRadius: "14px" }} />
      </div> : <Body list={list} month={month} />}
    </div>
  );
};

export default CalendarUI;
