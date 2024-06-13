import { useGetQueries } from "../../../../hooks/useGetQueries";
import { newsService } from "../../../../services/news";
import ImageFrame from "../../../../components/UI/ImageFrame";
import usePageRouter from "../../../../hooks/useObjectRouter";
// import useCQuery from "../../../../hooks/useCQuery";
import { useQuery } from "react-query";

export const TableData = ({ refetch }: { refetch: () => void }) => {
  const { navigateTo } = usePageRouter();
  const headColumns = [
    {
      title: "Rasm",
      id: "image",
      render: (val: any) => val && <ImageFrame image={val} />,
      width: 140,
    },
    {
      title: "Sarlovha",
      id: "title",
    },
    {
      title: "Tafsiv",
      id: "description",
    },
    {
      title: "sana",
      id: "updated_at",
    },
    {
      title: "",
      id: "actions",
      actions: ["edit", "delete"],
      width: 100,
    },
  ];

  const deleteElement = (id: any) => {
    newsService.deleteNew(id).then(() => {
      refetch();
    });
  };

  const handleActions = (element: any, type: string) => {
    if (type === "edit") {
      navigateTo(`/notifications/new_notification/${element.id}`);
    }

    if (type === "delete") {
      deleteElement(element.id);
    }
  };

  return { headColumns, handleActions };
};

export const FetchFunction = () => {
  const { page } = useGetQueries();

  const {
    data: news,
    isLoading: newsLoading,
    refetch,
  } = useQuery(["GET_NEWS_TABLE_LIST", page], () => {
    return newsService.getList({ page: page ?? 1 });
  });

  const newsData: any = news;

  return { tableData: newsData, isLoading: newsLoading, refetch };
};
