import Points from "./Points";
import PriceTable from "./Table";
import priceService from "../../../../services/price";
import { useEffect, useState } from "react";
import { useGetQueries } from "../../../../hooks/useGetQueries";

const DynamicPrice = () => {
  const { start, end } = useGetQueries();
  const [changes, setChanges] = useState<any>([]);
  const [locations, setLocations] = useState({});
  const [loading, setLoading] = useState(false);

  const GetPrices = () => {
    setLoading(true);
    priceService
      .getList({
        start_region_id: start,
        end_region_id: end,
      })
      .then((res) => {
        if (!res?.data?.length) return {};
        const arr: any = res?.data;

        const starting_cities = getCities(arr, "start_location_id");
        const ending_cities = getCities(arr, "end_location_id");

        for (let i = 0; i < arr.length; i++) {
          const obj = arr[i];
          for (let j = 0; j < ending_cities.length; j++) {
            if (obj.end_location_id === ending_cities[j]?.end_location_id) {
              ending_cities[j].list.push(obj);
            }
          }
        }

        setLocations({
          list: arr,
          directions: { starting_cities, ending_cities },
        });
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    if (start && end) GetPrices();
  }, [start, end]);

  const getCities = (arr: any, direction: string) => {
    const result = arr.reduce((accumulator: any, currentObject: any) => {
      const existingObject = accumulator.find(
        (obj: any) => obj[direction] === currentObject[direction]
      );

      if (existingObject) {
        existingObject.list = [];
        existingObject.value += currentObject.value;
      } else {
        accumulator.list = [];
        accumulator.push({ ...currentObject });
      }

      return accumulator;
    }, []);

    return result;
  };

  const updateCell = (status: string, val: any, el: any) => {
    const obj: any = {};
    obj.start_location_id = el.start_location_id;
    obj.end_location_id = el.end_location_id;
    if (status === "price") {
      obj.price = val;
      obj.fee = el.fee;
    } else {
      obj.price = el.price;
      obj.fee = val;
    }

    if (
      changes?.find((i: any) => i.start_location_id === obj.start_location_id)
    ) {
      setChanges((prev: any) => [...prev, obj]);
    } else {
      setChanges([obj]);
    }
    // console.log(changes);

    priceService.updateElement(obj).then((res) => {
      console.log("res", res);
    });
  };

  return (
    <>
      <Points />

      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <PriceTable locations={locations} updateCell={updateCell} />
      )}
    </>
  );
};

export default DynamicPrice;
