import { useEffect, useState } from "react";
import MapUI from "./Map";
// import useDebounce from "../../../hooks/useDebounce";

interface Props {
  errors?: any;
  coords?: any;
  setCoords?: (val: any) => void;
  branch?: any;
  places: any
  setOpenMap?: (val: boolean) => void;
}

export const RegionMap = ({ coords, setCoords = () => {}, places = [] }: Props) => {
  const [placemarkGeometry, setPlacemarkGeometry]: any = useState({});

  useEffect(() => {
    if (coords?.name && placemarkGeometry?.name !== coords?.name) {
      setPlacemarkGeometry({
        name: coords.name,
        location: [coords.latitude, coords.longitude],
      });
    }
  }, [coords?.name, placemarkGeometry]);

  useEffect(() => {
    if (
      placemarkGeometry?.name &&
      placemarkGeometry.location[0] &&
      placemarkGeometry.location[1]
    ) {
      setCoords({
        name: placemarkGeometry?.name,
        latitude: placemarkGeometry.location[0],
        longitude: placemarkGeometry.location[1],
        cordinates: placemarkGeometry?.cordinates,
      });
    }
  }, [placemarkGeometry]);

  // const handleChange = (search: string) => {
  //   setPlacemarkGeometry({ ...placemarkGeometry, name: search });
  // };

  return (
    <>
      <div className="flex space-x-[30px]" data-test="map-modal">
        <div className="w-full">
          {/* <div>
            <input
              value={placemarkGeometry.name}
              onChange={(e: any) => handleChange(e.target.value)}
              className="h-[40px] bg-transparent default-btn mb-5"
              type="text"
              placeholder="Joy nomini yozing"
            />
          </div> */}
          <MapUI
            places={places}
            placemarkGeometry={placemarkGeometry}
            setPlacemarkGeometry={setPlacemarkGeometry}
          />
        </div>
      </div>
    </>
  );
};
