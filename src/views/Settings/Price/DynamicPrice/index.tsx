import Points from "./Points";
import PriceTable from "./Table";

const DynamicPrice = ({
  regions = [],
  selected = [],
  locations = {},
  edit = false,
  changesLis = [],
  setChangesList = () => {},
}: {
  regions: any;
  selected: any;
  locations: any;
  edit: boolean;
  changesLis: any;
  setChangesList: (val: any) => void;
}) => {
  
  const updateCell = (status: string, val: any, object: any) => {
    console.log(status, val, object);

    const obj: any = object;
    status === "price" ? (obj.price = val) : (obj.fee = val);

    if (changesLis.some((i: any) => i.id === obj.id)) {
      const list: any = changesLis.filter((i: any) => i.id !== obj.id);
      list.push(obj);
      setChangesList(list);
    } else {
      setChangesList((prev: any) => [...prev, obj]);
    }
  };

  return (
    <>
      <Points regions={regions} selected={selected} />

      <div>
        {locations ? (
          <PriceTable
            locations={locations}
            edit={edit}
            updateCell={updateCell}
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default DynamicPrice;
