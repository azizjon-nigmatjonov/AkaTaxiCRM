import { createSearchParams, useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { ColorConstants } from "../../constants/website";

export default function usePageRouter() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const query = Object.fromEntries(searchParams.entries());
  
  const navigateTo = (path: string, state?: object) => {
    const link = path;
    

    if (state) {
      navigate(link, { state: state });
      return;
    }
    navigate(link);
  };

  const navigateQuery = (obj?: any) => {
    Object.keys(obj).forEach((key) => {
      if (obj[key] === "" || !obj[key]?.length && key in query) {
        delete obj[key]
        delete query[key]
      }
    })

    const newQuery = {
      ...query,
      ...obj,
    };

    const queryParams = createSearchParams(newQuery);
    navigate({
      pathname: location.pathname,
      search: queryParams.toString(),
    });
  }

  const getQueries = () => query;

  const progmatic = () => navigate(-1);

  const checkPath = (path: string, status?: string) => {
    const result = path === location.pathname.substring(1)

    if (status === 'icon') {
      return result ? ColorConstants.main : ColorConstants.gray
    }
    
    return result
  }

  return { navigateTo, progmatic, checkPath, navigateQuery, getQueries };
}
