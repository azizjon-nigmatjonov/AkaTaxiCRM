import { dashboardList } from "./dashboard";
import { driverList } from "./drivers";
import { passengerList } from "./passenger";

export const routeList = [...dashboardList, ...passengerList, ...driverList]