import Card from "./Card";
import { useGetQueries } from "../../../../hooks/useGetQueries";
import { useEffect, useRef, useState } from "react";
import useOnScreen from "../../../../hooks/useOneScreen";



interface ChatListProps {
  list?: any;
  isFetchingNextPage: any;
  fetchNextPage: any;
}


const ChatList = ({
  isFetchingNextPage,
  fetchNextPage,
  list = [],
  setCurrent = () => { },
}: ChatListProps & { setCurrent: (val: any) => void }) => {




  const elementRef = useRef<HTMLDivElement>(null);

  const { currentTab } = useGetQueries();
  const [selectedElement, setSelectedElement] = useState<any>(null);

  const isOnScreen = useOnScreen(elementRef);

  useEffect(() => {
    if (isOnScreen) {
      fetchNextPage();
    }
  }, [isOnScreen]);

  const handleCardClick = (element: any) => {
    setSelectedElement(selectedElement === element.id ? null : element.id);
    setCurrent(element);
  };

  const sortedList = list.sort((a: any, b: any) => {
    return Number(new Date(b.last_message.created_at)) - Number(new Date(a.last_message.created_at));
  })

  const groupedMessages: any = {};
  sortedList.forEach((element: any) => {
    const date = element.last_message.created_at.split(" ")[0]; // Получаем только дату
    if (!groupedMessages[date]) {
      groupedMessages[date] = [];
    }
    groupedMessages[date].push(element);
  });
  

  return (
    <div className="grid gap-y-2 overflow-y-auto h-[600px]">
      {Object.keys(groupedMessages).map((date, index) => (
        <div key={index}>
          <h2 className="text-[#101828] font-semibold">{date}</h2> {/* Отобразить дату как заголовок группы */}
          {groupedMessages[date].map((el: any) => (
            <Card
              key={el.id}
              element={el}
              handleClick={() => {
                handleCardClick(el);
              }}
              active={currentTab === el.id}
              selectedElement={selectedElement}
            />
          ))}
        </div>
      ))}
      <div ref={elementRef} />
      {isFetchingNextPage ? <div className="text-center">Yuklanmoqda...</div> : null}
    </div>
  );
};

export default ChatList;
