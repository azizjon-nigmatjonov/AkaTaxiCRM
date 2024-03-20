import { Suspense, lazy, useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { websiteActions } from "../store/website/index";

import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../views/Auth/Login";
import Registration from "../views/Auth/Registration";
import Passengers from "../views/Passengers/Passengers";
import ActivePassengers from "../views/Passengers/Active";
import Statistics from "../views/Passengers/Statistics";
import Drivers from "../views/Drivers/Drivers";
import ActiveDrivers from "../views/Drivers/Actives";
import Vehicles from "../views/Drivers/Vehicles";
import RegionRoute from "../views/Drivers/RegionRoute";
import DriverStatistics from "../views/Drivers/Statistics";
import Admins from "../views/Admins/Admins";
import Rolls from "../views/Admins/Rolls";
import Price from "../views/Settings/Price";
import SMS from "../views/Settings/SMS";
import Chats from "../views/Information/Chats";
import Calendar from "../views/Information/Calendar";
import AmoCrm from "../views/Settings/AmoCrm";
import ProfilePage from "../views/Settings/Profile";
import Partners from "../views/Partners";
import Partner from "../views/Partners/Partner";
import { SmsCreateForm } from "../views/Settings/SMS/Form";
import AddDriver from "../views/Drivers/Drivers/AddDriver";
import Map from "../views/Drivers/Map"
import Dashboard from "../views/Dashboard";

import Booking from "../views/Passengers/Active/Booking";

const Passanger = lazy(() => import("../views/Passengers/Passanger"));
const Driver = lazy(() => import("../views/Drivers/Drivers/Driver"));
const SingleCar = lazy(() => import("../views/Drivers/Vehicles/Car"));

interface Path {
  parent: string;
  link: string;
  title: string;
  icon: string;
  sidebar: boolean;
  card_info?: string;
}

const Router = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state: any) => state.auth.isAuth);
  const [list, setList] = useState<string[]>([]);

  const [routes, setRoutes] = useState({
    dashboard: [],
    passengers: [],
    drivers: [],
    infos: [],
    admins: [],
    partners: [],
    settings: [],

  });

  const getPath = ({
    parent = "",
    link,
    title,
    icon,
    sidebar,
    card_info,
  }: Path) => {

    const path = `${parent}/${link}`;

    const obj = {
      path: path,
      sidebar,
      permission: path,
      id: path,
      title,
      icon,
      card_info,
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

  if (!isAuth) {
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

  // useEffect(() => {
  //   if (isAuth && location.pathname === "/") {
  //     window.location.reload();
  //     navigateTo("/passengers/main");
  //   }
  // }, [isAuth]);


  return (
    <Suspense fallback={"Loading..."}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate to="/passengers/main" />} />
          <Route
            path={getPath({
              parent: "dashboard",
              link: "dashboard",
              sidebar: true,
              title: "Dashboard",
              icon: "Dashboard",
            })}
            element={<Dashboard />}
          />
          <Route
            path={getPath({
              parent: "passengers",
              link: "main",
              sidebar: true,
              title: "Yo'lovchilar",
              icon: "admins",
            })}
            element={<Passengers />}
          />

          <Route
            path={getPath({
              parent: "passengers",
              link: "passenger",
              sidebar: false,
              title: "",
              icon: "",
            })}
            element={<Passanger />}
          />

          <Route
            path={getPath({
              parent: "passengers",
              link: "active_passengers",
              sidebar: true,
              title: "Aktiv yo‘lovchilar",
              icon: "admin",
            })}
            element={<ActivePassengers />}
          />

          <Route
            path={getPath({
              parent: 'passengers',
              link: 'booking',
              sidebar: false,
              title: 'Passengers booking',
              icon: ''
            })}
            element={<Booking />}
          />

          <Route
            path={getPath({
              parent: "passengers",
              link: "statistics",
              sidebar: true,
              title: "Statistika: yo‘lovchi",
              icon: "statistics",
            })}
            element={<Statistics />}
          />

          <Route
            path={getPath({
              parent: "drivers",
              link: "main",
              sidebar: true,
              title: "Haydovchilar",
              icon: "driving",
            })}
            element={<Drivers />}
          />

          <Route
            path={getPath({
              parent: "drivers",
              link: "driver",
              sidebar: false,
              title: "",
              icon: "",
            })}
            element={<Driver />}
          />

          <Route
            path={getPath({
              parent: "drivers",
              link: "add",
              sidebar: false,
              title: "",
              icon: "",
            })}
            element={<AddDriver />}
          />

          <Route
            path={getPath({
              parent: "drivers",
              link: "active",
              sidebar: true,
              title: "Aktiv haydovchilar",
              icon: "smart_car",
            })}
            element={<ActiveDrivers />}
          />
          <Route
            path={getPath({
              parent: "drivers",
              link: "car/:id",
              sidebar: false,
              title: "",
              icon: "",
            })}
            element={<SingleCar />}
          />
          <Route
            path={getPath({
              parent: "drivers",
              link: "cars",
              sidebar: true,
              title: "Mashinalar",
              icon: "car",
            })}
            element={<Vehicles />}
          />
          <Route
            path={getPath({
              parent: "drivers",
              link: "maps",
              sidebar: true,
              title: "Xarita",
              icon: "map",
            })}
            element={<Map />}
          />
          <Route
            path={getPath({
              parent: "drivers",
              link: "route",
              sidebar: true,
              title: "Viloyat qatnovi",
              icon: "routing",
            })}
            element={<RegionRoute />}
          />
          <Route
            path={getPath({
              parent: "drivers",
              link: "statistics",
              sidebar: true,
              title: "Statistika: haydovchi",
              icon: "graph",
            })}
            element={<DriverStatistics />}
          />
          <Route
            path={getPath({
              parent: "infos",
              link: "calendar",
              sidebar: true,
              title: "Kalendar",
              icon: "calendar",
            })}
            element={<Calendar />}
          />
          <Route
            path={getPath({
              parent: "infos",
              link: "chats",
              sidebar: true,
              title: "Chatlar",
              icon: "chat",
            })}
            element={<Chats />}
          />
          <Route
            path={getPath({
              parent: "admins",
              link: "admin",
              sidebar: true,
              title: "Adminlar",
              icon: "admin",
            })}
            element={<Admins />}
          />
          <Route
            path={getPath({
              parent: "admins",
              link: "rolls",
              sidebar: true,
              title: "Rollar",
              icon: "rolls_icon",
            })}
            element={<Rolls />}
          />
          <Route
            path={getPath({
              parent: "settings",
              link: "price_control",
              sidebar: true,
              title: "Narx nazorati",
              icon: "price_control",
            })}
            element={<Price />}
          />
          <Route
            path={getPath({
              parent: "settings",
              link: "sms",
              sidebar: true,
              title: "SMS xabarnoma",
              icon: "sms",
            })}
            element={<SMS />}
          />
          <Route
            path={getPath({
              parent: "settings",
              link: "sms/create/:type",
              sidebar: false,
              title: "",
              icon: "",
            })}
            element={<SmsCreateForm />}
          />
          <Route
            path={getPath({
              parent: "settings",
              link: "amocrm",
              sidebar: true,
              title: "Amo Crm",
              icon: "amocrm",
            })}
            element={<AmoCrm />}
          />
          <Route
            path={getPath({
              parent: "settings",
              link: "profile",
              sidebar: false,
              title: "Profile",
              icon: "",
            })}
            element={<ProfilePage />}
          />
          <Route
            path={getPath({
              parent: "partners",
              link: "list",
              sidebar: true,
              title: "partners",
              icon: "partners",
            })}
            element={<Partners />}
          />
          <Route
            path={getPath({
              parent: "partners",
              link: "partner",
              sidebar: false,
              title: "",
              icon: "",
            })}
            element={<Partner />}
          />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};

export default Router;
