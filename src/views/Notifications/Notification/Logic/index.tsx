import { useQuery } from "react-query";
import { notificationService } from "../../../../services/notification";
import { useTranslation } from "react-i18next";
import { useGetQueries } from "../../../../hooks/useGetQueries";

export const TableData = () => {
  const { t } = useTranslation();
  const headColumns = [
    {
      title: "kimga",
      id: "user_group",
      render: (val: any) => {
        return <>{t(val?.[0])}</>;
      },
    },
    {
      title: "Sarlavha",
      id: "title",
    },
    {
      title: "xabar",
      id: "body",
    },
    {
      title: "sana",
      id: "created_at",
    },
  ];

  return { headColumns };
};

export const FetchFunction = () => {
  const { tab } = useGetQueries();
  const { data: news, isLoading: newsLoading } = useQuery(
    [tab === 'driver' ? "GET_NOTIFICATIONS_TABLE_LIST_DRIVER" : "GET_NOTIFICATIONS_TABLE_LIST_PASSENGER", tab],
    () => {
      return notificationService.getList(tab);
    },
  );

  return { bodyColumns: news?.data ?? [], isLoading: newsLoading };
};
