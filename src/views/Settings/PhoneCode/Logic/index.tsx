import { useQuery } from "react-query";
import { getStoredFilters } from "../../../../components/UI/Filter/Logic";
import phoneCodeService from "../../../../services/phoneCode";
import { useMemo } from "react";

export const breadCrumbsItems = [
  {
    label: "Sozlamalar",
    link: "settings/actions",
  },
  {
    label: "Telefon kod",
  },
];

export const TableData = () => {
  const headColumns = [
    {
      title: "Telefon raqam",
      id: "phone",
      width: 200,
    },
    {
      title: "Kod",
      id: "code",
    },
    {
      title: "yuborilgan sana",
      id: "created_at",
    },
  ];

  return { headColumns };
};

export const FetchFunction = () => {
  const { filters } = getStoredFilters({});
  const { q } = filters;

  const { data, isLoading, refetch } = useQuery(
    ["GET_PHONE_CODE_LIST", q],
    () => {
      return phoneCodeService.getList({ q: q });
    }
  );

  const bodyColumns: any = useMemo(() => {
    const list = data?.data ?? [];
    return {
      list,
      ...data,
    };
  }, [data]);

  return { isLoading, refetch, bodyColumns, q };
};
