import { GoogleMap, Marker, useLoadScript, Circle } from "@react-google-maps/api";
import { useMemo, useState } from "react";
import { Header } from "../../../components/Header"
import MapOption from "./Select";
import ModalMap from "./ModalMap";
import mapService from "../../../services/map";



function Map() {

    const setSelectedDriverId = useState<any>(null)[1];
    const [selectedDriverData, setSelectedDriverData] = useState<any>(null);
    const [modalOpen, setisModal] = useState<boolean>(false);
    const [currentZoom] = useState<any>(7);
    const [selectData, setSelectData] = useState<any>([]);



    const [circleOptions, setCircleOptions] = useState({
        strokeColor: '#A52A2A',
        strokeOpacity: 1,
        strokeWeight: 2,
        fillColor: '#A52A2A',
        fillOpacity: 0,
        clickable: false,
        draggable: false,
        editable: false,
        visible: true,
        radius: 10000,
        center: { lat: 91.3775, lng: 84.5853 },
    });



    const handleMarkerClick = async (id: any) => {
        const response = await mapService.getElement(id)
        // console.log(response);

        setSelectedDriverId(id)
        mapService.getElement(id)
        setSelectedDriverData(response.data)
        setisModal(true)

    }


    const { isLoaded } = useLoadScript({
        googleMapsApiKey: 'AIzaSyAUIZ9m1RB8dErgH-sp5tgwUb-16otr_do',
    })

    const center = useMemo(() => ({ lat: 41.3775, lng: 64.5853 }), [])





    const handleMapClick = async (e: any) => {
        const newCenter = {
            lng: e.latLng.lng(),
            lat: e.latLng.lat(),
        }

        //// console.log(newCenter);


        try {
            const response = await mapService.getRadius(newCenter.lng, newCenter.lat, 1000);

            setSelectData(response)

            console.log(response);


            setCircleOptions({
                ...circleOptions,
                visible: true,
                center: newCenter,
            });



        } catch (error) {
            console.log('error');

        }


    }

    const uzbekistanBounds = {
        north: 45.5909,
        south: 37.1483,
        west: 55.9289,
        east: 73.1652,
    }

    const mapOptions = {
        mapTypeControl: false,
        streetViewControl: true,
        fullscreenControl: false,
        zoomControl: false,
        restriction: {
            latLngBounds: uzbekistanBounds,
            strictBounds: false,
        }
    };

    return (
        <div className="h-full w-full">

            <Header title="Xarita" />
            <div className="fixed z-50 flex">
                <MapOption />
                <ModalMap setisModal={setisModal} modalOpen={modalOpen} selectedDriverData={selectedDriverData} />
            </div>


            {!isLoaded ? (
                <h1>Loading...</h1>
            ) : (
                    <GoogleMap
                        mapContainerClassName="map-container w-full h-full mt-[-24px]"
                        center={center}
                        zoom={currentZoom}
                        options={mapOptions}
                        onClick={handleMapClick}

                    >
                        {selectData?.data && selectData.data?.map((item: any,) => {
                            return (


                                <>
                                    <Marker
                                        onClick={() => handleMarkerClick(item.id)}
                                        key={item.id}
                                        position={{ lat: parseFloat(item.lat), lng: parseFloat(item.long) }}
                                        icon={{
                                            url: '../../../../public/svg/car.svg',
                                            scaledSize: new window.google.maps.Size(50, 50)
                                        }}
                                    />


                                    {<Circle options={circleOptions} />}


                                </>

                            )
                        })}


                    </GoogleMap>
            )}


        </div>
    )
}

export default Map
