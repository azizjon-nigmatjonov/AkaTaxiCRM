import { Header } from "../../../components/UI/Header";
import CBreadcrumbs from "../../../components/CElements/CBreadcrumbs";
import { breadCrubmsItems } from "./Logic";
import { RegionMap } from "../../../components/UI/RegionMap";
import CSelect from "../../../components/CElements/CSelect";
import { usePlaces } from "../../../hooks/usePlaces";
import { useEffect, useState } from "react";
import mapService from "../../../services/map";

interface CarResponse {
  data: any;
  meta?: {
    pageCount: number;
  };
}
function Map() {
  const { RegionOptions } = usePlaces();
  const [selectedStatus, setSelectedStatus] = useState<any>("pending");
  const [selectData, setSelectData] = useState<any>([]);
  const [coords, setCoords]: any = useState({});
  // const [carClass, setCarClass] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      if (coords?.longitude && coords?.latitude) {
        let allData: any = [];
        // let currentPage = 1;
        let totalPages: any = 1;

        try {
          const firstResponse: CarResponse = await mapService.getCars({
            lng: coords.longitude,
            lat: coords.latitude,
            radius: 100,
            page: 1,
            status: selectedStatus,
            // car_class_id: carClass || undefined,
          });
          const firstData = firstResponse.data;
          allData = allData.concat(firstData);
          totalPages = firstResponse?.meta?.pageCount;

          for (let currentPage = 2; currentPage <= totalPages; currentPage++) {
            const response = await mapService.getCars({
              lng: coords.longitude,
              lat: coords.latitude,
              radius: 100,
              page: currentPage,
              status: selectedStatus,
              // car_class_id: carClass || undefined,
            });
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
  }, [selectedStatus, coords]);

  const handleSelect = (val: number, type: string) => {
    if (type === "region") {
    }
    if (type === "position") {
      setSelectedStatus(val);
    }
    if (type === "class") {
    }
  };

  return (
    <div className="h-full w-full">
      <Header>
        <CBreadcrumbs items={breadCrubmsItems} />
        <div className="grid grid-cols-2 w-full gap-x-5">
          <div></div>
          {/* <CSelect options={RegionOptions} placeholder="Viloyat tanlang" />
          <CSelect options={RegionOptions} placeholder="Viloyat tanlang" /> */}
          <CSelect
            options={RegionOptions}
            handlerValue={(val: any) => handleSelect(val?.value, "region")}
            placeholder="Viloyat tanlang"
          />
        </div>
      </Header>

      <div className="container">
        <RegionMap setCoords={setCoords} places={selectData} />
      </div>
    </div>
  );
}

export default Map;
