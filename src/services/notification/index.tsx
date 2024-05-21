import request from "../../utils/request";
export const notificationService = {
  getList: () => request.get("/notifications"),
  createNotification: (data: any) => request.post("/notifications", data),
};
