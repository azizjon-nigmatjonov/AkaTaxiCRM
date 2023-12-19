import { useQuery } from "react-query";
import chatService from "../../../../services/chats";
import Header from "./Header";
import MessageUI from "./Message";
import CDriver from "../../../../components/CElements/CDivider";
import NullData from "../../../../components/NullData";

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

  return (
    <div className="bg-white rounded-[14px] h-[85vh] overflow-hidden">
      {current.id ? (
        <div >
          <Header current={current} />
          <div className="mt-5">
            <CDriver title="Bugun" />
          </div>
          <MessageUI chat={chat?.data} />
        </div>
      ) : (
        <NullData text="" />
      )}
    </div>
  );
};

export default ChatSinglePage;
