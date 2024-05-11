import { useEffect, useMemo, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { useSelector } from "react-redux";
import { routeService } from "../../../../../services/route";
import permissionService from "../../../../../services/permissions";

export const CreateFunction = ({ handleClose }: { handleClose?: any }) => {
  const { mutate: routeCreate, isLoading: createLoading } = useMutation({
    mutationFn: (data: any) => {
      return routeService.createElement(data).then(() => {
        handleClose();
      });
    },
  });
  const { mutate: permissionCreate, isLoading: permissionLoading } =
    useMutation({
      mutationFn: (data: any) => {
        return permissionService.createElement(data).then(() => {
          handleClose();
        });
      },
    });

  const createRoute = (data: any) => {
    const params: any = {};
    params.path = data.name;
    params.name = data.title;
    routeCreate(params);
  };

  const createPermission = (data: any, id: number) => {
    const params: any = {};
    params.name = data.name;
    params.permission_route_id = id;
    permissionCreate(params)
  };

  return {
    createRoute,
    isLoading: createLoading || permissionLoading,
    createPermission,
  };
};

export const GetOptions = ({ newRouteList }: { newRouteList: any }) => {
  const routes = useSelector((state: any) => state.website.routes);
  const [options, setOptions] = useState([]);

  const allRoutes = (list: any) => {
    let arr = [];
    for (let key in list) {
      arr.push(...list[key]);
    }

    return arr;
  };

  useEffect(() => {
    const arr = allRoutes(routes);

    const newArr: any = [];
    arr.forEach((element) => {
      const found = newRouteList.find(
        (item: any) => item.path === element.path
      );
      if (!found) {
        newArr.push({
          label: element.title || element.path,
          value: element.path,
        });
      }
    });
    setOptions(newArr);
  }, [newRouteList]);

  return { options };
};

export const FetchFunction = () => {
  const {
    data: routes,
    isLoading,
    refetch,
  } = useQuery(["GET_ADMINS"], () => {
    return routeService.getList();
  });

  const newRouteList: any = useMemo(() => {
    const list = routes?.data ?? [];

    return list;
  }, [routes]);

  return { isLoading, refetch, newRouteList };
};
