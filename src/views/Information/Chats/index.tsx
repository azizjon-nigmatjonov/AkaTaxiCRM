import ChatSinglePage from "./Chat";
import ChatList from "./List";
import chatService from "../../../services/chats";
import { useMemo, useState } from "react";
import { Header } from "../../../components/Header";
import NullData from "../../../components/NullData";
import CBreadcrumbs from "../../../components/CElements/CBreadcrumbs";
import { useInfiniteQuery } from "react-query";



const Chats = () => {
  const { data: queryData, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage } = useInfiniteQuery(
    "GET_CHAT_LIST",
    ({ pageParam = 1 }) => chatService.getList(pageParam),
    {
      getNextPageParam: (lastPage,) => {
        if (lastPage.data && lastPage.data.meta) {
          const { currentPage, pageCount } = lastPage.data.meta;
          return currentPage < pageCount ? currentPage + 1 : undefined;
        }
        return undefined;
      },
    }
  );
  const [current, setCurrent] = useState({});

  const flattenPages = (pages: any) => {
    // console.log(pages);

    return pages?.flatMap((page: any) => page.data);
  };

  const list = useMemo(() => {
    return queryData?.pages ? flattenPages(queryData?.pages) : [];
  }, [queryData]);

  const handleScroll = (event: any) => {

    console.log(event);

    const bottom = event.target.scrollHeight - event.target.scrollTop === event.target.clientHeight;
    if (bottom && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }

    console.log(queryData);
  };

  const breadCrumbs = useMemo(() => {
    return [
      { label: "Ma'lumotlar" },
      { label: 'Chat', link: 'infos/chats' }
    ]
  }, [])

  return (
    <>
      <Header sticky={true}>
        <CBreadcrumbs items={breadCrumbs} progmatic={true} />
      </Header>
      <div className="px-5" onScroll={handleScroll} style={{ overflowY: 'scroll', height: '600px' }}>
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