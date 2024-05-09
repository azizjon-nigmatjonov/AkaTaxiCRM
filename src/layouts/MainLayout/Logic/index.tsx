import { useGetQueries } from "../../../hooks/useGetQueries";
import usePageRouter from "../../../hooks/useObjectRouter";

import { ArrowLeftIcon } from "@mui/x-date-pickers-pro";

export const BackButtonRoute = () => {
  const { fromRoutes } = useGetQueries();
  const { progmatic } = usePageRouter();

  if (!fromRoutes) return "";

  return (
    <div className="fixed z-[100] left-[250px] top-[340px]" id="breathing-button">
      <button
        onClick={() => progmatic()}
        className="custom-btn form text-2xl hover:bg-[var(--primary)] duration-200"
      >
        <ArrowLeftIcon style={{ fontSize: "40px" }} />
        Ortga qaytish
      </button>
    </div>
  );
};
