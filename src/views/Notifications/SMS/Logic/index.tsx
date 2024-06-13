import { useQuery } from "react-query";
import usePageRouter from "../../../../hooks/useObjectRouter";
import smsService from "../../../../services/sms";
import { getStoredFilters } from "../../../../components/UI/Filter/Logic";
import { useTranslation } from "react-i18next";

export const TableData = () => {
  const {t} = useTranslation()
  const { navigateTo } = usePageRouter();
  const headColumns = [
    {
      title: "Kimga",
      id: "phone"
    },
    {
      title: "xabar",
      id: "text"
    },
    {
      title: "Sana",
      id: "date"
    },
    {
      title: "Status",
      id: "status",
      render: (val: string) => {
        if (!val) return ""
        return <>{val !== "DELIVERED" ? "Yetkazilmagan" : t(val.toLocaleLowerCase())}</>
      }
    },
  ];

  const handleActions = (element: any, type: string) => {
    if (type === "edit") {
      navigateTo(`/notifications/notification/${element.id}`);
    }
    if (type === "delete") {
    }
  };

  return { headColumns, handleActions };
};

export const FetchFunction = () => {
  const { filters } = getStoredFilters({});
  const { data, isLoading: smsLoading } = useQuery([filters?.page], () => {
    const data = {
      page: filters?.page || 1,
    };
    return smsService.getList(data);
  });

  const smsData: any = data;

  return { tableData: smsData, isLoading: smsLoading };
};
