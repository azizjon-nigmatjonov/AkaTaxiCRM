import { Suspense, useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { websiteActions } from "../store/website/index";

import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../views/Auth/Login";
import Registration from "../views/Auth/Registration";

import { routeList } from "./List";



interface Path {
  parent: string;
  link: string;
  childlink?: string;
  title: string;
  icon: string;
  sidebar: boolean;
  card_info?: string;
}

const Router = () => {
  const dispatch = useDispatch();
  const token = useSelector((state: any) => state.auth.token);
  const [list, setList] = useState<string[]>([]);

  const [routes, setRoutes] = useState({
    dashboard: [],
    passengers: [],
    drivers: [],
    infos: [],
    admins: [],
    notifications: [],
    partners: [],
    settings: [],
    call_center: [],
  });

  const getPath = ({
    parent = "",
    link,
    childlink,
    title,
    icon,
    sidebar,
    card_info,
  }: Path) => {
    const path = `${parent}/${link}${childlink ? `/${childlink}` : ""}`;

    const obj = {
      path: path,
      sidebar,
      id: path,
      title,
      icon,
      card_info,
      permissions: [],
    };

    if (!list.includes(obj.id)) {
      setRoutes((prev: any) => ({
        ...prev,
        [parent]: [...prev[parent], obj],
      }));
      setList((prev) => [...prev, obj.id]);
    }
    return path;
  };

  useEffect(() => {
    dispatch(websiteActions.setRoutes({ ...routes }));
  }, []);

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
    <Suspense fallback={"Loading..."}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate to="/dashboard/dashboard" />} />
          {routeList?.map((route) => (
            <Route
              path={getPath({
                parent: route.parent,
                link: route.link,
                sidebar: route.sidebar,
                title: route.title,
                icon: route.icon,
              })}
              element={route.element}
            />
          ))}
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};

export default Router;
