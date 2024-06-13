import { useQuery } from "react-query";
import { notificationService } from "../../../../services/notification";
import { useTranslation } from "react-i18next";
import { useGetQueries } from "../../../../hooks/useGetQueries";
import usePageRouter from "../../../../hooks/useObjectRouter";
import { getStoredFilters } from "../../../../components/UI/Filter/Logic";

export const TableData = () => {
  const { t } = useTranslation();
  const { navigateTo } = usePageRouter()
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

  const handleActions = (element: any, type: string) => {
    if (type === 'edit') {
      navigateTo(`/notifications/notification/${element.id}`)
    }
    if (type === 'delete') {

    }
  }

  return { headColumns, handleActions };
};

export const FetchFunction = () => {
  const { tab } = useGetQueries();
  const { filters } = getStoredFilters({});

  const { data: news, isLoading: newsLoading } = useQuery(
    [tab === 'driver' ? "GET_NOTIFICATIONS_TABLE_LIST_DRIVER" : "GET_NOTIFICATIONS_TABLE_LIST_PASSENGER", tab, filters?.page],
    () => {
      const data = {
        page: filters?.page || 1,
        tab
      }
      return notificationService.getList(data);
    },
  );

  const newsData: any = news

  return { tableData: newsData, isLoading: newsLoading };
};
