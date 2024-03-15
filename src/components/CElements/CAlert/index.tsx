import Alert from "@mui/material/Alert";
import useCountDown from "../../../hooks/useCoundDown";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { websiteActions } from "../../../store/website";

export default function CAlert({ data = {} }: { data: any }) {
  const { t } = useTranslation(data?.translation || "common");
  const dispatch = useDispatch();
  const timeClose = useCountDown("secunds", data?.timer || 8);

  
  const handleAlertActions = () => {
    dispatch(websiteActions.setAlertData({}));
  };

  useEffect(() => {
    if (timeClose < 1) {
      handleAlertActions();
    }
  }, [timeClose]);

  return (
    <div className={`fixed top-0 text-[#fff] w-full z-[9999] ${data?.type == 'error' ? 'bg-red-400' : 'bg-[var(--green)]'}`} id="calert">
      <Alert
        severity={data?.type || "success"}
        onClose={() => handleAlertActions()}
      >
       {t(data?.title)}
      </Alert>
    </div>
  );
}
