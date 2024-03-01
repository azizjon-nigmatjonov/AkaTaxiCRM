import request from "../../utils/request";

const statistics = {
  getList: () => request.get("/calendar"),
  getNewUserStat: () => request.get("/statistics/new-users"),
  getTrip: () => request.get("/statistics/trips"),
  getUsers: () => request.get("/statistics/users"),
  getWidgets:()=>request.get('/passenger-statistics/widgets'),
  getPassengerGenderRegions:() => request.get('/passenger-statistics/gender-by-region'),
  getProgress: ()=> request.get('/passenger-statistics/users-by-region')
};

export default statistics;
