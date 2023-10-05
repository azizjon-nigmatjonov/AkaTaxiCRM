import request from "../utils/request";


const fileService = {
  upload: (data) => request.post('/upload-image', data),
}

export default fileService