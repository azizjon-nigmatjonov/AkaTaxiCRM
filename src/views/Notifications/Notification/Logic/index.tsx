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
    ["GET_NOTIFICATIONS_TABLE_LIST", tab],
    () => {
      return notificationService.getList(tab);
    },
    {
      enabled: !!tab,
    }
  );

  return { bodyColumns: news?.data ?? [], isLoading: newsLoading };
};
