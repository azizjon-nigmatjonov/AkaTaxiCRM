import { useQuery } from "react-query";
import { notificationService } from "../../../../services/notification";

export const headColumns = [
  {
    title: "xabar",
    id: "message",
  },
  {
    title: "sana",
    id: "created_at",
  },
];

export const FetchFunction = () => {
  const { data: news, isLoading: newsLoading } = useQuery(
    ["GET_NEWS_TABLE_LIST"],
    () => {
      return notificationService.getList();
    }
  );

  return { bodyColumns: news?.data ?? [], isLoading: newsLoading };
};
