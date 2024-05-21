import { useMutation } from "react-query";
import { notificationService } from "../../../../../services/notification";
import { usePlaces } from "../../../../../hooks/usePlaces";
import { useMemo } from "react";
// import { useParams } from "react-router-dom";

export const breadCrumbItems = [
  {
    label: "Xabarnomalar",
    link: "/notifications/notification",
  },
  {
    label: "Bildirishnomalar",
    link: "/notifications/notification",
  },
  {
    label: "Yangi bildishishnoma",
  },
];

export const NotificationData = () => {
  const { regionList } = usePlaces();

  const regionOption = useMemo(() => {
    return regionList?.map((i: any) => {
      return {
        value: i.id,
        label: i.name.uz,
      };
    });
  }, [regionList]);

  return { regionOption }
};

export const CreateFunction = () => {
  const { mutate: notificationCreate, isLoading: createLoading } = useMutation({
    mutationFn: (data: any) => {
      return notificationService.createNotification(data).then(() => {});
    },
  });

  const createNotification = (data: any) => {
    console.log("daa", data);
    const params = data
    notificationCreate(params)
  };

  return { isLoading: createLoading, createNotification };
};
