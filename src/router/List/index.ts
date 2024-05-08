import { dashboardList } from "./dashboard";
import { driverList } from "./drivers";
import { passengerList } from "./passenger";
import { infoLists } from './infos';
import { adminList } from './admins';
import { settingList } from './settings';
import { notificationsList } from './notifications';
import { partnersList } from './partners';
import { callCenterList } from './callCenter'

export const routeList = [...dashboardList, ...passengerList, ...driverList, ...infoLists, ...adminList, ...settingList, ...notificationsList, ...partnersList, ...callCenterList]