import { useQuery } from "react-query";
import adminService from "../../../../services/admins";
import roleService from "../../../../services/rolls";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { websiteActions } from "../../../../store/website";
import usePageRouter from "../../../../hooks/useObjectRouter";

export const FetchFunctions = ({
  reset,
  refetch,
}: {
  reset: any;
  refetch: () => void;
}) => {
  const { navigateQuery } = usePageRouter();
  const dispatch = useDispatch();
  const { data: rolls } = useQuery(
    ["GET_ROLLS"],
    () => {
      return roleService.getList();
    },
    {
      enabled: true,
    }
  );

  const HandleSuccess = (title: string) => {
    dispatch(
      websiteActions.setAlertData({
        title: title,
        translation: "common",
      })
    );

    navigateQuery({ id: "" });
    reset();
  };

  const submitForm = (data: any) => {
    data.phone = data.phone.substring(1).replace(/\s+/g, "");
    const params = data;
    adminService.createAdmin(params).then(() => {
      HandleSuccess("Admin yaratildi!");
      refetch();
    });
  };

  const SelectOptions = useMemo(() => {
    if (!rolls) return [];
    const arr = rolls?.data ?? [];
    return (arr as any).map((item: any) => {
      return {
        ...item,
        label: item.name,
        value: item.id,
      };
    });
  }, [rolls]);

  return { rolls: SelectOptions, submitForm };
};
