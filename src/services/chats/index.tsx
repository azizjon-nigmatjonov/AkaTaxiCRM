import request from "../../utils/request";
const chatService = {
  getList: () => request.get("/chats"),
  getChat: (id?: string) => request.get(`/chats/${id}`)
};

export default chatService;
