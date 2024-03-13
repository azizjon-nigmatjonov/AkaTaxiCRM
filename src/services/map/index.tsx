import request from "../../utils/request";

const mapService = {
    getList: () => request.get(`/map`),
    getElement: (id: string) => request.get(`/map/${id}`),
    getRadius: (lat: number, lng: number, radius: number) => request.get(`/map?lat=${lat}&lng=${lng}&radius=${radius}`)
}

export default mapService;