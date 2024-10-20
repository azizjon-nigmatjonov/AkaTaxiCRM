import { useQuery } from "react-query";
import taskService from "../../../../services/tasks";
import { useParams } from "react-router-dom";
import { getStoredFilters } from "../../../../components/UI/Filter/Logic";

export const breadCrumbs = [
  { label: "Haydovchilar", link: "/drivers/main" },
  { label: "Eslatmalar" },
];

export const TableData = () => {
  // const { t } = useTranslation();
  // const { navigateTo } = usePageRouter()
  const headColumns = [
    {
      title: "lead_name",
      id: "lead_name",
    },
    {
      title: "performer_name",
      id: "performer_name",
    },
    {
      title: "note",
      id: "note",
    },
    {
      title: "deadline",
      id: "deadline",
    },
  ];

  const handleActions = () => {
    // if (type === 'edit') {
    //   // navigateTo(`/notifications/notification/${element.id}`)
    // }
    // if (type === 'delete') {
    // }
  };

  return { headColumns, handleActions };
};

export const FetchFunction = () => {
  const { id } = useParams();
  const { filters } = getStoredFilters({});
  const { reporter_id, performer_id } = filters;
  const { data: data } = useQuery(
    ["GET_TASK_LIST", id, reporter_id, performer_id],
    () => {
      const params = {
        model_id: id,
        reporter_id: reporter_id?.value,
        performer_id: performer_id?.value,
      };
      return taskService.getTasks({ page: 1, perPage: 10, ...params });
    }
  );
  const tableData: any = data ?? {};
  return { tableData };
};
