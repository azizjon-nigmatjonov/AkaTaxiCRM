import { useQuery } from "react-query";
import chatService from "../../../../services/chats";
import Header from "./Header";
import MessageUI from "./Message";
import CDriver from "../../../../components/CElements/CDivider";
import NullData from "../../../../components/UI/NullData";
import { useMemo } from "react";

const ChatSinglePage = ({ current }: { current?: any }) => {
  const { data: chat } = useQuery(
    ["GET_CHAT", current.id],
    () => {
      return chatService.getChat(current.id);
    },
    {
      enabled: !!current.id,
    }
  );

  function groupByCreatedAt(data: any) {
    const grouped: any = {};

    data.forEach((item: any) => {
      const date = item.created_at.substring(0, item.created_at.indexOf(" "));
      if (!grouped[date]) {
        grouped[date] = [];
      }
      grouped[date].push(item);
    });

    return grouped;
  }

  const newList = useMemo(() => {
    if (!chat?.data?.length) return [];

    return groupByCreatedAt(chat.data);
  }, [chat]);

  return (
    <div className="bg-white rounded-[14px] h-[85vh] overflow-hidden">
      {current.id ? (
        <div>
          <Header current={current} />
          <div>
            {Object.entries(newList)?.map(
              ([key, value]: [string, any]) => (
                <div key={key}>
                  <div className="mt-5">
                    <CDriver title={key} />
                  </div>
                  <MessageUI chat={value} />
                </div>
              )
            )}
          </div>
        </div>
      ) : (
        <NullData text="" />
      )}
    </div>
  );
};

export default ChatSinglePage;
