import request from "../../utils/request";

const statistics = {
  getList: () => request.get("/calendar"),
  getNewUserStat: () => request.get("/statistics/new-users"),
  getTrip: () => request.get("/statistics/trips"),
  getUsers: () => request.get("/statistics/users"),
  getWidgets: () => request.get('/passenger-statistics/widgets'),
  getPassengerGenderRegions: () => request.get('/passenger-statistics/gender-by-region'),
  getProgress: (id?: string) => request.get(`/passenger-statistics/users-by-region${id ? `?date=${id}` : ''}`),
  getPassangerGraph: (data?: any) => request.get(`passenger-statistics/graph?${data.year ? `year=${data.year}` : ''}${data.month ? `&month=${data.month}` : ''}${data.week ? `&week=${data.week}` : ''}`)
};

export default statistics;
