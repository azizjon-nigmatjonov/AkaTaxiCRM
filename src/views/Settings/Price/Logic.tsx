import { FromTashkent } from "./From";
import { PriceHistory } from "./PriceHistory";
import { ToTashkent } from "./To";

export const breadCrumbs = [
  { label: "Sozlamalar" },
  { label: "Narx nazorati", link: "settings/price_control" },
];

export const tabList = [
  {
    slug: "from_tashkent",
    name: "Toshkentdan",
  },
  {
    slug: "to_tashkent",
    name: "Toshkentga",
  },
  {
    slug: "price_history",
    name: "Narxlar tarixi",
  },
];

export const TabActions = () => {
    const GetCurrentPage = (tab: string) => {
        switch (tab) {
            case "to_tashkent":
                return <ToTashkent />
            case "price_history":
                return <PriceHistory />
            default:
                return <FromTashkent />
        }
    }

    return { GetCurrentPage }
}

export const getCities = (arr: any, direction: string) => {
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
  