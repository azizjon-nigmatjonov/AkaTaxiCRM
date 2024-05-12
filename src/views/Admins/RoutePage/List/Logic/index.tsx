import { useEffect, useMemo, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { useSelector } from "react-redux";
import { routeService } from "../../../../../services/route";
import permissionService from "../../../../../services/permissions";
import { EyeIcon } from "../../../../../components/UI/IconGenerator/Svg";
import usePageRouter from "../../../../../hooks/useObjectRouter";
import { useGetQueries } from "../../../../../hooks/useGetQueries";
import { useTranslation } from "react-i18next";

export const CreateFunction = ({
  handleClose,
  reset,
}: {
  handleClose?: any;
  reset?: any;
}) => {
  const { mutate: routeCreate, isLoading: createLoading } = useMutation({
    mutationFn: (data: any) => {
      return routeService.createElement(data).then(() => {
        handleClose();
        reset();
      });
    },
  });
  const { mutate: permissionCreate, isLoading: permissionLoading } =
    useMutation({
      mutationFn: (data: any) => {
        return permissionService.createElement(data).then(() => {
          handleClose();
          reset();
        });
      },
    });

  const createRoute = (data: any) => {
    const params: any = {};
    params.path = data.name;
    params.name = data.title;
    routeCreate(params);
  };

  const checkEquality = (permissions: any, data: any) => {
    let res = false;
    if (permissions?.length) {
      permissions.forEach((element: any) => {
        if (element.name.trim() === data.name.trim()) res = true;
      });
    }

    return res;
  };

  const createPermission = (data: any, id: number, path: string, list: any) => {
    const params: any = {};
    params.name = path + "_" + data.name;
    params.permission_route_id = id;

    const isEqual = checkEquality(list, data);

    if (!isEqual) permissionCreate(params);
    else return "Bu nomdagi permission mavjud!";
  };

  return {
    createRoute,
    isLoading: createLoading || permissionLoading,
    createPermission,
  };
};

export const DeleteFunction = ({ handleClose }: { handleClose: any }) => {
  const { mutate: permissionDelete, isLoading: permissionLoading } =
    useMutation({
      mutationFn: (id: number) => {
        return permissionService.deleteElement(id).then(() => {
          handleClose();
        });
      },
    });

  const { mutate: routeDelete, isLoading: routeLoading } = useMutation({
    mutationFn: (id: number) => {
      return routeService.deleteElement(id).then(() => {
        handleClose();
      });
    },
  });

  const deleteRoute = (id: number) => {
    routeDelete(id);
  };

  const deletePermission = (id: number) => {
    permissionDelete(id);
  };

  return {
    deletePermission,
    deleteRoute,
    isLoading: permissionLoading || routeLoading,
  };
};

export const GetOptions = ({ newRouteList }: { newRouteList: any }) => {
  const routes = useSelector((state: any) => state.website.routes);
  const [options, setOptions] = useState([]);
  const { navigateTo, navigateQuery } = usePageRouter();
  const { active } = useGetQueries();
  const { t } = useTranslation();
  const allRoutes = (list: any) => {
    let arr = [];
    for (let key in list) {
      arr.push(...list[key]);
    }

    return arr;
  };

  const handViewClick = (element: any, index: number) => {
    navigateQuery({ active: index });
    setTimeout(() => {
      navigateTo(`/${element.path}?fromRoutes=/admins/routes`);
    }, 0);
  };

  useEffect(() => {
    const arr = allRoutes(routes);

    const newArr: any = [];
    arr.forEach((element, index) => {
      const found = newRouteList.find(
        (item: any) => item.path === element.path
      );
      
      if (!found) {
        const obj = {
          title: `${t(element.parent)} > ` + element.title || element.path,
          label: (
            <div className="flex w-full justify-between items-center">
              <p
                className={
                  active == index ? "font-[600] text-[var(--primary)]" : ""
                }
              >
                <span className="font-[600]">{t(element.parent)}</span>
                {" > "}
                {element.title || "Sarlavha mavjud emas"}{" "}
              </p>
              <button
                onClick={() => handViewClick(element, index)}
                className={`duration-200 hover:scale-[1.5] ${
                  active == index ? "scale-[1.3]" : ""
                }`}
              >
                <EyeIcon
                  fill={active == index ? "var(--primary)" : "var(--gray90)"}
                />
              </button>
            </div>
          ),
          value: element.path,
        };
        newArr.push(obj);
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
