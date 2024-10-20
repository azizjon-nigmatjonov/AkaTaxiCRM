import request from "../../utils/request";

const statistics = {
  getList: () => request.get("/calendar"),
  getNewUserStat: () => request.get("/statistics/new-users"),
  getTrip: () => request.get("/statistics/trips"),
  getUsers: () => request.get("/statistics/users"),
  getWidgets: () => request.get("/passenger-statistics/widgets"),
  getReasonStatistics: (data: any) =>
    request.get(`/call-reason-statistics`, { params: data }),
  getPassengerGenderRegions: () =>
    request.get("/passenger-statistics/gender-by-region"),
  getProgress: (params: any) =>
    request.get(`/passenger-statistics/users-by-region`, { params }),
  getPassangerGraph: (data?: any) =>
    request.get(`passenger-statistics/graph`, { params: data }),
};

export default statistics;
