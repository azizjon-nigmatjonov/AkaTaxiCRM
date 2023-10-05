import { Pagination } from "@mui/material";
// import PaginationLimits from "./Limit";
import { usePaginationCount } from "../../../../../hooks/usePaginationCount";
import {
  createSearchParams,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import "../style.scss";

interface Props {
  limit: number;
  limitCount: number[];
  passRouter: boolean;
  currentPage: number;
  count: number;
  dataLength: number;
  setCurrentPage: (newPage: number) => void;
  setCurrentLimit: (newLimit: number) => void;
}

const CPagination = ({
  limit,
  limitCount,
  passRouter,
  currentPage,
  setCurrentPage,
  setCurrentLimit,
  dataLength,
  ...props
}: Props) => {
  const location = useLocation();
  const pathname = location.pathname;
  const [searchParams] = useSearchParams();
  const query = Object.fromEntries(searchParams.entries());
  const count: any = usePaginationCount(props?.count, limit);
  const navigate = useNavigate();

  function handleRouteActions(queryObj: {
    limit?: any;
    page: number;
    queryLimit?: any;
    something?: any
  }) {
    if (queryObj?.limit) queryObj.limit = parseInt(queryObj.limit, 10);
    if (!passRouter) {
      if (queryObj?.page) setCurrentPage(queryObj.page);
      if (queryObj?.limit) setCurrentLimit(queryObj.queryLimit);
      return;
    }
    
    const newPage = queryObj.page.toString();
    const newQuery = {
      ...query,
      ...queryObj,
      page: newPage,
    };
    const queryParams = createSearchParams(newQuery);
    navigate({
      pathname: pathname,
      search: queryParams.toString(),
    });
  }

  return (
    <div className="table__pagination flex items-center justify-between border-t border-lightGray px-3">
      {/* <PaginationLimits
        limit={limit}
        limitCount={limitCount}
        handleRouteActions={handleRouteActions}
      /> */}
      <p className="text-[var(--gray)]">{count.count} tadan 1-{dataLength} tasi</p>
      <Pagination
        onChange={(e, val) =>
          handleRouteActions({ page: val, queryLimit: query?.limit, something: e  })
        }
        {...props}
        count={count.tableCount}
        page={currentPage}
        defaultPage={currentPage}
      />
    </div>
  );
};

export default CPagination;
