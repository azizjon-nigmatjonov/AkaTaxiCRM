import { useMutation } from "react-query";
import { notificationService } from "../../../../../services/notification";
import { usePlaces } from "../../../../../hooks/usePlaces";
import { useMemo } from "react";
import usePageRouter from "../../../../../hooks/useObjectRouter";
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

  return { regionOption };
};

export const CreateFunction = ({ type = "" }: { type: string }) => {
  const { navigateTo } = usePageRouter();
  const { mutate: notificationCreate, isLoading: createLoading } = useMutation({
    mutationFn: (data: any) => {
      const params = {
        ...data,
        type,
      };
      return notificationService.createNotification(params).then(() => {
        if (type === "sms") {
          navigateTo("/notifications/smsnotification");
        } else {
          navigateTo("/notifications/notification");
        }
      });
    },
  });

  const createNotification = (data: any) => {
    const params: any = {
      title: {},
      body: {},
    };

    for (const key in data) {
      const asKey = key.substring(0, key.indexOf("_"));
      if (asKey === "title") {
        const name = key.substring(key.indexOf("_") + 1);
        params.title = {
          ...params.title,
          [name]: data[key],
        };
      } else if (asKey === "body") {
        const name = key.substring(key.indexOf("_") + 1);
        params.body = {
          ...params.body,
          [name]: data[key],
        };
      } else {
        if (data[key] == "") {
          delete data[key];
        } else {
          params[key] = data[key];
        }
      }
    }

    notificationCreate(params);
  };

  return { isLoading: createLoading, createNotification };
};
