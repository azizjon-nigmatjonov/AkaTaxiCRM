import { useQuery } from "react-query";
import ChatSinglePage from "./Chat";
import ChatList from "./List";
import chatService from "../../../services/chats";
import { useMemo, useState } from "react";
import { Header } from "../../../components/Header";
import NullData from "../../../components/NullData";
import CBreadcrumbs from "../../../components/CElements/CBreadcrumbs";

const Chats = () => {
  const { data: chats, isLoading } = useQuery(["GET_CHAT_LIST"], () => {
    return chatService.getList();
  });
  const [current, setCurrent] = useState({});

  const list: any = useMemo(() => {
    return chats?.data ?? [];
  }, [chats]);

  const breadCrumbs = useMemo(() => {
    return [
      { label: "Ma'lumotlar" },
      { label: 'Chat', link: 'infos/chats' }
    ]
  }, [])

  return (
    <>
      <Header sticky={true}>
        <CBreadcrumbs items={breadCrumbs} progmatic={true}/>
      </Header>
      <div className="px-5">
        {!isLoading && !list.length ? (
          <NullData />
        ) : isLoading ? (
          "Yuklanmoqda..."
        ) : (
          <div className="flex justify-between space-x-6">
            <div className="w-[550px]">
              <ChatList list={list} setCurrent={setCurrent} />
            </div>
            <div className="w-full">
              <ChatSinglePage current={current} />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Chats;
