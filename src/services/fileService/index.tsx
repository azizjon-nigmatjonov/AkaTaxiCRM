// import request from "../../utils/request";

// const fileService = {
//   upload: (data: any) =>
//     request.post("https://cdn.akataxi.uz/api/media/upload", data),
//   getImage: (id: number | string) =>
//     request.get(`https://cdn.akataxi.uz/media/get-image/${id}`),
// };

// export default fileService;

import axios from "axios";
import { store } from "../../store/index";

const token = store.getState().auth.token;
const fileService = {
  upload: (data: any) =>
    axios.post("https://cdn.akataxi.uz/api/media/upload", data, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    }),
  getImage: (id: number | string) => axios.get(`https://cdn.akataxi.uz/media/get-image/${id}`),
};

export default fileService;
