import request from "../../utils/request";

const fileService = {
  upload: (data: any) => request.post('https://cdn.akataxi.uz/api/media/upload', data)
};

export default fileService;
