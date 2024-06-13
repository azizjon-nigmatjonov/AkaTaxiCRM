import { Suspense, useEffect, useMemo, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { websiteActions } from "../store/website/index";

import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../views/Auth/Login";
import Registration from "../views/Auth/Registration";

import { routeList } from "./List";
import ErrorBoundary from "../utils/ErrorBoundary";
import { PageFallbackInner } from "../components/UI/PageFallback";

const defaults = {
  dashboard: [],
  passengers: [],
  drivers: [],
  infos: [],
  admins: [],
  notifications: [],
  partners: [],
  settings: [],
  call_center: [],
};

interface Path {
  parent: string;
  link: string;
  childlink?: string;
  title: string;
  icon: string;
  sidebar: boolean;
  custom_permissions: any;
  single_page: boolean;
}

const Router = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state: any) => state.auth.user);
  const token = useSelector((state: any) => state.auth.token);
  const [list, setList] = useState<string[]>([]);
  const [listNew, setListNew] = useState<string[]>([]);
  const storedRoutes = useSelector((state: any) => state.website.routes);

  const [routes, setRoutes] = useState({ ...defaults });
  const [newRoutes, setNewRoutes] = useState({ ...defaults });

  const getPath = ({
    parent = "",
    link,
    childlink,
    title,
    icon,
    sidebar,
    custom_permissions,
    single_page,
  }: Path) => {
    const path = `${parent}/${link}${childlink ? `/${childlink}` : ""}`;

    const obj = {
      path: path,
      sidebar,
      id: path,
      title,
      icon,
      permissions: custom_permissions,
      parent,
      link,
      single_page,
    };

    const permissions = userInfo?.permissions ?? [];
    const found = permissions?.find((i: any) => i.value === path);

    if (!listNew.includes(obj.id)) {
      setNewRoutes((prev: any) => ({
        ...prev,
        [parent]: [...prev[parent], obj],
      }));
      setListNew((prev) => [...prev, obj.id]);
    }

    if (found?.permissions?.includes("index") || single_page) {
      if (!list.includes(obj.id)) {
        setRoutes((prev: any) => ({
          ...prev,
          [parent]: [...prev[parent], obj],
        }));
        setList((prev) => [...prev, obj.id]);
      }
      return path;
    }

    return "";
  };

  useEffect(() => {
    dispatch(websiteActions.setRoutes({ ...routes }));
  }, []);

  useEffect(() => {
    dispatch(websiteActions.setNewRoutes({ ...newRoutes }));
  }, []);

  const navigator = useMemo(() => {
    for (let key in storedRoutes) {
      if (storedRoutes[key]?.length) {
        if (storedRoutes[key].find((item: any) => item.sidebar)) {
          return storedRoutes[key].find((item: any) => item.sidebar)?.path;
        }
      }
    }
  }, [storedRoutes]);

  if (!token) {
    return (
      <Suspense fallback={"Loading..."}>
        <Routes>
          <Route path="/" element={<AuthLayout />}>
            <Route index element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="registration" element={<Registration />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Route>
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Suspense>
    );
  }

  return (
    <Suspense fallback={<PageFallbackInner />}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {userInfo?.permissions?.length
            ? routeList?.map((route: any, index) => (
                <Route
                  path={getPath({
                    parent: route.parent,
                    link: route.link,
                    sidebar: route.sidebar,
                    title: route.title,
                    icon: route.icon,
                    custom_permissions: route?.permissions ?? [],
                    single_page: route?.single_page ?? false,
                  })}
                  key={index}
                  element={
                    <ErrorBoundary>
                      <Suspense fallback={<PageFallbackInner />}>
                        {route.element}
                      </Suspense>
                    </ErrorBoundary>
                  }
                />
              ))
            : ""}

          {userInfo?.permissions?.length && (
            <Route index element={<Navigate to={navigator || "/"} />} />
          )}
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};

export default Router;
