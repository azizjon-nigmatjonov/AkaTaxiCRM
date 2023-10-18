import { useQuery } from "react-query";
import { useGetQueries } from "../../../../hooks/useGetQueries";
import chatService from "../../../../services/chats";
import Header from "./Header";

const ChatSinglePage = ({ current }: { current?: any }) => {
  const { currentTab } = useGetQueries();
  console.log("currentTab", currentTab);

  const { data: chat } = useQuery(
    ["GET_CHAT", currentTab],
    () => {
      return chatService.getChat(currentTab);
    },
    {
      enabled: !!currentTab,
    }
  );
  console.log("chat", chat);

  return (
    <div>
      <Header current={current} />
    </div>
  );
};

export default ChatSinglePage;
