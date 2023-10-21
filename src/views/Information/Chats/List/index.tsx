import Card from "./Card";
import { useGetQueries } from "../../../../hooks/useGetQueries";

const ChatList = ({
  list = [],
  setCurrent = () => {},
}: {
  list?: any;
  setCurrent: (val: any) => void;
}) => {
  const { currentTab } = useGetQueries();

  return (
    <div className="grid gap-y-2">
      {list.map((el: any, index: number) => (
        <Card
          key={index}
          element={el}
          handleClick={() => {
            setCurrent(el)
          }}
          active={currentTab === el.id}
        />
      ))}
    </div>
  );
};

export default ChatList;
