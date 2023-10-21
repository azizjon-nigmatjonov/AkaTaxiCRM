import { useQuery } from "react-query";
import chatService from "../../../../services/chats";
import Header from "./Header";
import MessageUI from "./Message";
import CDriver from "../../../../components/CElements/CDivider";

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
  console.log("chat", chat);

  return (
    <div className="bg-white rounded-[14px] h-[85vh] overflow-hidden">
      {current.id ? <Header current={current} /> : ""}
      <div className="mt-5">
        <CDriver title="Bugun" />
      </div>
      <MessageUI chat={chat} />
    </div>
  );
};

export default ChatSinglePage;
