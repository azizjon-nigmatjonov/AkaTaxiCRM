import { useEffect, useState } from "react";
import { useMutation } from "react-query";
import priceService from "../../../../services/price";
import { websiteActions } from "../../../../store/website";
import { useDispatch } from "react-redux";

const headColumnList = [
  {
    title: "Viloyat",
    id: "region",
    type: "cell",
  },
  {
    title: "Tumanlar",
    id: "name",
    type: "cell",
  },
  {
    title: "Yo'l-yo'lakay",
    id: 4,
    type: "collapsed",
    price: 111,
    edit_km: false,
    edit_price: true,
  },
  {
    title: "Standart",
    id: 1,
    type: "collapsed",
    price: 300,
    edit_km: false,
    edit_price: false,
  },
  {
    title: "Komfort",
    id: 2,
    type: "collapsed",
    price: 350,
    edit_km: false,
    edit_price: false,
  },
  {
    title: "Biznes",
    id: 3,
    type: "collapsed",
    price: 500,
    edit_km: false,
    edit_price: false,
  },
];

const selectData = [
  {
    title: "Hujjat yetkazish",
    id: "document",
    type: "delivery",
    price: 1000,
    edit_km: false,
    edit_price: false,
  },
  {
    title: "Kichik hajm",
    id: "small_volume",
    type: "delivery",
    price: 1000,
    edit_km: false,
    edit_price: false,
  },
  {
    title: "Katta hajm",
    id: "large_volume",
    type: "delivery",
    price: 1000,
    edit_km: false,
    edit_price: false,
  },
  {
    title: "Pul 1",
    id: "money_1",
    type: "delivery",
    price: 1000,
    edit_km: false,
    edit_price: false,
  },
  {
    title: "Pul 1000",
    id: "money_1000",
    type: "delivery",
    price: 1000,
    edit_km: false,
    edit_price: false,
  },
  {
    title: "Pul 5000",
    id: "money_5000",
    type: "delivery",
    price: 1000,
    edit_km: false,
    edit_price: false,
  },
  {
    title: "Pul 10000",
    id: "money_10000",
    type: "delivery",
    price: 1000,
    edit_km: false,
    edit_price: false,
  },
];

export const TableData = ({ region }: { region: any }) => {
  const [headColumns, setHeadColumns] = useState([
    ...headColumnList,
    selectData[0],
  ]);
  const [newColumns, setNewColumns]: any = useState([]);

  const handleCheckKm = (orderNumber: number, type: boolean) => {
    const arr = newColumns.map((item: any, index: number) => {
      if (index === orderNumber) item.edit_km = type;
      return item;
    });
    setNewColumns(arr);
  };

  const handlePriceInput = (value: any, column_id: number) => {
    const arr = newColumns?.map((item: any) => {
      if (item.id === column_id) item.price = value;
      return item;
    });
    setNewColumns(arr);
  };

  useEffect(() => {
    if (region?.price) {
      const arr: any = [];

      headColumns.forEach((item: any) => {
        if (item.id in region.price) {
          item.region_id = region.region_id;
          item.price = region.price[item.id];
        }
        arr.push({ ...item, region_id: region.region_id });
      });
      setNewColumns(arr);
    }
  }, [region, headColumns]);

  const handleSelectDelivery = (id: string) => {
    const selected: any =
      selectData.find((item: { id: string }) => item.id === id) ?? {};

    setHeadColumns([...headColumnList, selected]);
  };

  return {
    headColumns: newColumns,
    handleCheckKm,
    handlePriceInput,
    handleSelectDelivery,
  };
};

export const CreateFunction = ({
  handleSucces,
  from_tashkent,
}: {
  handleSucces: () => void;
  from_tashkent: number;
}) => {
  const dispatch = useDispatch();
  const { mutate: updatePrice } = useMutation({
    mutationFn: (data: any) => {
      return priceService.updatePrice(data).then(() => {
        HandleSuccess("Narx yangilandi!");
      });
    },
  });

  const { mutate: updateDistance } = useMutation({
    mutationFn: (data: any) => {
      return priceService.updateDistance(data).then(() => {
        HandleSuccess("Masofa yangilandi!");
      });
    },
  });

  const submitPrice = (priceList: any, id: number) => {
    const price: any = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
    };

    for (let key in price) {
      price[key] = priceList[key];
    }

    const params = {
      region_id: id,
      price: price,
      from_tashkent,
    };
    updatePrice(params);
  };

  const submitDistance = (distanceObj: any, type?: string, list?: any) => {
    const prices: any = [];
    const delivery: any = [];
    if (type === "delivery") {
      for (const key in distanceObj) {
        for (let obj of list) {
          if (key in obj.delivery) {
            delivery.push({
              [key]: obj.delivery[key],
              district_id: obj,
            });
          }
        }
      }
    } else {
      for (const key in distanceObj) {
        prices.push({ distance: distanceObj[key], district_id: +key });
      }
    }
    const params = {
      prices,
      delivery,
      from_tashkent,
    };

    updateDistance(params);
  };

  function HandleSuccess(title: string) {
    dispatch(
      websiteActions.setAlertData({
        title: title,
        translation: "common",
      })
    );
    handleSucces();
  }

  return { submitPrice, submitDistance };
};

export const BodyData = ({
  handleDistanceSet,
  districtList,
  setDistrictList = () => {},
}: {
  bodyList: any;
  districtList: any;
  setDistrictList: (val: any) => void;
  handleDistanceSet: (val: string, val2: any) => void;
}) => {
  const handleKmInput = (
    val: number,
    id: number,
    type?: string,
    deliverId?: string
  ) => {
    let arr: any = districtList;
    arr = arr.map((item: any) => {
      if (item.district_id === id) {
        if (type === "delivery") {
          const name: any = deliverId ?? "document";
          item.delivery[name] = val;
        } else {
          item.distance = val;
        }
      }
      return item;
    });

    handleDistanceSet(deliverId ? deliverId : id + "", val);
    setDistrictList(arr);
  };

  return { handleKmInput };
};
