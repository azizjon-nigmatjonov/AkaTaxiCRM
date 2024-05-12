import { useMemo } from "react";
import { useMutation, useQuery } from "react-query";
import { routeService } from "../../../../../services/route";
import roleService from "../../../../../services/rolls";
import usePageRouter from "../../../../../hooks/useObjectRouter";

export const GetRoutes = () => {
  const allRoutes = (routes: any) => {
    let arr = [];
    for (let key in routes) {
      arr.push(...routes[key]);
    }

    return arr;
  };

  return { allRoutes };
};

export const breadCrumbs = ({ id }: { id: any }) => {
  const breadCrumbsItems = useMemo(() => {
    return [
      {
        label: "Admin",
        link: "/admins/admin",
      },
      {
        label: "Rollar",
        link: "/admins/rolls",
      },
      {
        label: id ? "Rolni tahrirlash" : "Yangi rol yaratish",
      },
    ];
  }, [id]);

  return { breadCrumbsItems };
};

export const FetchFunction = ({ id }: { id: any | undefined }) => {
  const { data: rollData, isLoading: rollLoading } = useQuery(
    ["GET_ROLL_FOR_UPDATE", id],
    () => {
      return roleService.getElement(id);
    },
    {
      enabled: !!id,
    }
  );

  const {
    data: routes,
    isLoading,
    refetch,
  } = useQuery(["GET_ROUTE_LIST_FOR_ROLLS"], () => {
    return routeService.getList();
  });

  const newRouteList: any = useMemo(() => {
    const list = routes?.data?.map((route: any) => {
      return {
        ...route,
        permissions: route.permissions?.map((permission: any) => {
          return {
            ...permission,
            label: permission.name.substring(permission.name.indexOf("_") + 1),
            value: permission.id,
          };
        }),
      };
    });

    return list ?? [];
  }, [routes]);

  return {
    isLoading,
    refetch,
    newRouteList,
    rollData: rollData?.data || {},
    rollLoading,
  };
};

export const CreateFunction = ({ reset = () => {} }: { reset?: any }) => {
  const { navigateTo } = usePageRouter();

  const { mutate: rollCreate, isLoading: rollLoading } = useMutation({
    mutationFn: (data: any) => {
      return roleService.createElement(data).then(() => {
        reset();
        navigateTo("/admins/rolls");
      });
    },
  });

  const { mutate: rollUpdate, isLoading: updateRollLoading } = useMutation({
    mutationFn: (data: any) => {
      return roleService.updateElement(data, data.id).then(() => {
        reset();
        navigateTo("/admins/rolls");
      });
    },
  });

  const createRoll = (data: any) => {
    rollCreate(data);
  };

  const updateRoll = (data: any, id: string) => {
    data.id = id
    rollUpdate(data);
  };

  return {
    createRoll,
    updateRoll,
    isLoading: rollLoading || updateRollLoading,
  };
};
