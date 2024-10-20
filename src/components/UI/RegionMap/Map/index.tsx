import { useEffect, useRef, useState } from "react";
import {
  YMaps,
  Map,
  Placemark,
  ZoomControl,
  SearchControl,
  GeolocationControl,
  FullscreenControl,
  TrafficControl,
  TypeSelector,
  Circle,
  Polygon
} from "@pbe/react-yandex-maps";
// import { CarIcon } from "../../../../components/UI/IconGenerator/Svg";

interface Props {
  branch?: any;
  places: any[];
  placemarkGeometry: any;
  setPlacemarkGeometry: (val: any) => void;
}
const MapUI = ({
  places,
  branch = [],
  placemarkGeometry,
  setPlacemarkGeometry,
}: Props) => {
  const mapRef: any = useRef(null);
  const [ymaps, setYmaps]: any = useState("");
  const [polygonCoordinates, setPolygonCoordinates] = useState<any[]>([]);
  const [circleGeometry, setCircleGeometry] = useState<any>(null); 

  const getAddress = (coords: any) => {
    ymaps.geocode(coords).then(function (res: any) {
      const firstGeoObject = res?.geoObjects?.get(0);
      setPlacemarkGeometry({
        name: firstGeoObject?.getAddressLine(),
        location: coords,
        coordinates: polygonCoordinates,
      });
      setCircleGeometry([coords, 10000]);
    });
  };

  const onMapClick = (e: any) => {
    const coords = e.get("coords");

    setPolygonCoordinates([coords]);
    getAddress(coords);
  };

  const setPoisition = (position: any, address: any) => {
    mapRef.current?.setCenter(position, undefined, {
      duration: 300,
    });
    address && getAddress(position);
  };

  const onLocationChange = (event: any) => {
    var position = event.get("position");
    setPoisition(position, "address");
  };

  useEffect(() => {
    if (
      placemarkGeometry?.location?.[0] &&
      placemarkGeometry?.location?.[1] &&
      mapRef.current
    ) {
      mapRef.current?.setCenter(placemarkGeometry?.location, undefined, {
        duration: 300,
      });
    }
  }, [placemarkGeometry]);

  useEffect(() => {
    if (branch?.id && ymaps) {
      const position = [branch.lat, branch.long];
      getAddress(position);
    }
  }, [branch, ymaps]);

  const customPlacemarkIcon = {
    iconLayout: 'default#image',
    iconImageHref: '/svg/car.svg',
    iconImageSize: [50, 50],
    iconImageOffset: [-15, -30],
    iconImageSizeHovered: [50, 0],
    iconImageOffsetHovered: [-20, -40]
};

  return (
    <div style={{ position: "relative" }}>
      <YMaps query={{ apikey: "ca8cf0be-47cc-4aae-8d31-e392494e78ca" }}>
        <div>
          <Map
            onClick={onMapClick}
            width="100%"
            height="80vh"
            modules={["Placemark", "geocode"]}
            onLoad={(ymaps) => setYmaps(ymaps)}
            defaultState={{
              center:
                placemarkGeometry?.location?.[0] &&
                placemarkGeometry?.location?.[1]
                  ? placemarkGeometry.location
                  : [41.292906, 69.24132],
              zoom: 10,
            }}
            instanceRef={mapRef}
          >
            <ZoomControl />
            <SearchControl options={{ size: "large" }} />
            <GeolocationControl onLocationChange={onLocationChange} />
            <FullscreenControl />
            <TrafficControl />
            <TypeSelector />
            {placemarkGeometry?.location?.[0] &&
              placemarkGeometry?.location?.[1] && (
                <Placemark geometry={placemarkGeometry.location} />
              )}
            {branch?.id && (
              <Placemark
                key={branch?.id ?? 1}
                properties={{
                  iconContent: `${branch?.name}`,
                }}
                options={{
                  preset: "islands#greenStretchyIcon",
                }}
                geometry={[branch?.lat, branch?.long]}
              />
            )}
            {places.map((place: any, index: number) => (
              <Placemark
                key={index}
                properties={customPlacemarkIcon}
                options={{
                  preset: "islands#icon",
                  ...customPlacemarkIcon
                }}
                geometry={[place.lat, place.long]}
              />
            ))}
            {polygonCoordinates.length > 0 && (
              <Polygon
                geometry={[polygonCoordinates]}
                options={{
                  fillColor: "#DD431F",
                  strokeColor: "#DD431F",
                  opacity: 0.5,
                  strokeWidth: 2,
                }}
              />
            )}
            {circleGeometry && (
              <Circle
                geometry={circleGeometry}
                options={{
                  fillColor: "#DD431F11",
                  strokeColor: "#DD431F",
                  strokeOpacity: 0.8,
                  strokeWidth: 3,
                }}
              />
            )}
          </Map>
        </div>
      </YMaps>
    </div>
  );
};

export default MapUI;
