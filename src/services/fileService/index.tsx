import request from "../../utils/request";

const fileService = {
  upload: (data: any) =>
    request.post("https://cdn.akataxi.uz/api/media/upload", data),
  getImage: (id: number | string) =>
    request.get(`https://cdn.akataxi.uz/media/get-image/${id}`),
};

export default fileService;
