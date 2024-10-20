import usePageRouter from "../../../../../hooks/useObjectRouter";
import { useQuery } from "react-query";
import { newsService } from "../../../../../services/news";
import { useParams } from "react-router-dom";
import { useMemo } from "react";
import { useCMutation } from "../../../../../hooks/useCMutation";

export const FetchFunction = () => {
  const { id } = useParams();
  const { data: newData, isLoading } = useQuery(
    ["GET_NEWS_TABLE_LIST", id],
    () => {
      return newsService.getNew(id);
    },
    {
      enabled: !!id,
    }
  );

  const breadCrumbsItems = useMemo(() => {
    return [
      {
        label: "Xabarnomalar",
        link: "/notifications/new_notification",
      },
      {
        label: "Yangiliklar",
        link: "/notifications/new_notification",
      },
      {
        label: id ? "Tahrirlash" : "Yangi yangiliklar",
      },
    ];
  }, [id]);

  return { defaultData: newData?.data, isLoading, breadCrumbsItems };
};

export const CreateFunction = () => {
  const { navigateTo } = usePageRouter();
  const { id } = useParams();
  const { mutate: newsCreate, isLoading: newsLoading } = useCMutation({
    key: "CREATE_BLOG_NEWS",
    method: "POST",
    endpoint: "/blogs",
  });

  const { mutate: newUpdate, isLoading } = useCMutation({
    key: "UPDATE_BLOG_NEWS",
    method: "PUT",
    endpoint: `/blogs/${id}`,
  });

  const prepareParams = (data: any) => {
    const params: any = {
      image_id: {},
      title: {},
      description: {},
      tags: ["test"],
    };

    for (const key in data) {
      const asKey = key.substring(0, key.indexOf('_'))

      if (asKey === 'title') {
        const keyName = key.substring(key.indexOf("_") + 1);
        params.title = {
          ...params.title,
          [keyName]: data[key],
        };
      } else if (asKey === 'description') {
        const keyName = key.substring(key.indexOf("_") + 1);
        params.description = {
          ...params.description,
          [keyName]: data[key],
        };
      } else if (asKey === 'image') {
        const keyName = key.substring(key.lastIndexOf("_") + 1);
        params.image_id = {
          ...params.image_id,
          [keyName]: data[key],
        }
      } else {
        if (data[key] == "") {
          delete data[key];
        } else {
          params[key] = data[key];
        }
      }
    }
    
    return params
  }

  const createNew = (data: any) => {
    const params = prepareParams(data)

    newsCreate(
      {
        payload: params,
      },
      {
        onSuccess: () => {
          navigateTo("/notifications/new_notification");
        },
      }
    );
  };

  const updateNew = (data: any) => {
    const params = prepareParams(data)

    newUpdate(
      {
        payload: params,
      },
      {
        onSuccess: () => {
          navigateTo("/notifications/new_notification");
        },
      }
    );
  };

  return { createNew, isLoading: newsLoading || isLoading, updateNew };
};
