import Body from "./Body";
import Header from "./Header";

interface Props {
  month: any;
  list?: any
}

const CalendarUI = ({ list = [], month }: Props) => {  

  return (
    <div className="rounded-[18px]  bg-white border border-[var(--lineGray)]">
      <Header />

      <Body list={list} month={month} />
    </div>
  );
};

export default CalendarUI;
