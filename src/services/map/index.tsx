import request from "../../utils/request";

const mapService = {
    getList: () => request.get(`/map`),
    getElement: (id: string) => request.get(`/map/${id}`),
    getRadius: (lat: number, lng: number, radius: number) => request.get(`/map?lng=${lng}&lat=${lat}&radius=${radius}`)
}

export default mapService;