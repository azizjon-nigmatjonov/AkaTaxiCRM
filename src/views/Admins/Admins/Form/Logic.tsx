import { useMutation, useQuery } from "react-query";
import adminService from "../../../../services/admins";
import roleService from "../../../../services/rolls";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { websiteActions } from "../../../../store/website";
import usePageRouter from "../../../../hooks/useObjectRouter";

export const FetchFunction = ({ adminId }: { adminId: string }) => {
  const { data: rolls } = useQuery(["GET_ROLLS_LIST"], () => {
    return roleService.getList();
  });

  const { data: adminData } = useQuery(
    ["GET_ROLL_DATA", adminId],
    () => {
      return adminService.getAdmin(adminId);
    },
    {
      enabled: !!(adminId && adminId !== "create"),
    }
  );

  const SelectOptions = useMemo(() => {
    if (!rolls) return [];
    const arr = rolls?.data ?? [];
    return (arr ).map((item: any) => {
      return {
        ...item,
        label: item.name,
        value: item.id,
      };
    });
  }, [rolls]);

  const defaultValues: any = useMemo(() => {
    const obj: any = adminData?.data;
    if (obj?.id) obj.roles = obj.roles?.map((item: any) => item.id);
    return obj;
  }, [adminData]);

  return { rolls: SelectOptions, defaultValues };
};

export const SubmitFunction = ({
  refetch,
  reset,
}: {
  reset: any;
  refetch: () => void;
}) => {
  const { navigateQuery } = usePageRouter();
  const dispatch = useDispatch();

  const HandleSuccess = (title: string) => {
    dispatch(
      websiteActions.setAlertData({
        title: title,
        translation: "common",
      })
    );

    navigateQuery({ id: "" });
    refetch();
    reset();
  };

  const { mutate: adminCreate, isLoading: updateCreating } = useMutation({
    mutationFn: (data: any) => {
      return adminService.createAdmin(data).then(() => {
        HandleSuccess("Admin yaratildi!");
      });
    },
  });

  const { mutate: adminUpdate, isLoading: updateLoading } = useMutation({
    mutationFn: (data: any) => {
      return adminService.updateAdmin(data, data.id).then(() => {
        HandleSuccess("Ma'lumot yangilandi!");
      });
    },
  });

  const submitForm = (data: any) => {
    data.phone = data.phone.substring(1).replace(/\s+/g, "");
    const params = data;

    adminCreate(params);
  };

  const updateForm = (data: any, id: string) => {
    data.phone = data.phone.substring(1).replace(/\s+/g, "");
    const params = data;
    params.id = id;

    adminUpdate(params);
  };
  return { submitForm, updateForm, isLoading: updateLoading || updateCreating };
};
