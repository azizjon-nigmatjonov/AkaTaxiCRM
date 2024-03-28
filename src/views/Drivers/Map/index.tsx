import { GoogleMap, Marker, useLoadScript, Circle, DirectionsRenderer } from "@react-google-maps/api";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Header } from "../../../components/Header";
import MapOption from "./Select";
import ModalMap from "./ModalMap";
import mapService from "../../../services/map";
import React from "react";



interface CarResponse {
    data: any;
    meta?: {
        pageCount: number;
    }
}


function Map() {
    const setSelectedDriverId = useState<any>(null)[1];
    const [selectedDriverData, setSelectedDriverData] = useState<any>(null);
    const [modalOpen, setisModal] = useState<boolean>(false);
    const [currentZoom] = useState<any>(7);
    const [selectData, setSelectData] = useState<any>([]);
    const [route, setRoute] = useState<any>(null);
    const [disableScroll] = useState(false);
    const [selectedMarkerId, setSelectedMarkerId] = useState(null);
    const [totalDistance, setTotalDistance] = useState<any | null>(null);
    const [selectedStatus, setSelectedStatus] = useState<any>('pending');

    const [carClass, setCarClass] = useState<number>(0);

    const [lang, setLang] = useState(null);
    const [lat, setLat] = useState(null);

    // console.log(carClass);

    // console.log(selectData);


    useEffect(() => {
        console.log(selectedStatus, lang, lat);

        const fetchData = async () => {
            if (lang && lat) {
                let allData: any = [];
                // let currentPage = 1;
                let totalPages: any = 1;

                try {

                    const firstResponse: CarResponse = await mapService.getCars({ lng: lang, lat: lat, radius: 100, page: 1, status: selectedStatus, car_class_id: carClass || undefined });
                    const firstData = firstResponse.data;
                    allData = allData.concat(firstData);
                    totalPages = firstResponse?.meta?.pageCount;


                    for (let currentPage = 2; currentPage <= totalPages; currentPage++) {
                        const response = await mapService.getCars({ lng: lang, lat: lat, radius: 100, page: currentPage, status: selectedStatus, car_class_id: carClass || undefined });
                        const data = response.data;
                        allData = allData.concat(data);
                    }


                    setSelectData(allData);
                } catch (error) {
                    console.error("Ошибка при загрузке данных:", error);
                }
            }
        };

        fetchData();
    }, [selectedStatus, lang, lat, carClass]);


    useEffect(() => {
        if (selectedDriverData && selectedDriverData.start_location_coordinate && selectedDriverData.end_location_coordinate) {
            const directionsService = new window.google.maps.DirectionsService();
            const origin = {
                lat: parseFloat(selectedDriverData.start_location_coordinate[1]),
                lng: parseFloat(selectedDriverData.start_location_coordinate[0])
            };
            const destination = {
                lat: parseFloat(selectedDriverData.end_location_coordinate[1]),
                lng: parseFloat(selectedDriverData.end_location_coordinate[0])
            };

            directionsService.route({
                origin: origin,
                destination: destination,
                travelMode: google.maps.TravelMode.DRIVING,
                optimizeWaypoints: false,
            }, (result, status) => {
                if (status === 'OK') {
                    setRoute(result);
                    const totalDistance = result?.routes[0].legs.reduce((total, leg) => {
                        if (leg.distance && leg.distance.value) {
                            return total + leg.distance.value;
                        } else {
                            return total;
                        }
                    }, 0);
                    if (totalDistance !== undefined) {
                        setTotalDistance(totalDistance / 1000);
                    } else {

                        console.error('Ошибка: расстояние не определено.');
                    }
                }
            });

        }
    }, [selectedDriverData]);

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

        if (id === selectedMarkerId) {
            setisModal(false);
            setSelectedMarkerId(null);
        } else {
            const response = await mapService.getElement(id);
            setSelectedDriverId(id);
            setSelectedDriverData(response.data);
            setisModal(true);
            setSelectedMarkerId(id);
        }


    };

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: 'AIzaSyBsNWxTBZ6tIBFK5YCS6IsYyimrmUVMV0Y',
    });

    const center = useMemo(() => ({ lat: 41.3775, lng: 64.5853 }), []);

    const handleMapClick = useCallback(async (e: any) => {


        const newCenter = {
            lng: e.latLng.lng(),
            lat: e.latLng.lat(),
        };





        setLang(newCenter.lng)
        setLat(newCenter.lat)


        // try {

        //     let currentPage = 1;
        //     let allData: any = [];
        //     const shouldContinue: boolean = true;

        //     while (shouldContinue) {
        //         const response = await mapService.getRadius(newCenter.lng, newCenter.lat, 100, currentPage);
        //         const { data } = response;

        //         if (data.length === 0) {
        //             break;
        //         }
        //         allData = [...allData, ...data];
        //         currentPage++;
        //     }

        //     setSelectData(allData);
        setCircleOptions((prevOptions) => ({
            ...prevOptions,
            visible: true,
            center: newCenter,
        }));
        // } catch (error) {
        //     console.log('error');
        // }
    }, []);

    const uzbekistanBounds = {
        north: 45.5909,
        south: 37.1483,
        west: 55.9289,
        east: 73.1652,
    };

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
                <MapOption setSelectData={setSelectData} selectedStatus={selectedStatus} setCarClass={setCarClass} setSelectedStatus={setSelectedStatus} lang={lang} lat={lat} />
                <ModalMap totalDistance={totalDistance} setisModal={setisModal} modalOpen={modalOpen} selectedDriverData={selectedDriverData} />
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
                    {selectData && selectData?.map((item: any,) => {


                        let iconUrl = '/svg/standart.svg';

                        if (item.classes === 'standart') {
                            iconUrl = '/svg/standart.svg';
                        } else if (item.classes === 'comfort') {
                            iconUrl = '/svg/comfort.svg';
                        } else if (item.classes === 'busines') {
                            iconUrl = '/svg/busines.svg';
                        }


                        return (
                            <React.Fragment key={item.id}>
                                <Marker
                                    onClick={() => handleMarkerClick(item.id)}
                                    position={{ lat: parseFloat(item.lat), lng: parseFloat(item.long) }}
                                    icon={{
                                        url: iconUrl,
                                        scaledSize: new window.google.maps.Size(50, 50)
                                    }}
                                />
                                <Circle options={circleOptions} />
                            </React.Fragment>
                        )
                    })}

                    {route && (
                        <DirectionsRenderer
                            directions={route}
                            options={{
                                preserveViewport: true,
                                suppressMarkers: true,
                            }}
                            onLoad={(directionsRenderer) => {
                                if (disableScroll) {
                                    const map = directionsRenderer.getMap();
                                    if (map) {
                                        map.setOptions({ scrollwheel: false });
                                    }
                                }
                            }}
                        />
                    )}
                </GoogleMap>
            )}
        </div>
    );
}

export default Map;
