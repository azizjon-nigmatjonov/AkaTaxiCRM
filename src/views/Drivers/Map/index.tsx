import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useEffect, useMemo, useRef, useState } from "react";
import { Header } from "../../../components/Header"
import MapOption from "./Select";
import ModalMap from "./ModalMap";
import mapService from "../../../services/map";
import { useQuery } from "react-query";
import { CarStandart } from "components/IconGenerator/Svg";

import is from '../../../../public/svg/car.svg'




function Map() {


    const [selectedDriverId, setSelectedDriverId] = useState<any>(null);
    const [selectedDriverData, setSelectedDriverData] = useState<any>(null);
    const [modalOpen, setisModal] = useState<boolean>(false);


    const { data, isLoading } = useQuery("mapData", () => {
        return mapService.getList();
    })


    console.log(selectedDriverData);


    const handleMarkerClick = async (id: any) => {
        const response = await mapService.getElement(id)
        setSelectedDriverId(id)
        mapService.getElement(id)
        setSelectedDriverData(response.data)
        setisModal(true)

    }





    const { isLoaded } = useLoadScript({
        googleMapsApiKey: 'AIzaSyAUIZ9m1RB8dErgH-sp5tgwUb-16otr_do',
    })

    const center = useMemo(() => ({ lat: 41.3775, lng: 64.5853 }), [])

    const mapOptions = {
        mapTypeControl: false,
        streetViewControl: true,
        fullscreenControl: false,
        zoomControl: false,
    };


    return (
        <div className="h-full w-full ">
            <Header title="Xarita" />
            <div className="fixed z-50 flex">
                <MapOption />
                <ModalMap setisModal={setisModal} modalOpen={modalOpen} selectedDriverData={selectedDriverData} />
            </div>

            {!isLoaded ? (
                <h1>Loading...</h1>
            ) : (
                <GoogleMap
                    mapContainerClassName="map-container w-full h-full"
                    center={center}
                    zoom={7}
                    options={mapOptions}
                >

                    {data && data.data.map(item => (
                        <Marker
                            onClick={() => handleMarkerClick(item.id)}
                            key={item.id}
                            position={{ lat: parseFloat(item.lat), lng: parseFloat(item.long) }}
                            icon={{
                                url: '../../../../public/svg/car.svg',
                                scaledSize: new window.google.maps.Size(50, 50)
                            }}
                        />
                    ))}



                    <Marker position={{ lat: 41.3775, lng: 64.5853 }} />
                </GoogleMap>
            )}
        </div>
    )
}

export default Map
