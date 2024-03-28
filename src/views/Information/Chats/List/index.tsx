import Card from "./Card";
import { useGetQueries } from "../../../../hooks/useGetQueries";
import { useState } from "react";

const ChatList = ({ 
  list = [],
  setCurrent = () => { },
}: {
  list?: any;
  setCurrent: (val: any) => void;
}) => {






  const { currentTab } = useGetQueries();
  const [selectedElement, setSelectedElement] = useState<any>(null);

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
    <div className="grid gap-y-2  h-[600px] overflow-y-scroll" >
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
    </div>
  );
};

export default ChatList;
