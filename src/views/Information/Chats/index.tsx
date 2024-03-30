import { useEffect, useMemo, useCallback, useState} from "react";
import ChatSinglePage from "./Chat";
import ChatList from "./List";
import chatService from "../../../services/chats";
import { Header } from "../../../components/Header";
import NullData from "../../../components/NullData";
import CBreadcrumbs from "../../../components/CElements/CBreadcrumbs";
import { useInfiniteQuery } from "react-query";


const Chats = () => {
  // const elementRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState({});
  const { data: queryData, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage } = useInfiniteQuery(
    "GET_CHAT_LIST",
    ({ pageParam = 1 }) => chatService.getList(pageParam),
    {
      getNextPageParam: (lastPage: any) => {
        return lastPage.meta.pageCount <= lastPage.meta.currentPage ? undefined : lastPage.meta.currentPage + 1; 
      },
    }
  );

  const flattenPages = (pages: any) => {
    return pages?.flatMap((page: any) => page.data);
  };

  const list = useMemo(() => {
    return queryData?.pages ? flattenPages(queryData.pages) : [];
  }, [queryData]);

  const breadCrumbs = useMemo(() => {
    return [
      { label: "Ma'lumotlar" },
      { label: "Chat", link: "infos/chats" },
    ];
  }, []);

  const handleFetchNextPage = useCallback(() => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - 5) {
        handleFetchNextPage();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleFetchNextPage]);

  
  useEffect(() => {
    if (queryData && queryData.pages.length > 1) {
      handleFetchNextPage();
    }
  }, [queryData, handleFetchNextPage]);

  return (
    <>
      <Header sticky={true}>
        <CBreadcrumbs items={breadCrumbs} progmatic={true} />
      </Header>
      <div className="px-5">

        {!isLoading && !list.length ? (
          <NullData />
        ) : isLoading ? (
          "Yuklanmoqda..."
        ) : (
          <div className="flex justify-between space-x-6">
            <div className="w-[550px]">
              <ChatList
                list={list} setCurrent={setCurrent}
                fetchNextPage={fetchNextPage}
                isFetchingNextPage={isFetchingNextPage}
              />
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
