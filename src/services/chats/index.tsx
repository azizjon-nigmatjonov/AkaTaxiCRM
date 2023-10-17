import request from "../../utils/request";
const chatService = {
  getList: () => request.get("/chats"),
  createElement: (data?: any) => request.post("/permissions", { ...data })
};

export default chatService;
