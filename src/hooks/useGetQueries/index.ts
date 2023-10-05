import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

export const useGetQueries = () => {
  const [searchParams] = useSearchParams();
  const query = Object.fromEntries(searchParams.entries());

  const params: {
    currentLimit: number;
    currentPage: number;
    search?: string | undefined;
    currentTab?: string | undefined;
    restaurant_id?: string | undefined;
    currentSort?: string | undefined;
  } = useMemo(() => {
    const result = {
      currentLimit: query?.limit ? parseInt(query.limit) : 10,
      currentPage: query?.page ? parseInt(query.page) : 1,
      search: query?.search,
      currentTab: query?.tab,
      restaurant_id: query?.restaurant_id,
      currentSort: query?.sort,
    };
    return result;
  }, [query]);

  return params;
};
