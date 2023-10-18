import Body from "./Body";
import Header from "./Header";

const CalendarUI = ({ list = [] }: { list?: any }) => {
  return (
    <div className="rounded-[18px] bg-white border border-[var(--lineGray)]">
      <Header />

      <Body list={list} />
    </div>
  );
};

export default CalendarUI;
