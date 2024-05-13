import { useEffect, useState } from "react";
import { useMutation } from "react-query";
import priceService from "../../../../services/price";
import { websiteActions } from "../../../../store/website";
import { useDispatch } from "react-redux";

const headColumns = [
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

export const TableData = ({ region }: { region: any }) => {
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

  const handleKmInput = () => {}

  useEffect(() => {
    if (region?.price) {
      const arr: any = [];

      headColumns.forEach((item: any) => {
        if (item.id in region.price) {
          item.price = region.price[item.id];
        }
        arr.push({ ...item, region_id: region.region_id })
      });
      setNewColumns(arr);
    }
  }, [region]);

  return {
    headColumns: newColumns,
    handleCheckKm,
    handlePriceInput,
    handleKmInput
  };
};


export const CreateFunction = ({
    handleSucces,
  }: {
    handleSucces: () => void;
  }) => {
    const dispat = useDispatch()
    const { mutate: updatePrice } = useMutation({
      mutationFn: (data: any) => {
        return priceService.updatePrice(data).then(() => {
          HandleSuccess("Ma'lumot yangilandi!");
        });
      },
    });
  
    const submitPrice = (priceList: any, id: number) => {
      const params = {
        region_id: id,
        price: priceList,
        from_tashkent: 1,
      };
      updatePrice(params);
    };
  
    function HandleSuccess(title: string) {
      dispat(
        websiteActions.setAlertData({
          title: title,
          translation: "common",
        })
      );
      handleSucces();
    }
  
    return { submitPrice };
  };