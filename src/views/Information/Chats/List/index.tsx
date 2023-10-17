import { useQuery } from "react-query";
import chatService from "../../../../services/chats";
import Card from "./Card";
import usePageRouter from "../../../../hooks/useObjectRouter";

const ChatList = () => {
  const { navigateQuery } = usePageRouter();
  const { data: chats } = useQuery(
    ["GET_CHAT_LIST"],
    () => {
      return chatService.getList();
    },
    {
      enabled: true,
    }
  );
  console.log("chats", chats);

  const list = [
    {
      name: "Jamshid Hakimov / Jasur Alimov",
      text: "Men kelib qoldim aka",
      id: 1,
    },
    {
      name: "Muhammad Karim / Javohir Zokirov",
      text: "Men kelib qoldim aka",
      id: 2,
    },
  ];

  return (
    <div className="grid gap-y-2">
      {list.map((el, index) => (
        <Card key={index} element={el} handleClick={(id: any) => navigateQuery({ id })} />
      ))}
    </div>
  );
};

export default ChatList;
