import "./style.scss";
import { BodyData, CreateFunction, TableData } from "./Logic";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { PriceTableBody } from "./Body";

interface Props {
  region: any;
  from_tashkent: number;
  handleSucces: () => void;
  handleDistanceSet: (val: string, val2: any) => void;
  getDistanceValues: () => void;
}

export const PriceTable = ({
  from_tashkent = 0,
  region = {},
  handleSucces,
  handleDistanceSet,
  getDistanceValues,
}: Props) => {
  const { headColumns, handleCheckKm, handlePriceInput, handleSelectDelivery } =
    TableData({
      region,
    });
  const { submitPrice, submitDistance } = CreateFunction({
    handleSucces,
    from_tashkent: from_tashkent,
  });
  const [districtList, setDistrictList] = useState([]);
  const { handleKmInput } = BodyData({
    bodyList: region?.districts,
    handleDistanceSet,
    districtList,
    setDistrictList,
  });
  const { setValue, getValues } = useForm();

  const submitFn = (type: string, id: number) => {
    if (type === "submit") {
      const params = getValues();
      submitPrice(params, id);
    }
    if (type === "submitDistance") {
      const params: any = getDistanceValues();

      if (Object.values(params).length) {
        submitDistance(params);
      }
    }
    if (type === "delivery") {
      const params: any = getDistanceValues();

      if (Object.values(params).length) {
        submitDistance(params, type, districtList);
      }
    }
  };

  useEffect(() => {
    if (region?.districts?.length) {
      setTimeout(() => {
        setDistrictList(region.districts);
      }, 0);
    }
  }, [region?.districts]);

  if (districtList?.length && headColumns?.length) {
    return (
      <PriceTableBody
        headColumns={headColumns}
        handleCheckKm={handleCheckKm}
        handlePriceInput={handlePriceInput}
        handleKmInput={handleKmInput}
        setValue={setValue}
        region={region}
        submitFn={submitFn}
        handleSelectDelivery={handleSelectDelivery}
        districtList={districtList}
      />
    );
  }
};
