import request from "../../utils/request";
export const notificationService = {
  getList: (tab: string) => request.get(`/notifications?user_group=${tab}`),
  createNotification: (data: any) => request.post("/notifications", data),
  getNotification: (id: string) => request.get(`/notification/${id}`),
};
