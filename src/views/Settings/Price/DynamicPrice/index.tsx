import { useQuery } from "react-query";
import Points from "./Points";
import PriceTable from "./Table";
import priceService from "../../../../services/price";
import { useMemo } from "react";

const DynamicPrice = () => {
  const { data: prices } = useQuery(
    ["GET_PRICE_LIST"],
    () => {
      return priceService.getList();
    },
    {
      enabled: true,
    }
  );

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

  const locations: any = useMemo(() => {
    if (!prices?.data?.length) return {};
    const arr: any = prices?.data;

    const starting_cities = getCities(arr, "start_location_id");
    const ending_cities = getCities(arr, "end_location_id");

    for (let i = 0; i < arr.length; i++) {
      const obj = arr[i];
      for (let j = 0; j < starting_cities.length; j++) {
        if (obj.start_location_id === starting_cities[j]?.start_location_id) {
          starting_cities[j].list.push(obj);
        }
      }
    }

    return { list: arr, directions: { starting_cities, ending_cities } };
  }, [prices]);

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

    console.log(obj);

    priceService.updateElement(obj).then((res) => {
      console.log("res", res);
    });
  };

  return (
    <>
      <Points />

      <PriceTable locations={locations} updateCell={updateCell} />
    </>
  );
};

export default DynamicPrice;
