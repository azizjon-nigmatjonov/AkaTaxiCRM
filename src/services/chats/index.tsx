import request from "../../utils/request";
const chatService = {
  getList: (pageParam: any) => request.get("/chats", { params: { page: 2 } }),
  getChat: (id?: string) => request.get(`/chats/${id}`)
};

export default chatService;
