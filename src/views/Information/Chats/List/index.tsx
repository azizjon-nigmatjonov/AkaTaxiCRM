import Card from "./Card";
import usePageRouter from "../../../../hooks/useObjectRouter";

const ChatList = ({ list = [], setCurrent = () => {} }: { list?: any, setCurrent: (val: any) => void }) => {
  const { navigateQuery } = usePageRouter();

  return (
    <div className="grid gap-y-2">
      {list.map((el: any, index: number) => (
        <Card
          key={index}
          element={el}
          handleClick={(id: any) => {
            setCurrent(el)
            navigateQuery({ tab: id }, true)
          }}
        />
      ))}
    </div>
  );
};

export default ChatList;
